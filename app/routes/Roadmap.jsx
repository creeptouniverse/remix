import { Link } from "remix";
export default function Roadmap(){
    return(
      <section className="section-roadmap">
        
      {/* Vertical Timeline */}
      <div id="conference-timeline">
        <div className="timeline-start">Start</div>
        <div className="conference-center-line" />
        <div className="conference-timeline-content">
          {/* Article */}
          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-left">
                <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it! <span className="article-number">01</span></p>
              </div>
              <span className="timeline-author"></span>
            </div>
            <div className="content-right-container">
              <div className="content-right">
                <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. <span className="article-number">02</span></p>
              </div>
              <span className="timeline-author"></span>
            </div>
            <div className="meta-date">
              <span className="date">18</span>
              <span className="month">APR</span>
            </div>
          </div>
          {/* // Article */}
          {/* Article */}
          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-left">
                <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it! <span className="article-number">01</span></p>
              </div>
              <span className="timeline-author"></span>
            </div>
            <div className="content-right-container">
              <div className="content-right">
                <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. <span className="article-number">02</span></p>
              </div>
              <span className="timeline-author"></span>
            </div>
            <div className="meta-date">
              <span className="date">18</span>
              <span className="month">APR</span>
            </div>
          </div>
          {/* // Article */}
          {/* Article */}
          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-left">
                <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it! <span className="article-number">01</span></p>
              </div>
              <span className="timeline-author"></span>
            </div>
            <div className="content-right-container">
              <div className="content-right">
                <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. <span className="article-number">02</span></p>
              </div>
              <span className="timeline-author"></span>
            </div>
            <div className="meta-date">
              <span className="date">18</span>
              <span className="month">APR</span>
            </div>
          </div>
          {/* // Article */}
        </div>
        <div className="timeline-end">End</div>
      </div>

      </section>
    )
}