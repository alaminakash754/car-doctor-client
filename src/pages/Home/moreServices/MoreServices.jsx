import { SlCalender } from 'react-icons/sl';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BiLocationPlus } from 'react-icons/bi';
const MoreServices = () => {
    return (
        <div className='mb-5 mt-10'>
            <div className="items-center text-center">
                <button className="btn btn-outline btn-secondary">More Services</button>
            </div>
            <div className="bg-black rounded-2xl p-7 mt-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">

                    <div className='flex gap-5 justify-center items-center'>
                        <SlCalender></SlCalender>
                        <div className='text-white'>
                            <p>We are open monday-friday</p>
                            <h2>7:00 am - 9:00 pm</h2>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-center items-center'>
                       <BsFillTelephoneOutboundFill></BsFillTelephoneOutboundFill>
                        <div className='text-white'>
                            <p>Have a question?</p>
                            <h2>+2546 251 2658</h2>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-center items-center'>
                        <BiLocationPlus></BiLocationPlus>
                        <div className='text-white'>
                            <p>Need a repair? our address</p>
                            <h2>Liza Street, New York</h2>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default MoreServices;