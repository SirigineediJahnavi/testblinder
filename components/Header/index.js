import './index.css'

const Header=()=>{
    return(
        <div>
            <div className="headerfirstpart">
                <img src="robo.jpg" className="imageverysmall logo" alt="logo"/>
                
                <h2 className="rowdistance color">
                    TestGlider
                </h2>
                <p className="rowdistance color">
                    TOEFL
                </p>
                <p className="rowdistance color">IELTS</p>
                <p className="rowdistance color">Digital SAT</p>
                <p className="rowdistance color">TUTOR</p>
                <p className="rowdistance color">TG Studey Abroad <sup className="beta">Beta</sup></p>
                <button className="login buttoncolor">Login</button>
                <button className="signup buttoncolor">Signup</button>
                <img src="profile.jpeg" alt="imagemedium" className="imagesmall contact"/>


            </div>
            
                
        </div>
    )
}
export default Header