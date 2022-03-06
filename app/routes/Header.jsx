import image from "../assets/image-1.png"
import SimpleImageSlider from "react-simple-image-slider";

import logo from "../assets/logo.png"
export default function Header(){
    return(
        <section className="header" id="header">

            <nav>

                <div>
                <a href="#header">
                <li className="li-header">Welcome</li></a>
                <a href="#about">
                <li className="li-header">About</li></a>
                <a href="#roadmap">
                <li className="li-header">Roadmap</li></a>
                <a href="#gallery">
                <li className="li-header gallery">Gallery</li></a>
                <a href="/"></a></div>
            </nav>
            <div className="head-p">
                <p className="main-title">
                Welcome to <br/>
                CreeptoUniverse</p>
                <span className="beta">BETA Version</span>
                <p className="p-head">The Project Never Before.
NFT collection of 3D amazing universe.<br/> Full collection Launching soon. 
<br/>Subscribe to our <a href="https://www.getrevue.co/profile/creeptoclub?via=twitter-profile">Newsletter</a> or join discord </p><a href="https://twitter.com/CreeptoClub">
                <button className="header-button-1" title="Presale Products on opensea">Twitter</button></a>
                <a href="https://t.co/g2ZlOQHxSY">
                <button className="header-button-2">Discord</button></a>
            </div>
            <div className="image-1">
                <a href="">
                <img className="m-img" title="Best Project Of our Collection" src={image}></img></a>
            </div>
        

        </section>
    )
}