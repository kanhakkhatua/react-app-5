import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

function ViewModal(props) {
  // console.log(props.viewData);
  return (
    <>
      <Modal show={props.showView} onHide={props.handleCloseView}>
        <Modal.Header closeButton>
          <Modal.Title>User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <tbody>
              <tr>
                <td>Name : {props.viewData.name}</td>
              </tr>
              <tr>
                <td>Email : {props.viewData.email}</td>
              </tr>
              <tr>
                <td>age : {props.viewData.age}</td>
              </tr>
              <tr>
                <td>Email : {props.viewData.phone}</td>
              </tr>
              <tr>
                <td>
                  Address :
                  <div style={{ marginLeft: "20px" }}>
                    <div>City : {props.viewData.address.city}</div>
                    <div>State : {props.viewData.address.state}</div>
                    <div>Zipcode : {props.viewData.address.zipcode}</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseView}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewModal;
