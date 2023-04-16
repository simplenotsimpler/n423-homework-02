import CardStyles from "../styles/Card.module.css";

//if time, convert this to select correct semantic element 
const Card = ({ title, text, imgName }) => {
  return (
    <li className={CardStyles.card}>
      <img
        src={`/images/${imgName}`}
        className={CardStyles.roundImg}
        alt={title}
      />
      <div className={CardStyles.cardBody}>
        <h1 className={CardStyles.cardTitle}>{title}</h1>
        <p className={CardStyles.cardText}>{text}</p>
      </div>
    </li>
  );
};

export default Card;
