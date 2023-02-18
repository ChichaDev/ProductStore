import "Pages/Error404/Error404.css";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="section">
      <h1 className="error">404</h1>
      <div className="page">
        Ooops!!! Страница, которую вы ищете, не найдена
      </div>
      <Link to={"/"}>
        <span className="back-home">Вернуться домой</span>
      </Link>
    </div>
  );
};
