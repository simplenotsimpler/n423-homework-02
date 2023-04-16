import soaps from "@/data/soaps.js";
import CardList from "@/components/CardList.jsx";

const Products = () => {
  return (
    <>
      <section className="sectionContent">
        <CardList data={soaps} detailPath="/products" />
      </section>
    </>
  );
};

export default Products;
