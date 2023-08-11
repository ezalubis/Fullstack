import Nav from "./pages/nav";

import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
