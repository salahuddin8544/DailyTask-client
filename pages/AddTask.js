import React from 'react';

const AddTask = () => {
    const taskAdd = event=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const task = form.task.value;
        form.reset()
        alert('Task added')
          event.preventDefault()
          console.log(task,title);
        const addeTask ={
          title,
          description: task
        }
        console.log(addeTask);
        fetch('http://localhost:5000/addtask', {
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(addeTask)
        })
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
               console.log(data.acknowledged)
             
            }
            
        })
     
    }
    //added image
    // const image_input = document.querySelector('#image_input');
    // var uploaded_image = '';
    // image_input.addEventListener('change', function(){
    //   const reader = new FileReader();
    //   reader.addEventListener('load', ()=>{
    //     uploaded_image = reader.result;
    //     document.querySelector('#display_image').style.backgroundImage = `url(${uploaded_image})`
    //   })
    //   reader.readAsDataURL(this.files)
    // })

    return (
        <div className='p-6 my-16'>
             <div className='bg-sky-500 w-full md:w-1/3 mx-auto text-center py-6 rounded-xl shadow-lg p-4'>
            <form  onSubmit={taskAdd} className="card-body">
            <h1 className="text-3xl font-bold text-white my-4">Please Add Your Task Here!</h1>
              <div className="form-control">
                <label className="label">  
                </label>
                <input name='title'  type="text" placeholder="Title" className="input rounded input-bordered p-2 w-full my-2"required />
                
              </div>
              <div className="form-control">
                <label className="label">  
                </label>
                <textarea name='task'  type="text" placeholder="Description" className="input rounded input-bordered p-2 w-full " id="" cols="30" rows="10" required />
                
              </div>
              <div className="form-control mt-6">
                <button className='btn bg-yellow-300 py-2 px-4 rounded'>Submit</button>
              </div>
            </form>

            <div className='text-white'>
            <h1 className="text-3xl font-bold text-white my-4">Add an Image</h1>
        <input type="file" id='image_input' accept='image/png, image/jpg' />
        <div className='mx-auto m-2 bg-slate-500 ' id='display_image'>
        </div>
          </div>
             </div>
          
        </div>
    );
};

export default AddTask;