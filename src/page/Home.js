import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addPI, getProducts } from "../redux/action";
import { cartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigat = useNavigate();
  const { data, loading, error } = useSelector((state) => state.products);
  // const PI = useSelector((state) => state.PI);
  // const itemCart = useSelector((state) => state.addCartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { addItem } = useContext(cartContext);

  return (
    <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {Object.values(data).map((item) => {
        return (
          <div
            className="card w-auto mt-28 mx-5 glass border-none"
            key={item._id}>
            <figure
              className="bg-white border-none"
              onClick={() => navigat(item._id.toString())}>
              <img src={item.image} alt="car!" className="border-none" />
            </figure>
            <div className="card-body h-72 border-none">
              <h2
                className="card-title block text-center"
                onClick={() => navigat(item._id.toString())}>
                {item.name}
              </h2>
              <span
                onClick={() => navigat(item._id.toString())}
                className="badge badge-lg indicator-item rounded-full text-2xl font-bold w-12 h-12 absolute -top-5 -right-5 bg-color border-none">
                {item.countInStock}
              </span>
              <span onClick={() => navigat(item._id.toString())}>
                {item.price} $
              </span>
              <span onClick={() => navigat(item._id.toString())}>
                rating: {item.rating}
              </span>
              <div className="card-actions justify-end">
                <button
                  className="btn absolute bottom-7 right-5 bg-color border-none"
                  // onClick={() => addPI(dispatch, PI, 1)}
                  // onClickCapture={() => dispatch(addCart(itemCart, item))}
                  onClick={() => addItem(item._id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
