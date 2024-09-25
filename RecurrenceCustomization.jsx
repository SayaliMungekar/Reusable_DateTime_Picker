import React from 'react';

const RecurrenceCustomization = ({ recurrenceType, customization, setCustomization }) => {
    const handleCustomizationChange = (key, value) => {
        setCustomization(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div>
            {recurrenceType === 'daily' && (
                <div>
                    <label>Every</label>
                    <input type="number" value={customization.interval || 1} onChange={(e) => handleCustomizationChange('interval', e.target.value)} />
                    <label>day(s)</label>
                </div>
            )}
            {/* Add similar logic for weekly, monthly, and yearly customizations */}
        </div>
    );
};

export default RecurrenceCustomization;
