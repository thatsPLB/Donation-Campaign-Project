import { useLoaderData } from "react-router-dom";
// import BannerImg from "../../../../src/assets/Rectangle-4281.png";
import { useState } from "react";
import Catagories from "../../Catagories/Catagories";
const Banner = () => {
  const cat = useLoaderData();
  console.log(cat);
  const [allcat, setAllcat] = useState(false);
  const [search, setSearch] = useState();
  const [sortdata, setSortdata] = useState([]);
  const handleControl = () => {
    setAllcat(true);
    function filterProductsByCategory(categoryName) {
      return cat.filter((product) => product.catagory === categoryName);
    }

    // Function to create a new object array from filtered products
    function createNewObjectArray(filteredProducts) {
      return filteredProducts.map((product) => ({
        id: product.id,
        image: product.image,
        title: product.title,
        catagory: product.catagory,
        description: product.description,
        price: product.price,
      }));
    }

    // Example usage:
    const filteredHealthProducts = filterProductsByCategory(search);
    const newObjectArray = createNewObjectArray(filteredHealthProducts);
    setSortdata(newObjectArray)
  };
  console.log(sortdata)
  return (
    <>
      <div
        className=""
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage: `url("https://i.ibb.co/tPz3tK9/Rectangle-4281.png")`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // background: "rgba(255, 255, 255, 0.95)"
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontStyle: "normal",
          }}
        >
          I Grow By Helping People In Need
        </p>
        <div
          style={{
            width: "470px",
            height: "50px",
            flexShrink: 0,
            borderRadius: "8px",
            border: "1px solid white",
            background: "#FFF",
          }}
        >
          <input
            type="text"
            style={{
              width: "70%",
              background: "none",
              height: "100%",
              outline: "none",
              fontSize: "22px",
              margin: "0px 10px",
            }}
            placeholder="Search here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            style={{
              background: "#FF444A",
              height: "100%",
              float: "right",
              width: "112px",
              borderRadius: "0px 8px 8px 0px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            onClick={handleControl}
          >
            Search
          </button>
        </div>
      </div>

      {allcat ? <Catagories catagories={sortdata}></Catagories> :<Catagories catagories={cat}></Catagories> }
    </>
  );
};

export default Banner;
