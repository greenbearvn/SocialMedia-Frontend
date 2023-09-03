import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { list } from "../../../Service/Admin/PostServices";
import UserModal from "./PostModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import {
  faPenToSquare,
  faTrash,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import Form from "react-bootstrap/Form";

const PostTable = () => {
  const [listPosts, setListPosts] = useState([]);
  const [show, setShowModal] = useState(false);
  const [id, setId] = useState(1);
  const [type, setType] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState({ field: "", stt: "asc", pageNumber: 1 });
  const [searchData, setSearchData] = useState({ query: "" });

  // const handleSort = (field) => {
  //   const newSort = {
  //     field: field,
  //     stt: sort.stt === "asc" ? "desc" : "asc",
  //     pageNumber: pageNumber,
  //   };
  //   setSort(newSort);
  //   sortUS(sort);
  // };

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await searchUsers(searchData);
  //     if (res && res.data) {
  //       // listUsers(res.data)
  //       listPosts(res.data);
  //     } else {
  //       alert("API not found");
  //     }
  //   } catch (error) {
  //     console.error("Error creating user:", error);
  //     alert("User creation failed");
  //   }
  // };

  const handlePageChange = (selectedPage) => {
    setPageNumber(selectedPage.selected + 1);
  };

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
  };
  useEffect(() => {
    getListPosts(pageNumber);
  }, [pageNumber]);

  const getListPosts = async (pageNumber) => {
    try {
      const res = await list(pageNumber);
      if (res && res.data) {
        if (res.data.listPosts) {
          setListPosts(res.data.listPosts);
        }

        if (res.data.totalPages) {
          setTotalPages(res.data.totalPages);
        }
      } else {
        alert("API not found");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      alert("Error fetching posts");
    }
  };

  // const dltUser = async (id) => {
  //   try {
  //     const res = await deleteUser(id);
  //     if (res && res.data) {
  //       alert("User deleted successfully");
  //       // After successful deletion, update the listUserss state
  //       listPosts(listUserss.filter((user) => user.id !== id));
  //     } else {
  //       alert("API not found");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //     alert("Error deleting user");
  //   }
  // };

  // const sortUS = async (data) => {
  //   try {
  //     const res = await sortUser(data);
  //     if (res && res.data) {
  //       listPosts(res.data);
  //       setTotalPages(res.data.totalPages);
  //     } else {
  //       alert("API not found");
  //     }
  //   } catch (error) {
  //     console.error("Error sorting users:", error);
  //     alert("Error sorting users");
  //   }
  // };

  return (
    <div className=" w-100">
      <div className="d-flex">
        <div>
          <Form.Control
            type="text"
            name="query"
            value={searchData.query}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <Form.Select name="select"  onChange={handleChange} >
            <option>name</option>
            <option>email</option>
          </Form.Select>
        </div> */}
        {/* <div>
          <Button variant="primary" onClick={handleSubmit}>
            Primary
          </Button>
        </div> */}
      </div>
      <UserModal
        show={show}
        type={type}
        handleClose={handleCloseModal}
        id={id}
      />

      <div className="d-flex justify-content-between">
        <h3>User Table</h3>
        <Button variant="primary" onClick={handleShowModal}>
          Create User
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th className="d-flex justify-content-between">
              <div>
                <div>STT</div>
                <div onClick={() => handleSort("id")}>
                  <FontAwesomeIcon icon={faSort} />
                </div>
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between">
                <div>Name</div>
                <div onClick={() => handleSort("name")}>
                  <FontAwesomeIcon icon={faSort} />
                </div>
              </div>
            </th> */}
            <th>STT</th>
            <th>Desc</th>
            <th>Image</th>
            <th>Status</th>
            <th>Mode</th>
            <th>Reaction</th>
            <th>User</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {listPosts &&
            listPosts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.desc}</td>
                <td>
                  <img
                    src={post.imageUrl}
                    width="100"
                    height="50"
                    alt={post.id}
                  />{" "}
                </td>
                <td>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label={post.status && post.status === true ? "Đã duyệt" : "Chưa duyệt"}
                    checked={post.status}
                  />
                </td>
                <td>
                  {post.mode && post.mode.modeName ? post.mode.modeName : ""}
                </td>
                <td>
                  {post.reaction && post.reaction.nameReaction
                    ? post.reaction.nameReaction
                    : ""}
                </td>
                <td>
                  {post.user && post.user.profile && post.user.profile.fullname
                    ? post.user.profile.fullname
                    : ""}
                </td>
                <td>{post.createAt}</td>
                {/* <div className="d-flex ">
                  <div>
                    <Button
                      className="me-2"
                      onClick={() => changeTypeToEdit(user.id)}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="danger"
                      className="me-2"
                      onClick={() => dltUser(user.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                </div> */}
              </tr>
            ))}
        </tbody>
        <FontAwesomeIcon icon="check-square" />
      </Table>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default PostTable;
