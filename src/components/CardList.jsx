import CardListStyles from "../styles/CardList.module.css";
import Card from "./Card.jsx";

const CardList = ({ data }) => {
  const CardListItems = data.map((el) => {
    return (
      <Card
        key={el.id}
        title={el.title}
        text={el.description}
        imgName={el.imgName}
      />
    );
  });
  return <ul className={CardListStyles.cardList}>{CardListItems}</ul>;
};

export default CardList;
