import "../Filter/Filter.css";

export const Filter = () => {
  return (
    <div className="Filter">
      <div className="dropdown">
        <button className="dropbtn">
          All
        </button>
        <div className="dropdown-content show">
          <span>All</span>
          <span>Men's clothing</span>
          <span>Women's clothing</span>
          <span>Jewelery</span>
          <span>Electronics</span>
          
        </div>
      </div>
    </div>
  );
};
