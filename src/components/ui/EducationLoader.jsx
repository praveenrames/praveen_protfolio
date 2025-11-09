import React from "react";

const EductionLoader = () => {
    return (
        <div className="flex flex-col items-center text-white pt-20">
            <div className="flex items-center space-x-4">
                {/* Loading Icon */}
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500">
                    {/* Loading Text */}
                    <p className="mt-6 text-center">
                        <p className="text-sm text-gray-400">Stay tuned!</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EductionLoader;