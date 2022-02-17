import { Link } from "remix"
export default function Footer(){
    return(
    <div>
    <section>
      <div className="explorer">
        <div className="mars" />
        <img src="" className="logo-404" />
        <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
        <p className="title">Oh You here!!</p>
        <p className="subtitle">
          Missing Something<br />Join our discord and ask anything you want
        </p>
        <div align="center">
          <a className="btn-back" href="#">Back to previous page</a>
        </div>
        <Link to="#roadmap">
        <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" /></Link>
        <img src="" className="spaceship" />
      </div>
      </section>
        <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">AN NFT COLLECTION OF Unique worlds - UNIQUE 3D Universe/Worlds BUILT WITH A SOPHISTICATED VARIETY OF DISTINCTIVE TRAITS ON THE ETHEREUM and Polygon BLOCKCHAIN. THE Creepto Club WILL BE PACKED WITH UTILITY. SERVING AS MORE THAN A COOL PFP, A Creepto Club NFT WILL GET UPDATED AS TIME GOES ON.Expanding our Universe to Multyverse is our goal.

</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>More</h6>
              <ul className="footer-links">
                <li><a href="">Twitter</a></li>
                <li><a href="">Fund Us</a></li>
                <li><a href="">Opensea</a></li>
   
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="https://linktr.ee/Creeptouniverse">Contact</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
               
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
                <a href="#"> Creepto Club</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/creeptouniverse"><i className="fa fa-facebook" /></a></li>
                <li><a className="twitter" href="https://twitter.com/creeptouniverse"><i className="fa fa-twitter" /></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/creepz-universe-458924230/"><i className="fa fa-linkedin" /></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </footer></div>
    )
}