import { Container, Row, Col, Badge, Button, Form, FormGroup, Label,Input, FormText, Card } from "reactstrap";

import Post from "../components/Post";
import Header from "../components/Header";
import SideBar1 from "../components/SideBar1";



// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

function EditWasiat() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <>
    <Header />
    <main className="my-5 py-5">
      <Container className="px-0">
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
         <Col
           xs={{ order: 1 }}
           md={{ size: 1, order: 1 }}
           tag="aside"
           className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
         >
           <SideBar1 />
         </Col>
         
         <Col
           xs={{ order: 2 }}
           md={{ size: 10, offset: 1 }}
           tag="section"
           className="py-0 mb-5 py-md-0 mb-md-0"
         >
         <div className="position-relative">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Wasiatku
            <Badge
              pill
              color="warning"
              className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle"
              style={{ fontSize: "0.75rem" }}
            >
              Edit
            </Badge>
          </span>
          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">
            Edit Wasiat 
          </span>     
        </div>
          <br/>
          <Form >    
              <FormGroup row >
                <Label for="exjudul" sm={2} >Judul Wasiat :</Label>
                <Col sm={10}>
                  <Input type="text" name="judul" id="exjudul" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="expenerima" sm={2}>Penerima Wasiat :</Label>
                <Col sm={10}>
                  <Input type="text" name="penerima" id="expenerima"  />
                  <FormText color="muted">
                      *pisahkan dengan ';' jika penerima lebih dari 1, contoh: 08123456;089765432
                  </FormText>
                  
                </Col>
              </FormGroup>
              <FormGroup Col >
                <Label for="ex_isi" sm={2} className="text-left">Isi Wasiat :</Label>
                <Col
                  xs={{ order: 1 }}
                  md={{ size: 10, offset: 10 }}
                  tag="section"
                  className="py-5 mb-5 py-md-3 mb-md-0"
                >
                
                </Col>
                <Card>
                 <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                 />
                 </Card>
              </FormGroup>
            
      <Col
           xs={{ order: 1 }}
           md={{ size: 10, offset: 5 }}
           tag="section"
           className="py-10 mb-5 py-md-5 mb-md-0"
         >
      <Button variant="primary" type="submit">
          Submit
      </Button>
    </Col>
    </Form>
         </Col>
       </Row>
      </Container>
    </main>
  </>
  )
}

export default EditWasiat;

