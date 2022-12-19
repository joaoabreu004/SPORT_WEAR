import styles from './Propaganda.module.scss'
import imgPropaganda from '../../img/img_propaganda.png'
import {FaArrowRight} from "react-icons/fa"

function Propaganda() {
    return (
        <div className={styles.propadanda__section}>
            <div className={styles.propadanda__section__textos}>
                <p>
                    CAMISAS COPA DO MUNDO 2022
                    <br/>
                    CHAMPIONS LEAGUE 2022/23
                    <br/>

                    E MUITO MAIS AQUI NA SPORT WEAR!
                </p>
                <p>SURPEENDA COM O MELHOR DO ESPORTE</p>
                <button>VER MAIS <FaArrowRight/> </button>
            </div>

            <div className={styles.propadanda__section__imagem}>
                <img src={imgPropaganda} alt="Imagem Propaganda" className={styles.img}/>
            </div>

        </div>
    )

}
export default Propaganda; 