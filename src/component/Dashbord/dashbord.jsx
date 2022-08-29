import React from "react";
import axios from "axios";
import { useState } from "react";
import { addUser } from "./api";
import { GetallData } from "./getallData";
import FileBase64 from "react-file-base64";

const url = "http://localhost:8000";

const allinput = {
  houseName: "",
  location: "",
  rooms: "",
  detail: "",
  squirFeet: "",
  price: "",
  housImg: "",
};

export const Dashbord = () => {
  const [data, setData] = useState(allinput);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  async function handleUpload() {
    const options = {
      url: `${url}/add`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        houseName: data.houseName,
        location: data.location,
        rooms: data.rooms,
        detail: data.detail,
        squirFeet: data.squirFeet,
        price: data.price,
        housImg: data.housImg,
      },
    };
    await axios(options)
      .then((response) => {
        alert("data add into mongodb");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const submit = async (e) => {
    e.preventDefault();
    await handleUpload();
    setData(allinput);
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
                  <FileBase64
                    className="w-full px-3  mt-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="file"
                    // name="housImg"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setData({ ...data, housImg: base64 })
                    }
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline border-2 border-black"
                    type="submit"
                  >
                    Uplode
                  </button>
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
        <div className=" px-6 my-12  ">
          <div className="w-full  flex  flex-col md:flex-row mb-10 justify-between wrap "></div>
          <div className="w-full  flex  justify-between wrap "></div>
        </div>
      </div>

      {/* <GetallData /> */}
    </>
  );
};
