import React,{useState} from "react";
import "./hero.css"

export default function HeroSection() {
    const [email,setEmail] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        if(!email){
            alert("Please enter email")
        }else{
            setEmail("")
        }
    }

    return (
        <div className="hs-container">
        <div className="left-wrapper">
          <div className="h1-text">
            <h1> You don't have to Fight them Alone.</h1>
          </div>
          <div className="description-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </p>
          </div>
          <div className="input-container">
            <img src="Message 35.png" alt="messageBox" width={22} height={18}/>
            <input value={email} onChange={handleEmail} type="text" placeholder="Enter your Email Adress">
            </input>
            <div className="submit-button">
             <button onClick={handleSubmit}>Let's Talk</button>
            </div>
          </div>
        </div>
        <div className="hero-img">
            <img src= "Group 10591.png" alt="hero-img" className="img-container"/>
        </div>
      </div>
    )
}
