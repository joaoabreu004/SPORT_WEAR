import style from './Header.module.scss'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header className={style.header_sw}>
            <h1><Link to="/"><img className={style.logo_sw} src={logo} alt="Logo SW"/></Link></h1>
            <p className={style.nome_sw}>SPORT WEAR</p>
        </header>
    )

}
export default Header; 