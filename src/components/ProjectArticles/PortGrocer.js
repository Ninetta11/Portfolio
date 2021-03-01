import ReactPlayer from "react-player";


function PortGrocer() {
    return (
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
    )
}

export default PortGrocer;