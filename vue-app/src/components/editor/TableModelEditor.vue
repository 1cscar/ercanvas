<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    default: () => ({ tables: [], fkLinks: [], nextId: 1 }),
  },
  mode: { type: String, default: 'logical' },
  showFk: { type: Boolean, default: true },
})

const emit = defineEmits(['update:content'])

function deepClone(value) {
  return JSON.parse(JSON.stringify(value))
}

function normalizeColumn(column, index = 0) {
  return {
    id: column?.id || `c_${Math.random().toString(36).slice(2, 8)}`,
    name: column?.name || `column_${index + 1}`,
    dataType: column?.dataType || column?.type || 'text',
    pk: !!column?.pk,
    fk: !!column?.fk,
    nullable: column?.nullable !== false,
  }
}

function normalizeTable(table, index = 0) {
  const columns = Array.isArray(table?.columns)
    ? table.columns.map((column, i) => normalizeColumn(column, i))
    : [normalizeColumn(null, 0)]
  return {
    id: table?.id || `t_${Math.random().toString(36).slice(2, 8)}`,
    name: table?.name || `table_${index + 1}`,
    x: Number.isFinite(table?.x) ? Number(table.x) : (60 + (index % 3) * 340),
    y: Number.isFinite(table?.y) ? Number(table.y) : (50 + Math.floor(index / 3) * 260),
    columns,
  }
}

function normalizeFk(link) {
  return {
    id: link?.id || `fk_${Math.random().toString(36).slice(2, 8)}`,
    fromTableId: link?.fromTableId || '',
    fromColumnId: link?.fromColumnId || '',
    toTableId: link?.toTableId || '',
    toColumnId: link?.toColumnId || '',
  }
}

function normalizeContent(content) {
  const raw = content || {}
  const tables = Array.isArray(raw.tables) ? raw.tables.map((table, i) => normalizeTable(table, i)) : []
  const tableById = new Map(tables.map((table) => [table.id, table]))
  const fkLinks = Array.isArray(raw.fkLinks)
    ? raw.fkLinks
        .map(normalizeFk)
        .filter((fk) => {
          const fromTable = tableById.get(fk.fromTableId)
          const toTable = tableById.get(fk.toTableId)
          if (!fromTable || !toTable) return false
          const fromColOk = fromTable.columns.some((column) => column.id === fk.fromColumnId)
          const toColOk = toTable.columns.some((column) => column.id === fk.toColumnId)
          return fromColOk && toColOk
        })
    : []
  return {
    tables,
    fkLinks,
    nextId: Number.isFinite(raw.nextId) ? Number(raw.nextId) : 1,
    linkedErDiagramId: raw.linkedErDiagramId ?? null,
    linkedLmDiagramId: raw.linkedLmDiagramId ?? null,
    physicalStyle: raw.physicalStyle || null,
  }
}

const local = ref(normalizeContent(props.content))
const canvasRef = ref(null)

const selectedTableIds = ref([])
const selectedColumnKey = ref('')
const selectedFkIds = ref([])
const linkModeSource = ref(null)
const dragState = ref(null)
const layoutTick = ref(0)

const tableRefs = new Map()
const columnRefs = new Map()

watch(
  () => props.content,
  (value) => {
    local.value = normalizeContent(value)
    syncSelection()
    touchLayout()
  },
  { deep: true },
)

const modeLabel = computed(() => {
  if (props.mode === 'table') return 'Physical Table'
  if (props.mode === 'physical') return 'Physical Model'
  return 'Logical Model'
})

const allColumns = computed(() =>
  local.value.tables.flatMap((table) =>
    table.columns.map((column) => ({
      tableId: table.id,
      tableName: table.name,
      columnId: column.id,
      columnName: column.name,
      key: `${table.id}:${column.id}`,
      label: `${table.name}.${column.name}`,
    })),
  ),
)

const selectedColumn = computed(() => {
  if (!selectedColumnKey.value) return null
  const [tableId, columnId] = selectedColumnKey.value.split(':')
  const table = local.value.tables.find((item) => item.id === tableId)
  const column = table?.columns.find((item) => item.id === columnId)
  if (!table || !column) return null
  return { table, column }
})

const selectedFkSet = computed(() => new Set(selectedFkIds.value))

