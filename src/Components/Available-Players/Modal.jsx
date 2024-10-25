import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
    const [counter, setCounter] = useState(2); // Initialize counter to 2 seconds

    useEffect(() => {
        if (isOpen) {
            setCounter(2); // Reset counter when modal opens
            const timer = setInterval(() => {
                setCounter((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        onClose(); // Close modal when counter reaches 0
                        return 0;
                    }
                    return prev - 1; // Decrease counter
                });
            }, 1000); // Update counter every second

            return () => clearInterval(timer); // Clean up interval on unmount
        }
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded">
                        <h3 className="text-center">Player Selected</h3>
                        <span className="countdown font-mono text-6xl">{counter}</span>
                        <button onClick={onClose} className="mt-3 border p-2 rounded">
                            Close
                        </button>
                        <progress className="progress w-56" value={counter} max={2}></progress>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
