import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createUser, getUser,updateUser } from "../../../../Service/UserService";

const UserModal = (props) => {
  const { show, handleClose, type, id } = props;

  const [dataCreateUser, setDataCreateUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (type === "Edit") {
      getDetailUser(id);
    } else {
      setDataCreateUser({ name: "", email: "" });
    }
  }, [type, id]);

  const getDetailUser = async (id) => {
    const res = await getUser(id);
    if (res && res.data) {
      setDataCreateUser(res.data.userDetail);
    } else {
      alert("not found api");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(type === "Edit"){
      try {
        const res = await updateUser(id,dataCreateUser);
        if (res && res.data) {
          setDataCreateUser({ name: "", email: "" });
          handleClose(); // Close the modal after successful submission
        } else {
          alert("API not found");
        }

        console.log(id);
        console.log(dataCreateUser);
      } catch (error) {
        console.error("Error creating user:", error);
        alert("User creation failed");
      }
    }
    else{
      try {
        const res = await createUser(dataCreateUser);
        if (res && res.data) {
          setDataCreateUser({ name: "", email: "" });
          handleClose(); // Close the modal after successful submission
        } else {
          alert("API not found");
        }
      } catch (error) {
        console.error("Error creating user:", error);
        alert("User creation failed");
      }
    }
    
  };

  const handleChange = (e) => {
    setDataCreateUser({ ...dataCreateUser, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={dataCreateUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={dataCreateUser.email}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
