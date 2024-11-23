import { MdComputer } from "react-icons/md";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-10 gap-4">
      <div className="icon-dontainer bg-black rounded-full p-4">
        <MdComputer size={50} color="white" />
      </div>
      <div className="tag-line text-3xl">PC-ZONE</div>
      <div className="description text-5xl text-center">
        Welcome to Out PC Zone, your one-stop shop for all your computer and
        technology needs! Whether you’re a tech enthusiast, a gamer, or simply
        looking for reliable solutions to enhance your digital experience, we’ve
        got you covered.
      </div>
    </div>
  );
};

export default About;
