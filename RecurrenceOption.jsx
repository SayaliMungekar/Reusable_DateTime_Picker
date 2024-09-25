import React from 'react';

const RecurrenceOptions = ({ recurrenceType, setRecurrenceType }) => {
    return (
        <div>
            <label>Recurrence:</label>
            <select value={recurrenceType} onChange={(e) => setRecurrenceType(e.target.value)}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
        </div>
    );
};

export default RecurrenceOptions;
