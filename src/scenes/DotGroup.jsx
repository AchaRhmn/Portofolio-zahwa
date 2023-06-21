import AnchorLink from "react-anchor-link-smooth-scroll";

const Dot = ({ selected, onClick, sectionId }) => {
  const dotStyles = `relative bg-yellow before:absolute before:w-10 before:h-10 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%] mr-10`;

  return (
    <AnchorLink 
      href={`#${sectionId}`} 
      className={`${selected ? dotStyles : "bg-dark-grey"} w-5 h-5 rounded-full`}
      onClick={onClick}
    />
  );
};

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const dots = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {dots.map((dot) => (
        <Dot
          key={dot.id}
          selected={selectedPage === dot.id}
          onClick={() => setSelectedPage(dot.id)}
          sectionId={dot.id} 
        />
      ))}
    </div>
  );
};

export default DotGroup;
