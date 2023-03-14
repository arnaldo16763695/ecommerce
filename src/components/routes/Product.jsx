import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    const getProduct = async () => {
      // console.log(`https://fakestoreapi.com/products/${params.id}`);
      try {
        setLoading(true);
        const res = await fetch(
            `https://fakestoreapi.com/products/${params.id}`
          ),
          json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        setProduct(json);
        setLoading(false);
        //  console.log(json);
      } catch (error) {
        let message =
          error.statusText || "Ha ocurrido un error al consultar el producto";
        console.log(error.status || message);
      }
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProduct = () => {
    return (
      <>

      <div className="col-lg-6">
        <img
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-lg-6">
        <h4 className="text-uppercase text-black-50">
          {product.category}
        </h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}{` `}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">
        {product.price} $
        </h3>
        <p className="lead">
          {product.description}
        </p>
        <button className="btn btn-outline-dark mx-3">Agregar al Carrito</button>
        <Link to={"/"} className="btn btn-outline-dark mx-3">Ir al Carrito</Link>
      </div>
      </>
    );
  };
  return (
    <div className="container">
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
