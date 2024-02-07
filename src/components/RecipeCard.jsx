import { IoIosArrowForward } from 'react-icons/io'

const RecipeCard = ({ navigate, item }) => {
  return (
    <div className="bg-white dark:bg-gray-800 flex space-x-4 p-2 rounded-lg shadow-sm items-center mx-2 my-4 ">
      <img src={item?.image} className="h-[100px] w-[150px] object-cover" />

      <p className="text-xl text-orange-800 dark:text-white w-full  ">
        {item?.title}
      </p>
      <div
        className="p-4 h-[100px] flex bg-orange-100 dark:bg-gray-700 rounded-lg items-center cursor-pointer"
        onClick={() => navigate(`/recipe/${item.id}`)}
      >
        <IoIosArrowForward className="w-6 h-6 text-orange-800 " />
      </div>
    </div>
  )
}

export default RecipeCard
