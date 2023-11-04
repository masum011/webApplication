import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function HomeLayout(props) {
  const { children } = props;
  return (
    <div>
      <main className="h-screen">
        <div className="h-[6%] bg-[#6200EE] p-4">
          <Header />
        </div>
        <div className="h-[87%] overflow-y-scroll">{children}</div>
        <div className="h-[7%] bg-[#344955]">
          <Navbar />
        </div>
      </main>
    </div>
  );
}
