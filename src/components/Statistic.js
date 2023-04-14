import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Statistic = () => {
  const [post, setPost] = useState(null);

  return (
    <>
        <div className="position-relative">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Data Statistik e-Wasiat
          </span>
        </div>
      <div >
        <Row>
     
      <Col sm="6" className="py-5 px-5">
        <Card body>
          <CardTitle><b>Wasiat</b></CardTitle>
          <CardText>Wasiat yang masih terkunci: 99 </CardText>
          <CardText>Wasiat yang sudah bisa dibaca: 12 </CardText>
          <CardText><h2>Total Jumlah Wasiat : 111</h2> </CardText>
        </Card>
      </Col>
      <Col sm="6" className="py-5 px-5">
        <Card body>
          <CardTitle><b>Surat Kematian</b></CardTitle>
          <CardText>Surat Kematian yang sudah diverifikasi: 13 </CardText>
          <CardText>Surat Kematian yang belum diverifikasi: 7 </CardText>
          <CardText><h2>Total Jumlah Surat Kematian : 20</h2> </CardText>
        </Card>
      </Col>
      <Col sm="6" className="py-2 px-5">
        <Card body>
          <CardTitle><b>User</b></CardTitle>
          <CardText>Jumlah Common User: 75 </CardText>
          <CardText>Jumlah Administrator: 2 </CardText>
          <CardText><h2>Total Jumlah User : 77</h2> </CardText>
        </Card>
      </Col>
      
    </Row>
    </div>
    </>
  );
};

export default Statistic;