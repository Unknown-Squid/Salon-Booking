import Image from "next/image";
import Navbar from "./Components/Pages/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 bg-white">
      <Navbar/>
    </div>
  );
}
