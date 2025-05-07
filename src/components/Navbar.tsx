import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <h1 className={`${outfit.className} text-white text-[32px] font-bold`}>match-a</h1>
      </div>
    </nav>
  );
};

export default Navbar; 