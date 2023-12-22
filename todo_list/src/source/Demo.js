import React, { useState } from 'react'
import "./demo.css"

const Demo = () => {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const clicked = () => {
        setOpen(!open)
    }

    const submitted = (e) => {
        e.preventDefault()
        let a = e.target.title.value
        a !== "" && data.indexOf(a) === -1 && setData([...data, a])
        document.getElementById("title").value = ""
    }

    const click = (e) => {
        console.log(e.target)
        window.confirm("Are you sure you want to delete this item?")
            && setData((oi) => {
                return oi.filter((a, id) => {
                    return id != e.target.id
                })
            })
    }

    const onEdit = (data) => {
        console.log(data)
    }
    return (
        <div id='outer_div'>
            <div id='main_div'>
                <h1>
                    ToDo List
                </h1>
                {!open && <button onClick={clicked}>Add todo list</button>}
                {open && <form id='form' onSubmit={(e) => submitted(e)} >
                    <input type='text' id='title' name='title' />
                    <button type='submit' >Add to list</button>
                </form>}
            </div>

            <ul id='h1' >
                {data.length > 0 ? data.map((a, id) => { return <li onClick={(e) => click(e)} id={id} className='h1'> {a} </li> }) : "Add data"}
            </ul>

        </div>
    )
}

export default Demo