import React, { useContext, useEffect, useState } from 'react'
import "./register.css"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { registerfunc } from '../../services/Apis';
import Select from 'react-select';
import Spiner from '../../components/Spiner/Spiner';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { addData } from '../../components/context/ContextProvider';

const Register = () => {

  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  })

  console.log(inputdata);

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [showspin, setShowSpin] = useState(true); //


  const navigate = useNavigate();
  const {useradd,setUseradd} = useContext(addData);

  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },

  ];
  const setInputValue = (e) =>{
    const {name,value} = e.target;
    setInputData({...inputdata,[name]:value})
  }

  const setStatusValue = (e) =>{
    setStatus(e.value)
  } 
  
  const setProfile = (e) => {
        setImage(e.target.files[0])
  }

  useEffect(() => {
    if(image){
      setPreview(window.URL.createObjectURL(image))
    }
    setTimeout(() =>{
      setShowSpin(false)
    },1200)
  },[image])

  const submitUserData = async(e) => {

    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputdata;
    if (fname === "") {
      toast.error("First name is Required !")
    } else if (lname === "") {
      toast.error("Last name is Required !")
    } else if (email === "") {
      toast.error("Email is Required !")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !")
    } else if (mobile === "") {
      toast.error("Mobile is Required !")
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile!f")
    } else if (gender === "") {
      toast.error("Gender is Required !")
    } else if (status === "") {
      toast.error("Status is Required !")
    } else if (image === "") {
      toast.error("Profile is Required !")
    } else if (location === "") {
      toast.error("location is Required !")
    } else {

      const data = new FormData();
      data.append("fname",fname);
      data.append("lname",lname);
      data.append("email",email);
      data.append("mobile",mobile);
      data.append("gender",gender);
      data.append("status",status);
      data.append("user_profile",image);
      data.append("location",location);

      const config = {
        "Content-Type":"multipart/form-data"
      }

      const response = await registerfunc(data,config)
       
      if(response.status === 200){
        setInputData({
          ...inputdata,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          gender: "",
          location: ""

        });
        setStatus("");
        setImage("")
        setUseradd(response.data)
        navigate("/")
      }else{
          toast.error("Error!")
      }
    }

  }


  return (
    <>
    {
      showspin ? <Spiner/> :
   
    <div className='container'>
    <h2 className='text-center mt-1'>Register Your Details</h2>
    <Card className='shadow mt-3 p-3'>
    <div className="profile_div text-center">
    <img src= {preview ? preview : "/man.png" }alt="img" />
      </div>
      <Form>
        <Row>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder="Enter First Nmae" />
      </Form.Group> 
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder="Enter Last name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>E mail</Form.Label>
        <Form.Control type="email" name='email'value={inputdata.email} onChange={setInputValue} placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" name='mobile' value={inputdata.mobile} onChange={setInputValue} placeholder="Enter Phone number" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Select Your gender</Form.Label>
        <Form.Check 
            type={"radio"}
            label={`Male`}
            name="gender"
            value={"Male"}
            onChange={setInputValue}
          />
           <Form.Check 
            type={"radio"}
            label={`Female`}
            name="gender"
            value={"Female"}
            onChange={setInputValue}
          />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Select status</Form.Label>
        <Select options={options}   onChange={setStatusValue}  />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Select your profile</Form.Label>
        <Form.Control type="file" name='user_profile' onChange={setProfile} placeholder="Enter Your Profile" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Select your Location</Form.Label>
        <Form.Control type="text" name='location' value={inputdata.location} onChange={setInputValue} placeholder="Enter Your Location" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitUserData} >
        Submit
      </Button>
      </Row>
    </Form>
    </Card>   
    <ToastContainer position="top-center" />
    </div>

     }
    </>
  )
}

export default Register

