import CardListStyles from "../styles/CardList.module.css";
import Card from "./Card.jsx";

//TODO: move the li here
const CardList = ({ data, detailPath }) => {
  const CardListItems = data.map((el) => {
    return (
      <Card
        key={el.id}
        title={el.title}
        text={el.description}
        imgName={el.imgName}
        href={detailPath ? `${detailPath}/${el.id}` : undefined}
      />
    );
  });
  return <ul className={CardListStyles.cardList}>{CardListItems}</ul>;
};

export default CardList;