const fkVisuals = computed(() => {
  // keep dependency for template updates after drag/resize/render
  layoutTick.value
  return local.value.fkLinks
    .map((fk) => {
      const fromRect = getColumnRect(fk.fromTableId, fk.fromColumnId)
      const toRect = getColumnRect(fk.toTableId, fk.toColumnId)
      if (!fromRect || !toRect) return null
      return {
        ...fk,
        x1: fromRect.right,
        y1: fromRect.centerY,
        x2: toRect.left,
        y2: toRect.centerY,
      }
    })
    .filter(Boolean)
})

const modeHint = computed(() => {
  if (!props.showFk) return 'Table 模式：可拖曳資料表與編輯欄位。'
  if (linkModeSource.value) return '連線模式：點選目標欄位完成 FK；再點同一欄位可取消。'
  return '選欄位後可啟用連線模式，或直接編輯 PK/FK。'
})

function touchLayout() {
  layoutTick.value += 1
}

function syncSelection() {
  const tableIds = new Set(local.value.tables.map((table) => table.id))
  selectedTableIds.value = selectedTableIds.value.filter((id) => tableIds.has(id))

  if (selectedColumnKey.value) {
    const [tableId, columnId] = selectedColumnKey.value.split(':')
    const table = local.value.tables.find((item) => item.id === tableId)
    const hasColumn = table?.columns.some((column) => column.id === columnId)
    if (!hasColumn) selectedColumnKey.value = ''
  }

  const fkIds = new Set(local.value.fkLinks.map((fk) => fk.id))
  selectedFkIds.value = selectedFkIds.value.filter((id) => fkIds.has(id))

  if (linkModeSource.value) {
    const table = local.value.tables.find((item) => item.id === linkModeSource.value.tableId)
    const hasColumn = table?.columns.some((column) => column.id === linkModeSource.value.columnId)
    if (!hasColumn) linkModeSource.value = null
  }
}

function commit() {
  const payload = {
    tables: deepClone(local.value.tables),
    fkLinks: props.showFk ? deepClone(local.value.fkLinks) : [],
    nextId: local.value.nextId,
    linkedErDiagramId: local.value.linkedErDiagramId,
    linkedLmDiagramId: local.value.linkedLmDiagramId,
  }
  if (props.mode === 'table') payload.physicalStyle = 'table'
  emit('update:content', payload)
}

function nextId(prefix) {
  const id = `${prefix}${local.value.nextId}`
  local.value.nextId += 1
  return id
}

function columnKey(tableId, columnId) {
  return `${tableId}:${columnId}`
}

function addTable() {
  const idx = local.value.tables.length
  local.value.tables.push({
    id: nextId('t'),
    name: `table_${idx + 1}`,
    x: 60 + (idx % 3) * 340,
    y: 50 + Math.floor(idx / 3) * 260,
    columns: [{ id: nextId('c'), name: 'id', dataType: 'uuid', pk: true, fk: false, nullable: false }],
  })
  commit()
  nextTick(() => touchLayout())
}

function removeTable(tableId) {
  local.value.tables = local.value.tables.filter((table) => table.id !== tableId)
  local.value.fkLinks = local.value.fkLinks.filter((fk) => fk.fromTableId !== tableId && fk.toTableId !== tableId)
  if (selectedColumnKey.value.startsWith(`${tableId}:`)) selectedColumnKey.value = ''
  selectedTableIds.value = selectedTableIds.value.filter((id) => id !== tableId)
  selectedFkIds.value = []
  if (linkModeSource.value?.tableId === tableId) linkModeSource.value = null
  recomputeFkFlags()
  commit()
  nextTick(() => touchLayout())
}

function addColumn(tableId) {
  const table = local.value.tables.find((item) => item.id === tableId)
  if (!table) return
  table.columns.push({
    id: nextId('c'),
    name: `column_${table.columns.length + 1}`,
    dataType: 'text',
    pk: false,
    fk: false,
    nullable: true,
  })
  commit()
  nextTick(() => touchLayout())
}

function removeColumn(tableId, columnId) {
  const table = local.value.tables.find((item) => item.id === tableId)
  if (!table) return
  table.columns = table.columns.filter((column) => column.id !== columnId)
  local.value.fkLinks = local.value.fkLinks.filter((fk) => (
    fk.fromColumnId !== columnId && fk.toColumnId !== columnId
  ))
  if (selectedColumnKey.value === columnKey(tableId, columnId)) selectedColumnKey.value = ''
  selectedFkIds.value = []
  if (linkModeSource.value?.tableId === tableId && linkModeSource.value?.columnId === columnId) linkModeSource.value = null
  recomputeFkFlags()
  commit()
  nextTick(() => touchLayout())
}

