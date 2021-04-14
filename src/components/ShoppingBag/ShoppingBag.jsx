import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../Layout";
import { RelatedProduct } from ".";

const ShoppingBag = () => {
  const [quantity = "1", setQuantity] = useState();

  return (
    <Layout>
      <div className="product">
        <div className="container">
          <div className="productItem">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1617895601040-32cf8ed00eeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div className="detail">
              <div className="title">
                Norbury Scandianavian Wood Leg Ottoman{" "}
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                praesentium est molestias adipisci esse alias voluptatem
                laudantium repudiandae dolorum quasi ut voluptates deserunt
                eaque soluta voluptatibus repellat aliquam, iure nulla?
              </div>
              <div className="price">
                <div className="cost">
                  <span>UGX 118,400</span>
                  <span>UGX 118,567</span>
                </div>
                <div className="number">-20%</div>
              </div>
              <div className="addToBagButton">
                <button type="button">-</button>
                <input
                  type="text"
                  value={quantity}
                  name="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="button">+</button>
              </div>
              <div className="shopButton">
                <Link to="#">
                  <button type="button" className="add">
                    Add to Bag
                  </button>
                </Link>
                <Link to="#">
                  <button type="button" className="buy">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <RelatedProduct />
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingBag;
