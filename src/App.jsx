import { FiDollarSign,FiBookOpen } from "react-icons/fi";
import { useEffect, useState } from 'react'
import './App.css'

function App() { 

  const [courses,setCourse] = useState([])

  useEffect(()=>{
    fetch('Data.json')
    .then(res => res.json())
    .then(data => setCourse(data))
  },[])
  

  return (
    <>
      
      <h1 className='text-3xl text-center font-bold my-10 ' >Course Registration</h1>
      <div className="flex justify-center gap-5  container  mx-auto " >
        {/* Card Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ' >
       {
        courses.map(course =>(
          <div key={course.id} className='w-96 p-5  border-2 rounded-lg space-y-2    ' >
          <img className='w-96 h-80 pb-5 '  src={course.cover} alt="" />
          <h3 className='font-bold' >{course.title}</h3>
          <p  >{course.description}</p>
          <div className='flex justify-between text-lg ' >
             <div className="flex items-center" >
             <FiDollarSign></FiDollarSign>
            <p className="pl-3" >  Price: {course.price} </p>
             </div>
           <div className="flex items-center ">
            <FiBookOpen></FiBookOpen>
           <p className="pl-3" >Credit: {course.credit_hour}hr </p>
           </div>
          </div>
          <button className='btn bg-blue-500 text-white w-full ' >Select</button>
        </div>
        ))
       }
      </div>
      {/* Cart Section */}
      <div>
          <h1>This is Cart</h1>
      </div>
      </div>
     
    </>
  )
}

export default App
