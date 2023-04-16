import styles from "../styles/Products.module.css";
import soaps from "@/data/soaps.js";
import CardList from "@/components/CardList.jsx";

const Products = () => {
  return (
    <>
      <section className={styles.products}>
        <CardList data={soaps} detailPath="/products" />
      </section>
    </>
  );
};

export default Products;
