import { useState, useEffect } from "react";

const ModalClose = ({ onConfirm, onCancel }) => {
    const [counter, setCounter] = useState(2); // Initialize counter to 2 seconds

    useEffect(() => {
        setCounter(2); // Reset counter when modal opens
        const timer = setInterval(() => {
            setCounter((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onConfirm(); // Automatically confirm and delete when counter reaches 0
                    return 0;
                }
                return prev - 1; // Decrease counter
            });
        }, 1000); // Update counter every second

        return () => clearInterval(timer); // Clean up interval on unmount
    }, [onConfirm]);

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 rounded">
                    <h3 className="text-center">Are you sure you want to delete this player?</h3>
                    {/* <div className="countdown font-mono text-6xl text-center">{counter}</div> */}
                    <div className="flex justify-around mt-5">
                    <div className="flex gap-4 items-center ">
                        <i className="fa-solid fa-circle-check text-green-600"></i>
                        <h3 className="text-center">Player Deleted</h3>
                        </div>
                    </div>
                    <button onClick={onCancel} className="mt-3 border p-2 rounded">
                    Close
                    </button>
                    <progress className="progress w-56 mt-3" ></progress>
                </div>
            </div>
        </>
    );
};

export default ModalClose;
