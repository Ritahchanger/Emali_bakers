import "./Summary.css";
import CheckOutButton from "../../../components/CheckOutButton";

const Summary = () => {
  const products = [
    {
      id: 1,
      name: "Hamburger",
      price: 5000,
      quantity: 17,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ea, tempora quo ad quam exercitationem a assumenda dolorum vitae dignissimos laudantium ipsum natus molestiae? Tempora incidunt iusto autem sapiente molestias quis dicta. Reiciendis assumenda perferendis placeat necessitatibus ex sapiente id!`,
      image: `https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      id: 2,
      name: "Fries",
      price: 3000,
      quantity: 5,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ea, tempora quo ad quam exercitationem a assumenda dolorum vitae dignissimos laudantium ipsum natus molestiae? Tempora incidunt iusto autem sapiente molestias quis dicta. Reiciendis assumenda perferendis placeat necessitatibus ex sapiente id!`,
      image: `https://images.unsplash.com/photo-1535879335191-618713ec3e3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      id: 3,
      name: "Soda",
      price: 2000,
      quantity: 10,
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ea, tempora quo ad quam exercitationem a assumenda dolorum vitae dignissimos laudantium ipsum natus molestiae? Tempora incidunt iusto autem sapiente molestias quis dicta. Reiciendis assumenda perferendis placeat necessitatibus ex sapiente id!`,
      image: `https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
  ];

  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="summary">
      <p className="small-header">SUMMARY</p>
      <div className="summary-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <p>{product.name}</p>
                  </td>
                  <td>
                    <p>sh.{product.price}</p>
                  </td>
                  <td>
                    <p>{product.quantity}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="total">
          <p className="small-header">Total = Sh: {total}</p>
        </div>
        <CheckOutButton cartItems={products} />
      </div>
    </div>
  );
};

export default Summary;
