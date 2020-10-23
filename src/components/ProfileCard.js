import React from 'react';

function ProfileCard(props) {
    return (
        <div className='card' >
            <h4>{props.name}</h4>
            <img src={props.image} alt='Profile' className='card_img' />
            <div style={{ padding: '10px', textAlign: 'center' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '30px' }}>{props.price}</h3>
                <h4> Per Month</h4>
            </div>
            <p style={{ padding: '10px' }}> kjbjihioh deiohiochaihjcikh iohdcihkijweai jknudhcihki.ahscki. </p>
            <button className='button_main' > CLICK ME</button>
        </div>
    );
};

export default ProfileCard;