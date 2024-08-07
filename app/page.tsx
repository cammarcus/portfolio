import Image from "next/image";
import NavBar from "./_landingComponents/navBar";
import MainItem from "./_landingComponents/mainItem";
import Header from "./_landingComponents/header";
import SubItem from "./_landingComponents/subItem";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Background div */}
      <div
        className="fixed top-0 left-0 w-full h-3/4 z-0"
        style={{
          backgroundImage: 'url(/green-paint-brush-textured-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Content div */}
      <div className="relative z-20 pt-20" style={{ minHeight: '100vh', width: '100vw' }}>
        <NavBar />
        <div className="flex flex-col items-center w-full pt-10">
          <div className="w-full">
            <Header />
          </div>
          <div className="mt-10">
            <SubItem />
          </div>
        </div>
      </div>
    </div>
  );
}
