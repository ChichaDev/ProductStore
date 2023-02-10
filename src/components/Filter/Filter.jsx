import "../Filter/Filter.css";

export const Filter = () => {
  return (
    <div className="Filter">
      <div className="dropdown">
        <button className="dropbtn">
          Выбрать категорию
        </button>
        <div className="dropdown-content show">
          <span>men's clothing</span>
          <span>women's clothing</span>
          <span>jewelery</span>
          <span>electronics</span>
          
        </div>
      </div>
    </div>
  );
};
