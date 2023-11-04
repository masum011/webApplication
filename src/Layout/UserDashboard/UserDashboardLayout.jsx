import React from "react";
  
export default function UserDashboardLayout(props) {
  const { children } = props;
  return (
    <main className="h-screen">
    <div className="py-8">{children}</div>
  </main>
  );
}
