import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnquiryForm from './EnquiryForm';

const Booking = () => {
  const [services, setServices] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data upon component mount
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/user/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data); // Update the state with the fetched user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/service');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setServices(data.services); // Update the state with the fetched services
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    // Fetch services on component mount
    fetchServices();
  }, []);

  const handleBooking = async (serviceId) => {
    // Retrieve user ID from local storage
    const id = localStorage.getItem('id');
    
    // Retrieve account type from local storage
    const accountType = localStorage.getItem('accountType');
    
    // Retrieve phone number from local storage
    const phone = localStorage.getItem('phone');
  
    try {
      // Make a POST request to the booking endpoint
      const response = await fetch('http://localhost:5001/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          userID: id, // User ID from local storage
          service: [{ "_id": "65b506aa2a36bbdf910722a8",
          "name": "Solar Plant Installation" }], // Service ID passed as argument
          account: accountType, // Account type from local storage
          phoneNo: phone, // Phone number from local storage
        }),
      });
  
      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Booking failed');
      }
  
      // Booking successful
      console.log('Booking successful');
    } catch (error) {
      // Log any errors
      console.error('Error booking service:', error.message);
    }
  };
  

  return (
    <>
      <div className="booking-container">
        <div className="container-fluid px-5 mt-5">
          <h2 className="mb-4">Services Offered</h2>

          <div className="row">
            {services.map((service) => (
              <div key={service._id} className="col-md-3 mb-4">
                <div className="card">
                  <img
                    src={service.Image || 'placeholder.jpg'}
                    alt={service.name || 'Service'}
                    className="card-img-top img-fluid rounded"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                  </div>
                  <div className="opaque">
                    <p>Description : {service.desc}</p>
                    <p>Duration : {service.duration}</p>
                    <div className="text-center mt-4">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleBooking(service._id)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EnquiryForm />
    </>
  );
};

export default Booking;
