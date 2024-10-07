import React from 'react';
import doctors from '../utils/doctordata';
import DoctorCard from '../components/DoctorCard';

const DoctorSelection = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-[#2b2d42] mb-8">Choose Your Doctor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {doctors.map((doctor) => (
                    <DoctorCard
                        key={doctor.id}
                        id={doctor.id}
                        name={doctor.name}
                        specialization={doctor.specialization}
                        info={doctor.info}
                        image={doctor.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default DoctorSelection;
