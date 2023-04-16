import CardListStyles from "../styles/CardList.module.css";
import Card from "./Card.jsx";

//put the key on the li outer element not the Card
//https://legacy.reactjs.org/docs/lists-and-keys.html
const CardList = ({ data, detailPath }) => {
  const CardListItems = data.map((el) => {
    return (
      <li key={el.id}>
        <Card
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
