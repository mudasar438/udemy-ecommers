import React from "react";
import axios from "axios";
import { useState } from "react";
import { addUser } from "./api";
import { GetallData } from "./getallData";
import { storage } from "../../utils/firebase/firebase.utils";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const allinput = {
  houseName: "",
  location: "",
  rooms: "",
  detail: "",
  squirFeet: "",
  price: "",
  // housImg:'',
};

export const Dashbord = () => {
  const [data, setData] = useState(allinput);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleUpload = (e) => {
    let file = e.target.files[0];

    console.log(file);

    if (!file) return;

    // Create a reference to 'mountains.jpg'
    const fileRef = ref(storage, "images/" + file.name);
    console.log("file runing ")

    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Upload is " + progress + "% done");

        setProgress(progress);
      },
      (error) => {
        console.log(error);
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setDownloadURL(downloadURL);
          setData({...data,["imageUrl"]:downloadURL})
        });
      }
    );
  };
  const submit = async (e) => {
    e.preventDefault();
    await addUser(data);
    setData(allinput);
 
    alert("data add in mongodb");
  };


  return (
    <>
      <div className="container mx-auto ">
        <div className=" px-6 my-12  ">
          <div className="w-full  flex flex-col md:flex-row  justify-between wrap ">
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border border-red mx-5 mb-5">
              <form
                onSubmit={submit}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      House Name
                    </label>
                    <input
                      name="houseName"
                      type="text"
                      onChange={handleChange}
                      className="w-full  border border-yellow-300 mx-auto px-3 py-2 mb-3 text-sm leading-tight text-gray-700  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Location
                    </label>

                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      name="location"
                      onChange={handleChange}

                      // onChange={(e)=>setName(e.target.value)}
                    />
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Rooms
                    </label>

                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      name="rooms"
                      onChange={handleChange}

                      // onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Sequir Feet
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      name="squirFeet"
                      onChange={handleChange}

                      // onChange={(e)=>setSize(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    price
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="price"
                    onChange={handleChange}

                    // onChange={(e)=>setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="firstName"
                  >
                    Detail
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="detail"
                    onChange={handleChange}

                    // onChange={(e)=>setDetail(e.target.value)}
                  />
                </div>

                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="firstName"
                  >
                    Uploding Image
                  </label>
                  <input
                    className="w-full px-3  mt-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="file"
                   
                    onChange={handleUpload}
                    accept="image/*"
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={handleUpload}
                    // onClick={uplode}
                  >
                    Uplode
                  </button>
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>

            {/* // 2nd item */}
          </div>
        </div>
        <div className=" px-6 my-12  ">
          <div className="w-full  flex  flex-col md:flex-row mb-10 justify-between wrap "></div>
          <div className="w-full  flex  justify-between wrap "></div>
        </div>
      </div>

      <GetallData />
    </>
  );
};