function recomputeFkFlags() {
  const fromMap = new Set(local.value.fkLinks.map((fk) => columnKey(fk.fromTableId, fk.fromColumnId)))
  for (const table of local.value.tables) {
    for (const column of table.columns) {
      column.fk = Boolean(column.fk || fromMap.has(columnKey(table.id, column.id)))
    }
  }
}

function getColumnLabel(tableId, columnId) {
  return allColumns.value.find((col) => col.key === columnKey(tableId, columnId))?.label || columnId
}

function setTableRef(tableId, el) {
  if (el) tableRefs.set(tableId, el)
  else tableRefs.delete(tableId)
  touchLayout()
}

function setColumnRef(tableId, columnId, el) {
  const key = columnKey(tableId, columnId)
  if (el) columnRefs.set(key, el)
  else columnRefs.delete(key)
  touchLayout()
}

function getColumnRect(tableId, columnId) {
  const canvasRect = canvasRef.value?.getBoundingClientRect()
  const columnEl = columnRefs.get(columnKey(tableId, columnId))
  if (!canvasRect || !columnEl) return null
  const rect = columnEl.getBoundingClientRect()
  return {
    left: rect.left - canvasRect.left,
    right: rect.right - canvasRect.left,
    centerY: rect.top - canvasRect.top + rect.height / 2,
  }
}

function selectTable(tableId, event) {
  if (event?.shiftKey) {
    const set = new Set(selectedTableIds.value)
    if (set.has(tableId)) set.delete(tableId)
    else set.add(tableId)
    selectedTableIds.value = Array.from(set)
  } else {
    selectedTableIds.value = [tableId]
  }
  selectedFkIds.value = []
}

function selectColumn(tableId, columnId, event) {
  const key = columnKey(tableId, columnId)
  if (props.showFk && linkModeSource.value) {
    const fromKey = columnKey(linkModeSource.value.tableId, linkModeSource.value.columnId)
    if (fromKey === key) {
      linkModeSource.value = null
      return
    }
    createFk(linkModeSource.value.tableId, linkModeSource.value.columnId, tableId, columnId)
    linkModeSource.value = null
    return
  }
  selectedColumnKey.value = key
  selectedFkIds.value = []
  selectedTableIds.value = event?.shiftKey ? Array.from(new Set([...selectedTableIds.value, tableId])) : [tableId]
}

function toggleLinkMode() {
  if (!props.showFk || !selectedColumn.value) return
  if (
    linkModeSource.value
    && linkModeSource.value.tableId === selectedColumn.value.table.id
    && linkModeSource.value.columnId === selectedColumn.value.column.id
  ) {
    linkModeSource.value = null
    return
  }
  linkModeSource.value = {
    tableId: selectedColumn.value.table.id,
    columnId: selectedColumn.value.column.id,
  }
}

function createFk(fromTableId, fromColumnId, toTableId, toColumnId) {
  if (!props.showFk) return null
  if (!fromTableId || !fromColumnId || !toTableId || !toColumnId) return null
  if (fromTableId === toTableId && fromColumnId === toColumnId) return null
  const exists = local.value.fkLinks.some((fk) => (
    fk.fromTableId === fromTableId
    && fk.fromColumnId === fromColumnId
    && fk.toTableId === toTableId
    && fk.toColumnId === toColumnId
  ))
  if (exists) return null
  const fk = {
    id: nextId('fk'),
    fromTableId,
    fromColumnId,
    toTableId,
    toColumnId,
  }
  local.value.fkLinks.push(fk)
  recomputeFkFlags()
  selectedFkIds.value = [fk.id]
  commit()
  nextTick(() => touchLayout())
  return fk
}

function addFkFromSelection() {
  if (!props.showFk || allColumns.value.length < 2) return
  const source = selectedColumn.value
  const from = source
    ? { tableId: source.table.id, columnId: source.column.id }
    : { tableId: allColumns.value[0].tableId, columnId: allColumns.value[0].columnId }
  const target = allColumns.value.find((col) => columnKey(col.tableId, col.columnId) !== columnKey(from.tableId, from.columnId))
  if (!target) return
  createFk(from.tableId, from.columnId, target.tableId, target.columnId)
}

