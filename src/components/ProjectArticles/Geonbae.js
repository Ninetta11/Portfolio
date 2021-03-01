import ReactPlayer from "react-player";


function Geonbae() {
    return (
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
    )
}

export default Geonbae;