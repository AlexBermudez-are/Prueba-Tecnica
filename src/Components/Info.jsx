import React from 'react'
import './Info.css'

const Info = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <p className="text-initial">Why Choose International Psychics</p>
            <ul style={{ width: "40%", margin: "auto" }}>
                <li>
                    <b style={{ color: "black" }}>OVER 4 MILLON PEOPLE</b>
                    <br />
                    <span>just like you have come for personal insight, guidance and answers.</span>
                </li>
                <li>
                    <b style={{ color: "black" }}>ONLY 2 OUT OF 100</b>
                    <br />
                    <span>psychics who apply are selected.</span>
                </li>
                <li>
                    <b style={{ color: "black" }}>YOUR READING IS PRIVATE</b>
                    <br />
                    <span>and confidential.</span>
                </li>
                <li>
                    <b style={{ color: "black" }}>IF IT IS NOT THE BEST</b>
                    <br />
                    <span>psychic reading you've ever had. IT'S FREE.</span>
                </li>
            </ul>
            <br />
            <button className="btn-GetStarted">
                <p style={{color:'white', fontSize:"2rem", margin:"0"}}>Get Started</p>
            </button>
        </div>
    )
}

export default Info
