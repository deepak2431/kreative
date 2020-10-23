import React from 'react';

import ProfileCard from '../src/components/ProfileCard'

function ProfileSection() {
    return (
        <div className='card_flex'>
            <ProfileCard
                name="Ryan"
                image="assets/ryan.jpg"
                price="$5000"
            />
            <ProfileCard
                name="Emila"
                image="assets/emila.jpeg"
                price="$1000"
            /><ProfileCard
                name="Simpson"
                image="assets/simpson.jpeg"
                price="$7000"
            />
        </div>

    );
};

export default ProfileSection;