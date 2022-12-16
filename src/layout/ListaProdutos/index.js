import CardProduct from "../CardProduct";
import { useEffect, useState } from "react";

import style from './ListaProdutos.module.scss'

function ListaProdutos() {
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



  // COMPARAÇÃO produtos.sort(() => 0.5 - Math.random
  const produtosRecomendados = produtos.sort(() => 0.5 - Math.random()).splice(0, 4 )


  return (
    <>
      {console.log(produtosRecomendados)}
      <ul className={style.lista_produtos}>
        {produtosRecomendados.map(product => {
          return <li style={{ margin: "20px" }}  > <CardProduct key={product.id} title={product.title} img={product.img} price={product.price} /> </li>
        })}
      </ul>
    </>
  )

}
export default ListaProdutos;