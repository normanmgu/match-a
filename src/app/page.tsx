"use client";

import Image from "next/image";
import { Outfit, Poppins } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomGreenSVG from "@/assets/svg/bottomgreenvector.svg";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

interface ScreenProps {
  children: ReactNode;
}

const FirstScreen = ({ children }: ScreenProps) => {
  return (
    <div className="w-screen min-h-screen bg-[#479F47] relative z-0">
      <div className="absolute top-[80%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          height={251}
          width={285.59}
          src={"/assets/images/squiggle_1.png"}
          alt="Squiggly_1"
          className="w-72 h-64 flex-shrink-0 aspect-[285.59/251]"
        />
      </div>
      <div className="absolute top-[10%] left-[58%] -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          height={509}
          width={251}
          src={"/assets/images/squiggle_2.png"}
          alt="Squiggly_2"
          className="w-[16.875rem] h-[24.3125rem] flex-shrink-0 aspect-[430/709]"
        />
      </div>
      <div className="absolute bottom-0 w-full h-[16.06rem] overflow-hidden z-10">
        <BottomGreenSVG />
      </div>
      {/* Content Layer */}
      <div className="absolute inset-0 z-20 flex items-center">{children}</div>
    </div>
  );
};

const SecondScreen = ({ children }: ScreenProps) => {
  return (
    <div className="w-screen bg-[#76B551] relative py-20">
      {/* Content Layer */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

const ThirdScreen = ({ children }: ScreenProps) => {
  return (
    <div className="w-screen h-[22.625rem] bg-[#E7CA2D] relative">
      {/* Content Layer */}
      <div className="absolute inset-0 z-20">{children}</div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-screen h-[22.625rem] bg-white relative">
      {/* Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-black text-4xl font-bold mb-4">Contact Us</h1>
          <div className="flex flex-col gap-2">
            <a href="mailto:ychoudhary@ucdavis.edu" className="text-[#76B551] hover:text-[#479F47] transition-colors">
            ychoudhary@ucdavis.edu
            </a>
            <a 
              href="https://instagram.com/matcha_tutor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#76B551] hover:text-[#479F47] transition-colors"
            >
              @matcha_tutor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContentImages = () => (
  <div className="relative w-full h-full top-[130px]">
    <div className="absolute top-[212px]">
      <Image
        src={"/assets/images/lawnlaptops.png"}
        alt="lawn_laptops"
        width={450}
        height={511.11}
        className="w-[280] h-[282]"
      />
    </div>
    <div className="absolute left-[100px]">
      <Image
        src={"/assets/images/headphone_man.png"}
        alt="headphone_man"
        width={350}
        height={411.11}
        className="w-[350] h-[411]"
      />
    </div>

    <div className="absolute left-[15px]">
      <Image
        src={"/assets/images/gradcap.png"}
        alt="gradcap"
        width={350}
        height={411.11}
        className="rotate-[-12.689deg] w-[178] h-[178]"
      />
    </div>

    <div className="absolute top-[155px] -left-[12px]">
      <Image
        src={"/assets/images/pencil.png"}
        alt="gradcap"
        width={350}
        height={350}
        className="rotate-[-354.689deg] w-[165] h-[165]"
      />
    </div>
  </div>
);

const MainContentText = ({ isMobile }: { isMobile: boolean }) => (
  <div className={`flex flex-col justify-center px-4 gap-y-4 ${isMobile ? "mr-20" : ""}`}>
    {
      !isMobile ? (
        <h1 className="text-[#FFFBEA] font-outfit text-[56px] font-bold leading-[125%] max-w-[572px]">
          Get Help From Peers Who&apos;ve Mastered Your Course
        </h1>
      ) : (
        <h1 className="text-[#FFFBEA] font-outfit text-[37px] font-bold leading-[125%] w-full">
          Get Help From Peers Who&apos;ve Mastered Your Courses
        </h1>
      )
    }
    <div className={poppins.variable}>
      <p className="text-white text-[20px] leading-[150%]">
        Connect with verified tutors from your campus who have excelled in the
        courses you&apos;re taking.
      </p>
    </div>
    <div className={poppins.variable}>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-4">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScZX8sgdf_ZIRx8ZZi09DwuRl_xJwbBifQ8jdhSuX1nvRmewA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-[18px] w-[245px] h-12 flex-shrink-0 rounded-[28px] bg-[#236922] shadow-[inset_0px_4px_16px_0px_rgba(0,0,0,0.10)]">
            Sign Up for Student Waitlist
          </Button>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScDAoClEFoUX-TnxeL2K5vsrVT1UMubXjwHxpM5oqW1yvjLpA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-[18px] w-[245px] h-12 flex-shrink-0 rounded-[28px] bg-[#236922] shadow-[inset_0px_4px_16px_0px_rgba(0,0,0,0.10)]">
            Sign Up for Tutor Waitlist
          </Button>
        </a>
      </div>
    </div>
  </div>
);

function HowItWorksCards() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      <Card className="w-[350px] h-[300px] bg-white backdrop-blur-sm border-[7px] border-[#E7CA2D]">
        <div className="p-6 flex flex-col items-center justify-center h-full">
          <div className="w-24 h-24 mb-4">
            <Image
              src={"/microscope.png"}
              alt="card1"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-[#76B551] text-2xl font-bold mb-4">
            1. Find a Tutor
          </h3>
          <p className="text-black text-center">
            Search tutors by course, subject, and availability. Filter by ratins
            price and more.
          </p>
        </div>
      </Card>
      <Card className="w-[350px] h-[300px] bg-white backdrop-blur-sm border-[7px] border-[#E7CA2D]">
        <div className="p-6 flex flex-col items-center justify-center h-full">
          <div className="w-24 h-24 mb-4">
            <Image
              src={"/assets/images/chatbubble.png"}
              alt="card2"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-[#76B551] text-2xl font-bold mb-4">
            2. Book a Session
          </h3>
          <p className="text-black text-center">
            Schedule in person or online sessions with your tutor, and confirm
            times.
          </p>
        </div>
      </Card>
      <Card className="w-[350px] h-[300px] bg-white backdrop-blur-sm border-[7px] border-[#E7CA2D]">
        <div className="p-6 flex flex-col items-center justify-center h-full">
          <div className="w-24 h-24 mb-4">
            <Image
              src={"/assets/images/bluecap.png"}
              alt="card3"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-[#76B551] text-2xl font-bold mb-4">
            3. Get Help and Succeed
          </h3>
          <p className="text-black text-center">
            Meet with your tutor, learn from a peer who&apos;s mastered the course,
            and ace your classes.
          </p>
        </div>
      </Card>
    </div>
  );
}

function WhyChooseUsCards() {
  const cards = [
    {
      image: "/pen_target.png",
      title: "Course-Specific Tutors",
      description:
        "Find peers who&apos;ve taken your exact class - same professor, same assignments",
    },
    {
      image: "/paper_checkmark.png",
      title: "Verified by Transcript",
      description: "Tutors upload transcripts to prove course mastery",
    },
    {
      image: "/money_symbol.png",
      title: "Affordable Rates",
      description: "Tutors set student friendly prices you can afford",
    },
    {
      image: "/handshake.png",
      title: "Consistent, 1-on-1 Support",
      description: "Work with the same trusted tutor throughout the quarter",
    },
    {
      image: "/calendar.png",
      title: "Flexible Scheduling",
      description:
        "Book sessions when it works for you - online or in person, even last minute.",
    },
    {
      image: "/check_shield.png",
      title: "Built-in Safety Features",
      description:
        "Stay secure with session confirmation codes, professor reviews, and in-app messaging",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 max-w-[1200px] mx-auto">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="w-[350px] h-[250px] bg-white backdrop-blur-sm border-none"
        >
          <div className="p-6 flex flex-col items-center justify-center h-full">
            <div className="flex flex-row items-center justify-center">
              <div className="w-24 h-24 mb-4">
                <Image
                  src={"/assets/images" + card.image}
                  alt="card1"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-[#76B551] text-2xl font-bold mb-4">
                {card.title}
              </h4>
            </div>
            <p className="text-black text-center">{card.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

function ReadyToGetStarted({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="flex flex-row items-center justify-center">
      {!isMobile && (
        <Image
          src={"/assets/images/gradcap.png"}
          alt="ready_to_get_started"
          width={275}
          height={275}
          className="w-[265px] h-[265px] rotate(-12.689deg);"
        />
      )}
      <div className="flex flex-col gap-y-8 items-center justify-center">
        {
          !isMobile ? (
            <h1 className="text-white text-4xl font-bold text-center ">
              Ready to crush your next exam or earn tutoring money?
            </h1>
          ) : (
            <h1 className="text-white text-3xl font-bold text-center mt-20">
              Ready to crush your next exam or earn tutoring money?
            </h1>
          )
        }
        <a href="#top">
          <Button className="text-[18px] w-[245px] h-12 flex-shrink-0 rounded-[28px] bg-[#236922] shadow-[inset_0px_4px_16px_0px_rgba(0,0,0,0.10)]">
            Sign Up
          </Button>
        </a>
      </div>
      {!isMobile && (
        <Image
          src={"/assets/images/happymatcha.png"}
          alt="ready_to_get_started"
          width={310}
          height={300}
          className="w-[275px] h-[275px]"
        />
      )}
    </div>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <main
      className={outfit.className + " " + (isMobile ? "overflow-y-auto" : "")}
    >
      <Navbar />
      <FirstScreen>
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-row items-center justify-center w-full h-full ml-[100px]">
            <MainContentText isMobile={isMobile} />
            {!isMobile && <MainContentImages />}
          </div>
        </div>
      </FirstScreen>
      <SecondScreen>
        <div className="flex flex-col items-center w-full h-full">
          <h1 className="text-white text-4xl font-bold mb-16">How it Works</h1>
          <HowItWorksCards />
          <h1 className="text-white text-4xl font-bold mb-16 m-6">
            Why Choose Us?
          </h1>
          <WhyChooseUsCards />
        </div>
      </SecondScreen>
      <ThirdScreen>
        <ReadyToGetStarted isMobile={isMobile} />
      </ThirdScreen>
      <Footer/>
    </main>
  );
}
