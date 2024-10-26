import { useState } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ claimHandleToCoin }) => {
    const [showProgress, setShowProgress] = useState(false);

    const handleClick = () => {
        setShowProgress(true); // Show progress bar

        // Add coins after 2 seconds
        setTimeout(() => {
            claimHandleToCoin(); // Add coins to the account
        }, 2000);

        // Hide progress bar after 3 seconds
        setTimeout(() => {
            setShowProgress(false);
        }, 2000);
    };

    return (
        <div className='w-11/12 mx-auto bg-black rounded-xl '>
            <div
                className="hero rounded-xl "
                style={{
                    backgroundImage: "url('./assets/bg-shadow.png')",
                }}>
                <div className="hero-overlay bg-opacity-20 bg-black rounded-xl "></div>
                <div className="hero-content text-neutral-content text-center ">
                    <div className='space-y-6'>
                        <div className='flex justify-center mt-6'><img src="assets/banner-main.png" alt="Banner" /></div>
                        <p className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</p>
                        <p className='font-bold text-2xl text-gray-500'>Beyond Boundaries Beyond Limits</p>
                        <button onClick={handleClick} className="btn bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-lg">
                            Claim Free Credit
                        </button>

                        {/* Conditionally show progress modal */}
                        {showProgress && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-5 rounded">
                                    <div className="flex gap-4 items-center ">
                                        <i className="fa-solid fa-circle-check text-green-600"></i>
                                        <h3 className="text-center text-black">Credit Added to your Account</h3>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                    <progress className="progress w-56"></progress>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    claimHandleToCoin: PropTypes.func
}

export default Banner;
