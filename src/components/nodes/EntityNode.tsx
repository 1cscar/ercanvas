import { useState } from 'react'
import { Node, NodeProps } from '@xyflow/react'
import { ERNodeData } from '../../types'
import { EditableERLabel, ERNodeHandles, ERNodeResizer } from './ERNodeCommon'

type EREntityFlowNode = Node<ERNodeData>

export default function EntityNode({ id, data, selected }: NodeProps<EREntityFlowNode>) {
  const [editNonce, setEditNonce] = useState(0)

  return (
    <div
      className="relative flex h-full w-full items-center justify-center border-2 border-black bg-white text-slate-900"
      onDoubleClick={() => setEditNonce((value) => value + 1)}
    >
      <ERNodeResizer selected={selected} />
      <ERNodeHandles />
      <EditableERLabel nodeId={id} data={data} editNonce={editNonce} />
    </div>
  )
}
