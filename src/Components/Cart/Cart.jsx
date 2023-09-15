import PropTypes from 'prop-types';

const Cart = ({course}) => {
    
    return (
        <div>
           
             <ol  className='pb-3' >
                <li>{course.title}</li>
             </ol>
             
            
        </div>
    );
};

Cart.propTypes = {
    course: PropTypes.object.isRequired,
   
}

export default Cart;