
import as from "../baseAxios";

const list= (pagination) =>{
    const res =  as.post("/Admin/Post/Index/"+pagination);
    return res;
}

const create = (data) =>{
    return as.post("/Admin/User/Create",data)
}

const detail = (id) =>{
    return as.get("/Admin/User/Detail/" + id)
}


const update = (id,data) =>{
    return as.put("/Admin/User/Update/" +id,data)
}


const deleted = (id) =>{
    return as.delete("/Admin/User/Delete/" + id)
}


// const sortUser = (data) =>{
//     return as.post("/Admin/User/Sort" ,data)
// }


// const searchUsers = (data) =>{
//     return as.post("/Admin/User/Search" ,data)
// }



export {list,create,detail,update,deleted}
