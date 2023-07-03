import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const skills =[
  {
    
    img : "../assets/html.png"
  },
  {
    
    img : "../assets/css.png"
  },
  {
    
    img : "../assets/php.png"
  },
  {
    
    img : "../assets/java.png"
  },
  {
    
    img : "../assets/canva.png"
  },
  {
    
    img : "../assets/figma.png"
  }


]

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-5xl mb-5">
            <span className="text-blue03">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-5 mb-7 text-xl">
          Through my studies and hands-on experience, I have gained knowledge in various aspects of software engineering, including software design and development.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png"  />
          )}
        </div>
      </div>

      {/* SKILLS */}
           <div className="md:flex md:justify-between mt-8 gap-32 md:mb-8 ">

           {skills.map((skills, index) => (
     
     <motion.div
     key={index}
     className="md:w-1/3 mt-10"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.5 }}
     variants={{
       hidden: { opacity: 0, y: 50 },
       visible: { opacity: 1, y: 0 },
     }}
   >
     <div className="relative h-32">
       <div className="z-10">
         <p className="font-opensans text-center font-semibold text-5xl mr-20">
           {skills.skill}
         </p>
       </div>
       <div className="w-full h-40 absolute z-[-1]">
         <img
           src={skills.img}
           alt="skills"
           className="w-full h-full object-contain"
         />
       </div>
     </div>
   </motion.div>
   
   

        
        
           ))
           }
        </div>
        
    </section>
  );
};

export default MySkills;
