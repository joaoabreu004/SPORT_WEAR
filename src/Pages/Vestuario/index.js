import style from './Vestuario.module.scss'
import ListaFiltrar from '../../layout/ListaFiltrar'

function Vestuario() {
    return (
        <main className={style.main_container}>
            <h2>VESTUÁRIO</h2>
            <ListaFiltrar categoria="Vestuário"/>
        </main>

    )

}
export default Vestuario; 

