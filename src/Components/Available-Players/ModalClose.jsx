import { useState, useEffect } from "react";

const ModalClose = ({ onConfirm }) => {
    const [counter, setCounter] = useState(2); 

    useEffect(() => {
        setCounter(2); 
        const timer = setInterval(() => {
            setCounter((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onConfirm(); 
                    return 0;
                }
                return prev - 1; 
            });
        }, 1000); 

        return () => clearInterval(timer); 
    }, [onConfirm]);

    return (
        <>
            <div className="fixed w-11/12 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 rounded">
                    <div className="flex justify-around mt-5">
                    <div className="flex gap-4 items-center ">
                        <i className="fa-solid fa-circle-check text-red-600"></i>
                        <h3 className="text-center">Player Removed</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                    <progress className="progress w-80 mt-3" ></progress>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalClose;











