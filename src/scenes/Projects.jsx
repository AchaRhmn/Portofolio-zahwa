import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const projects = [
  {
    id: "kwitansi",
    title: "Kwitansi",
    desc: "A receipt made with PHP",
    link: "http://kwitansi001.rf.gd/"
  },
  {
    id: "ocha",
    title: "OCHA",
    desc: "A profile website for a tea shop made with CMS Wordpress",
    
  },
  {
    id: "seo",
    title: "SEO On Page",
    desc: "An SEO project about drilled well",
    link: "https://sumurbordewata.com/"
  },
  {
    id: "firstpro",
    title: "First Project",
    desc: "The first project that I made using HTML and CSS",
    link: "https://firstproject-acharhmn.vercel.app/"
  }
];

const Project = ({ title, desc, link, id }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles} id={`hover${id}`}>
        <p className="md:text-3xl font-playfair text-lg">{title}</p>
        <p className="mt-7 md:text-xl text-sm">{desc}</p>
        <a target="_blank" id={`link-${id}`} href={link} className="hover:text-yellow transition duration-500 mt-[50px] text-lg">Visit Site </a>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} className="w-full h-full"/>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-5xl">
            <span className="text-blue03">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5 mb-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex justify-center text-center items-center p-10 bg-blue02 max-w-[400px] max-h-[400px] text-3xl font-playfair font-semibold ">
            Here are some projects that I have made.
          </div>
          
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          ))}
          
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-3xl font-playfair font-semibold">
            And various other simple projects.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
