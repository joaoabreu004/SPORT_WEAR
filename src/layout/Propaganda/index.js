import styles from './Propaganda.module.scss'
import imgPropaganda from '../../img/img_propaganda.png'
import {BsArrowRight} from "react-icons/bs"

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
                <p>SURPREENDA COM O MELHOR DO ESPORTE</p>
                <button className={styles.button}><i>VER MAIS</i></button>
            </div>

            <div className={styles.propadanda__section__imagem}>
                <div className={styles.propadanda__section__background}></div>
                <img src={imgPropaganda} alt="Imagem Propaganda" className={styles.img}/>
            </div>

        </div>
    )

}
export default Propaganda; 