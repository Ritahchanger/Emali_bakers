import Navbar from "../../../components/Customers/Navbar";
import Footer from "../../../components/Customers/Footer";
import ProductCard from "../../../components/Customers/ProductCard";
import { useParams } from "react-router-dom";
import "./Products.css";
import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";
import NavigateTop from "../../../components/NavigateTop";
import SearchModal from "../../../components/Customers/modals/SearchModal";
import { useEffect } from "react";
const ProductPage = () => {
  const { product_name } = useParams();

  useEffect(() => {
    window.scrollTo(
      {
        top: 0,

        behavior: "smooth",
      }
    
    );
  },[]);

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
