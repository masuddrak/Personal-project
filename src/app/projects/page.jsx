"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { RotatingSquare } from "react-loader-spinner";
import { useSpring, animated } from "@react-spring/web";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faExpand } from "@fortawesome/free-brands-svg-icons";
import BottomNav from "@/components/BottomNav";
import ProjectCard from "@/components/ProjectCard";
import image1 from "../../../public/projectImage/1 (2).png"
import image2 from "../../../public/projectImage/10.png"
import image3 from "../../../public/projectImage/11.png"
import image4 from "../../../public/projectImage/12.png"
import image5 from "../../../public/projectImage/13.png"
export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 0) {
          clearInterval(timer);
          setLoading(false);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 12.5);
    return () => clearInterval(timer);
  }, []);

  const props = useSpring({
    opacity: loading ? 0 : 1,
    config: { duration: 1000 },
  });
  const pageTitle = "Projcets | Masud Rana";
  return (
    <>

      <title>{pageTitle}</title>

      <main className="bg-[#12191B] relative overflow-hidden min-h-screen px-3">

        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="12, 200, 128"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <animated.div style={props}>
          <div className="max-w-[1150px] m-auto py-2 z-20 relative">
            <div className="z-50">
              <Navbar />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-10">
                <ProjectCard
                  classesName={"bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20"}
                  technology={" HTML5, CSS3,  JavaScript, Tailwind CSS, Bootstrap, daisyUI, React.js, Node.js, Express.js, MongoDB, Firebase, json web token(JWT)"}
                  title={"BD Newspaper"}
                  image={image1}
                  gitLink={"https://github.com/masuddrak/BDnewspaper"}
                  liveLink={"https://newspaper-5c966.web.app/"}
                ></ProjectCard>

                <ProjectCard
                  classesName={"bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20"}
                  technology={" HTML5, CSS3,  JavaScript, Tailwind CSS, Bootstrap, daisyUI, React.js, Node.js, Express.js, MongoDB, Firebase, json web token(JWT)"}
                  title={"H-booking"}
                  image={image2}
                  gitLink={"https://github.com/masuddrak/H-booking"}
                  liveLink={"https://h-booking-96145.web.app/"}
                ></ProjectCard>
                <ProjectCard
                  classesName={"bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20"}
                  technology={" HTML5, CSS3,  JavaScript, Tailwind CSS, Bootstrap, daisyUI, React.js, Node.js, Express.js, MongoDB, Firebase, json web token(JWT)"}
                  title={"SP-Tourism"}
                  image={image3}
                  gitLink={"https://github.com/masuddrak/SP-Tourism-client"}
                  liveLink={"https://sp-tourists.web.app/"}
                ></ProjectCard>
                <ProjectCard
                  classesName={"bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20 relative"}
                  technology={" HTML5, CSS3,  JavaScript, Tailwind CSS, Bootstrap, daisyUI, React.js, Node.js,Firebase"}
                  title={"Detroit House"}
                  image={image4}
                  gitLink={"https://github.com/masuddrak/Detroit-house"}
                  liveLink={"https://detroit-house.web.app/"}
                ></ProjectCard>



                <ProjectCard
                  classesName={"bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg overflow-hidden z-20 relative"}
                  technology={" HTML5, CSS3,  JavaScript, Tailwind CSS, Bootstrap, daisyUI, React.js, Node.js"}
                  title={"Book Vibe"}
                  image={image5}
                  gitLink={"https://github.com/masuddrak/Book-Vibe"}
                  liveLink={"https://scintillating-monstera-d87398.netlify.app/"}
                ></ProjectCard>


              </div>
              <div className="">
                <Footer></Footer>
                <div className="z-50 absolute"><BottomNav></BottomNav></div>
              </div>
            </div>
          </div>

        </animated.div>
      </main>
    </>
  );
}
