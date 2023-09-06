import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import { memeApi } from "../MemeApi/ApiMeme";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    memeApi().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    
    <div className="d-flex flex-wrap" style={{backgroundImage:' linear-gradient(to right, #2c3e50, #4ca1af)'}}>
<h2 className='text-center my-5'> Meme Generator</h2>
     <div className="main d-flex flex-wrap">
     {data.map((el) => (
        <MemeCard img={el.url} title={el.name} />
      ))}
     </div>
    </div>
  );
}

export default Home;
