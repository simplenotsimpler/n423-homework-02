import CardStyles from "../styles/Card.module.css";
import Link from "next/link.js";

/* 
  SEMANTIC: use div and use semantic element outside card
  Otherwise, have to select semantic and pass as prop, e.g.:
  https://queen.raae.codes/emails/2022-10-10-semantic-react/
*/

const Card = ({ title, text, imgName, href, isDetail }) => {
  //Ideally, could make this conditional so don't repeat code
  //e.g. https://stackoverflow.com/questions/37218833/conditionally-linking-with-react-router-link
  if (href) {
    return (
      <div className={CardStyles.card}>
        <Link href={href}>
          <img
            src={`/images/${imgName}`}
            className={isDetail ? CardStyles.squareImgLg : CardStyles.roundImg}
            alt={title}
          />
        </Link>

        <div className={CardStyles.cardBody}>
          <Link href={href}>
            <h2 className={CardStyles.cardTitle}>{title}</h2>
          </Link>
          <p className={CardStyles.cardText}>{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={CardStyles.card}>
      <img
        src={`/images/${imgName}`}
        className={isDetail ? CardStyles.squareImgLg : CardStyles.roundImg}
        alt={title}
      />
      <div className={CardStyles.cardBody}>
        <h2 className={CardStyles.cardTitle}>{title}</h2>
        <p className={CardStyles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
