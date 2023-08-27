import React from "react";


import Home from "./Pages/Home/Home"
import Quizz from "./Pages/Quiz";
import Certificate from "./Pages/Certificate";
import LoginPage from "./Pages/LoginPage";
import Coursat from "./Pages/Coursat/Coursat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Pages/list/List.jsx"
import Single from "./Pages/single/Single.jsx"
import New from "./Pages/new/New.jsx"
import DashBoard from "./Pages/Dashboard/Dashboard"
// import Main from "./Components/Main/Main";
// import Navbar from "./Components/Navbar/Navbar";
// import Courses from "./Components/Courses/Courses";

function App() {
  
  return (
    <div >
      <BrowserRouter basename="/FollowUpLearn">
        <Routes>

          <Route  path="/" exact element={<Home/>}/>
          <Route path="/dash" element={<DashBoard/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/single" element={<Single/>}/>
          <Route path="/quiz" element={<Quizz/>} />
            <Route path="/certificate" element={<Certificate/>} />
            <Route path="/student" element={<LoginPage/>} />
            <Route path="/coursat" element={<Coursat/>} />

          {/* <Route path=":userId" element={<Single />} /> */}
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <Route path="/" element={<Home/>}/> */}


            {/* <Route index element={<DashBoard />} />
            <Route path="teachers">
              <Route index element={<List />} />
              
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route> */}
          {/* </Route> */}



        </Routes>
      </BrowserRouter>
      {/* <Navbar/>
      <Main/>
      <Courses/> */}

      {/* <Section/> */}


    </div>
  );
}

export default App;
