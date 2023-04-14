import { Container, Row, Col, Button, Form, Card } from "reactstrap";

import Baca from "../components/Baca";
import Header from "../components/Header";
import SideBar1 from "../components/SideBar1";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState } from 'react';

function BacaWasiat() {
  
  return (
    <>
    <Header />
    <main className="my-5 py-5" id="main">
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
           md={{ size: 10, offset: 0 }}
           tag="section"
           className="py-0 mb-0 py-md-0 mb-md-0"
         >
         <Baca />
         </Col>
       </Row>
      </Container>
    </main>
  </>
  )
}

export default BacaWasiat;

