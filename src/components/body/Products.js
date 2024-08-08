import { useEffect, useState } from "react";

import { GoHeart } from "react-icons/go";

import classes from "./Products.module.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          var arr = [];
          for (var i = 0; i < 18; i++) {
            arr.push(data[i]);
          }
          setProducts(arr);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={props.val ? classes.main : classes.filteredmain}>
      {products.map((product) => (
        <div className={classes.productcard} key={product.id}>
          <img className={classes.img} src={product.image}></img>
          <div className={classes.description}>
            <div className={classes.details}>
              {product.title.length <= 23 ? (
                <div className={classes.title}>
                  {product.title.toUpperCase()}
                </div>
              ) : (
                <div className={classes.title}>
                  {product.title.substr(0, 20).toUpperCase()}...
                </div>
              )}
              <div className={classes.account}>
                <a style={{ textDecoration: "underline" }}>Sign in</a> or Create
                an account to see pricing
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <GoHeart size={24}></GoHeart>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
