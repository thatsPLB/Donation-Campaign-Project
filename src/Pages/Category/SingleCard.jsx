/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleCard = ({category}) => {

    const {id,image,catagory,description,price,title} = category || {}

    const handleAddToDonate =()=>{
      const addedDonate = [];
      const donateItem = JSON.parse(localStorage.getItem('donation'))
      if(!donateItem){
        addedDonate.push(category)
        localStorage.setItem('donation',JSON.stringify(addedDonate))
      }
      else{

        const isExits = donateItem.find(category=>category.id == id)
        if(!isExits){
          addedDonate.push(...donateItem,category)
          localStorage.setItem('donation',JSON.stringify(addedDonate))
          toast('Your Donation successful')
        }
        else{
          toast('Already donated')
        }
        
      }



    }
    return (
    <div>
      <div className="relative mx-4 mt-4  flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 w-50 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image}className="h-full w-full object-cover"/>
        </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">{catagory}
              </p>
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">{price}$</p>
            </div>
              <p className="block font-sans text-base font-medium leading-normal text-gray-700 antialiased opacity-75">{title}</p>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">{description}</p>
          </div>
          <div className="p-6 pt-0">
            <button onClick={handleAddToDonate}
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"type="button">Donate {price}$
            </button>
          </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
            );
          };

export default SingleCard;