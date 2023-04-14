import { useState, useEffect } from "react";
import React from 'react';
import { FormGroup, Form, Label, Input} from "reactstrap";

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';


const UserManagement = () => {
    const [selected, setSelected] = useState(true);
    const [Admselected, setAdmSelected] = useState(false);

    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        };

  
    return (
      <>
      <div className="position-relative py-5">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Data User
          </span>
        </div>
      
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nama</th>
            <th scope='col'>Username</th>
            <th scope='col'>Telepon</th>
            <th scope='col'>Email</th>
            <th scope='col'>Status</th>
          </tr>
        </MDBTableHead>
        { <MDBTableBody>
          <tr>
            <th scope='row'>1</th>
            <td>LAalalla</td>
            <td>Lalala</td>
            <td>0891111111</td>
            <td>email@email.com</td>
            <td>
            <FormGroup tag="status">
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio1" checked={selected}/>{' '}
                    Common user
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio1" checked={Admselected} />{' '}
                    Administrator
                    </Label>
                </FormGroup>
                
                </FormGroup>

            </td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>asdkshfdsifh askjdshf</td>
            <td>asdsad</td>
            <td>0891111111</td>
            <td>email@email.com</td>
            <td>
            <FormGroup tag="status">
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio2" checked={false}/>{' '}
                    Common user
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio2" checked={true} />{' '}
                    Administrator
                    </Label>
                </FormGroup>
                
                </FormGroup>

            </td>
          </tr>
          
        </MDBTableBody> }
      </MDBTable>
      </>
    );
  };


  export default UserManagement;