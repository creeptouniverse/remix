import image from "../assets/image-1.png"

export default function Header(){
    return(
        <section className="header" id="header">
            <nav>
                <a href="#header">
                <li>Welcome!</li></a>
                <a href="/">
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
                <p>The Project Never Before.
NFT collection of 3D amazing creepy universe. Full collection lunching soon. Subscribe to 
</p>
                <button className="header-button-1" title="Presale Products on opensea">Presale</button>
                <button className="header-button-2">Discord</button>
            </div>
            <div className="image-1">
                <a href="">
                <img className="m-img" title="Best Project Of our Collection" src={image}></img></a>
            </div>

        </section>
    )
}