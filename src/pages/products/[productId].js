import Card from "@/components/Card.jsx";
import soaps from "../api/soaps.json";

export async function getStaticProps(ctx) {
  const productId = ctx.params.productId;
  const currentProduct = soaps.find((soap) => soap.id === productId);

  return {
    props: {
      currentProduct,
    },
  };
}

// build our paths
export const getStaticPaths = async () => {
  const paths = soaps.map((soap) => {
    return {
      params: { productId: soap.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const ProductDetailPage = ({ currentProduct }) => {
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
