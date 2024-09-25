import React from 'react';

const DatePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
    return (
        <div>
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <label>End Date:</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
    );
};

export default DatePicker;
