import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
const Teams = () => {
    return (
        <div className=' mt-16'>
            <div className="text-center space-y-2">
                <h3 className="text-red-500 text-xl font-bold">Team</h3>
                <h1 className="text-4xl font-bold">Meet Our Team</h1>
                <p className="text-base font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className='relative'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-2xl font-bold">Car Engine Plug</h2>
                            <p className='text-xl font-semibold'>Engine Expert</p>
                            <div className="flex gap-2">
                                <BiLogoFacebookCircle className='text-blue-900'></BiLogoFacebookCircle>
                                <AiFillTwitterCircle className='text-blue-400'></AiFillTwitterCircle>
                                <AiFillLinkedin className='text-blue-700'></AiFillLinkedin>
                                <BiLogoInstagramAlt className='text-amber-700'></BiLogoInstagramAlt>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-2xl font-bold">Car Engine Plug</h2>
                            <p className='text-xl font-semibold'>Engine Expert</p>
                            <div className="flex gap-2">
                                <BiLogoFacebookCircle className='text-blue-900'></BiLogoFacebookCircle>
                                <AiFillTwitterCircle className='text-blue-400'></AiFillTwitterCircle>
                                <AiFillLinkedin className='text-blue-700'></AiFillLinkedin>
                                <BiLogoInstagramAlt className='text-amber-700'></BiLogoInstagramAlt>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-2xl font-bold">Car Engine Plug</h2>
                            <p className='text-xl font-semibold'>Engine Expert</p>
                            <div className="flex gap-2">
                                <BiLogoFacebookCircle className='text-blue-900'></BiLogoFacebookCircle>
                                <AiFillTwitterCircle className='text-blue-400'></AiFillTwitterCircle>
                                <AiFillLinkedin className='text-blue-700'></AiFillLinkedin>
                                <BiLogoInstagramAlt className='text-amber-700'></BiLogoInstagramAlt>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a className="btn btn-circle hover:bg-red-500 mr-10">❮</a>
                    <a className="btn btn-circle hover:bg-red-500 ml-10">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Teams;