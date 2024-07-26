import { Row, Col } from "react-bootstrap";
// import products from "../products";  // // Now we can delete the product.js from the fontend because we are fetching from backend.
import Product from "../components/Product";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/v1/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((err) =>
        console.log("Error occur while fetching api", err.message)
      );
  }, []);
  return (
    <>
      <h1> Latest Products </h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

// // Next way to fetech the product: to use these replace code from fetch above.
// // Means comment from const to []); just above to return. Now add another const: const products = userLoaderData();
// // Then in the Main.jsx file chnage code <Route path="" element={<HomePage />} />  to
// // <Route path="" element={<HomePage />} loader = {dataLoader}/>
// // Then import in the HomePage.jsx >> import {useLoaderData} from "react-router-dam"

// export const dataLoader = async() => {
//   let resp = await fetch("/api/v1/products");
//   let data = await resp.json()
//   return;
// }

// // In loader when you just hover over botton, link and so on then it starts fetchnig data. It is done by router-dom.
// // But in useEffect when you click the button, link then only they starts fetching data.

export default HomePage;
