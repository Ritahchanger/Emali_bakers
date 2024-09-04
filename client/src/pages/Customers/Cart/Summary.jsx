import "./Summary.css";
import { Link } from "react-router-dom";
const Summary = () => {
  return (
    <div className="summary">
      <p className="small-header">SUMMARY</p>
      <div className="summary-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <td>Product</td>
                <td>Price</td>
                <td>units</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Hamburger</p>
                </td>
                <td>
                  <p>sh.5000</p>
                </td>
                <td>
                  <p>17</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Hamburger</p>
                </td>
                <td>
                  <p>sh.5000</p>
                </td>
                <td>
                  <p>17</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Hamburger</p>
                </td>
                <td>
                  <p>sh.5000</p>
                </td>
                <td>
                  <p>17</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Hamburger</p>
                </td>
                <td>
                  <p>sh.5000</p>
                </td>
                <td>
                  <p>17</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Hamburger</p>
                </td>
                <td>
                  <p>sh.5000</p>
                </td>
                <td>
                  <p>17</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Hamburger</p>
                </td>
                <td>
                  <p>sh.5000</p>
                </td>
                <td>
                  <p>17</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div className="total">
          <p className="small-header">Total= Sh:89000</p>
        </div>
        <Link to="/customer/checkout">
          <button className="main-button">PROCEED TO CHECKOUT</button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
