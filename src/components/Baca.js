import { useState, useEffect } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText, CardBody, CardHeader } from 'reactstrap';

const Baca = () => {
  
  
    return (
      <>
      <div className="position-relative py-5">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Baca Wasiat
          </span>
        </div>
      
        <Form>
        <FormGroup row>
          <Label for="exJudul" sm={2}>Judul</Label>
          <Col sm={8}>
          
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exPembuat" sm={2}>Pembuat</Label>
          <Col sm={8}>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exTgl" sm={2}>Tanggal dibuat</Label>
          <Col sm={8}>
            
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exIsi" sm={2}>Isi Wasiat</Label>
          <Col sm={8}>
            
          </Col>
        </FormGroup>
        
      </Form>
      </>
    );
  };

  export default Baca;

