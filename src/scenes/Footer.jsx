import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-blue02 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow md:ml-[100px]">
            ZAHWA PARISSA RAHMAN
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 ZAHWA.
          </p>
        </div>
      </div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-[#083996]" target="_blank">:v</a>
    </footer>
  );
};

export default Footer;
