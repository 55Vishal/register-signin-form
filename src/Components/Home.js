import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sign_img from "./Sign_img";

function Home() {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

const [data, setData] = useState([])

  console.log(inpval);

  function getData(e) {
    // console.log(e.target.value)

    const {value,name} = e.target;
    // console.log(value,name);

    setInpval(() => {  
      return {
        ...inpval,
        [name]: value
      }
    })

  }

 function addData(e){
    e.preventDefault(); 
    
    const {name, email, date, password} = inpval;

  if(name===''){
    alert('Name field is required')
  }
  else if(email===''){
    alert('Email field is required')
  }
  else if(!email.includes('@')){
    alert("Invalid email address")
  }
  else if(date===""){
    alert('Date field is required')
  }
  else if(password===''){
    alert('Password field cannot be empty')
  }
  else if(password.length < 5){
    alert('Password length should be greater than five')
  }
  else if(password.length > 15){
    alert('Password length should br less than 15')
  }
  else{
    console.log('Data added succesfully')

    localStorage.setItem('User',JSON.stringify([...data,inpval]))
  }


  }

  return (
    <>
    <div className="container">
      <section className="d-flex justify-content-between">
        <div className="container mt-3">
          <div className="left_data p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>

            <form>
              <div class="mb-3 col-lg-6">
                <input
                  type="text"
                  onChange={getData}
                  name="name"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Enter Your Name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <input
                  type="email"
                  onChange={getData}
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Email address"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <input
                  type="date"
                  onChange={getData}
                  name="date"
                  class="form-control"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <input
                  type="password"
                  onChange={getData}
                  name="password"
                  placeholder="Enter password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" onClick={addData} class="btn btn-success col-lg-6">
                Submit
              </button>
            </form>
            <p className="mt-3">
              Already have an account? <NavLink to='/login '> Sign in </NavLink>
            </p>
          </div>
        </div>
        <Sign_img />
      </section>
    </div>
    </>
  );
}

export default Home;
