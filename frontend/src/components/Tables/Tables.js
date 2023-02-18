import React from 'react'
import "./table.css"
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';


const Tables = () => {
  return (
    <>
    <div className='container'>
      <Row>
      <div className='col mt 0'>
      <Card className ='shadow'>
      <Table className='align-align-items-center' resource='sm'>
      <thead className='thead-dark'>
      <tr className="table-dark">
        <th>Id</th>
        <th>FullName</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Status</th>
        <th>Profile</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td className='d-flex align-items-center'>
        <Dropdown className='text-center'>
                <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                  <Badge bg="primary">
                  Active <i class="fa-solid fa-angle-down"></i>
                  </Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >Active</Dropdown.Item>
                  <Dropdown.Item >Inactive</Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>
        </td>
        <td className='img_parent'>
          <img src = "/man.png"/>
        </td>
        <td>
        <Dropdown className='text-center'>
                <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                  
                  <i class="fa-sharp fa-solid fa-ellipsis-vertical"></i>
                  
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >
                  <i class="fa-regular fa-eye" style={{color:"green"}} ></i> <span>View</span>
                  </Dropdown.Item>
                  <Dropdown.Item >
                  <i  class="fa-sharp fa-regular fa-pen-to-square" style={{color:"blue"}} ></i> <span>Update</span>
                  </Dropdown.Item>
                  <Dropdown.Item >
                  <i class="fa-light fa-trash" style={{color:"red"}}></i> <span>Delete</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td className='d-flex align-items-center'>
        <Dropdown className='text-center'>
                <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                  <Badge bg="primary">
                  Active <i class="fa-solid fa-angle-down"></i>
                  </Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >Active</Dropdown.Item>
                  <Dropdown.Item >Inactive</Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>
        </td>
        <td className='img_parent'>
          <img src = "/man.png"/>
        </td>
        <td>
        <Dropdown className='text-center'>
                <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                  
                  <i class="fa-sharp fa-solid fa-ellipsis-vertical"></i>
                  
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >
                  <i class="fa-regular fa-eye" style={{color:"green"}} ></i> <span>View</span>
                  </Dropdown.Item>
                  <Dropdown.Item >
                  <i  class="fa-sharp fa-regular fa-pen-to-square" style={{color:"blue"}} ></i> <span>Update</span>
                  </Dropdown.Item>
                  <Dropdown.Item >
                  <i class="fa-light fa-trash" style={{color:"red"}}></i> <span>Delete</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>        
      </tbody>
      </Table>
      </Card>  
      </div>  
      </Row>
    </div>
    </>
  )
}

export default Tables
