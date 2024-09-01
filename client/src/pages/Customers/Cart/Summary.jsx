const Summary = () => {
  return (
    <div className="summary">
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
                    Hamburger
                </td>
                <td>
                    sh.5000
                </td>
                <td>
                    15
                </td>
             </tr>
            </tbody>
          </table>
        </div>
        <button className="main-button">
            PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Summary;
