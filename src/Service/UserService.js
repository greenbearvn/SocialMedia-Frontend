
import as from "./baseAxios";

const listUsers = () =>{
    const res =  as.get("/Admin/User/Index");
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


export {listUsers,createUser,getUser,deleteUser,updateUser}
