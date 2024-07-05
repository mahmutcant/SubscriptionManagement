import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen flex items-center relative">
        <div className="w-48 h-5/6 bg-[#ee4d38] ml-[79px] rounded-[46px]"></div>
        <div className="w-5/6 h-3/4 bg-[#fff] ml-[140px] rounded-[30px] absolute flex">
          <Sidebar />
          <main className="my-[65px] mx-[80px] w-full">
            <Outlet />
          </main>
        </div>
        
      </div>
    </>
  );
}

export default App;
