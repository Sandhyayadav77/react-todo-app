import React from 'react'

const TodoList = (props) => {
  
    return (<>
        <div className='flex justify-center items-center  shadow-md shadow-blue-200 px-20 w-[200px] relative my-1' >
            <li className='pb-1  text-base '>{props.val}</li>
            <button className=' text-white text-sm w-6 min-h-[24px] absolute right-2 border-none outline-none font-semibold text-center bg-blue-900 rounded-[50%] hover:bg-red-500 pb-1' onClick={()=>{
          props.onSelect(props.id)}}> x</button>
        </div>
    </>
    )
}

export default TodoList