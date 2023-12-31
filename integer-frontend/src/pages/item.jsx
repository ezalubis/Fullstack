import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Item() {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/items/${id}`)
      .then((response) => response.json())
      .then((item) => setItem(item));
  }, [id]);

  return (
    <main>
      {item ? (
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-bold">
            EP-BRAND THE BEST BRAND IN ASIA
          </h1>
          <a
            href="https://github.com/ezalubis"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              src={item.link}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}{" "}
                {item.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </a>
        </div>
      ) : (
        "Loading..."
      )}
    </main>
  );
}
