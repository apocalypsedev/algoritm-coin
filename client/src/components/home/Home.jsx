import {Main, Navbar, Saidbar} from '../';
import { useTheme } from './../../helpers/dark-mode';
import { useState } from 'react';

const HomePage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {darkMode} = useTheme();

  const handleMenu = () => {
    setOpenMenu(prevMenu => !prevMenu);
  }

  return (
    <div className={darkMode 
      ? "flex  gap-4 bg-green-50 h-screen p-6 overflow-hidden duration-300" 
      : "flex  gap-4 bg-dark-900 h-screen p-6 overflow-hidden duration-300"}>
      <Saidbar menu={openMenu}/>
      <div className={openMenu ? 'w-[1400px] row-span-7 duration-300' : "w-[1300px] row-span-7 duration-300"}>
        <Navbar handleMenu={handleMenu} menu={openMenu}/>
        <Main menu={openMenu}/>
      </div>
    </div>
  )
}

export default HomePage;