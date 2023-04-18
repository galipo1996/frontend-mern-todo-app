import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
const List = ({ text, deleteTask, updateTask }) => {
  return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
        <AiFillDelete className='icon' onClick={deleteTask} />
        <FaEdit className='icon' onClick={updateTask} />
      </div>
    </div>
  )
}

export default List
