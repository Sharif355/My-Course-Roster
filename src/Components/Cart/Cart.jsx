import PropTypes from 'prop-types';

const Cart = ({course,totalHour,remainingHour,totalAmount}) => {
    
    return (
        <div  className='border-2 rounded-lg p-5' >
            <h1 className='text-blue-500 font-medium pb-3' >Credit Hour Remaining {remainingHour}hr </h1>
            <hr />
             <h1 className='font-bold py-3' >Course Name</h1>
             <ol className='pb-3' >
                <li>{course.title}</li>
             </ol>
             <hr />
             <h1 className='py-3'>Total Credit Hour: {totalHour}  </h1>
             <hr />
             <h1 className='py-3'>Total Price: {totalAmount} USD</h1>
        </div>
    );
};

Cart.propTypes = {
    course: PropTypes.object.isRequired,
    totalHour: PropTypes.number.isRequired,
    remainingHour:PropTypes.number.isRequired,
    totalAmount:PropTypes.number.isRequired
}

export default Cart;