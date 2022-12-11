import style from './ListaFiltrar.module.scss'
import CardProduct from '../CardProduct'
import { useEffect, useState } from "react";


function ListaFiltrar({ categoria }) {

    var categoriaEscolhida = categoria

    const [produtos, setProdutos] = useState([])

    //OBTER TODOS OS PRODUTOS 
    useEffect(() => {
        fetch("http://localhost:8080/produtos")
            .then(resp => resp.json())
            .then(resp => {
                setProdutos(resp)
                console.log(produtos)
            })
            .catch(err => console.error(err))
    }, []);





    let produtosFiltrados = [];



    function filtrarCategoria(categoriaSelecionada) {
        return produtos.filter(product => product.category === categoriaSelecionada)
    }

    produtosFiltrados = filtrarCategoria(categoria)

    return (

        <>
            <ul className={style.lista_produtos}>
                {produtosFiltrados.map(product => {
                    return <li style={{ margin: "20px" }}  > <CardProduct title={product.title} img={product.img} price={product.price} /> </li>
                })}
            </ul>
        </>
    )

}
export default ListaFiltrar;