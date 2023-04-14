import { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { Container, Row, Col, Button, Form } from "reactstrap";

const MyVerifSK = () => {
   const [punyaSK, setPunyaSK] = useState(false);
   const[tabelSK, setTabelSK] = useState("Maaf, belum ada data Surat Kematian");


    return (
      <>
      <div className="position-relative py-5">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Data Surat Kematian
          </span>
        </div>
      <div class="float-start">
      {tabelSK}
      <br/><br/><br/>
      </div>

     
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>File</th>
            <th scope='col'>Atas Nama</th>
            <th scope='col'>Status</th>
            <th scope='col'>Verifikasi</th>
          </tr>
        </MDBTableHead>
        { <MDBTableBody>
          <tr>
            <th scope='row'>1</th>
            <td><a href=''>ksdfkdshjdhg.pdf</a></td>
            <td>Lalala</td>
            <td>Belum Diverifikasi</td>
            <td><a href=''>Terima</a> | <a href=''>Tolak</a></td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td><a href=''>ksdfkdsahjdhg.pdf</a></td>
            <td>lililil</td>
            <td>Sudah Diverifikasi</td>
            <td></td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td><a href=''>ksdfkdsahjdhg.pdf</a></td>
            <td>lililil</td>
            <td>Ditolak</td>
            <td></td>
          </tr>
        </MDBTableBody> }
      </MDBTable>
      </>
    );
  };

  export default MyVerifSK;

