import { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { Container, Row, Col, Button, Form } from "reactstrap";

const TabelWasiatku = () => {
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
      <div className="position-relative py-5">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Wasiatku
          </span>
        </div>
      <div class="float-start">
      {tabelWasiat}
      <br/><br/><br/>
      </div>

      <div class="float-end">
        <span>
            <a href="/tambah" class="btn btn-primary" > + Wasiat</a>
        </span>
       
      </div>

      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Judul</th>
            <th scope='col'>Penerima</th>
            <th scope='col'>Tanggal Buat</th>
            <th scope='col'>Aksi</th>
          </tr>
        </MDBTableHead>
          <MDBTableBody>
          { /* <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
          {/* <tr>
            <th scope='row'>1</th>
            <td>aaa</td>
            <td>bbb</td>
            <td>ccc</td>
            <td>ddd</td>
          </tr> */}
          {/* <tr>
            <th scope='row'>3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </MDBTableBody> 
      </MDBTable>
      </>
    );
  };

  export default TabelWasiatku;

