import { AuthLayoutInterface } from "../interface";
import "./AuthLayout.scss";

const AuthLayout = (options: AuthLayoutInterface) => ({ ...Props }) => {
    console.log('options', options)
    // console.log('Props', Props)
    return (
        // <div className='ec-auth'>
        //     <div className="ec-auth-container">
        //         <div className="row g-2">
        //             <div className="col-xl-6 col-lg-6 col-md-6 col-12">
        //                 <div className="ec-auth-left">
        //                     <div className="ec-auth-left-image">
        //                         <img src={loginImage} alt="login" srcSet="" />
        //                     </div>
        //                     <div className="ec-auth-left-text">
        //                         <h6 className="title">Greetings! Get ready to pick up where you left off.</h6>
        //                         <ul className="description">
        //                             <li>Simply enter your details to access your <span>account</span>.
        //                                 Need a hand with your <span>password</span>? We've got your back.
        //                                 New to our <span>community</span>? Join us now and let's embark on this journey together!
        //                                 If you have any <span>questions</span> or need assistance, our <span>support team</span> is here to help.</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <options.component {...Props} />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default AuthLayout