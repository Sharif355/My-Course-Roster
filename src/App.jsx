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
// Total Credit/Hour Section
   if (hour > 20 && remaining < 0 ) {
    return toast('You not allowed to take more than 20 Credit/hr')
   }
   else{
    setTotalHour(hour) ,  setRemainingHour(remaining)
   }
   // Set totalAmount & newCourse at Cart
   setTotalAmount(total)
   setNewCourse([...newCourse,courses])
    }
  
  }

  return (
    <>
    <div className="flex justify-between">
    <div className="flex items-center p-5">
      <img className="w-12" src="https://i.ibb.co/TrtP6n8/06bce81285badba0c3becd273ca67f95.png" alt="" />
      <h3 className="font-bold text-2xl text-blue-800" >DevHero</h3>
    </div>
     <div className="flex items-center p-5" >
     <input type="text" placeholder="Search Course" className="input input-bordered w-full max-w-xs" />
     <img  className="w-12 ml-3 " src="https://i.ibb.co/SfF5xY3/345336557-225798720079325-5137214389594149796-n-fotor-20230915205143.png" alt="" />
     </div>
    </div>
      
      <h1 className='text-3xl text-center font-bold my-10 ' >Course Registration</h1>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-5  container  mx-auto  " >
        {/* Card Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center  ' >
       {
        courses.map(course =>(
          // Card
          <div key={course.id} className='w-96 p-5 bg-gray-100    rounded-lg shadow-lg space-y-2    ' >
          <img className='w-96 h-80 pb-5 '  src={course.cover} alt="" />
          <h3 className='font-bold text-lg ' >{course.title}</h3>
          <p className="text-[#1c1b1b99]" >{course.description}</p>
          <div className='flex justify-between text-lg ' >
             <div className="flex items-center" >
             <FiDollarSign className="text-2xl" ></FiDollarSign>
            <p className="pl-3 text-lg text-[#1c1b1b99] " >  Price: {course.price} </p>
             </div>
           <div className="flex items-center ">
            <FiBookOpen className="text-2xl" ></FiBookOpen>
           <p className="pl-3 text-lg text-[#1c1b1b99]" >Credit: {course.credit_hour}hr </p>
           </div>
          </div>
          <button onClick={()=>handleNewCart(course)} className='btn bg-blue-500 text-white w-full ' >Select</button>
          
        </div>
        ))
       }
      </div>
      {/* Cart Section */}
      <div className=' rounded-lg p-5 shadow-lg h-96 bg-gray-100  ' >
      <h1 className='text-blue-500 font-medium pb-3' >Credit Hour Remaining {remainingHour}hr </h1>
            <hr />
             <h1 className='font-bold py-3' >Course Name</h1>
        {
          newCourse.map((course,idx)=><Cart key={idx}   course = {course} idx = {idx} ></Cart>)
        }
        <hr />
         <h1 className='py-3 font-medium text-black'>Total Credit Hour: {totalHour}  </h1>
             <hr />
             <h1 className='py-3 font-medium text-black'>Total Price: {totalAmount} USD</h1>
        <ToastContainer/>
      </div>
      </div>
     
    </>
  )
}

export default App
