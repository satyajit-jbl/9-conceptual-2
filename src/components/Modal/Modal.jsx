import React from 'react';

const Modal = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
            console.log(e);
        
    }
    return (
        
// {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <form action="" onSubmit={handleSubmit}>
        <div>
            First Name 
            <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-primary w-full max-w-xs" name="Fname"/>
        </div>
        <div>
            Last Name 
            <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-primary w-full max-w-xs" name="Lname"/>
        </div>
        <div>
            Email
            <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-primary w-full max-w-xs" name="email"/>
        </div>
        <div>
            Phone Number
            <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-primary w-full max-w-xs" name="phone" />
        </div>
        <div>
            Appointment Date
            <input
  type="date"
  placeholder="Type here"
  className="input input-bordered input-primary w-full max-w-xs" name="date" />
        </div>
        <div>
            Address
            <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-primary w-full max-w-xs" name="address"/>
        </div>
    <button className='btn btn-primary' type='submit'>Make Apointment</button>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    );
};

export default Modal;