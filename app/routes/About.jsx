import logo from "../assets/logo.png"
export default function About(){
    return(
       <section className="div-about" id="about">
           <div className="div-img">
               <img className="about-image-logo" src={logo}></img>
           </div>
           <div className="p">
               <p className="the-story">THE STORY</p>
               <p className="p-2">Creeptouniverse is a collectible NFT project centered around community. All Universes are in the multiverse(polygon) as non-fungible tokens(NFT) are made up of a unique combination of traits.</p>
               <p className="p-2">Holding a Creepto NFT makes you a part of our multiverse – a member of a world and community that serves to build meaningful long-term connections through collaboration!</p>
           </div>
       </section>

    )
}