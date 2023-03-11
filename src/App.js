import Login from "./Pages/login/Login";
import Registration from "./Pages/registeration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        
        <BrowserRouter>
          
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
