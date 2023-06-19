import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:pt-[60px] md:items-center gap-16 md:h-full py-10 mt-[100px]"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2 ml-5">
        {isAboveLarge ? (
          <div
            className="relative z-0 md:ml-[100px] before:absolute before:-top-20 before:-left-20 before:-t-[400px]
            before:w-full before:max-w-[700px] md:before:max-w-[900px] before:h-full before:border-2 before:border-blue03 before:border-dashed before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[700px] md:max-w-[900px] border-yellow border-2"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[700px] md:max-w-[900px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-3/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
        
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start md:ml-[100px]">
          <span
              className="xs:relative  xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[70px] before:-top-[100px] before:z-[-1]"
            >Zahwa Parissa Rahman {""}
            
              
            </span>
          </p>

          <p className="mt-10 mb-7 text-lg text-center md:text-start md:ml-[100px]">
          As a Software Engineering major student at SMKN 1 Denpasar, I am passionate about technology and dedicated to honing my skills in the field of software development.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue  hover:text-white hover:bg-blue02 transition duration-500 md:ml-[100px]
             py-3 px-7 font-bold text-lg"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Let's talk.
          </AnchorLink>
          <AnchorLink
            className=" bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("projects")}
            href="#projects"
          >
            <div className="bg-deep-blue text-lg  hover:text-deep-blue hover:bg-white transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
            Project
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
