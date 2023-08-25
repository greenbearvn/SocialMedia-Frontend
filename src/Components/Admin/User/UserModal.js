import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getUser,updateUser, createUser} from "../../../Service/UserService";


const UserModal = (props) => {
  const { show, handleClose, type, id } = props;

  const [dataUser, setdataUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (type === "Edit") {
      getDetailUser(id);
    } else {
      setdataUser({ name: "", email: "" });
    }
  }, [type, id]);

  const getDetailUser = async (id) => {
    const res = await getUser(id);
    if (res && res.data) {
      setdataUser(res.data.userDetail);
    } else {
      alert("not found api");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(type === "Edit"){
      try {
        const res = await updateUser(id,dataUser);
        if (res && res.data) {
          setdataUser({ name: "", email: "" });
          handleClose(); // Close the modal after successful submission
        } else {
          alert("API not found");
        }

  
      } catch (error) {
        console.error("Error creating user:", error);
        alert("User creation failed");
      }
    }
    else{
      try {
        const res = await createUser(dataUser);
        if (res && res.data) {
          setdataUser({ name: "", email: "" });
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
    setdataUser({ ...dataUser, [e.target.name]: e.target.value });
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
              value={dataUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={dataUser.email}
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
