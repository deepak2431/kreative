import React from 'react'

function About() {
    return (
        <div>
        <div className='about_flex'>
            <h3>About</h3>
            <div style={{display:'flex'}}>
            <i class="fab fa-facebook" style={{padding:'10px'}}></i>
            <i class="fab fa-instagram-square"  style={{padding:'10px'}}></i>
            <i class="fab fa-twitter"  style={{padding:'10px'}}></i>
            <i class="fab fa-youtube"  style={{padding:'10px'}}></i>
            </div>


            <div className='about_card'>
            <p style={{padding:'5px'}}> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                     vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent l
                     qui blandit praesent</p>
            </div>
            <div style={{display:'flex'}}>
            <button className='btn' style={{margin:'20px'}}> button 1</button>
            <button className='btn' style={{margin:'20px'}}> button 2</button>
            </div>
            
            </div>  
        </div>
    )
}

export default About;
