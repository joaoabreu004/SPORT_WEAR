import ListaFiltrar from "../../layout/ListaFiltrar";
import ListaProdutos from "../../layout/ListaProdutos";
import style from './Calcados.module.scss'

function Calcados() {
    return (

        <main className={style.main_container}>
            <h2>CALÇADOS</h2>
            <ListaFiltrar categoria="Calçados"/>
        </main>



    )

}
export default Calcados; 