import React, { useState } from "react"
import NavBar from "./NavBar";
import UploadImage from "./UploadImage";
const Home = () => {

  const [popup, setpopup] = useState(false)
  const submitHandler = () => {
    setpopup(true);
    { popup ? <UploadImage /> : null }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <button type='submit'>Share</button>
      </form>

    </div>
  )
}

export default Home;