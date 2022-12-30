
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MyTask = () => {
    const [tasks, setTastks] = useState([])
    useEffect(()=>{
        fetch('https://daily-task-server-pink.vercel.app/addtask')
        .then(res=> res.json())
        .then(data=> setTastks(data))
    },[])
    const handleDelete = (_id)=>{
        fetch(`https://daily-task-server-pink.vercel.app/addtask/${_id}`,{
            method:'DELETE',})
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    console.log('deleted');
                    const remainTask = tasks.filter(tsk => tsk._id !== _id);
                    setTastks(remainTask)
                    confirm('Do you Want to delete?')
                 
                }
            })
    }

    return (
        <div className='my-20 w-full mx-auto'>

           <div className='text-center'>
           <h3  className='text-4xl my-6 font-bold text-white'>My Tasks</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
            {
                tasks.map(task => <div className='card my-2 mx-auto bg-green-600 p-4 w-72 bg-neutral rounded-lg text-neutral-content shadow-gray-200 shadow' key={task._id}>

             
                            <div className='card-body mx-auto text-white'>
                            <h3 className='card-title text-xl font-bold'>Title: {task.title}</h3>
                        <p>Description:{task.description}</p>
                        <div className='card-actions items-center py-2 text-center justify-end'>
                      <Link href={'/Update/'+task._id}>  <button className='btn border px-4 py-1 mx-1 rounded'>Update</button></Link>
                        <button className='btn border px-4 py-1 mx-1 rounded' onClick={()=>handleDelete(task._id)}>Delete</button>
                        </div>
                            </div>
                        </div>
                )
            }
            </div>
           </div>
        </div>
    );
};

export default MyTask;