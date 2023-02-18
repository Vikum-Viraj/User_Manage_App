import React from 'react'
import "./profile.css"
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/Row';



const Profile = () => {
  return (
    <>
    <div className='container'>
    <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
      <Card.Body>
        <Row>
          <div className='col'>
          <div className="card-profile-stats d-flex justify-content-center">
          <img src = "/man.png"/>
          </div>  
          </div>
        </Row>
        <div className='text-center'>
         <h1>Vikum Viraj</h1>
         <h4><i class="fa-solid fa-envelope email"></i>&nbsp;:<span>Viraj@gmail.com</span></h4>
         <h4><i class="fa-solid fa-mobile"></i>&nbsp;:<span>0732146568</span></h4>
         <h4><i class="fa-solid fa-person"></i>&nbsp;:<span>Male</span></h4>
         <h4><i class="fa-solid fa-location location"></i>&nbsp;:<span>Kandy</span></h4>
         <h4>Status&nbsp;:<span>Active</span></h4>
         <h4><i class="fa-solid fa-calendar-days calendar"></i>&nbsp;:Date Created&nbsp;:<span>fds</span></h4>
         <h4><i class="fa-solid fa-calendar-days calendar"></i>&nbsp;:Date Updated&nbsp;:<span>dfs</span></h4>
        </div>
      </Card.Body>
    </Card>

    </div>
    </>
  )
}

export default Profile
