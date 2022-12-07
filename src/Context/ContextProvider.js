import React, { createContext, useState } from 'react';


export const contextData = createContext()
const ContextProvider = ({ children }) => {
    const [formData, setFormData] = useState(null);

    const contextInfo = {
        formData,
        setFormData
    }
    return (
        <div>
            <contextData.Provider value={contextInfo}>{children}</contextData.Provider>
        </div>
    );
};

export default ContextProvider;