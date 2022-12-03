import style from "./NavBar.module.scss"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className={style.nav_sw}>
            <ul className={style.lista_links_sw}>
                <li>
                    <Link className={style.ancor} to="/">HOME</Link>
                </li>
                <li>
                    <Link className={style.ancor} to="/camisaTime">CAMISAS DE TIME</Link>
                </li>
                <li>
                    <Link className={style.ancor} to="/calcados">CALÇADOS</Link>
                </li>
                <li>
                    <Link className={style.ancor} to="/acessorios">ACESSÓRIOS</Link>
                </li>
                <li>
                    <Link className={style.ancor} to="/artigos">ARTIGOS</Link>
                </li>
            </ul>
        </nav>
    )

}
export default NavBar;
