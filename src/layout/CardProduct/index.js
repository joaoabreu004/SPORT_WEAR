import Style from './CardProduct.module.scss'

function CardProduct({img, title, price}){
    return(
        <div className={Style.card_body}>
            <div className={Style.card_header}>
                <img className={Style.card_img} src={img} alt={`product-${title}`}/>
            </div>
            <div className={Style.card_main}>
                <h3 className={Style.card_title}>{title}</h3>
                <p className={Style.frete_free}>FRETE GRÁTIS</p>
                <p className={Style.price}>R$ {price}</p>
                <button className={Style.btn_add}>ADICIONAR NO CARRINHO</button>
            </div>

        </div>
    )
}
export default CardProduct;