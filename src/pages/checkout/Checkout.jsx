import { useLoaderData } from "react-router-dom";
import checkOutImg from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/UserProvider";


const Checkout = () => {
    const services = useLoaderData();
    const { _id, title, price, img } = services;
    const {user} = useContext(AuthContext);
    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            phone,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('booking successfully')
            }
        })
    }
    return (
        <div>
            <div className="space-y-3">
                <img src={checkOutImg} alt="" />
                <h2 className="text-center font-bold text-3xl">Service Name: {title}</h2>
            </div>
            <div className=" bg-base-200 space-y-2">

                <div className="shadow-2xl bg-base-100 ">
                    <form onSubmit={handleBookService} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <input type="text" name="name" placeholder="First Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">

                                <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered" />

                            </div>
                            <div className="form-control">

                                <input type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" required />

                            </div>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary btn-block bg-red-500">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Checkout;