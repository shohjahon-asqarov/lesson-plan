import Home from "./components/Home";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <div className="container flex h-screen border border-gray-500 px-0">
      <Sidebar />
    </div>
  );
}
