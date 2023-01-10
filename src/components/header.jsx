import logo from './images/logo.svg'

import "./css/header.css";

const Header = ({ onClickRestart }) => {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <button type="button"
                  className="header-right-button fw-bold px-3 py-1"
                  onClick={onClickRestart}>RESTART</button>
    </div>

  )
}

export default Header;
