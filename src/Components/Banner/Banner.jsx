import PropTypes from 'prop-types';

import './Banner.css'

const Banner = ({ claimHandleToCoin }) => {
    return (
        <div className='w-11/12 mx-auto'>
        <div
        className="hero rounded-3xl py-10"
        style={{
            backgroundImage: "url('./assets/banner.jpg')",
        }}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content text-center ">
            <div className='space-y-6'>
            <div className='flex justify-center'><img src="assets/banner-main.png"></img></div>
            <p className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</p>
            <p className='font-bold text-2xl text-gray-500'>Beyond Boundaries Beyond Limits</p>
            <button onClick={claimHandleToCoin}  className="btn bg-green-900 text-white text-lg hover:text-black">Claim Free Credit</button>
            
            </div>
        </div>
        </div>
        </div>
    );
};

Banner.propTypes= {
    claimHandleToCoin: PropTypes.func
}

export default Banner;
