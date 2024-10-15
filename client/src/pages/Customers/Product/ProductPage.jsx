import Navbar from "../../../components/Customers/Navbar";
import Footer from "../../../components/Customers/Footer";
import ProductCard from "../../../components/Customers/ProductCard";
import { useParams } from "react-router-dom";
import "./Products.css";
import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";
import NavigateTop from "../../../components/NavigateTop";
import SearchModal from "../../../components/Customers/modals/SearchModal";
import { useEffect, useState } from "react";
import Config from "../../../Config";
import axios from "axios";
const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const [snacks, setSnacks] = useState([]);

  const { product_name } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${Config.development.backendUrl}/api/business/get/products`
      );

      if (!response.data.success) {
        throw new Error(
          `Error encountered while fetching data from the server`
        );
      }

      const fetchedProducts = response.data.data;

      setProducts(fetchedProducts);

      const temporalSnacks = fetchedProducts.filter(
        (product) => product.category.toLowerCase() !== "snacks"
      );

      setSnacks(temporalSnacks);
    } catch (error) {
      console.log(`Internal server error! ${error.message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <Navbar />
      <div className="container">
        <p className="empty"></p>
        <div className="small-header">Products</div>
        <p className="medium-header">
          {product_name?.toUpperCase() || "SNACKS"}
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="related-products">
          <p className="medium-header">{"Related products"}</p>
          <div className="products-grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      <ProductViewModal />
      <NavigateTop />
      <SearchModal />
      <Footer />
    </div>
  );
};

export default ProductPage;
