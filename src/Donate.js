import React from 'react'

function Donate() {
    return (
        <div className="donate-section">
            <div className='donate_flex'>
                <div style={{ padding: '60px' }}>
                    <h3 style={{ fontWeight: 'bold' }}>$blondish</h3>
                    <h1 style={{ color: '#53c56c', fontWeight: 'bold' }}>$0.238</h1>
                    <h6 >$blondish  kjnkjni</h6>
                </div>
                <div className='dropdown_list'>
                    <form action="">
                        <label style={{ marginRight: '25px' }}>Choose:</label>
                        <select name="HairColor" id="HairColor">
                            <option value="RED">RED</option>
                            <option value="YELLOW">YELLOW</option>
                            <option value="GREEN">GREEN</option>
                        </select>
                    </form>
                    <hr />
                    <span style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}> <p>guigui</p>
                        <p style={{ border: '1px solid grey', padding: '0 20px', borderRadius: '5px' }}>guigui</p></span>
                    <hr />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ padding: '0 20px 40px 0' }}>guigui</p>
                        <button className='button_main1'> CLICK ME</button>
                    </div>
                </div>
            </div>
            <div className='support_flex' >
                <h3 style={{ marginBottom: '10px' }}>SUPPORT BLONISH</h3>
                <button className='button_sub' > CLICK ME</button>
            </div >
        </div>
    )
}

export default Donate;
