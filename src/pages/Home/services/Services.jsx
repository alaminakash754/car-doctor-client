// import { useEffect } from "react";
// import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services = useServices();
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // },[])
    return (
        <div className="mt-20 space-y-5 mb-4">
            <div className="text-center space-y">
                <h3 className="text-xl font-semibold text-red-500">Service</h3>
                <h1 className="text-2xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;