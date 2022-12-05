import ListaFiltrar from "../../layout/ListaFiltrar";
import ListaProdutos from "../../layout/ListaProdutos";
import style from "./Acessorios.module.scss";


function Acessorios() {
    return (
        <main className={style.main_container}>
            <h2>ACESSÓRIOS</h2>
            <ListaFiltrar categoria="Acessórios"/>
        </main>


    )

}
export default Acessorios; 