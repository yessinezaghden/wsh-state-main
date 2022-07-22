import React, { Component } from "react";
import Bio from "./profile/components/bio/Bio";
import FullName from "./profile/components/fullname/FullName";
import Profession from "./profile/components/profession/Profession";
import Image from "./profile/components/image/Image";
import "./Profile.css";

export class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0 ,
      memory: null
    }
  }


   componentDidMount () {
     this.setState ({ memory :setInterval (()=> {this.increment()}, 1000) 
   })};

   componentWillUnmount () {
     clearInterval(this.state.memory) 
   };


  increment = () => {
this.setState ({ count : this.state.count +1});

  };
  render() {
    const Bassem = {
      fullName: "lionel messi",
      bio: "Lionel Andrés Messi Cuccitini, né le 24 juin 1987 en Argentine, est un footballeur argentin évoluant au FC Barcelone. Considéré par de nombreux spécialistes comme le meilleur joueur du monde, il est le seul à avoir été récompensé par un Ballor d'Or quatre années consécutives.",
      prof: "Professional Footballer",
    };
    const handleName = (Bassem) => {
      alert(`Hi , My name is ${Bassem}`);
    };

    return (
      <div className="Profile">
        <FullName name={Bassem} />
        <Image defau={"This photo is him."}>
          <h1
            style={{
              fontFamily: "Arial",
              backgroundColor: "red",
              borderRadius: "15px",
              color: "white",
              width: "250px",
              margin: "0 auto",
              padding: "25px",
            }}
          >
            {" "}
            Lionel Messi Photo
          </h1>
          <img
            style={{ height: "528px" }}
            src="https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/05/28/3141075-64377228-2560-1440.jpg"
            alt=""
          />
          <h2>
            <button
              style={{
                backgroundColor: "green",
                width: "100px",
                height: "50px",
                fontFamily: "Arial",
                color: "white",
                borderRadius: "30px",
              }}
              onClick={() => handleName(Bassem.fullName)}
            >
              Salute{" "}
            </button>
          </h2>
        </Image>
        <Profession pro={Bassem} />
        <Bio Biog={Bassem} />
        <p className="counter">{this.state.count}</p>
      </div>
    );
  }
}

export default Profile;
