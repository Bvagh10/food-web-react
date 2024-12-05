import React from 'react'
import img1 from './TopListImg/jalebi1.webp';
import img2 from './TopListImg/fafda2.webp';
import img3 from './TopListImg/dhokla3.webp';


const FoodData = [
    {
        image:img1,
        rating:"⭐⭐⭐⭐⭐",
        price:"₹199",
        name:"Jalebi",
        desc: "Jalebi is a golden, crispy, and syrupy delight that melts in your mouth, bringing a burst of sweetness with every bite.",
    },
    {
        image:img2,
        rating:"⭐⭐⭐⭐⭐",
        price:"₹299",
        name:"Fafda",
        desc: "Fafda is a crispy and savory Gujarati snack that pairs perfectly with spicy chutneys and hot jalebi for a delightful treat.",
    },
    {
        image:img3,
        rating:"⭐⭐⭐⭐⭐",
        price:"₹250",
        name:"Dhokla",
        desc: "Dhokla is a soft, fluffy, and flavorful Gujarati delicacy, loved for its perfect blend of tangy, sweet, and savory taste.",
    },
]

const TopList = () => {
  return (
    <div className='container py-14'>
    {/* header section */}
    <div className="text-center mb-12">
        <h1 className='text-4xl font-semibold '>Top List</h1>
        <p>our top list</p>
    </div>
    {/* Card Section */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
    
  )
};

export default TopList