import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalComponent(props) {
  // console.log(props);

  const submitData = () => {
    // console.log("submitData");

    let copyStorageData = props.storageDate;
    copyStorageData.push(props.userData);

    props.setStorageDate(copyStorageData);

    props.clearData();
    props.setShow(false);
  };

  function SubmitEdit(i) {
    // console.log("SubmitEdit");
    i = parseInt(i);

    const newEditData = {
      name: props.vieweditdata.name,
      email: props.vieweditdata.email,
      age: props.vieweditdata.age,
      phone: props.vieweditdata.phone,
      address: {
        city: props.vieweditdata.address.city,
        state: props.vieweditdata.address.state,
        zipcode: props.vieweditdata.address.zipcode,
      },
    };

    props.storageDate.splice(i, 1, newEditData);
    props.setShow(false);
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {"createBtn" === props.changeBtn
              ? "Enter User Data"
              : "Update User Data"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <span>Name : </span>
              <input
                type="text"
                name="name"
                value={
                  "createBtn" === props.changeBtn
                    ? props.userData.name
                    : props.vieweditdata.name
                }
                onChange={(e) => {
                  "createBtn" === props.changeBtn
                    ? props.setUserData({
                        ...props.userData,
                        name: e.target.value,
                      })
                    : props.setViewEditData({
                        ...props.vieweditdata,
                        name: e.target.value,
                      });
                }}
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <span>Email : </span>
              <input
                type="email"
                name="email"
                value={
                  "createBtn" === props.changeBtn
                    ? props.userData.email
                    : props.vieweditdata.email
                }
                onChange={(e) => {
                  "createBtn" === props.changeBtn
                    ? props.setUserData({
                        ...props.userData,
                        email: e.target.value,
                      })
                    : props.setViewEditData({
                        ...props.vieweditdata,
                        email: e.target.value,
                      });
                }}
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <span>Age : </span>
              <input
                type="text"
                name="age"
                value={
                  "createBtn" === props.changeBtn
                    ? props.userData.age
                    : props.vieweditdata.age
                }
                onChange={(e) => {
                  "createBtn" === props.changeBtn
                    ? props.setUserData({
                        ...props.userData,
                        age: e.target.value,
                      })
                    : props.setViewEditData({
                        ...props.vieweditdata,
                        age: e.target.value,
                      });
                }}
                placeholder="Enter Your Age"
              />
            </div>

            <div>
              <span>Phone : </span>
              <input
                type="text"
                name="phone"
                value={
                  "createBtn" === props.changeBtn
                    ? props.userData.phone
                    : props.vieweditdata.phone
                }
                onChange={(e) => {
                  "createBtn" === props.changeBtn
                    ? props.setUserData({
                        ...props.userData,
                        phone: e.target.value,
                      })
                    : props.setViewEditData({
                        ...props.vieweditdata,
                        phone: e.target.value,
                      });
                }}
                placeholder="Contact Number"
              />
            </div>

            <div>
              <span>Address : </span>
              <div style={{ marginLeft: "15px" }}>
                <div>
                  <span>City:</span>
                  <input
                    type="text"
                    name="city"
                    value={
                      "createBtn" === props.changeBtn
                        ? props.userData.address.city
                        : props.vieweditdata.address.city
                    }
                    onChange={(e) => {
                      "createBtn" === props.changeBtn
                        ? props.setUserData({
                            ...props.userData,
                            address: {
                              ...props.userData.address,
                              city: e.target.value,
                            },
                          })
                        : props.setViewEditData({
                            ...props.vieweditdata,
                            address: {
                              ...props.vieweditdata.address,
                              city: e.target.value,
                            },
                          });
                    }}
                    placeholder="City"
                  />
                </div>
                <div>
                  <span>State:</span>
                  <input
                    type="text"
                    name="state"
                    value={
                      "createBtn" === props.changeBtn
                        ? props.userData.address.state
                        : props.vieweditdata.address.state
                    }
                    onChange={(e) => {
                      "createBtn" === props.changeBtn
                        ? props.setUserData({
                            ...props.userData,
                            address: {
                              ...props.userData.address,
                              state: e.target.value,
                            },
                          })
                        : props.setViewEditData({
                            ...props.vieweditdata,
                            address: {
                              ...props.vieweditdata.address,
                              state: e.target.value,
                            },
                          });
                    }}
                    placeholder="State"
                  />
                </div>
                <div>
                  <span>ZipCode:</span>
                  <input
                    type="text"
                    name="zipcode"
                    value={
                      "createBtn" === props.changeBtn
                        ? props.userData.address.zipcode
                        : props.vieweditdata.address.zipcode
                    }
                    onChange={(e) => {
                      "createBtn" === props.changeBtn
                        ? props.setUserData({
                            ...props.userData,
                            address: {
                              ...props.userData.address,
                              zipcode: e.target.value,
                            },
                          })
                        : props.setViewEditData({
                            ...props.vieweditdata,
                            address: {
                              ...props.vieweditdata.address,
                              zipcode: e.target.value,
                            },
                          });
                    }}
                    placeholder="ZipCode"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          {"createBtn" === props.changeBtn ? (
            <Button variant="primary" onClick={submitData}>
              Submit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => SubmitEdit(props.vieweditdata.index)}
            >
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
// onClick={submitData}
// onClick={() => SubmitEdit()}
