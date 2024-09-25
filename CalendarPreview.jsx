import React from 'react';

const CalendarPreview = ({ recurringDates }) => {
    return (
        <div>
            <label>Preview:</label>
            {/* Render a mini calendar showing the recurring dates */}
            <div className="calendar-preview">
                {recurringDates.map(date => (
                    <div key={date} className="calendar-date">{date}</div>
                ))}
            </div>
        </div>
    );
};

export default CalendarPreview;
