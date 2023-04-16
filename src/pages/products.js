// import soaps from "@/data/soaps.js";
import soaps from "./api/soaps.json";

import CardList from "@/components/CardList.jsx";

const Products = () => {
  // console.log(soaps[0]);
  return (
    <>
      <section className="sectionContent">
        <CardList data={soaps} detailPath="/products" />
      </section>
    </>
  );
};

export default Products;
