import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



const PostModal = (props) => {
  const { show, handleClose, type, id } = props;

  const [data, setData] = useState({postId: "", desc: null , imageUrl: null,createAt:"",modeId:null, reactionId:null,userId:null});

  // useEffect(() => {
  //   if (type === "Edit") {
  //     getDetailUser(id);
  //   } else {
  //     setData({ name: "", email: "" });
  //   }
  // }, [type, id]);

  // const getDetailUser = async (id) => {
  //   const res = await getUser(id);
  //   if (res && res.data) {
  //     setData(res.data.userDetail);
  //   } else {
  //     alert("not found api");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(type === "Edit"){
    //   try {
    //     const res = await updateUser(id,data);
    //     if (res && res.data) {
    //       setData({ name: "", email: "" });
    //       handleClose(); // Close the modal after successful submission
    //     } else {
    //       alert("API not found");
    //     }

  
    //   } catch (error) {
    //     console.error("Error creating user:", error);
    //     alert("User creation failed");
    //   }
    // }
    // else{
    //   try {
    //     const res = await createUser(data);
    //     if (res && res.data) {
    //       setData({ name: "", email: "" });
    //       handleClose(); // Close the modal after successful submission
    //     } else {
    //       alert("API not found");
    //     }
    //   } catch (error) {
    //     console.error("Error creating user:", error);
    //     alert("User creation failed");
    //   }
    // }
    // try {
    //     const res = await createUser(data);
    //     if (res && res.data) {
    //       setData({ name: "", email: "" });
    //       handleClose(); // Close the modal after successful submission
    //     } else {
    //       alert("API not found");
    //     }
    //   } catch (error) {
    //     console.error("Error creating user:", error);
    //     alert("User creation failed");
    //   }
    
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={data.email}
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

export default PostModal;
