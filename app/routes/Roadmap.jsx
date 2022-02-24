import { Link } from "remix";
export default function Roadmap(){
    return(
      <section className="section-roadmap">
        <p className="map-roadmap">ROADMAP
        <time className="time" dateTime="2008-02-02">
                      <span className="time__day">V - 0.01</span>
                    </time>        </p>
        <div>
        <div className="page">
          <div className="timeline">
            <div className="timeline__group">
              <span className="timeline__year time" aria-hidden="true">Phase - 1</span>
              <div className="timeline__cards">
                <div className="timeline__card card">
                  <header className="card__header">
                    <time className="time" dateTime="2008-02-02">
                      <span className="time__day">Building Community</span>
                      <span className="time__month"></span>
                    </time>
                  </header>
                  <div className="card__content">
                    <p>Right now we are at the initial phase of building our community trustable.</p>
                  </div>
                </div>
                <div className="timeline__card card">
                  <header className="card__header">
                  <time className="time" dateTime="2008-02-02">
                      <span className="time__day">Project Lunch</span>
                      <span className="time__month">March 20</span>
                    </time>
                  </header>
                  <div className="card__content">
                  <p>We will start the official sale of Creepto Universe collection from March 20. A total of 200 unique NFT projects will be available to mint from March 20.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline__group">
              <span className="timeline__year time" aria-hidden="true">SUPPORT</span>
              <div className="timeline__cards">
                <div className="timeline__card card">
                  <header className="card__header">
                
                  </header>
                  <div className="card__content">
                    <p>Everyone needs help. We will onboard community support members to deliver mental health support to our holders.

</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline__group">
              <span className="timeline__year time" aria-hidden="true">Gifts</span>
              <div className="timeline__cards">
                <div className="timeline__card card">
                  <header className="card__header">
                        
                  </header>
                  <div className="card__content">
                    <p>We will provide a free blockchain domain (. NFT) for free to all NFT holders with free portfolio freelance.
</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline__group">
              <span className="timeline__year time" aria-hidden="true">The Sky's the limit</span>
              <div className="timeline__cards">
                <div className="timeline__card card">
                  <header className="card__header">
                
                  </header>
                  <div className="card__content">
                    <p>Realising new version of creepto roadmap on lunch date(March 20)

</p>
                  </div>
                </div>
              </div>
            </div>
               <div className="timeline__group">
              <span className="timeline__year time" aria-hidden="true">!END</span>
              
            </div>
          </div>
        </div>
        <div className="linktr">
          <a href="https://linktr.ee/creeptouniverse" target="_blank" className="linktr__goal r-link">Get more from us</a>
        </div>
      </div>
      </section>
    )
}