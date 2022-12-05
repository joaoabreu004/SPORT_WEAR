import ListaFiltrar from "../../layout/ListaFiltrar";
import style from './Artigos.module.scss'

function Artigos() {
    return (
       
        <main className={style.main_container}>
            <h2>ARTIGOS</h2>
            <ListaFiltrar categoria="Artigos"/>
        </main>

    )

}
export default Artigos; 