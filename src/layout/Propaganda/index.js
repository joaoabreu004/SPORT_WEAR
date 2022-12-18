import styles from './Propaganda.module.scss'
import imgPropaganda from '../../img/img_propaganda.png'

function Propaganda() {
    return (
        <div className={styles.propadanda__section}>

            <div className={styles.propadanda__title}>
                FINAL DE ANO, SUPRENDA COM O ESPORTE!
               
            </div>

            <button className={styles.propaganda__button}>
                    VER MAIS
            </button>

            <div className={styles.div__img}>
                <img className={styles.propadanda__img} src={imgPropaganda} alt="PROPAGANDA"/>
            </div>

        </div>
    )

}
export default Propaganda; 