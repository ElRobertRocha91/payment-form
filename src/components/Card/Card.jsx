import "./Card.module.css";
import imageChip from "../../assets/chip.png";
import imageVisa from "../../assets/visa.png";

function Card(){
    return (
        <div className="container">
            <div className="card-container">
                {/* Front - Card */}
                <div className="front">
                    <div>
                        <img src={imageChip} alt="chip"/>
                        <img src={imageVisa} alt="visa"/>
                    </div>
                    {/* Data - Card */}
                    <div>################</div>
                    <div className="flexbox">
                        <div className="box">
                            <span>card holder</span>
                            <div>full name</div>
                        </div>
                        <div className="box">
                            <span>expires</span>
                            <div>
                                <span>mm</span>
                                <span>yy</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Back - Card */}
                <div className="back">
                    <div className="stripe"></div>
                    <div className="box">
                        <span>cvv</span>
                        <img src={imageVisa} alt="visa"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;