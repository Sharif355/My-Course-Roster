import { FiDollarSign,FiBookOpen } from "react-icons/fi";
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Cart from "./Components/Cart/Cart";

function App() { 

  const [courses,setCourse] = useState([])
  const [newCourse,setNewCourse] = useState([])
  const [totalHour,setTotalHour] = useState([])
  const [remainingHour,setRemainingHour] = useState([])
  const [totalAmount,setTotalAmount] = useState([])
  

  useEffect(()=>{
    fetch('Data.json')
    .then(res => res.json())
    .then(data => setCourse(data))
  },[])
  
 
  const handleNewCart = (courses) => {
    let hour = courses.credit_hour;
    let total = courses.price;
    const isExist = newCourse.find(course=> course.id == courses.id )
    if(isExist){
      return toast('This Course already Added at Cart!')
    }
    else{
       newCourse.forEach(course=>{
    hour= hour+course.credit_hour;
    total = total + course.price;
   })
   const remaining = 20-hour;
   if(remaining < 0){
    return toast("You don't have enough Credit/hr")
   }
   else{
    setRemainingHour(remaining)
   }
   if (hour > 20 ) {
    return toast('You not allowed to take more than 20 Credit/hr')
   }
   else{
    setTotalHour(hour)
   }
   setTotalAmount(total)
    setNewCourse([...newCourse,courses])
    }
  
  }

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
          <button onClick={()=>handleNewCart(course)} className='btn bg-blue-500 text-white w-full ' >Select</button>
          
        </div>
        ))
       }
      </div>
      {/* Cart Section */}
      <div className=' rounded-lg p-5 ' >
      <h1 className='text-blue-500 font-medium pb-3' >Credit Hour Remaining {remainingHour}hr </h1>
            <hr />
             <h1 className='font-bold py-3' >Course Name</h1>
        {
          newCourse.map((course)=><Cart key={course.id}   course = {course} ></Cart>)
        }
        <hr />
         <h1 className='py-3'>Total Credit Hour: {totalHour}  </h1>
             <hr />
             <h1 className='py-3'>Total Price: {totalAmount} USD</h1>
        <ToastContainer/>
      </div>
      </div>
     
    </>
  )
}

export default App
