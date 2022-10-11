import React, { useState } from "react"
import NavBar from "./NavBar";
import './Home.scss'
import UploadImage from "./UploadImage";
const Home = () => {

  const [popup, setpopup] = useState(false)
  const submitHandler = () => {
    setpopup(!popup);

  }

  return (
    <div className="home">
      <div className="btn" onClick={submitHandler}>
        <button type='submit'>Share</button>
      </div>
      {popup ? <UploadImage toggle={submitHandler}/> : null}
      
    </div>
  )
}

export default Home;