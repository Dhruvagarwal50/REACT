import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useRef, useState } from 'react'

const NewDemo = (data) => {
  const ref = useRef(null)
  useEffect(() => {
    ref.current.focus()
  }, [])


  const [input, setInput] = useState(data.data.at(data.index))  



  const todoInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='popUp'>
        <FontAwesomeIcon icon={faXmark} id='FontAwesomeIcon' className='faCross'  />
      <div className='innerDiv'>
        <form id='form' onSubmit={(e) => data.onClick(e,input)} >
          <input type='text' id='title' ref={ref} name='title' onChange={(e) => todoInput(e)} value={input} /> <br />
          <button type='submit' >Update List</button>
        </form>
      </div>
    </div>
  )
}

export default NewDemo