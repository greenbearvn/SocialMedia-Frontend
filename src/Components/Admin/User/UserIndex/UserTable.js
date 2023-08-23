import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { listUsers,deleteUser } from "../../../../Service/UserService";
import UserModal from "./UserModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const UserTable = () => {
  const [listUserss, setListUsers] = useState([]);

  const [show, setShowModal] = useState(false);

  const [id, setId] = useState(1);

  const [type, setType] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    setType("");
  };

  const handleShowModal = () => {
    setShowModal(true);
    setType("Create");
    
  };

  const changeTypeToEdit = (idNew) => {
    setShowModal(true);
    setType("Edit");
    setId(idNew);
    console.log(id)

  };

  useEffect(() => {
    getUsers();
   
  }, []);

  const getUsers = async () => {
    try {
      const res = await listUsers();
      if (res && res.data) {
        setListUsers(res.data.users);
      } else {
        alert("API not found");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Error fetching users");
    }
  };

  const dltUser = async (id) => {
    try {
      const res = await deleteUser(id);
      if (res && res.data) {
        alert("User deleted successfully");
        // After successful deletion, update the listUserss state
        setListUsers(listUserss.filter(user => user.id !== id));
      } else {
        alert("API not found");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user");
    }
  };

  

  return (
    <div>
      <UserModal show={show} type={type} handleClose={handleCloseModal} id={id}/>

      <div className="d-flex justify-content-between">
        <h3>User Table</h3>
        <Button variant="primary" onClick={handleShowModal}>
          Create User
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>

        
        <tbody>
        {listUserss.map((user,index) => (
          <tr key={user.id}>
            <td>{index +1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <div className="d-flex ">
              <div>
                <Button  className="me-2" onClick={() => changeTypeToEdit(user.id)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
              </div>
              <div>
                <Button  variant="danger" className="me-2" onClick={() => dltUser(user.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </div>
          </tr>
        ))}
      </tbody>
        <FontAwesomeIcon icon="check-square" />
      </Table>
    </div>
  );
};

export default UserTable;
