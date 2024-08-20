import React, { useState } from 'react';

const Toogle = () => {
    // 1. enabling state: useState(...)
    // 2.initializing state: useState(false) => type: string, number, boolean, object, array
    // 3. reading state
    // 4. updating state
    // const [state, setState] = useState(false);

    const [toogle, setToogle] = useState(false); // [false, function]
    const handleToogle = () => {
        setToogle(!toogle);
    };

    return (
        <div className="mt-3">
            <div className={`toogle ${toogle ? 'active' : ''}`} onClick={handleToogle}>
                <div className={`spinner ${toogle ? 'active' : ''}`}></div>
            </div>
        </div>
    );
};

export default Toogle;
