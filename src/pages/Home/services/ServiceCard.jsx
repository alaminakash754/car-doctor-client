import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-3">
                <figure><img className='w-80 h-52' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex'>
                        <p className='text-red-500'>Price: ${price}</p>
                        <div className="card-actions justify-end">

                            <Link to={`/checkout/${_id}`}><AiOutlineArrowRight className='text-red-500'></AiOutlineArrowRight></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;