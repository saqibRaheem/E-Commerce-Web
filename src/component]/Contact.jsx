import React ,{useState}from 'react'

export default function Contact() {

const [data, setdata] = useState({
  fullname:"",
  phone:"",
  email:"",
  msg:""

})
const InputEvent= (event)=>{
const {name,value} = event.target
  setdata((preValue)=>{
    return{
      ...preValue,
      [name]:value,
    }
  })
}

const foamSubmit = (e)=>{
e.preventDefault();
alert(`${data.fullname}`)

}
  return (
    <>
    
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="col-md-6 col-10 mx-auto">

        <form onSubmit={foamSubmit}>

        <div classN="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text"
   className="form-control"
    id="exampleFormControlInput1"
    name="fullname"
    value={data.fullname}
    onChange={InputEvent} 
    placeholder="Enter Your Name" />
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="number
  " className="form-control"
   id="exampleFormControlInput1"
   name="phone"
  value={data.phone}
   onChange={InputEvent}    placeholder="Mobile Number" />
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email"
   className="form-control
   " id="exampleFormControlInput1"
   name="email"
   value={data.email}
   onChange={InputEvent}
    placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control"
   id="exampleFormControlTextarea1"
   name="msg"
   value={data.msg}
   onChange={InputEvent}
    rows="3"></textarea>
</div>

<div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
      </form>
        </div>
      </div>
    </>
  )
}
