import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
    const [counter, setCounter] = useState(2); 


    useEffect(() => {
        if (isOpen) {
            setCounter(2); 
            const timer = setInterval(() => {
                setCounter((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        onClose(); 
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer); 
        }
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded">
                        <div className="flex gap-4 items-center ">
                        <i className="fa-solid fa-circle-check text-green-600"></i>
                        <h3 className="text-center">Congratulations!! has been selected.</h3>
                        </div>
                        <div className="flex items-center gap-2">
                        <div><progress className="progress w-80 text-green-700"></progress></div>
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;