function removeFk(id) {
  local.value.fkLinks = local.value.fkLinks.filter((fk) => fk.id !== id)
  selectedFkIds.value = selectedFkIds.value.filter((fkId) => fkId !== id)
  recomputeFkFlags()
  commit()
}

function removeSelected() {
  if (selectedFkIds.value.length) {
    const removeSet = new Set(selectedFkIds.value)
    local.value.fkLinks = local.value.fkLinks.filter((fk) => !removeSet.has(fk.id))
    selectedFkIds.value = []
    recomputeFkFlags()
    commit()
    return
  }
  if (selectedColumn.value) {
    removeColumn(selectedColumn.value.table.id, selectedColumn.value.column.id)
    return
  }
  if (selectedTableIds.value.length) {
    const removeIds = [...selectedTableIds.value]
    for (const tableId of removeIds) removeTable(tableId)
  }
}

function onFkLineClick(id, event) {
  if (event.shiftKey) {
    const set = new Set(selectedFkIds.value)
    if (set.has(id)) set.delete(id)
    else set.add(id)
    selectedFkIds.value = Array.from(set)
  } else {
    selectedFkIds.value = [id]
  }
  selectedColumnKey.value = ''
}

function onFkLineContextMenu(id) {
  removeFk(id)
}

function beginTableDrag(table, event) {
  if (event.button !== 0) return
  selectTable(table.id, event)
  const ids = selectedTableIds.value.includes(table.id) ? selectedTableIds.value : [table.id]
  dragState.value = {
    startClientX: event.clientX,
    startClientY: event.clientY,
    positions: ids.reduce((acc, tableId) => {
      const t = local.value.tables.find((item) => item.id === tableId)
      if (t) acc[tableId] = { x: Number(t.x) || 0, y: Number(t.y) || 0 }
      return acc
    }, {}),
    moved: false,
  }
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', endDrag, { once: true })
}

function onPointerMove(event) {
  if (!dragState.value) return
  const dx = event.clientX - dragState.value.startClientX
  const dy = event.clientY - dragState.value.startClientY
  if (Math.abs(dx) > 1 || Math.abs(dy) > 1) dragState.value.moved = true
  for (const [tableId, start] of Object.entries(dragState.value.positions)) {
    const table = local.value.tables.find((item) => item.id === tableId)
    if (!table) continue
    table.x = Math.max(0, Math.round(start.x + dx))
    table.y = Math.max(0, Math.round(start.y + dy))
  }
  touchLayout()
}

function endDrag() {
  window.removeEventListener('pointermove', onPointerMove)
  const moved = dragState.value?.moved
  dragState.value = null
  if (moved) commit()
}

function onCanvasClick(event) {
  if (event.shiftKey) return
  selectedFkIds.value = []
  if (!event.target.closest('.table-card')) {
    selectedTableIds.value = []
    selectedColumnKey.value = ''
  }
}

function onFieldInput() {
  recomputeFkFlags()
  commit()
  nextTick(() => touchLayout())
}

function isTypingTarget(target) {
  if (!target || !(target instanceof HTMLElement)) return false
  return Boolean(target.closest('input, textarea, [contenteditable="true"], select'))
}

function onKeyDown(event) {
  if (isTypingTarget(event.target)) return
  if (event.key === 'Escape') {
    linkModeSource.value = null
    return
  }
  if (event.key === 'Backspace' || event.key === 'Delete') {
    event.preventDefault()
    removeSelected()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('resize', touchLayout)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('resize', touchLayout)
  window.removeEventListener('pointermove', onPointerMove)
})
</script>

