import style from './Footer.module.scss'
import { FaYoutubeSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa";


function Footer(){
    return(
        <footer className={style.footer_sw}>
            <h3>SPORT WEAR &copy; 2022 </h3>
            <div className={style.container_link}>
                <ul className={style.footer_lista_links}>
                    <li><a href='/#'><FaYoutubeSquare/></a></li>
                    <li><a href='/#'><FaFacebookSquare/></a></li>
                    <li><a href='/#'><FaInstagram/></a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer