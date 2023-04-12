import { Container, Row, Col, Button, Form } from "reactstrap";

import TabelWasiatku from "../components/TabelWasiatku";
import Header from "../components/Header";
import SideBar1 from "../components/SideBar1";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

function Wasiatku() {
  // const [punyaWasiat, setPunyaWasiat] = useState(false);
 
  // cek api disini, udah punya wasiat atau belum nya
  
  // const tambahWasiat = () => {
  //   if (!punyaWasiat) {
  //     setPunyaWasiat(true)
  //   }

    //ke halaman tambah wasiat
 


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
             md={{ size: 7, offset: 0 }}
             tag="section"
             className="py-0 mb-5 py-md-0 mb-md-0"
           >
              <TabelWasiatku />
           
           </Col>
       </Row>
      </Container>
    </main>
  </>
  )
}

export default Wasiatku;

