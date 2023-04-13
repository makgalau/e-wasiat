import { useState, useEffect } from "react";
import React from 'react';
import { Card } from "react-bootstrap";
import { Col, Button, Form, FormGroup, Label, Input, FormText, CardBody, CardHeader } from 'reactstrap';
import profil from "../assets/images/profil.jpg";
const Profile = () => {
   const [punyaWasiat, setPunyaWasiat] = useState(false);
   const[tabelWasiat, setTabelWasiat] = useState("Maaf, Anda belum memiliki Wasiat");
   //cek ada wasiatnya atau engga dari API
  //  if (!punyaWasiat) {
  //   setTabelWasiat("Maaf, Anda belum memiliki Wasiat")
  //  }else {
  //     setTabelWasiat("")
  //  }


    return (
      <>
      <Card >
        <CardHeader>
          <div className="position-relative py-1">
            <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
              Profil User
            </span>
          </div>
        </CardHeader>
        <CardBody>
        <div class="profile" className="py-4">
              <img src={profil} alt="" class="img-fluid" width='200'/>
        </div>
        <Form>
        <FormGroup row>
          <Label for="exName" sm={2}>Nama</Label>
          <Col sm={8}>
          <Input
              className=" form-control-muted"
              placeholder="Alex Smith"
              type="text"
              name="nm"
              />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exUsername" sm={2}>Username</Label>
          <Col sm={8}>
          <Input
              className=" form-control-muted"
              placeholder="Alex Smith"
              type="text"
              name="usn"
              />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exTelp" sm={2}>Telepon</Label>
          <Col sm={8}>
            <Input type="text" name="telp" id="exTelp" placeholder="08123456" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exEmail" sm={2}>Email</Label>
          <Col sm={8}>
            <Input type="email" name="email" id="exEmail" placeholder="xxxx@eee.df.sa" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={8}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="exampleFile" sm={2}>Foto Profil</Label>
          <Col sm={8}>
            <Input type="file" name="file" id="exampleFile" />
          </Col>
        </FormGroup>
       
        <FormGroup check row>
          <Col sm={{ size: 8, offset: 2 }}>
            <Button>Save</Button>
          </Col>
        </FormGroup>
      </Form>
      </CardBody>
      </Card>
      </>
    );
  };

  export default Profile;
