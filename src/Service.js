import React from 'react'

import Review from '../src/components/Review';

function Service() {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <a href="kreative.com" className='active'>Services</a>
                <a href="kreative.com" className='active'>Activity</a>
            </div>
            <div className='container'>
                <Review
                    name="Alex"
                    serviceName="Music"
                    price="$132442"
                    reviewText="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent l qui blandit praesent
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent l qui blandit praesent"
                />
                <Review
                    name="George"
                    serviceName="Spa"
                    price="$132442"
                    reviewText="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent l qui blandit praesent
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent l qui blandit praesent"
                />
                <Review
                    name="Smith"
                    serviceName="Hair Cut"
                    price="$132442"
                    reviewText="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent l qui blandit praesent
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent l qui blandit praesent"
                />
            </div>
        </div>
    )
}

export default Service;
