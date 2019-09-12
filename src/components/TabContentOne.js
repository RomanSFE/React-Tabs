import React from 'react'

function TabContentOne() {
    return (
        <div className="tab-one-content mx-auto">
            <div className="container">
                <div className="tab-content">
                <div className="tab-contentt">
                    <form action="hh" method="post">
                        <div className="booking-check-box">
                            <ul className="booking-check">
                                <li>
                                    <div className="check-box-group">
                                        <label className="group-check">
                                            <input  type="checkbox" name="bookingcheck" value="1"></input>
                                            Oneway Trip
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="check-box-group">
                                        <label className="group-check">
                                            <input  type="checkbox" name="bookingcheck" value="2"></input>
                                            Round Trip   
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="check-box-group">
                                        <label className="group-check">
                                            <input  type="checkbox" name="bookingcheck" value="1"></input>
                                            Multi City
                                        </label>
                                    </div>
                                </li>
                             </ul>
                            </div>
                            {/* after checkbox */}
                            <div className="after-checkbox-section">
                                <ul className="after-checkbok-content">
                                    <li className="cont-one-content">
                                        <div className="cont-one-text">
                                            <h5>Form</h5>
                                            <p>Flying from airport..</p>
                                        </div>
                                    </li>
                                    <li className="cont-two-content">
                                        <div className="cont-icon-text">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                    </li>
                                    <li className="cont-three-content">
                                        <div className="cont-one-text">
                                            <h5>To</h5>
                                            <p>Flying to airport..</p>
                                        </div>
                                    </li>
                                    <li className="cont-four-content">
                                        <div className="cont-one-text">
                                            <h5>Departury</h5>
                                            <p>Depart Date</p>
                                        </div>
                                    </li>
                                    <li className="cont-five-content">
                                        <div className="cont-one-text">
                                            <h5>Return</h5>
                                            <p>Return Date</p>
                                        </div>
                                    </li>
                                    <li className="cont-six-content">
                                        <div className="cont-one-text">
                                            <h5>Passenger</h5>
                                            <p>1 traveller, economy</p>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                            {/* Button */}
                            <div className="sub-button">
                                <button className="btn btn-primary btn-lg">Search</button>
                            </div>
                        </form>                
                     </div>
                </div>
            </div>
        </div>
    )
}
export default TabContentOne;
