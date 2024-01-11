import "./App.css";

import Checkout from "./Component/Checkout/Checkout";
import Bodycontent from "./Component/ClientsideHome/Bodycontent";
import Clientside from "./Component/ClientsideHome/Clientside";
import { UserProvider } from "./Usercontext";
import Home from "./Component/Admin/Home/Home"
import { Routes, Route } from "react-router-dom";
import Image from './Component/Admin/Imageupload/Image';
import Dashboard from './Component/Admin/Dashboard/Dashboard';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [img, setimg] = useState();
  const [text, settext] = useState();

  useEffect(() => {
    loadData()
  }, [])


  let loadData = async () => {
    try {
      let sitedata = await axios.get(`http://localhost:5002/api/websitedata/webdata`);
      let info = sitedata.data[0]

      setimg(info.image)
      settext(info.buttontext)
      console.log(img)
      console.log(text)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <UserProvider value={{ img, text, setimg, settext, loadData }}>
        <Routes>
          <Route path="/" element={<Clientside />}>
            <Route index element={<Bodycontent />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>


          <Route path="/admin-dashboard" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="addimage" element={<Image />} />
          </Route>


        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
