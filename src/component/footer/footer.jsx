import React, { useRef } from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";
import Career from "../../pages/career/career";
import Suggestion from "../../pages/suggetion/suggestion";
import Contact from "../../pages/contact/contact";

function Footer() {
    const careerDialogRef = useRef();
    const suggestionDialogRef = useRef();
    const contactDialogRef = useRef();

    const handleCareer = () => {
        careerDialogRef.current.showModal();
    };

    const closeDialog = () => {
        careerDialogRef.current.close();
    };

    return (
        <>
            <div className="parentFooter">
                <div className="footer">
                    <div className="footerOne">
                        <h3>NewsWave</h3>
                        <span>
                            Newswave: Surfing the currents of breaking news and trending
                            stories, providing a dynamic and comprehensive wave of information
                            daily.
                        </span>
                    </div>
                    <div className="footerTwo">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Advertisement</li>
                            <li onClick={()=>{suggestionDialogRef.current.showModal()}}>Suggestion</li>
                            <li>
                                <Link to="/haveNews">Have News</Link>
                            </li>
                            <li onClick={()=>{contactDialogRef.current.showModal()}}>Contact</li>
                            <li onClick={handleCareer}>Career</li>
                        </ul>
                    </div>

                    <div className="footerThree">
                        <h3>Contact</h3>
                        <span>NewsWave Media</span>
                        <span>Link-road Birgunj</span>
                        <span>Nepal</span>
                        <span>+9779806814329</span>
                    </div>
                </div>
            </div>
            <dialog ref={careerDialogRef}>
                <Career close={closeDialog}/>              
            </dialog>
            <dialog ref={suggestionDialogRef}>
                <Suggestion close={()=>{suggestionDialogRef.current.close()}}/>              
            </dialog>
            <dialog ref={contactDialogRef}>
                <Contact close={()=>{contactDialogRef.current.close()}}/>
            </dialog>
        </>
    );
}

export default Footer;
