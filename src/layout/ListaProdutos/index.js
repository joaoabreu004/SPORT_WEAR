import CardProduct from "../CardProduct";
import style from './ListaProdutos.module.scss'

function ListaProdutos(){
    const products= 
    [
        {
            id: 1, 
            title: "Chinelo Havaianas Brasil",
            img: "https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwc8151cd6/product-images/4000032_0001_HAVAIANAS%20BRASIL_C.png?sw=680&sh=680",
            price: "47,00",
            category: "Acessórios"  
          }, 
          {
            id: 2,
            title: "Camiseta Nike Brasil 22",
            img: "https://imgnike-a.akamaihd.net/768x768/02259215.jpg", 
            price: "130,00",
            category: "Vestuário"
          }, 
          {
            id: 3, 
            title: "Camiseta Nike Brasil 22",
            img: "https://imgnike-a.akamaihd.net/1920x1920/0244217T.jpg",
            price: "600,00",
            category: "Vestuário"
          },
          {
            id: 4, 
            title: "Boné Nike Heritage86",
            img: "https://imgnike-a.akamaihd.net/1920x1920/024006ID.jpg",
            price: "200,00", 
            category: "Calçados"
          },
          {
            id: 5,
            title: "Tênis Nike Air Max TW",
            img: "https://imgnike-a.akamaihd.net/768x768/02434651.jpg",
            price: "1.200,00",
            category: "Vestuário",
          }, 
          {
            id: 6, 
            title: "Camisa Argentina I 22", 
            img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8fecaae3166e428b9cf0ae830109e23e_9366/Camisa_1_Argentina_22_Branco_HF2158_21_model.jpg", 
            price: "349,99",
            category: "Vestuário"
          }, 
          {
            id: 7, 
            title: "Camiseta Nike Pro Fit", 
            img:"https://imgnike-a.akamaihd.net/768x768/013225IE.jpg", 
            price: "140,00",
            category: "Vestuário"
          }, 
          {
            id: 8, 
            title: "Camisa Átl.Nacional 20", 
            img: "https://images.mantosdofutebol.com.br/wp-content/uploads/2019/11/Camisas-do-Atl%C3%A9tico-Nacional-2020-Nike-2-1.jpg",
            price: "289,00",
            category: "Vesturário"
          }
    ]

    return(
        <>
            <ul className={style.lista_produtos}>
                {products.map(product => {
                    return <li style={{margin: "20px"} }  > <CardProduct title={product.title} img={product.img} price={product.price}/> </li>
                })}
            </ul>
        </>
    )

}
export default ListaProdutos;