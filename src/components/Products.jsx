import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMount = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      if (componentMount) {
        try {
          const res = await fetch("https://fakestoreapi.com/products"),
            json = await res.json();
          if (!res.ok) throw { status: res.status, statusText: res.statusText };
          setData(json);
          setFilter(json);
          setLoading(false);
          //console.log(res)
        } catch (error) {
          let message = error.status || "Ocurrió un error de conexion con la api";
          console.log(error.status || "", message);
        }

        //console.log(filter);
      }
      return () => {
        componentMount = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updateList = data.filter((el) => el.category === cat);
    setFilter(updateList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5 flex-wrap ">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            Todos
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Ropas de Hombres
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Ropas de Mujeres
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Joyas
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronicos
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}....
                  </h5>
                  <p className="card-text lead fw-bold">$ {product.price}</p>
                  <a href="#" className="btn btn-outline-dark">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Últimos Porductos</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
