const socialMediaData = [
  {
    icon: "linkedin-link",
    img: "../assets/linkedin.png",
    link: "https://www.linkedin.com/in/zahwa-rahman-5b7362257/",
    id: "linkedin"
  },
  {
    icon: "github-link",
    img: "../assets/github.png",
    link: "https://github.com/AchaRhmn",
    id: "github"
  },
  {
    icon: "instagram-link",
    img: "../assets/instagram.png",
    link: "https://www.instagram.com/zahwa_rahman_/",
    id: "ig"
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 md:ml-[100px]" id="social">
      {
        socialMediaData.map((socialMedia, index) => (
        <a id={socialMedia.id} key={index} className="hover:opacity-50 transition duration-500" href={socialMedia.link}
          target="_blank" rel="noreferrer">
          <img alt={socialMedia.icon} src={socialMedia.img} />
        </a>
      )) 
    }
    </div>
  );
};

export default SocialMediaIcons;
