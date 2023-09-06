import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import TextGentratorOnImg from "./TextGentratorOnImg";
import { exportComponentAsJPEG } from "react-component-export-image";

const Edit = () => {
  const [parms] = useSearchParams();
  console.log(parms.get("url"));

  const [count, setCount] = useState(0);
  const AddTextNow = () => {
    setCount(count + 1);
  };

  const refImg=createRef()
  return (
    <div  className="container ss" >
      <h3 className="text-center my-4">Edit Your Meme</h3>
      <div ref={refImg} className="my-4 " style={{width:"700px",}}>
        <img  width={"40%"} style={{paddingBottom:'20px'}} className="rounded"  src={parms.get("url")} alt="" />
        {Array(count)
          .fill(0)
          .map(() => (
            <TextGentratorOnImg />
          ))}
      </div>
      <button onClick={AddTextNow} className="btn btn-outline-secondary me-3"> Add Text</button>
      <button onClick={(e)=>exportComponentAsJPEG(refImg)} className="btn btn-outline-success">Save</button>
    </div>
  );
};

export default Edit;
