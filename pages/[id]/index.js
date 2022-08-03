import React, { useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { useRouter } from "next/router";
import client from "../api/client";
const style = {
  wrapper: "",
};
const index = (props) => {
  const [ProductData, setProductData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const getProduct = async () => {
      const featuredProduct = await client.fetch(
        `*[_type == "featuredProduct" && slug.current =='${router.query.id}']`
      );
      setProductData(featuredProduct);
    };
    getProduct();
  }, [router.isReady]);
  console.log(ProductData);
  return (
    <div>
      {ProductData.length > 0 && (
        <ProductDetails
          productName={ProductData[0].name}
          price={ProductData[0].price}
          description={ProductData[0].description}
          information={ProductData[0].information}
          slugValue={ProductData[0].slug.current}
          image={ProductData[0].image}
          reviews={ProductData[0].reviews}
          rating={ProductData[0].rating}
        />
      )}
    </div>
  );
};

export default index;

// export  function getServerSideProps(context) {
//   const featuredProduct = await client.fetch(
//     `*[_type == "featuredProduct" && slug.current =='${context.params.id}']`
//   );
//   return {
//     props: { data: featuredProduct },
//   };
// }
