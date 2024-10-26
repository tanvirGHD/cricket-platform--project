const MainFooter = () => {
    return (
        <div className="">
                        {/* Footer Content */}
                        <div className="bg-[#06091A] mt-40 pt-44">
                <div className="footer flex justify-around text-white px-10 pb-5">
                    {/* About Us Section */}
                    <div>
                        <h6 className="text-lg font-semibold  mt-36">About Us</h6>
                        <p className="mt-3 text-gray-400 max-w-xs">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <nav className="">
                        <img src="assets/logo-footer.png" alt="" />
                        <h6 className="text-lg font-semibold">Quick Links</h6>
                        <ul className="mt-3 space-y-2">
                            <li className=" text-center"><a className="link link-hover text-gray-400">Home</a></li>
                            <li className=" text-center"><a className="link link-hover text-gray-400">Services</a></li>
                            <li className=" text-center"><a className="link link-hover text-gray-400">About</a></li>
                            <li className=" text-center"><a className="link link-hover text-gray-400">Contact</a></li>
                        </ul>
                    </nav>

                    {/* Newsletter Subscribe Section */}
                    <form>
                        <h6 className="text-lg font-semibold mt-36">Subscribe</h6>
                        <p className="mt-3 text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                        <fieldset className="form-control mt-3">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full text-black rounded-l-full"
                                />
                                <button className="btn bg-gradient-to-r from-yellow-400 to-pink-500 rounded-r-full text-white font-semibold">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>

                {/* Divider and Bottom Text */}
                <hr className="border-t border-gray-600 my-7 mx-10" />
                <p className="text-center text-gray-400 pb-5">
                    ©2024 Your Company. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};
export default MainFooter;