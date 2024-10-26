
const Footer = () => {
    return (
        <div className=" w-full absolute top-77">
            {/* Newsletter Section */}
            <div className="border w-11/12 mx-auto p-4 mb-10 rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-yellow-100">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url('assets/bg-shadow-png')",
                    }}
                >
                    <div className="hero-overlay bg-opacity-20 rounded-lg bg-black"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold text-gray-800">Subscribe to our Newsletter</h1>
                            <p className="mb-5 text-gray-600">
                                Get the latest updates and news right in your inbox!
                            </p>
                            <div className="flex gap-2 justify-center">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered input-md text-black w-full max-w-xs rounded-full"
                                />
                                <button className="btn bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full text-white font-semibold px-5">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
