import Image from "next/image";
import NavBar from "./_landingComponents/navBar";
import MainItem from "./_landingComponents/mainItem";
import Header from "./_landingComponents/header";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background div */}
      <div
        className="absolute top-0 left-0 w-full z-0"
        style={{
          backgroundImage: 'url(/green-paint-brush-textured-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '75vh'
        }}
      ></div>
      
      {/* Content div */}
      <div className="relative z-10" style={{ minHeight: '100vh', width: '100vw' }}>
        <div className="flex flex-col items-center p-8 w-full">
          <div className="w-full">
            <NavBar />
          </div>
          <div className="mt-10">
            <Header />
          </div>
          <div className="mt-10 flex flex-col items-center w-full">
            <MainItem />
          </div>
        </div>
      </div>
    </div>
  );
}
