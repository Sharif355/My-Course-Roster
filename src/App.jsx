import { FiDollarSign } from 'react-icons/fa';
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
      
      <h1 className='text-3xl text-center font-bold mt-10 ' >Course Registration</h1>
      <div className='grid grid-cols-3 gap-3 container mx-auto' >
       {
        courses.map(course =>(
          <div key={course.id} className='w-[312px] p-5  border-2 rounded-lg space-y-2 flex flex-col justify-center  ' >
          <img className='w-[280px] h-[200px] pb-5 '  src={course.cover} alt="" />
          <h3 className='font-bold' >{course.title}</h3>
          <p>{course.description}</p>
          <div className='Pri-Cre' >
            <FiDollarSign></FiDollarSign>
            <p>  Price: {course.price} </p>
            <p>Credit: {course.credit_hour} </p>
          </div>
          <button className='btn bg-blue-500 text-white ' >Select</button>
        </div>
        ))
       }
      </div>
     
    </>
  )
}

export default App
