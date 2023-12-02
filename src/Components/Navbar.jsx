import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContextGlobal, THEME_LIGHT, THEME_DARK } from './utils/global.context';

const Navbar = () => {
  const { state, changeTheme } = useContextGlobal();
  const { theme } = state;


  const handleChangeTheme = () => {
    const newTheme = [THEME_LIGHT, THEME_DARK].filter(item => theme !== item);
    changeTheme(newTheme[0]);
  };

  return (
    <nav className={theme}>
      <Link className="tab" to="/"><h2>Home</h2></Link>
      <Link className="tab" to="/favs"><h2>Favs</h2></Link>
      <Link className="tab" to="/detail:id"><h2>Detail</h2></Link>
      <Link className="tab" to="/contact"><h2>Contact</h2></Link>
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar