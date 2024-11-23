import { NavLink } from "react-router-dom";
import { MdComputer } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-5 navbar">
      <div className="flex justify-center items-center gap-1">
        <MdComputer size={30} />
        <span className="text-2xl font-bold">PC-ZONE</span>
      </div>
      <div className="flex justify-center items-center gap-8 text-2xl">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/store"}>Store</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/help"}>Help</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
