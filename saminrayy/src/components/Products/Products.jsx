import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { CartContext } from "../../CartContext";

export default function Product() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      <div className="row">
        <h1 style={{ textAlign: "center", margin: "26px 0px" }}>Products</h1>

        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {products.slice(0, 6).map((product) => (
            <div
              className="card m-1 col-sm-12 col-md-6 col-lg-3"
              key={product.id}
            >
              <img
                style={{ width: "69%", height: "230px", margin: "0 53px" }}
                src={product.image}
              />
              <p className="card__item my-2">
                <h2>{product.title}</h2>
              </p>
              <p className="card__item flexible">
                <small>{product.description} </small>
              </p>
              <p className="card__item">
                <small
                  style={{
                    color: "#74b9ff",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Price:{product.price}
                </small>
              </p>
              <Link
                onClick={() => addToCart(product)}
                className="card__footer"
                to={"/buy"}
              >
                <a
                  className="pull"
                  style={{
                    backgroundColor: "#0984e3",
                    color: "white",
                    padding: "6px 10px",
                    borderRadius: "10px",
                    fontSize: "15px",
                  }}
                >
                  <small>go Buy</small>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
