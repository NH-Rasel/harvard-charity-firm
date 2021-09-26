import React from 'react';
import './Donor.css';

const Donor = (props) => {
    console.log(props.donor);
    const { img, name, phone, email, profession, funding } = props.donor;
    return (
        <div className="donor">
            <div>
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Profession: {profession}</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Funding: {funding}</p>
                <button onClick={() => props.handleDonorCount(props.donor)}
                    className="btn btn-primary"
                >Add Donor Funding</button>
            </div>
        </div>
    );
};

export default Donor;