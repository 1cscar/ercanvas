import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  db, diagramsRef, diagramRef,
  onSnapshot, setDoc, updateDoc, deleteDoc, serverTimestamp,
  Timestamp, deleteField, query, orderBy, doc, collection,
} from '@/firebase'

// ── helpers ──────────────────────────────────────────────────────────────────
function toMs(ts) {
  if (!ts) return 0
  if (typeof ts === 'number') return ts
  if (typeof ts.toMillis === 'function') return ts.toMillis()
  return 0
}
function inferType(d) {
  if (d?.diagramType === 'lm') return 'lm'
  if (d?.diagramType === 'pm') return 'pm'
  if (d?.diagramType === 'pt') return 'pt'
  return 'er'
}

// ── store ─────────────────────────────────────────────────────────────────────
export const useDiagramsStore = defineStore('diagrams', () => {
  const diagrams = ref([])   // { id, ...firestoreData }
  const loading  = ref(false)
  let _unsub = null

  // ── real-time listener ────────────────────────────────────────────────────
  function subscribe(uid) {
    if (_unsub) return
    loading.value = true
    const q = query(diagramsRef(uid), orderBy('updatedAt', 'desc'))
    _unsub = onSnapshot(q, (snap) => {
      loading.value = false
      const items = []
      snap.forEach((d) => items.push({ id: d.id, ...d.data() }))
      diagrams.value = items
    }, () => { loading.value = false })
  }
  function unsubscribe() {
    if (_unsub) { _unsub(); _unsub = null }
    diagrams.value = []
    loading.value  = false
  }

  // ── computed ──────────────────────────────────────────────────────────────
  const myDiagrams = computed(() =>
    diagrams.value
      .filter(d => !d.deletedAt)
      .sort((a, b) => toMs(b.updatedAt) - toMs(a.updatedAt))
  )
  const trashedDiagrams = computed(() =>
    diagrams.value
      .filter(d => !!d.deletedAt)
      .sort((a, b) => toMs(b.deletedAt) - toMs(a.deletedAt))
  )

  // ── CRUD ──────────────────────────────────────────────────────────────────
  async function createDiagram(uid, type) {
    const collRef = collection(db, 'users', uid, 'diagrams')
    const ref     = doc(collRef)
    const bases = {
      er: { diagramType: 'er', name: '未命名圖表',    nodes: [], edges: [], nextId: 1 },
      lm: { diagramType: 'lm', name: '未命名邏輯模型', tables: [], fkLinks: [], nextId: 1 },
      pm: { diagramType: 'pm', name: '未命名實體模型', tables: [], fkLinks: [], nextId: 1 },
      pt: { diagramType: 'pt', name: '未命名資料表',   tables: [], nextId: 1 },
    }
    const data = { ...(bases[type] || bases.er), updatedAt: serverTimestamp() }
    await setDoc(ref, data)
    return ref.id
  }

  async function trash(uid, id, name) {
    await updateDoc(diagramRef(uid, id), {
      deletedAt: Timestamp.now(),
      updatedAt: serverTimestamp(),
    })
  }
  async function restore(uid, id) {
    await updateDoc(diagramRef(uid, id), { deletedAt: deleteField() })
  }
  async function permDelete(uid, id) {
    await deleteDoc(diagramRef(uid, id))
  }
  async function rename(uid, id, name) {
    await updateDoc(diagramRef(uid, id), { name, updatedAt: serverTimestamp() })
  }

  async function trashAll(uid) {
    const ts = Timestamp.now()
    await Promise.all(
      myDiagrams.value.map(d =>
        updateDoc(diagramRef(uid, d.id), { deletedAt: ts, updatedAt: serverTimestamp() })
      )
    )
  }
  async function restoreAll(uid) {
    await Promise.all(
      trashedDiagrams.value.map(d =>
        updateDoc(diagramRef(uid, d.id), { deletedAt: deleteField() })
      )
    )
  }
  async function permDeleteAll(uid) {
    await Promise.all(trashedDiagrams.value.map(d => deleteDoc(diagramRef(uid, d.id))))
  }

  return {
    diagrams, loading,
    myDiagrams, trashedDiagrams,
    subscribe, unsubscribe,
    createDiagram, trash, restore, permDelete, rename,
    trashAll, restoreAll, permDeleteAll,
  }
})
