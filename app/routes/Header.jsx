import image from "../assets/image-1.png"

export default function Header(){
    return(
        <section className="header" id="header">
            <nav>
                <a href="#header">
                <li>Welcome!</li></a>
                <a href="#about">
                <li>About</li></a>
                <a href="#roadmap">
                <li>Roadmap</li></a>
                <a href="#gallery">
                <li>Gallery</li></a>
                <a href="/"></a>
            </nav>
            <div className="head-p">
                <p className="main-title">
                Welcome to <br/>
                CreeptoUniverse</p>
                <span className="beta">BETA Version</span>
                <p className="p-head">The Project Never Before.
NFT collection of 3D amazing creepyto universe.<br/> Full collection Launching on March 20. 
<br/>Subscribe to our <a href="https://www.getrevue.co/profile/creeptoclub?via=twitter-profile">Newsletter</a> or join discord </p><a href="https://opensea.io/collection/creeptouniverse">
                <button className="header-button-1" title="Presale Products on opensea">Presale</button></a>
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