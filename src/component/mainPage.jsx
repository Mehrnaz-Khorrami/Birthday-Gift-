import React from "react";
import BirthdayImage from "../images/mainGift.jpg"

const MainPage = () => {
    return ( 
        <div>
            <div className="top-img-main-page">
                <img src={BirthdayImage} alt="birthday" width="100%" height="400px" />
            </div>
            <div>
                <h1>این هدیه برای توست</h1>
                <p>تا بتونن هدیه مورد علاقه ات رو بهت بدن <br /> و بدونی که چقدر با ارزشی</p>
            </div>
            <div className="btn-main-page">
                <button>بریم ببینیم چی میخوای</button>
            </div>
        </div>
     );
}
 
export default MainPage;