import React from 'react';

const Services = () => {
    const services = [
        { title: 'Web Development', description: 'Modern, responsive websites built with the latest technologies.' },
        { title: 'API Integration', description: 'Seamlessly connecting your systems and data across different platforms.' },
        { title: 'UI/UX Design', description: 'Beautiful and intuitive user interfaces designed for a great user experience.' },
        { title: 'Cloud Solutions', description: 'Scalable and secure infrastructure to power your digital applications.' }
    ];

    return (
        <div className="page-content">
            <h1>Our Services</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
