import React from "react";
import "./page1.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import arr2 from "./page2"
// let arr3=[...arr2]
const Page3=()=>{
    let navigate=useNavigate();
  let name2,value2;
    const [data, setData] = useState({
      name: "",
      mobile: "",
      poster:"",
      sale: "",
      fp: "",
      Pp: ""
      });
      const handleInput2 = (e) =>{
        name2 = e.target.name;
      value2 = e.target.value;
        setData({...data, [name2]:value2})
        
    }
  // const saveInput2 = async (e) => {
  //   e.preventDefault();
  //   const {
  //     name,
  //     mobile,
  //     poster,
  //     sale,
  //     fp,
  //     Pp
  //   } = data;
  //   await fetch("http://localhost:3003", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       mobile: mobile,
  //       poster: poster,
  //       sale:sale,
  //       fp: fp,
  //       Pp: Pp
  //     }),
  //   }).then(() => {
  //   //   arr3.push(data);
  //   // console.log(arr3);
  //   // console.log(localStorage.getItem("name"));
  //   // localStorage.setItem("name","shivam");
  //     navigate("/p4");
  //   });
  // };
  const saveInput2=async (e)=>{
    const {
          name,
          mobile,
          poster,
          sale,
          fp,
          Pp
        } = data;
    localStorage.setItem("name", name)
    localStorage.setItem("mobile", mobile)
    localStorage.setItem("poster", poster)
    localStorage.setItem("sale", sale)
    localStorage.setItem("fp", fp)
    localStorage.setItem("Pp", Pp)
        navigate("/p4");
  }
    return(
        <>
        <h2 className="all">Add New Property</h2>
        <div className="comA">
            <span className="com">1.Basic Info</span>
            <span className="com">2.Property Details</span>
            <span className="com" id="clr">3.General info</span>
            <span className="com">4.Location Info</span>
        </div>
        <div className="type">
            <div className="two">
            <div><h2>Name</h2></div>
            <input id="name" name="name" placeholder="Owner" className="opt1" onChange={handleInput2}></input>
            </div>
            <div className="two">
            <div><h2>Mobile</h2></div>
            <input id="mobile" name="mobile" placeholder="Enter Your Number" className="opt1" onChange={handleInput2}></input>
            </div></div>
            <div className="type">
            <div className="two">
            <div><h2>Posted By</h2></div>
            <select className="opt" id="poster" name="poster" onChange={handleInput2}>
            <option value="Owner">Owner</option>
            <option value="Broker">Broker</option>
            </select>
            </div>
            <div className="two">
            <div><h2>Sale Type</h2></div>
            <select className="opt" id="sale" name="sale" onChange={handleInput2}>
            <option value="sold ">Sold</option>
            <option value="unsold">Unsold</option>
            </select>
            </div></div>
            <div className="type">
            <div className="two">
            <div><h2>Featured Package</h2></div>
            <select className="opt" id="fp" name="fp" onChange={handleInput2}>
            <option value="100000">100000</option>
            <option value="200000">200000</option>
            </select>
            </div>
            {/* <div className="type"> */}
            <div className="two">
            <div><h2>PPD Package</h2></div>
            <select className="opt" id="Pp" name="Pp" onChange={handleInput2}>
            <option value="100000">100000</option>
            <option value="200000">200000</option>
            </select>
            </div></div>
            <div>
            <img src="cmg.png" className="img2"></img>
            <h3 >Add Photo</h3>
            </div>
            <div className="btn">
            <a href="/p2"><button>Previous</button></a>
            <button onClick={saveInput2}>Save & Continue</button>
            </div>
        </>
    )
}
export default Page3;