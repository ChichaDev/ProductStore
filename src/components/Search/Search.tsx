import "../Search/Search.css";

export const Search = () => {
  return (
    <form className="search" action="">
      <input type="text" placeholder="Search here..." required />
      <button type="submit">Search</button>
    </form>
  );
};
