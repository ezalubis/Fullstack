import { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/items")
      .then((response) => response.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <div className="flex gap-[30px] mt-[20px]">
      {items.map((item) => (
        <>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={item.link} />
              </div>
              <div className="flip-card-back">
                <div className="card-content">
                  <h2>{item.name}</h2>
                  <h2>
                    {item.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </h2>
                  <p>{item.description}</p>
                  <button className="bg-blue-600 text-black rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
