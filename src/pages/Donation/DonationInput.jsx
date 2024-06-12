import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { buttonBorder, donationButtonDonation, inputBorderDonation, inputStylesDonation, rightDivClass } from './DonationConst';


const donationOptions = [
    { value: 50, label: "50" },
    { value: 100, label: "100" },
];

const DonationInput = () => {

    const { user } = useAuth();
    const [selectedDonation, SetSelectedDonation] = useState(50);
    const [minimumDonation] = useState(5);
    const [maxDonation] = useState(100000);

    const navigate = useNavigate();

    const submitHandler = () => {
        localStorage.setItem("DonateAmount", selectedDonation);

        navigate("/payment");
    };
    return (
        <div className="md:w-[570px] md:mx-auto lg:w-full">
            <div className="p-3 gap-5">
                <div className={rightDivClass}>
                    {donationOptions.map(({ value, label }) => (
                        <div
                            key={value}
                            className={`${selectedDonation === value
                                ? "bg-[#ff0000] text-white"
                                : "bg-slate-200"
                                } ${buttonBorder}`}
                            onClick={() => SetSelectedDonation(value)}
                        >
                            {label} USD
                        </div>
                    ))}
                </div>
            </div>
            <div className="  mt-5 lg:w-[500px] mx-auto  relative">
                <input
                    data-test="donation-field"
                    type="number"
                    required
                    value={selectedDonation}
                    onChange={(e) => SetSelectedDonation(e.target.value)}
                    placeholder="Enter Amount"
                    className={inputBorderDonation}
                />
                {!user && (
                    <small className="ml-1 text-[#ff0000]">
                        Please login to donation
                    </small>
                )}
                <br />
                {selectedDonation < minimumDonation && (
                    <small className="ml-1 text-[#ff0000]">
                        {" "}
                        Minimum Donation Amount ${minimumDonation}{" "}
                    </small>
                )}
                {selectedDonation > maxDonation && (
                    <small className="ml-1 text-[#ff0000]">
                        {" "}
                        Maximum Donation Amount $ 100k{" "}
                    </small>
                )}
                <label className={inputStylesDonation}>
                    Enter The Amount You Want to Donate ($)
                </label>
            </div>
            <div className=" flex justify-center mt-4">
                <button
                    data-test="donation-button"
                    onClick={() => submitHandler()}
                    disabled={
                        !user ||
                        selectedDonation < minimumDonation ||
                        selectedDonation > maxDonation
                    }
                    className={`${donationButtonDonation}  ${!user || selectedDonation < 5
                        ? "bg-red-300 hover:cursor-not-allowed"
                        : "bg-[#ff0000] hover:bg-[#C21807] hover:cursor-pointer hover:shadow-2xl "
                        }`}
                >
                    Donate
                </button>
            </div>
        </div>
    );
};

export default DonationInput;