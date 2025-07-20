import Image from "next/image";
import Navbar from "./Components/Pages/Navbar";
import Hero from "./Components/Pages/Hero";
import Section1 from "./Components/Pages/Section1";
import Section2 from "./Components/Pages/Section2";
import Section3 from "./Components/Pages/Section3";
import Footer from "./Components/Pages/Footer";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-white">
      <main className="h-full w-full overflow-x-hidden overflow-y-auto">
        <Navbar/>

        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>

        <Footer/>

      </main>
    </div>
  );
}