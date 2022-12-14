import CardProduct from '../CardProduct';
import style from './Produtos.module.scss'; 
import ListaProdutos from '../ListaProdutos'

function Produtos({titulos}) {
    return (
        <section className={style.produtos_section}>
            <h2 className={style.produtos_section_title}>{titulos}</h2>
            <ListaProdutos/>
        </section>

    )

}
export default Produtos; 