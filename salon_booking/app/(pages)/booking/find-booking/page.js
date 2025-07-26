import BookingData from "@/app/Components/Pages/BookingData";
import Footer from "@/app/Components/Pages/Footer";
import HeroBooking from "@/app/Components/Pages/HeroBooking";
import Navbar from "@/app/Components/Pages/Navbar";




export default function BookingForm() {

  return (
    <div className="h-screen w-screen flex flex-col bg-white">
      <main className="h-full w-full overflow-x-hidden overflow-y-auto">
        <Navbar/>
        <HeroBooking/>
        <BookingData/>
        <Footer/>

      </main>
    </div>
  );
}