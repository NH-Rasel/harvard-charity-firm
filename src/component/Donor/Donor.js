import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
import './Donor.css';

const Donor = (props) => {
    const { img, name, phone, email, profession, funding } = props.donor;
    const user = <FontAwesomeIcon icon={faUser} />

    return (
        <div className="donor">
            <div>
                <img src={img} alt="" />
                <div className="donor-info">
                    <h4>Name: {name}</h4>
                    <h6>Profession: {profession}</h6>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Funding: {funding}</p>
                    <Button onClick={() => props.handleDonorCount(props.donor)} variant="primary">{user} Add Donor Funding</Button>{' '}
                </div>
            </div>
        </div>

    );
};

export default Donor;