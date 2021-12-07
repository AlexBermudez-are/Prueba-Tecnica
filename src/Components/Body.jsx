import React from 'react'
import banner from '../Assets/banner.png'
import './Body.css'

const Body = () => {
    return (
        <div className="body-Banner">
            <img width="70%" src={banner} alt="banner" />
            <section className="texto-Container-Banner">
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <h2 className="just">Just</h2>
                    <section className="container-Text-P-Minute">
                        <h2 style={{ margin: "0", fontSize: "5rem" }}>$</h2>
                        <h2 style={{ margin: "0", fontSize: "6rem" }}>1</h2>
                        <div>
                            <h2 className="perMinute">
                                Per Minute
                            </h2>
                            <h2 className="for-Y-Call">
                                For Your First Call
                            </h2>
                        </div>
                    </section>
                </div>
                <div className="container-Btn-Offer">
                    <button className="btn-Started">
                        <p className="p-Started">Get Started</p>
                    </button>
                    <section className="offer">
                        <p style={{ margin: "0" }}>Introductory offer is available</p>
                        <p style={{ margin: "0" }}>for new customers only</p>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Body
