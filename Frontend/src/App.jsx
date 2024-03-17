import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css";
import { Signin } from "./common/Signin";
import { Signup } from "./common/Signup";
import { Home } from "./common/Home";
// import { PostJob } from "./CustomerPages/PostJob";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="postjob" element={<PostJob/>}/> */}
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    
  );
}

export default App;