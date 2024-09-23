import React from "react";
import styles from "./ProductsList.module.css";
import useCartStore from "../../store/cartStore";

const ProductList = () => {
  const addItem = useCartStore((state) => state.addItem);

  // const products = [
  //   { id: 1, name: "Product 1", price: 10 },
  //   { id: 2, name: "Product 2", price: 20 },
  //   { id: 3, name: "Product 3", price: 30 },
  // ];

  const products = [
    {
      id: 1,
      name: "ARTFX DC UNIVERSE Batman HUSH Renewal Package",
      releaseDate: "31/03/2021",
      price: 890,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/batman.png?alt=media&token=bcce964a-7224-4e47-b619-265e93b5311e",
      color: "",
    },
    {
      id: 2,
      name: "Mafex No.091 MAFEX BLACK PANTHER",
      releaseDate: "31/03/2021",
      price: 83390,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/blackpanter.png?alt=media&token=de5d3491-e31f-4d91-aa3d-1eb15827d954",
      color: "#1d1d1d",
    },
    {
      id: 3,
      name: "Nendoroid Fate/Grand Order: Saber/Arthur Pendragon Ascension",
      releaseDate: "31/03/2021",
      price: 3890,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/arthur.png?alt=media&token=7e0f09e6-1369-42c5-9c98-af99946fae72",
      color: "#153a82",
    },
    {
      id: 4,
      name: "figma Kantai Collection -Kan Colle- Kashima",
      releaseDate: "31/03/2021",
      price: 890,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/kashima.png?alt=media&token=ffed0174-7dbe-4b61-bd42-05608a3a3090",
      color: "#3f4a69",
    },

    {
      id: 5,
      name: "ARTFX DC UNIVERSE Batman HUSH Renewal Package",
      releaseDate: "31/03/2021",
      price: 89340,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/batman.png?alt=media&token=bcce964a-7224-4e47-b619-265e93b5311e",
      color: "",
    },
    {
      id: 6,
      name: "Mafex No.091 MAFEX BLACK PANTHER",
      releaseDate: "31/03/2021",
      price: 890,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/blackpanter.png?alt=media&token=de5d3491-e31f-4d91-aa3d-1eb15827d954",
      color: "#1d1d1d",
    },
    {
      id: 7,
      name: "Nendoroid Fate/Grand Order: Saber/Arthur Pendragon Ascension",
      releaseDate: "31/03/2021",
      offerPrice: "1,999",
      price: "9,999",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/arthur.png?alt=media&token=7e0f09e6-1369-42c5-9c98-af99946fae72",
      color: "#153a82",
    },
    {
      id: 8,
      name: "figma Kantai Collection -Kan Colle- Kashima",
      releaseDate: "31/03/2021",
      price: 890,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/kashima.png?alt=media&token=ffed0174-7dbe-4b61-bd42-05608a3a3090",
      color: "#3f4a69",
    },
    {
      id: 9,
      name: "ARTFX DC UNIVERSE Batman HUSH Renewal Package",
      releaseDate: "31/03/2021",
      price: 890,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/batman.png?alt=media&token=bcce964a-7224-4e47-b619-265e93b5311e",
      color: "",
    },
    {
      id: 10,
      name: "Mafex No.091 MAFEX BLACK PANTHER",
      releaseDate: "31/03/2021",
      price: 8920,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/blackpanter.png?alt=media&token=de5d3491-e31f-4d91-aa3d-1eb15827d954",
      color: "#1d1d1d",
    },
    {
      id: 11,
      name: "Nendoroid Fate/Grand Order: Saber/Arthur Pendragon Ascension",
      releaseDate: "31/03/2021",
      offerPrice: "1,999",
      price: "9,999",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/arthur.png?alt=media&token=7e0f09e6-1369-42c5-9c98-af99946fae72",
      color: "#153a82",
    },
    {
      id: 12,
      name: "figma Kantai Collection -Kan Colle- Kashima",
      releaseDate: "31/03/2021",
      price: 890,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/kashima.png?alt=media&token=ffed0174-7dbe-4b61-bd42-05608a3a3090",
      color: "#3f4a69",
    },
  ];

  return (
    <div className="contenedorCards">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <div className="wrapper">
            <div
              className="colorProd"
              style={{ backgroundColor: product.color }}
            ></div>
            <div
              className="imgProd"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            ></div>
            <div className="infoProd">
              <p className="nombreProd">{product.name}</p>
              <p className="extraInfo">
                Fecha de salida: {product.releaseDate}
              </p>
              <div className="actions">
                <div className="preciosGrupo">
                  {product.offerPrice && (
                    <p className="precio precioOferta">{product.offerPrice}</p>
                  )}
                  <p className="precio precioProd">{product.price}</p>
                </div>
                <div className="icono action aFavs">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z" />
                  </svg>
                </div>
                <div
                  className="icono action alCarrito"
                  onClick={() => addItem(product)}
                >
                  <svg
                    className="inCart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <title>Quitar del carrito</title>
                    <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7"></path>
                    <circle cx="20" cy="54" r="4"></circle>
                    <circle cx="46" cy="54" r="4"></circle>
                    <circle cx="46" cy="22" r="16"></circle>
                    <path d="M53 18l-8 9-5-5"></path>
                  </svg>
                  <svg
                    className="outCart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <title>Agregar al carrito</title>
                    <path d="M2 6h10l10 40h32l8-24H16"></path>
                    <circle cx="23" cy="54" r="4"></circle>
                    <circle cx="49" cy="54" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
