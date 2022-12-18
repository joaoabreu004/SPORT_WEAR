
import style from './Home.module.scss'

import Produtos from '../../layout/Produtos'
import anuncioOne from '../../img/anuncio.webp'
import Propaganda from '../../layout/Propaganda'



function Home() {
    return (
        <main>
            <div className={style.main_home}>
                <section>
                    <img className={style.img_add} src={anuncioOne} />
                </section>
            </div>
            <Propaganda/>
            <Produtos titulos="PRODUTOS DESTACADOS"></Produtos>

        </main>



    )
}
export default Home; 