import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";

const Category = () => {
    const [category,setCategory] = useState([])
    const {id} = useParams()
    // console.log(id);

    const categories = useLoaderData()
    // console.log(categories);
    useEffect (()=>{
        // console.log("id,phones");
        const findCategory = categories ?.find(category=>category.id == id)
        // console.log(findCategory);
        setCategory(findCategory)
    },[id,categories])

    return (
        <div>
            <SingleCard category ={category}></SingleCard>
        </div>
    );
};

export default Category;