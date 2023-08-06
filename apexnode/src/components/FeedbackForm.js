import React, { useState } from 'react';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit feedback and rating to the backend
    };

    return (
        <div>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Rating:</label>
                    <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} />
                </div>
                <div>
                    <label>Feedback:</label>
                    <textarea value={feedback} onChange={handleFeedbackChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
