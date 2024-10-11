import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarItem from "../../components/Navbar/NavbarItem";
import { FiSearch } from "react-icons/fi";
import "./ProductItem";
import Swal from "sweetalert2";
import { CartContext } from "../../CartContext";

export default function ProductItem() {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);
  const SearchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };
  const searchButtonHandler = () => {
    axios
      .get(`https://fakestoreapi.com/products/${searchKey}`)
      .then((response) => {
        if (response.data.length > 0) {
          setProducts(response.data); // Show the products if available
        } else {
          setProducts([]); // Set products to an empty array alert("Product not available"); // Show alert if product not found

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "this product not found!",
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        alert("Error fetching product");
      });
  };
  return (
    <>
      <p style={{ padding: "0 30px" }}>
        <NavbarItem />
      </p>
      <div className="row">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            direction: "rtl",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              onChange={SearchInputHandler}
              style={{
                all: "unset",
                border: "2px solid #6c5ce7",
                padding: "6px",
                borderRadius: "20px",
              }}
              className="mx-1"
              type="text"
            />
            <Button
              onClick={searchButtonHandler}
              style={{ all: "unset", alignItems: "center" }}
            >
              <FiSearch style={{ fontSize: "35px", color: "#a29bfe" }} />
            </Button>
          </div>
          <h1 style={{ textAlign: "center", margin: "26px 0px" }}>Products</h1>
        </div>
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {products.slice(8, 20).map((product) => (
            <div
              className="card m-2 card mx-2 col-sm-12 col-md-6 col-lg-3"
              key={product.id}
            >
              <img
                style={{ width: "100%", height: "230px" }}
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
                className="card__footer"
                to={"/buy"}
                onClick={() => addToCart(product)}
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
