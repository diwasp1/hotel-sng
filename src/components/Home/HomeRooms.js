import React from "react";

function HomeRooms() {
  return (
    <>
      <div className="our-rooms">
        <div className="our-rooms-content">
          <p className="luxury-hotel-title">LUXURY HOTEL</p>
          <p className="our-rooms-title">Our Rooms</p>
          <p className="our-rooms-text">
            A wonderful serenity has taken my entire soul, like sweet <br />
            morning spring which I enjoy with my whole heart this spot, which
            was created.
          </p>
        </div>
        <div className="container">
          <div className="our-rooms-details-wrapper">
            <div className="our-rooms-details">
              <div className="hotel-room">
                <div className="hotel-room-image">
                  <div className="hotel-room-overlay"></div>
                  <a href="#"></a>
                  <div className="hotel-room-price">
                    <span style= {{fontSize : "10px" , color : "orange"}}>FROM:</span>
                    <span style={{fontSize : "14px" , color : "orange"}}>Rs. 1000</span>
                    <br />

                      <span style={{fontSize : "14px" , color : "white", fontWeight: "700"}}>
                      GRAND DELUXE
                    </span>
                  </div>
                </div>
              </div>
              <div className="hotel-room">
                <div className="hotel-room-image">
                  <div className="hotel-room-overlay"></div>
                  <a href="#"></a>
                  <div className="hotel-room-price">
                    <span style= {{fontSize : "10px" , color : "orange"}}>FROM:</span>
                    <span style={{fontSize : "14px" , color : "orange"}}>Rs. 1000</span>
                    <br />

                      <span style={{fontSize : "14px" , color : "white", fontWeight:"700"}}>
                      SUPERIOR DELUXE
                    </span>
                  </div>
                </div>
              </div>

              <div className="hotel-room">
                <div className="hotel-room-image">
                  <div className="hotel-room-overlay"></div>
                  <a href="#"></a>
                  <div className="hotel-room-price">
                   <span style= {{fontSize : "10px" , color : "orange"}}>FROM:</span>
                    <span style={{fontSize : "14px" , color : "orange"}}>Rs. 1000</span>
                    <br />

                    <span style={{fontSize : "14px" , color : "white", fontWeight:"700"}}>
                      DELUXE KING ROOM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeRooms;
