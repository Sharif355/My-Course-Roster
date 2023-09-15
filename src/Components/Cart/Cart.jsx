import PropTypes from 'prop-types';

const Cart = ({course,idx}) => {
    
    return (
        <div>
           
             <ol className='pb-3 ' >
                <li> {idx+1} . {course.title}</li>
             </ol>
             
            
        </div>
    );
};

Cart.propTypes = {
    course: PropTypes.object.isRequired,
    idx : PropTypes.number.isRequired
   
}

export default Cart;