import Card from "./Cards";

const Catagories = ({catagories}) => {
    // console.log(catagories);
    return (
        <div className="py-10" >
           <h1 className="text-2xl text-center">All catagories</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-10">
            {
                catagories?.map(category => <Card key={category.id} category={category}></Card> )
            }
           </div>
        </div>
    );
};

export default Catagories;