import Footer from "@/app/Components/Pages/Footer";
import Form from "@/app/Components/Pages/Form";
import HeroBooking from "@/app/Components/Pages/HeroBooking";
import Navbar from "@/app/Components/Pages/Navbar";




export default function BookingForm() {

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

        <HeroBooking/>
        <Form/>
        <Footer/>

      </main>
    </div>
  );
}