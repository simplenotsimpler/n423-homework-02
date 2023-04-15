import Card from "@/components/Card.jsx";
import styles from "../styles/Products.module.css";
import soaps from "@/data/soaps.js";

const Products = () => {
  let soapCards = soaps.map((el) => {
    return (
      <Card key={el.id} title={el.title} text={el.description} imgName={el.imgName} />
    );
  });
  return <section className={styles.products}>{soapCards}</section>;
};

export default Products;
