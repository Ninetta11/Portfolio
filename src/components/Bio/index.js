import './style.css'

function Bio() {
    return (
        <article id="bio" className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <img className="centre" src={process.env.PUBLIC_URL + '/assets/images/IMG_0006.jpeg'} alt="Nina Welsh Profile Image" width="300"
                        height="300"></img>
                </div>
                <div className="col-md-6">
                    <h2 className="d-flex align-items-center">Full Stack Developer, Entrepreneur, Business Developer, Idealist,
                    Hiker, Intrepid
                    Traveller, Book Collector
                </h2>
                </div>
            </div>
        </article>
    )
};

export default Bio;