import { Container, Row, Col, Button, Form } from "reactstrap";

import Post from "../components/Post";
import Header from "../components/Header";
import SideBar1 from "../components/SideBar1";


import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import './App.css';

import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

function Dashboard() {
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
           md={{ size: 7, offset: 1 }}
           tag="section"
           className="py-0 mb-5 py-md-0 mb-md-0"
         >
          <Form>
           <Post />
              <Col
              xs={{ order: 1 }}
              md={{ size: 7, offset: 10 }}
              tag="section"
              className="py-5 mb-5 py-md-3 mb-md-0"
            >
                <Button color="success" className="font-weight-bold ">
                      + Penerima
                      </Button>
                  
            </Col>
          
           <Editor
      editorState={editorState}
      onEditorStateChange={setEditorState}
    />

      <Col
           xs={{ order: 1 }}
           md={{ size: 7, offset: 5 }}
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

export default Dashboard;

