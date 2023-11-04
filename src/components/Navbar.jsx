import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const naviigate=useNavigate()
  const handledashboard=()=>{
    naviigate('./dashboard')
  }
  return (
    <div className="h-[100%] text-[white] flex justify-evenly items-center">
      <span className="material-symbols-outlined" onClick={handledashboard}>grid_view</span>
    </div>
  );
}
