import { useState, useEffect } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText, CardBody, CardHeader } from 'reactstrap';

const UploadSK = () => {
   const[pesanUpload, setpesanUpload] = useState("Maaf, Surat Wasiat untuk anda saat ini statusnya masih terkunci, untuk membukanya silahkan upload Surat Kematian atas nama XXXX");
  
    return (
      <>
      <div className="position-relative py-5">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Upload Surat Kematian
          </span>
        </div>
      <div >
      {pesanUpload}
      <br/><br/><br/>
      </div>
   <div>
      <Form>
        <FormGroup row>
          <Label for="exampleFileSK" sm={3}>Surat Kematian</Label>
          <Col sm={8}>
            <Input type="file" name="fileSK" id="exampleFileSK" />
            <FormText color="muted">
            *max size 2MB, dengan tipe file JPEG/PNG/PDF
          </FormText>
          </Col>
        </FormGroup>
       
        <FormGroup check row>
          <Col sm={{ size: 8, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
      </>
    );
  };

export default UploadSK;

;

