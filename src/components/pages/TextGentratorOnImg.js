import React, { useState } from 'react'
import Draggable from 'react-draggable'

function TextGentratorOnImg() {
    const [editMode,setEditMode]=useState(false)
    const [val,setVal]=useState('double click to edit')


  return (
<Draggable>
{
    editMode ? <input onDoubleClick={(e)=>setEditMode(false)} value={val} onChange={(e)=>setVal(e.target.value)}/>
    :
    <h5 onDoubleClick={(e)=>setEditMode(true)}>{val}</h5>
}
</Draggable>
    )
}

export default TextGentratorOnImg