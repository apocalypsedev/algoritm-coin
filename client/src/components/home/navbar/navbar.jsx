import { LuMenu, LuSunMoon } from "react-icons/lu";
import { BsSearch, BsMoonStars } from "react-icons/bs";
import { useTheme } from "../../../helpers/dark-mode";
import { User } from "../../../assets";
import { styles } from "../../../constants/styles";

const Navbar = ({ handleMenu}) => {
  const { darkMode, handleDarkMode } = useTheme();

  return (
    <div className={`p-2 ${styles.flexX} justify-between h-12 mb-4`}>
      <div 
        className={`bg-white rounded-md ${styles.flexX} justify-center p-2 w-8 h-8 cursor-pointer text-2xl`}
        onClick={handleMenu}
        >
        <LuMenu />
      </div>

      <div className={`${styles.flexX} gap-4`}>
       
        <div className={`${styles.flexX} justify-between  px-4 bg-white rounded-md w-[120px] h-12`}>
          <div className="text-xl" onClick={handleDarkMode}>
            {darkMode ? <BsMoonStars /> :<LuSunMoon /> }
          </div>
          <div className="w-8 h-8 rounded-full">
            <img
              src={User}
              alt=""
              className=" rounded-full h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
