import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useGetTopProductsQuery } from "../slices/productSlice";
import Message from "./Message";

function ProductCarousel() {
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  return isLoading ? (
    <></> // // inside fragment isLoading is not passed becaue we are displaying this page in the HomePage.jsx which already has isLoading state, if we put again it loads for two times.
  ) : error ? (
    <Message variant="danger">{error.data.error}</Message>
  ) : (
    <Carousel className="mb-4 bg-dark pause=hover">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} fluid />
          </Link>
          <Carousel.Caption className="carousel-caption">
            {product.name} - (${product.price})
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
