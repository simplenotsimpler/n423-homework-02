import Card from "@/components/Card.jsx";
import { useRouter } from "next/router.js";
import soaps from "../../data/soaps.js";

const ProductDetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  const currentProduct = soaps.find((soap) => soap.id === productId);

  return (
    <>
      <section className="sectionContentDetail">
        <Card
          imgName={currentProduct.imgName}
          title={currentProduct.title}
          text={currentProduct.description}
          isDetail={true}
        />
      </section>
    </>
  );
};

export default ProductDetailPage;
