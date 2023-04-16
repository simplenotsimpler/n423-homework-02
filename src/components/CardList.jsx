import CardListStyles from "../styles/CardList.module.css";
import Card from "./Card.jsx";

const CardList = ({ data, detailPath }) => {
  const CardListItems = data.map((el) => {
    return (
      <li>
        <Card
          key={el.id}
          title={el.title}
          text={el.description}
          imgName={el.imgName}
          href={detailPath ? `${detailPath}/${el.id}` : undefined}
        />
      </li>
    );
  });
  return <ul className={CardListStyles.cardList}>{CardListItems}</ul>;
};

export default CardList;
