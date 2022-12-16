
import style from './Home.module.scss'
import anuncioOne from '../../img/slide1.webp'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import brasilFlag from '../../img/brasil_flag.png'
import Produtos from '../../layout/Produtos'



function Home() {
    return (
        <main>
            <div className={style.main_home}>
                <section>
                    <img className={style.img_add} src={anuncioOne} />
                </section>



                <section className={style.hexa_decoration}>

                    <div className={style.copa_2022}>
                        <h2>GARRA E CORAGEM, A MARCA DO BRASIL!</h2>
                        <ul className={style.hexa_decoration_list}>
                            <li className={style.hexa_decoration_item}><FaStar /></li>
                            <li className={style.hexa_decoration_item}><FaStar /></li>
                            <li className={style.hexa_decoration_item}><FaStar /></li>
                            <li><img className={style.brasil_flag} src={brasilFlag} /></li>
                            <li className={style.hexa_decoration_item}><FaStar /></li>
                            <li className={style.hexa_decoration_item}><FaStar /></li>
                            <li className={style.hexa_decoration_item}><FaStarHalfAlt /></li>
                        </ul>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YuGS5VyHv9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </section>
            </div>
            <Produtos titulos="PRODUTOS DESTACADOS"></Produtos>

        </main>



    )
}
export default Home; 