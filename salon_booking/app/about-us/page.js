import Image from "next/image";
import Footer from "../Components/Pages/Footer";
import HeroAboutUs from "../Components/Pages/HeroAboutUs";
import Navbar from "../Components/Pages/Navbar";
import Section1AboutUs from "../Components/Pages/Section1AboutUs";
import Section2 from "../Components/Pages/Section2";
import ContactSection from "../Components/Pages/ContactSection";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-white">
      <main className="h-full w-full overflow-x-hidden overflow-y-auto">
        <Navbar/>

        <HeroAboutUs/>

        <div className="flex flex-col h-fit w-full relative">
            <Section1AboutUs/>
            <Section2 isFade={true}/>
            <ContactSection/>
            <div className="w-full h-full absolute top-0 left-0">
                <Image
                    src={"/images/background/paint-bg.png"}
                    width={500}
                    height={500}
                    className="w-full h-full mt-32"
                    alt="paint bg"
                />
            </div>
        </div>
        <Footer/>

      </main>
    </div>
  );
}