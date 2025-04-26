import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main style={{ padding: "10px", flex: 1 }}>
      <Outlet />
    </main>
  );
}

export default MainLayout;
