import Image from "next/image";
import Navbar from "../../Components/Pages/Navbar";
import Hero from "../../Components/Pages/Hero";
import Section2 from "../../Components/Pages/Section2";
import Footer from "../../Components/Pages/Footer";
import SalonPackages from "../../Components/Pages/SalonPackages";
import ServicesList from "../../Components/Pages/ServicesList";


export default function Services() {

  const servicesItems = [
    {title: "Service Title", price: "Pricing", duration: "Duration"},
    {title: "Service Title", price: "Pricing", duration: "Duration"},
    {title: "Service Title", price: "Pricing", duration: "Duration"},
    {title: "Service Title", price: "Pricing", duration: "Duration"},
    {title: "Service Title", price: "Pricing", duration: "Duration"},
    {title: "Service Title", price: "Pricing", duration: "Duration"}
  ]
  
  return (
    <div className="h-screen w-screen flex flex-col bg-white">
      <main className="h-full w-full overflow-x-hidden overflow-y-auto">
        <Navbar/>

        <Hero/>
        <Section2/>
        <SalonPackages/>
        <ServicesList
          servicesItems={servicesItems}
        />

        <Footer/>

      </main>
    </div>
  );
}