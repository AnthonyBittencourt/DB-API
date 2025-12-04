  
import s from './card.module.css'

export const Card = ({image, name, race, ki}) => {
    return(
        <div className={s.card}>
            <img className={s.cardIMG} src={image} alt={name}/>
            <h2 className={s.cardTitle}>{name}</h2>
            <h3 className={s.cardKi}>{ki}</h3>
            <p className={s.cardText}>{race}</p>
        </div>
    )
}