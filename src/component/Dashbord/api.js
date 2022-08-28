import axios from "axios";

const URL = "http://localhost:8000"

export const addUser = async(data)=>{
    try{
      // console.log("listening to addUser", data)
      return await axios.post(`${URL}/add`, data)

    } catch(err){
        console.log("Error While Calling addUser API", err);

    }
}

// ----- get ALL users ---------
export const getUsers = async()=>{
    try{
      // console.log("listening to getUsers")
      const result =  await axios.get(`${URL}/all`)
      console.log(result)

      return result;


    } catch(err){
        console.log("Error While Calling getUsers API", err);

    }
}


//----------- Edit User -----------
export const editUser = async(id)=>{
    try{
      // console.log("listening to editUser")
      return await axios.get(`${URL}/${id}`)

    } catch(err){
        console.log("Error While Calling editUser API", err);

    }
}


// ------------save edited user--------
export const saveUser = async(user, id)=>{
    try{
      // console.log("listening to saveUser")
      return await axios.post(`${URL}/${id}`, user)

    } catch(err){
        console.log("Error While Calling saveUser API", err);

    }
}

// ------------delete user--------
export const deleteuser = async(id)=>{
    try{
      // console.log("listening to deleteUser")
      return await axios.delete(`${URL}/${id}`)

    } catch(err){
        console.log("Error While Calling deleteUser API", err);

    }
}