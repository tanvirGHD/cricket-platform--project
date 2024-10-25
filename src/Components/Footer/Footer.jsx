const Footer = () => {
    return (
        <div className="p-4 absolute w-full">
            <div className="border w-11/12 mx-auto p-4">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url('assets/bg-shadow-png')"
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Subscribe to our Newsletter</h1>
                            <p className="mb-5">
                                Get the latest updates and news right in your inbox!
                            </p>
                            <div className="gap-5 flex">
                                <input
                                    type="text"
                                    placeholder="Enter your Email"
                                    className="input input-bordered input-md w-full max-w-xs"
                                />
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-9 bg-[#06091A] relative">
                <div className="footer flex pb-10 justify-around text-white p-10">
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item"
                                />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <hr className="border-t pb-7 border-gray-600" />
                <p className="text-white text-center pb-10">@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
