import React, { useState } from 'react';

const DetailsTaks = ({task},setTastks,tasks) => {
    console.log(tasks);
    const {_id,title,description} = task;
    const handleDelete = (_id)=>{
        fetch(`http://localhost:5000/addtask/${_id}`,{
            method:'DELETE',})
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    console.log('deleted');
                    // const remainTask = tasks.filter(tsk => tsk._id !== _id);
                    // setTastks(remainTask)
             
                 
                }
            })
    }
    return (
        <div className='w-60 h-80 bg-green-500 rounded shadow'>
        <h3>Title:{title}</h3>
         <p>Description:{description}</p>
        <div className='flex'>
        <button className='btn bg-yellow-300 py-2 px-4 rounded'>Update</button>
         <button className='btn bg-yellow-300 py-2 px-4 rounded' onClick={()=>handleDelete(_id)}>Delete</button>
        </div>
        </div>
    );
};

export default DetailsTaks;