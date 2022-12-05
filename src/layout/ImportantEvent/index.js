
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import style from './ImportantEvent.module.scss'
import Add from '../Add'
import brasil_tshirts from '../../img/addFundoTransparente.png'
import brasil_flag from '../../img/brasil_flag.png'



function ImportantEvent() {
    return (
        <div className={style.main_home}>
        
            <h2>GARRA E CORAGEM, A MARCA DO BRASIL!</h2>


            <section className={style.hexa_decoration}>

                <Add titulo="CAMISAS BRASIL 2022" src={brasil_tshirts} />
                <div className={style.copa_2022}>
                    <ul className={style.hexa_decoration_list}>
                        <li className={style.hexa_decoration_item}><FaStar /></li>
                        <li className={style.hexa_decoration_item}><FaStar /></li>
                        <li className={style.hexa_decoration_item}><FaStar /></li>
                        <li><img className={style.brasil_flag} src={brasil_flag} /></li>
                        <li className={style.hexa_decoration_item}><FaStar /></li>
                        <li className={style.hexa_decoration_item}><FaStar /></li>
                        <li className={style.hexa_decoration_item}><FaStarHalfAlt /></li>
                    </ul>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YuGS5VyHv9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
        </div>
    )
}
export default ImportantEvent(); 