<template>
  <section class="table-editor">
    <header class="table-editor-toolbar">
      <div class="toolbar-title">
        <strong>{{ modeLabel }}</strong>
        <span>表數：{{ local.tables.length }}</span>
      </div>
      <div class="toolbar-actions">
        <button class="toolbar-btn" @click="addTable">新增資料表</button>
        <button v-if="showFk" class="toolbar-btn" :disabled="!selectedColumn" @click="toggleLinkMode">
          {{ linkModeSource ? '取消連線模式' : '連線模式' }}
        </button>
        <button v-if="showFk" class="toolbar-btn" @click="addFkFromSelection">新增 FK</button>
        <button class="toolbar-btn danger" :disabled="!selectedFkIds.length && !selectedColumn && !selectedTableIds.length" @click="removeSelected">
          刪除選取
        </button>
      </div>
    </header>

    <main class="table-editor-main">
      <section class="table-canvas-wrap">
        <div ref="canvasRef" class="table-canvas" @click="onCanvasClick">
          <svg class="fk-layer" v-if="showFk">
            <defs>
              <marker id="fkArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#6783ad" />
              </marker>
              <marker id="fkArrowSelected" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#0a84ff" />
              </marker>
            </defs>
            <g v-for="fk in fkVisuals" :key="fk.id">
              <line
                class="fk-hit"
                :x1="fk.x1"
                :y1="fk.y1"
                :x2="fk.x2"
                :y2="fk.y2"
                @click.stop="onFkLineClick(fk.id, $event)"
                @contextmenu.prevent.stop="onFkLineContextMenu(fk.id)"
              />
              <line
                class="fk-line"
                :class="{ selected: selectedFkSet.has(fk.id) }"
                :x1="fk.x1"
                :y1="fk.y1"
                :x2="fk.x2"
                :y2="fk.y2"
                :marker-end="selectedFkSet.has(fk.id) ? 'url(#fkArrowSelected)' : 'url(#fkArrow)'"
              />
            </g>
          </svg>

          <article
            v-for="table in local.tables"
            :key="table.id"
            class="table-card"
            :class="{ selected: selectedTableIds.includes(table.id) }"
            :style="{ left: `${table.x}px`, top: `${table.y}px` }"
            :ref="(el) => setTableRef(table.id, el)"
          >
            <header class="table-card-head" @pointerdown.stop.prevent="beginTableDrag(table, $event)">
              <input v-model="table.name" class="table-name-input" @input="onFieldInput" @click.stop />
              <button class="danger-btn" @click.stop="removeTable(table.id)">刪除表</button>
            </header>

            <div class="column-list">
              <div
                v-for="column in table.columns"
                :key="column.id"
                class="column-row"
                :class="{
                  selected: selectedColumnKey === `${table.id}:${column.id}`,
                  source: linkModeSource && linkModeSource.tableId === table.id && linkModeSource.columnId === column.id,
                }"
                :ref="(el) => setColumnRef(table.id, column.id, el)"
                @click.stop="selectColumn(table.id, column.id, $event)"
              >
                <input v-model="column.name" @input="onFieldInput" @click.stop />
                <input v-model="column.dataType" @input="onFieldInput" @click.stop />
                <label class="flag" @click.stop>
                  <input v-model="column.pk" type="checkbox" @change="onFieldInput" />
                  PK
                </label>
                <label class="flag" @click.stop>
                  <input v-model="column.fk" type="checkbox" @change="onFieldInput" />
                  FK
                </label>
                <label class="flag" @click.stop>
                  <input v-model="column.nullable" type="checkbox" @change="onFieldInput" />
                  NULL
                </label>
                <button class="small-btn" @click.stop="removeColumn(table.id, column.id)">刪除</button>
              </div>
            </div>

            <button class="add-column-btn" @click.stop="addColumn(table.id)">+ 新增欄位</button>
          </article>
        </div>
      </section>

      <section class="fk-panel">
        <h3>操作說明</h3>
        <p class="muted">{{ modeHint }}</p>

        <template v-if="selectedColumn">
          <h3>欄位選取</h3>
          <div class="pill">{{ selectedColumn.table.name }}.{{ selectedColumn.column.name }}</div>
        </template>

        <template v-if="showFk">
          <h3>FK 連線</h3>
          <div v-if="!local.fkLinks.length" class="muted">尚無 FK 連線</div>
          <div v-for="fk in local.fkLinks" :key="fk.id" class="fk-item">
            <button class="fk-select" :class="{ selected: selectedFkSet.has(fk.id) }" @click="onFkLineClick(fk.id, $event)">
              {{ getColumnLabel(fk.fromTableId, fk.fromColumnId) }}
              →
              {{ getColumnLabel(fk.toTableId, fk.toColumnId) }}
            </button>
            <button class="small-btn" @click="removeFk(fk.id)">刪除</button>
          </div>
        </template>
      </section>
    </main>
  </section>
</template>

<style scoped>
.table-editor {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
  height: 100%;
}

.table-editor-toolbar {
  border: 1px solid var(--mac-border);
  border-radius: 12px;
  background: var(--mac-surface-strong);
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.toolbar-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.toolbar-title span {
  color: var(--mac-subtext);
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.toolbar-btn {
  border: 1px solid var(--mac-border);
  background: var(--mac-surface);
  border-radius: 9px;
  padding: 7px 10px;
  font-size: 12px;
  cursor: pointer;
}

.toolbar-btn:disabled {
  opacity: 0.48;
  cursor: not-allowed;
}

.toolbar-btn.danger {
  color: #c4453c;
  border-color: rgba(255, 69, 58, 0.35);
  background: rgba(255, 69, 58, 0.08);
}

.table-editor-main {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 12px;
  min-height: 0;
  flex: 1;
}

.table-canvas-wrap {
  border: 1px solid var(--mac-border);
  border-radius: 14px;
  background: var(--mac-surface-strong);
  overflow: auto;
}

.table-canvas {
  min-height: 560px;
  min-width: 980px;
  position: relative;
  background:
    linear-gradient(rgba(90, 111, 145, 0.11) 1px, transparent 1px),
    linear-gradient(90deg, rgba(90, 111, 145, 0.11) 1px, transparent 1px),
    #eef3fc;
  background-size: 24px 24px;
}

.fk-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.fk-hit {
  stroke: transparent;
  stroke-width: 14;
  cursor: pointer;
}

.fk-line {
  stroke: #6783ad;
  stroke-width: 2.2;
  pointer-events: none;
}

.fk-line.selected {
  stroke: #0a84ff;
  stroke-width: 2.8;
}

.table-card {
  width: 300px;
  border: 1px solid var(--mac-border-soft);
  border-radius: 12px;
  padding: 10px;
  background: #fff;
  position: absolute;
  box-shadow: 0 5px 14px rgba(30, 41, 58, 0.12);
}

.table-card.selected {
  border-color: rgba(10, 132, 255, 0.62);
  box-shadow: 0 0 0 2px rgba(10, 132, 255, 0.18), 0 5px 14px rgba(30, 41, 58, 0.12);
}

.table-card-head {
  display: flex;
  gap: 8px;
  cursor: grab;
}

.table-name-input {
  flex: 1;
  border: 1px solid var(--mac-border);
  border-radius: 8px;
  padding: 7px 8px;
  font-size: 13px;
}

.column-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
}

.column-row {
  display: grid;
  grid-template-columns: 1fr 1fr auto auto auto auto;
  gap: 6px;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 4px;
}

.column-row.selected {
  border-color: rgba(10, 132, 255, 0.62);
  background: rgba(10, 132, 255, 0.09);
}

.column-row.source {
  border-color: rgba(255, 149, 0, 0.66);
  background: rgba(255, 149, 0, 0.1);
}

.column-row input[type='text'],
.column-row input:not([type='checkbox']) {
  border: 1px solid var(--mac-border);
  border-radius: 7px;
  padding: 6px 7px;
  font-size: 12px;
  min-width: 0;
}

.flag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--mac-subtext);
}

.small-btn,
.add-column-btn,
.danger-btn {
  border: 1px solid var(--mac-border);
  border-radius: 8px;
  background: var(--mac-surface);
  padding: 6px 8px;
  font-size: 12px;
  cursor: pointer;
}

.danger-btn {
  color: #c4453c;
  border-color: rgba(255, 69, 58, 0.35);
  background: rgba(255, 69, 58, 0.08);
  white-space: nowrap;
}

.add-column-btn {
  margin-top: 8px;
}

.fk-panel {
  border: 1px solid var(--mac-border);
  border-radius: 14px;
  background: var(--mac-surface-strong);
  padding: 10px;
  overflow: auto;
}

.fk-panel h3 {
  margin: 0 0 8px;
  font-size: 13px;
}

.pill {
  border: 1px solid rgba(10, 132, 255, 0.58);
  color: #0a5ed8;
  background: rgba(10, 132, 255, 0.1);
  border-radius: 999px;
  padding: 4px 9px;
  display: inline-block;
  font-size: 12px;
  margin-bottom: 10px;
}

.fk-item {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.fk-select {
  flex: 1;
  text-align: left;
  border: 1px solid var(--mac-border);
  border-radius: 8px;
  background: #fff;
  padding: 6px 8px;
  font-size: 12px;
  cursor: pointer;
}

.fk-select.selected {
  border-color: rgba(10, 132, 255, 0.62);
  background: rgba(10, 132, 255, 0.11);
}

.muted {
  color: var(--mac-muted);
  font-size: 12px;
  margin: 0 0 10px;
}

@media (max-width: 1280px) {
  .table-editor-main {
    grid-template-columns: 1fr;
  }
}
</style>
