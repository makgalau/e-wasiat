import { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { Container, Row, Col, Button, Form } from "reactstrap";

const TabelWasiatUntukku = () => {
   const [punyaWasiat, setPunyaWasiat] = useState(false);
   const[tabelWasiatUntukku, setTabelWasiatUntukku] = useState("Maaf, Anda belum mendapat Wasiat");
   //cek ada wasiatnya atau engga dari API
  //  if (!punyaWasiat) {
  //   setTabelWasiat("Maaf, Anda belum memiliki Wasiat")
  //  }else {
  //     setTabelWasiat("")
  //  }


    return (
      <>
      <div className="position-relative py-5">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Wasiat Untukku
          </span>
        </div>
      <div class="float-start">
      {tabelWasiatUntukku}
      <br/><br/><br/>
      </div>

     
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Pemberi Wasiat</th>
            <th scope='col'>Judul</th>
            <th scope='col'>Status</th>
          </tr>
        </MDBTableHead>
        {/* <MDBTableBody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </MDBTableBody> */}
      </MDBTable>
      </>
    );
  };

  export default TabelWasiatUntukku;

