/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ category }) => {
  const { id, image, catagory, description, price, title } = category || {};

  let color, textColor, catColor;
  if (catagory == "Health") {
    color = "rgba(0,82,255,.15)";
    textColor = "#0052FF";
    catColor= "rgba(0,82,255,.20)";
  } else if (catagory == "Education") {
    color = "rgba(255, 68, 74, 0.15)";
    textColor = "#FF444A";
    catColor = "rgba(255, 68, 74, 0.20)";
  } else if (catagory == "Clothing") {
    color = "rgba(121, 194, 63, 0.15)";
    textColor = "#79C23F";
    catColor = "rgba(121, 194, 63, 0.20)";
  } else if (catagory == "Food") {
    color = "rgba(248, 113, 71, 0.15)";
    textColor = "#F87147";
    catColor = "rgba(248, 113, 71, 0.20)";
  }

  console.log(catagory);
  return (
    <Link to={`/catagories/${id}`}>
      <div onClick={console.log("hi")}>
        <div
          className="relative mx-4 mt-4  flex  flex-col rounded-xl bg-clip-border text-gray-700 shadow-md"
          style={{ backgroundColor: color }}
        >
          <div className="relative mx-4 mt-4 h-96 w-50 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            {/* {background} */}
            <img src={image} className="h-full w-full object-cover" />
          </div>

          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p
                className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
                style={{ color: textColor, backgroundColor: catColor, borderRadius: "4px", padding: "4px 10px" }}
              >
                {catagory}
              </p>
              <p
                className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
                style={{ color: textColor }}
              >
                {price}$
              </p>
            </div>
            <p
              className="block font-sans text-base font-medium leading-normal antialiased opacity-75"
              style={{ color: textColor }}
            >
              {title}
            </p>
            <p
              className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
              style={{ color: textColor }}
            >
              {description}
            </p>
          </div>
          <div className="p-6 pt-0">
            {/* <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Add to Cart
    </button> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
