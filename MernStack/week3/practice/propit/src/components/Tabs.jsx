import React, { useState } from 'react';
import Tabs from './Tabs'; 
import Results from './Results'; 

const Tabs = () => {
    const initialTabs = [
        { label: 'Tab 1', content: 'Content for Tab 1' },
        { label: 'Tab 2', content: 'Content for Tab 2' },
        { label: 'Tab 3', content: 'Content for Tab 3' },
    ];

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div>
            <Tabs allTabs={initialTabs} setCurrentTabIndex={setCurrentTabIndex} />
            <Results allTabs={initialTabs} currentTabIndex={currentTabIndex} />
        </div>
    );
};

export default Tabs;
