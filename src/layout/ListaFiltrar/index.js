import style from './ListaFiltrar.module.scss'
import CardProduct from '../CardProduct'

function ListaFiltrar({ categoria }) {

    var categoriaEscolhida = categoria

    const products =
        [
            {
                id: 1,
                title: "Chinelo Havaianas Brasil",
                img: "https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwc8151cd6/product-images/4000032_0001_HAVAIANAS%20BRASIL_C.png?sw=680&sh=680",
                price: "47,00",
                category: "Calçados"
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
                price: "150,00",
                category: "Vestuário"
            },
            {
                id: 4,
                title: "Boné Nike Heritage86",
                img: "https://imgnike-a.akamaihd.net/1920x1920/024006ID.jpg",
                price: "200,00",
                category: "Acessórios"
            },
            {
                id: 5,
                title: "Tênis Nike Air Max TW",
                img: "https://imgnike-a.akamaihd.net/768x768/02434651.jpg",
                price: "1.200,00",
                category: "Calçados",
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
                img: "https://imgnike-a.akamaihd.net/768x768/013225IE.jpg",
                price: "140,00",
                category: "Vestuário"
            },
            {
                id: 8,
                title: "Camisa Átl.Nacional 20",
                img: "https://images.mantosdofutebol.com.br/wp-content/uploads/2019/11/Camisas-do-Atl%C3%A9tico-Nacional-2020-Nike-2-1.jpg",
                price: "289,00",
                category: "Vestuário"
            },
            {
                id: 9, 
                title: "Álbum Copa 2022",
                img: "https://panini.com.br/media/catalog/product/0/0/004286ahc2br.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897", 
                price: "57,00",
                category: "Artigos"
            }, 
            {
                id: 10, 
                title: "Chinelo Adilete", 
                img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61fe3434be124b81ad49ab0600c31d43_9366/Chinelo_Adilette_Aqua_(UNISSEX)_Preto_EG1758_01_standard.jpg", 
                price: "150,00",
                category: "Calçados"
            }, 
            {
                id: 11, 
                title: "Camisa Santos 22", 
                img: "https://d1ulmyt8kny60e.cloudfront.net/Custom/Content/Products/47/10/47104_camisa-santos-brasil-pr-16049-8477_m1_638049198409000732.png", 
                price: "200,00", 
                category: "Vestuário"
            }, 
            {
                id: 12, 
                title: "Camisa Brasil Nike II", 
                img: "https://imgcentauro-a.akamaihd.net/900x900/M0Q6SW04/camisa-do-brasil-nike-torcedor-pro-ii-22-23-masculina-img.jpg", 
                price: "349,99", 
                category: "Vestuário"
            }, 
            {
                id: 13, 
                title: "Camisa Brasil Nike I",
                img: "https://imgcentauro-a.akamaihd.net/900x900/M0Q6SV08/camisa-do-brasil-nike-torcedor-pro-i-22-23-masculina-img.jpg", 
                price: "349,99", 
                category: "Vestuário"

            }, 
            {
                id: 14, 
                title: "Nike Dunk Low",
                img: "https://imgnike-a.akamaihd.net/768x768/0244860L.jpg", 
                price: "899,00",
                category: "Calçados"
            }
        ]


    let produtosFiltrados = []; 



    function filtrarCategoria(categoriaSelecionada) {
        return products.filter(product => product.category === categoriaSelecionada)
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