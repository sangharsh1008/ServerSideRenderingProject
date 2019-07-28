import React, { Component } from "react";
import JohnImage from "./johnImage.png";
import ProfileData from "./profileData.json";
class Profile extends Component {
  render() {
    const carsName = ProfileData.cars.map((car, index) => {
      return (
        <li key={`cars ${car.car}`} id={`cars ${car.car}`}>
          {car.car}
        </li>
      );
    });
   
    return (
      <div
        className="card"
        style={{width:"400px",height:"500px",textAlign: "center",position: "absolute",
        left: "30%"}}
      >
        <img src={ProfileData.image} alt="image" style={{ width: "100%" }} />
        {carsName}
        <p>
          <button>Contact</button>
        </p>
      </div>
    );
  }
}

export default Profile;
