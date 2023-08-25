
import as from "./baseAxios";

const listUsers = (pageNumber) =>{
    const res =  as.post("/Admin/User/Index/"+ pageNumber);
    return res;
}

const createUser = (data) =>{
    return as.post("/Admin/User/Create",data)
}

const getUser = (id) =>{
    return as.get("/Admin/User/Detail/" + id)
}


const updateUser = (id,data) =>{
    return as.put("/Admin/User/Update/" +id,data)
}


const deleteUser = (id) =>{
    return as.delete("/Admin/User/Delete/" + id)
}


const sortUser = (data) =>{
    return as.post("/Admin/User/Sort" ,data)
}


const searchUsers = (data) =>{
    return as.post("/Admin/User/Search" ,data)
}



export {listUsers,createUser,getUser,deleteUser,updateUser,sortUser,searchUsers}
