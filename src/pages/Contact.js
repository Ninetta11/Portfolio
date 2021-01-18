
function Contact() {
    return (
        <form id="contact" class="col mb-5">
            <div class="col-md-12">
                <h3>Contact</h3>
                <div class="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Full Name"></input>
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="example@email.com.au"
                        aria-describedby="emailHelp"></input>
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                    <label for="inputMessage">Message</label>
                    <textarea class="form-control" id="message" rows="3"
                        placeholder="Enter your message here"></textarea>
                </div>
                <button type="submit" class="btn btn-primary right" value="submit">Submit</button>
            </div>
        </form>
    )
}

export default Contact;