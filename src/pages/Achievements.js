import ReactPlayer from "react-player";

function Achievements() {
    return (
        <article id="achievements">
            <div className="row">
                <div className="col-md-12 text-right">
                    <h1>Achievements</h1>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col mb-4">
                    <div id="port-grocer" className="card">
                        <div className="card-body">
                            <h4 className="card-title">Port Grocer</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Project Manager, 2020</h6>
                            <p className="card-text">The local community of Port Kembla asked for a community led,
                            zero waste supermarket to be established in the township. A run down warehouse
                            was obtained and transformed into a welcoming community meeting place where
                            locals could purchase all their grocery staples without the usual associated
                                        waste.</p>
                            <div className="media">
                                <ReactPlayer
                                    url="https://www.youtube.com/embed/zBbpjYoI6s8"
                                    alt="Port Grocer WIN TV news segment"
                                />
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">Port Grocer Opening</h5>
                                        Port Grocer supports local suppliers and growers by providing an opportunity for
                                        distribution as well as a local presence. Larger retailers had abandoned Port
                                        Kembla over the previous 30 years and relocated to larger towns, leaving
                                        locals with no option but to travel into adjacent towns for their groceries.
                                        Port Grocer sought to rectify that by proving that local demand and community
                                        cooperation could come together to create a grass roots solution.
                                    </div>
                            <div class="fb-post"
                                data-href="https://www.facebook.com/nkliman/posts/10158544351901636"
                                data-width="500" data-show-text="true">
                                <blockquote
                                    cite="https://www.facebook.com/nkliman/posts/10158544351901636"
                                    class="fb-xfbml-parse-ignore">
                                    Posted by
                                <a href="https://www.facebook.com/nkliman">Nina Welsh</a>
                                 on&nbsp;
                                 <a href="https://www.facebook.com/nkliman/posts/10158544351901636">Tuesday, July 21, 2020</a>
                                </blockquote>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"><a
                                href="https://www.ourcommunityproject.org.au/portgrocer">www.ourcommunityproject.org.au</a></small>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div id="geonbae" className="card">
                        <div className="card-body">
                            <h4 className="card-title">Geonbae Korean BBQ Restaurant</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Owner/ Director, 2016 - 2018</h6>
                            <p className="card-text">From initial concept - to fitout in a new commercial building -
                            to ongoing management and marketing - Geonbae was a personal experiment to test
                            whether conviction and hardwork could turn an idea into a profitable business.
                                        The result spoke for itself.</p>
                            <div className="media">
                                <ReactPlayer
                                    url="https://fb.watch/38vARbSV9l/"
                                />
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">Geonbae Official Opening by Local Member Chris Chrewther</h5>
                                        Geonbae was the first restaurant of its kind on the Mornington Peninsula and its
                                        turnover in the first 12 months was over $1.2 million. It is consistantly in the
                                        top three restaurants in Frankston as voted on Tripadvisor. It has become a
                                        popular dining option for residents of the Mornington Peninsula and a shining
                                        star on the Frankston foreshore.
                            </div>
                            <br></br>
                            <div className="media-body">
                                <h5 className="mt-0">Successful for $10,000 grant funding from Frankston City
                                Council for a New Start-Up</h5>
                                <div class="fb-post"
                                    data-href="https://www.facebook.com/GeonbaeFrankston/posts/1193041057467623"
                                    data-width="500" data-show-text="true">
                                    <blockquote cite="https://www.facebook.com/GeonbaeFrankston/posts/1193041057467623"
                                        class="fb-xfbml-parse-ignore"><p>We are so fortunate to be located in a city that supports small business with these sorts of initiatives. Thank you Frankston City Council!</p>Posted by <a href="https://www.facebook.com/GeonbaeFrankston/">Geonbae</a> on&nbsp;
                                    <a href="https://www.facebook.com/GeonbaeFrankston/posts/1193041057467623">Monday, March 27, 2017</a></blockquote></div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted"><a
                                href="https://www.geonbae.com.au/">www.geonbae.com.au</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </article >
    )
}

export default Achievements;