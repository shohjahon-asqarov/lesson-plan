import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import AddQuestion from "./pages/AddQuestion";

export default function App() {
  return (
    <div className="container flex h-screen border border-gray-500 px-0">
      <Sidebar />
      <div className="p-5 w-full">
        <Routes>
          <Route path="/" element={<AddQuestion />} />
        </Routes>
      </div>
    </div>
  );
}
