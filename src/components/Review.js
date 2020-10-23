import React from 'react';

function Review(props) {
    return (
        <div className="container">
            <div className="review-card">
                <div style={{ display: 'flex' }}>
                    <h3 style={{ fontWeight: 'bold', margin: '20px 0 0 10px' }}>{props.name}</h3>
                    <h3 style={{ fontWeight: 'bold', margin: '20px 0 0 10px' }}>{props.serviceName}</h3>
                    <h3 style={{ color: '#53c56c', margin: '20px 0' }}>{props.price}</h3>
                </div>
                <div className='paragraph_flex'>
                    <p className='paragraph_margin' style={{ margin: '5px 0 0 10px'}}>{props.reviewText}</p>
                    <div style={{ display: 'flex', flexDirection: 'column'  }}>
                        <button className='button_main2'>Buy</button>
                        <button className='button_sub1'>check here</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;