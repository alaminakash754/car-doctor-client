import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-100 mt-7 mb-7">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative p-3'>
                    <img src={person} className="w-3/4 h-[430px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 h-[300px] absolute right-16 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-4 p-5'>
                    <h1 className="text-2xl font-bold text-red-500">About Us</h1>
                    <h1 className="text-5xl font-bold text-black">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-outline btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;