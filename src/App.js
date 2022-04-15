import "./App.css";
import React, { useState } from "react";
import storage from "./storage";
import { Button, Table } from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import ModalComponent from "./component/ModalComponent";
import ViewModal from "./component/ViewModal";

function App() {
  const [storageDate, setStorageDate] = useState(storage);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: 0,
    phone: 0,
    address: {
      city: "",
      state: "",
      zipcode: 0,
    },
  });

  const [vieweditdata, setViewEditData] = useState({
    name: "",
    email: "",
    age: 0,
    phone: 0,
    address: {
      city: "",
      state: "",
      zipcode: 0,
    },
    index: "",
  });
  const [viewData, setViewData] = useState({
    name: "",
    email: "",
    age: 0,
    phone: 0,
    address: {
      city: "",
      state: "",
      zipcode: 0,
    },
  });

  const [changeBtn, setChangeBtn] = useState("");

  const [alert, setAlert] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  // console.log(deleteSuccess);
  const [ivalue, setiValue] = useState("");

  const clearData = () => {
    setUserData({
      ...userData,
      name: "",
      email: "",
      age: 0,
      address: {
        city: "",
        state: "",
        zipcode: 0,
      },
      phone: 0,
    });
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setChangeBtn("createBtn");
    setShow(true);
  };
  const handleClose = () => {
    clearData();
    setShow(false);
  };

  const [showView, setShowView] = useState(false);

  const handleCloseView = () => setShowView(false);

  const handleShowView = (i) => {
    // console.log(i);

    setViewData({
      name: storageDate[i].name,
      email: storageDate[i].email,
      age: storageDate[i].age,
      phone: storageDate[i].phone,
      address: {
        city: storageDate[i].address.city,
        state: storageDate[i].address.state,
        zipcode: storageDate[i].address.zipcode,
      },
    });
    // console.log(viewData);
    setShowView(true);
  };

  function EditUser(i) {
    setChangeBtn("editBtn");
    // console.log("Edit User");
    setShow(true);

    setViewEditData({
      name: storageDate[i].name,
      email: storageDate[i].email,
      age: storageDate[i].age,

      phone: storageDate[i].phone,
      address: {
        city: storageDate[i].address.city,
        state: storageDate[i].address.state,
        zipcode: storageDate[i].address.zipcode,
      },
      index: i,
    });
  }

  function DeleteUser(i) {
    setiValue(i);
    setAlert(true);
  }
  function DeleteUserIndex(i) {
    let newdata = storageDate.filter((val, index) => {
      return i !== index;
    });
    setStorageDate(newdata);

    setAlert(!alert);
    setDeleteSuccess(true);
  }

  return (
    <>
      <h1>Home Page</h1>
      <ModalComponent
        storageDate={storageDate}
        setStorageDate={setStorageDate}
        userData={userData}
        vieweditdata={vieweditdata}
        setUserData={setUserData}
        setViewEditData={setViewEditData}
        clearData={clearData}
        changeBtn={changeBtn}
        setShow={setShow}
        show={show}
        handleClose={handleClose}
      />

      <ViewModal
        showView={showView}
        handleCloseView={handleCloseView}
        viewData={viewData}
      />

      <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button>

      {storageDate.length > 0 ? (
        <Table striped bordered hover style={{ marginTop: "5px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {storageDate.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.age}</td>
                  <td>
                    {e.address.city} <br /> {e.address.state} <br />{" "}
                    {e.address.zipcode}
                  </td>
                  <td>{e.phone}</td>
                  <td>
                    <Button onClick={() => handleShowView(i)}>View</Button>
                  </td>
                  <td>
                    <Button onClick={() => EditUser(i)}>Edit</Button>
                  </td>
                  <td>
                    <Button onClick={() => DeleteUser(i)}>Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h1></h1>
      )}

      {alert && (
        <>
          <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={() => DeleteUserIndex(parseInt(ivalue))}
            onCancel={() => setAlert(!alert)}
            focusCancelBtn
          >
            You will not be able to recover this imaginary file!
          </SweetAlert>
        </>
      )}
      {deleteSuccess && (
        <SweetAlert
          success
          title="Deleted Successfully "
          onConfirm={() => setDeleteSuccess(!deleteSuccess)}
        ></SweetAlert>
      )}
    </>
  );
}

export default App;
