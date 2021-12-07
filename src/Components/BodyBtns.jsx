import React from 'react'
import './BodyBtns.css'

const BodyBtns = () => {
    return (
        <div className="container-Btns">
            <p className="text-initial">Our trusted pyschic advisors are experts in the following areas</p>
            <section className="container-3-Btns">
                <button className="Love">
                    <p style={{ margin: "0", fontSize: "1rem", color: "white" }}>Love <br /> & <br /> Relationship</p>
                </button>
                <button className="Destiny">
                    <p style={{ margin: "0", fontSize: "1rem", color: "white" }}>Destiny <br /> & <br /> Life Path</p>
                </button>
                <button className="Career">
                    <p style={{ margin: "0", fontSize: "1rem", color: "white" }}>Career <br /> & <br /> Finance</p>
                </button>
            </section>
        </div>
    )
}

export default BodyBtns
