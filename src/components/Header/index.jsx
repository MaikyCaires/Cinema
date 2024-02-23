import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.content}>
        <div className={style.menuFlex}>
          <h1>
            <FontAwesomeIcon color="white" icon={faGamepad} />
          </h1>
          <nav>
            <ul className={style.menu}>
              <li>
                <a href="#jogos">Jogos</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

