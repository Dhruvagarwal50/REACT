import React, { useRef, useState } from 'react'
import "./demo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import NewDemo from './NewDemo'

const Demo = () => {
    const ref = useRef(null)
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState()
    const [openTodo, setOpenTodo] = useState(false)
    const [editindex, setEditindex] = useState()
    const clicked = () => {
        setOpen(!open)
    }

    const submitted = (e) => {
        e.preventDefault()
        let a = e.target.title.value
        a !== "" && data.indexOf(a) === -1 && setData([...data, a])
        setInput("")
    }

    const click = (e, f) => {
        window.confirm("Are you sure you want to delete this item?")
            && setData((oi) => {
                return oi.filter((a, id) => {
                    return id != f
                })
            })
    }

    const editTodo = (e, f) => {
        setEditindex(f)
        setOpenTodo(true)
    }

    const todoInput = (e) => {
        setInput(e.target.value)
    }

    const updateTodo = (e, value) => {
        e.preventDefault()
        data.splice(editindex, 1, e.target.title.value)
        setOpenTodo(false)
    }
    return (
        <div id='outer_div'>
            {openTodo && <NewDemo data={data} index={editindex} input={input} setInput={setInput} onClick={(e) => updateTodo(e)} />}
            <div id='main_div'>
                <h1>
                    ToDo List
                </h1>
                {!open && <button onClick={clicked}>Add todo list</button>}
                {open && <form id='form' onSubmit={(e) => submitted(e)} >
                    <input type='text' id='title' name='title' onChange={(e) => todoInput(e)} ref={ref} value={input} />
                    <button type='submit' >Add to list</button>
                </form>}
            </div>

            <ul id='h1' >
                {data.length > 0 ? data.map((a, id) => { return <li className='h1'>  <div id="span">{a}</div> <FontAwesomeIcon id='FontAwesomeIcon' icon={faTrash} onClick={(e) => click(e, id)} /> <FontAwesomeIcon id='FontAwesomeIcon' icon={faEdit} onClick={(e) => editTodo(e, id)} /> </li> }) : "Add data"}
            </ul>

        </div>
    )
}

export default Demo