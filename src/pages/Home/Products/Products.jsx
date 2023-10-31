import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'

const Products = () => {
    return (
        <div className='mt-20 mb-5'>
            <div className="text-center space-y-2">
                <h3 className="text-red-500 text-xl font-bold">Popular Products</h3>
                <h1 className="text-4xl font-bold">Browse Our Products</h1>
                <p className="text-base font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-6">
                <div className="card shadow-xl w-[360px] h-[390px]">
                    <figure className="">
                        <img src={img1} alt="Shoes" className="rounded-xl bg-base-200 w-80 h-52 p-3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-lg font-semibold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card shadow-xl w-[360px] h-[390px]">
                    <figure className="">
                        <img src={img2} alt="Shoes" className="rounded-xl bg-base-200 w-80 h-52 p-3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-lg font-semibold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card shadow-xl w-[360px] h-[390px]">
                    <figure className="">
                        <img src={img3} alt="Shoes" className="rounded-xl bg-base-200 w-80 h-52 p-3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-lg font-semibold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card shadow-xl w-[360px] h-[390px]">
                    <figure className="">
                        <img src={img4} alt="Shoes" className="rounded-xl bg-base-200 w-80 h-52 p-3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-lg font-semibold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card shadow-xl w-[360px] h-[390px]">
                    <figure className="">
                        <img src={img5} alt="Shoes" className="rounded-xl bg-base-200 w-80 h-52 p-3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-lg font-semibold text-red-500'>$20.00</p>
                    </div>
                </div>
                <div className="card shadow-xl w-[360px] h-[390px]">
                    <figure className="">
                        <img src={img6} alt="Shoes" className="rounded-xl bg-base-200 w-80 h-52 p-3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-lg font-semibold text-red-500'>$20.00</p>
                    </div>
                </div>

            </div>
            <div className='text-center mt-10'>
                <button className="btn btn-outline border-2 border-orange-400 text-red-500">More Products</button>
            </div>
        </div>
    );
};

export default Products;