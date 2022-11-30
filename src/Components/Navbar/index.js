import style from "./NavBar.module.scss"

function NavBar() {
    return (
        <nav className={style.nav_sw}>
            <ul className={style.lista_links_sw}>
                <li>CAMISAS DE TIME</li>
                <li>CALÇADOS</li>
                <li>ACESSÓRIOS</li>
                <li>ARTIGOS</li>
            </ul>
        </nav>
    )

}
export default NavBar;
