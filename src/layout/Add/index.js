import style from './Add.module.scss'

function Add({ titulo, src }) {
    return (
        <div className={style.container_add}>
            <div className={style.placa_add}>
                <p className={style.titulo}>{titulo}</p>
                <img className={style.add_img} src={src} alt="ADD" />
            </div>
        </div>
    )
}
export default Add;