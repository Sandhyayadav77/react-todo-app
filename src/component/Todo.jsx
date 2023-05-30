import React, { useState } from 'react'
import TodoList from './TodoList';


const Todo = () => {

    const [inputList, setInputList] = useState('')
    const [items, setItems] = useState([]);
    // const items = [ 'hello', 'kookie', 'joonie']

    function itemEvents(e) {
        setInputList(e.target.value)
    }
    function addListOfItems() {
        setItems((oldValue) => {
            return [...oldValue, inputList]
        })
        setInputList('')
    }
    const deleteItem = (id) => {
        setItems((oldValue) => {
            return oldValue.filter((arrayElem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className='h-screen bg-blue-100 flex justify-center items-center'>
                <div className="todoContainer shadow-lg bg-white rounded-[2rem] h-[90%] w-[30%] relative">
                    <div className='py-2 text-white font-semibold bg-blue-950 absolute w-full top-7 rounded-sm text-center text-3xl' >ToDo List</div>
                    <div className='absolute top-28 flex flex-col w-full items-center'>
                        <div className='flex items-center w-full justify-center '>
                            <input className='text-center  text-xl py-2  outline-none  bg-transparent w-40  border-b-2 inline  border-blue-800' type="text" placeholder='Add a Item' value={inputList} onChange={itemEvents} />
                            <button className='px-2 text-white text-2xl w-10 min-h-[40px] border-none outline-none ml-3 pb-1 mt-1 font-semibold text-center bg-blue-900 rounded-[50%] hover:bg-green-500'
                                onClick={addListOfItems}> +</button>
                        </div>
                        <ol className='mt-7 flex flex-col justify-center items-center'>
                            {
                                items.map((item, index) => { return <TodoList key={index} id={index} onSelect={deleteItem} val={item} /> })
                            }


                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo