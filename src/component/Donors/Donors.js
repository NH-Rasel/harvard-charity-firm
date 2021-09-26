import React, { useEffect, useState } from 'react';
import Donor from '../Donor/Donor';
import './Donors.css';

const Donors = () => {
    const [donors, setDonors] = useState([]);
    const [fund, setFund] = useState([]);

    useEffect(() => {
        fetch('./donor.json')
            .then(res => res.json())
            .then(data => setDonors(data));
    }, [])

    const handleDonorCount = donor => {
        const newFund = [...fund, donor];
        setFund(newFund);
    }

    let totalFund = 0;
    for (const donor of fund) {
        totalFund = totalFund + donor.funding;
    }

    let donorList = [];
    for (const donor of fund) {
        donorList = donorList + donor.name;
    }

    return (
        <div className="donation-section">
            <div className="donors">
                {
                    donors.map(donor => <Donor
                        key={donor.id}
                        donor={donor}
                        handleDonorCount={handleDonorCount}
                    >
                    </Donor>)
                }
            </div>
            <div className="fund-collection">
                <h3>#Total Donors: {fund.length}</h3>
                <th>List of donors:
                </th><tr><td>
                    {donorList}</td></tr>
                <h5>Total fund : ${totalFund}</h5>
            </div>
        </div>
    );
};

export default Donors;