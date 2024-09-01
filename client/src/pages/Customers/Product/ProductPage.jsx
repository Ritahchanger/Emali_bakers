import Navbar from "../../../components/Customers/Navbar";
import Footer from "../../../components/Customers/Footer";
import ProductCard from "../../../components/Customers/ProductCard";
import { useParams } from "react-router-dom";
import "./Products.css";
import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";
const ProductPage = () => {
  const { product_name } = useParams();

  return (
    <div className="products">
      <Navbar />
      <div className="container">
        <p className="empty"></p>
        <div className="small-header">Products</div>
        <p className="medium-header">
          {product_name.toUpperCase() || "SNACKS"}
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
      </div>
      <ProductViewModal />
      <Footer />
    </div>
  );
};

export default ProductPage;
