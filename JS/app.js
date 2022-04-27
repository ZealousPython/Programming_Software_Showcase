const navbar = document.getElementById('nav')
const footer = document.getElementById('footer')

function add_navbar(nav){
    nav.innerHTML = /*html*/`<br><br><br>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="../HTML/landing.html"><img src="../Media/Logo 3.png" height="75px">EFCTS-PS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--justify-content-end-->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <!--text-center on the <ul> tag makes the links centered when the button is toggled-->
                <ul class="navbar-nav text-center">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../HTML/landing.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../HTML/projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../HTML/class_layout.html">Our Classroom</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../HTML/course_offerings.html">What We Learn</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <br><br><br>`
}
function add_footer(foot){
    foot.innerHTML = /*html*/`
    <div class="container">
            <div class="footer_links">
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <ul style="list-style:none;">
                            <li><h2>About Us</h2></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Investments</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 text-center">
                        <ul style="list-style:none;">
                            <li><h2>Contact Us</h2></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Destination</a></li>
                            <li><a href="#">Sponsorships</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 text-center">
                        <ul style="list-style:none;">
                            <li><h2>Social Media</h2></li>
                            <li><a href="instagram.com/efctspix">Instagram</a></li>
                            <li><a href="facebook.com/efcts">Facebook</a></li>
                            <li><a href="https://www.youtube.com/c/EFCTS">Youtube</a></li>
                            <li><a href="twitter.com/EFCTS">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 text-center">
                    <a href="../HTML/landing.html"><img src="../Media/Logo 3.png" width="80px" class="logo"></a>
                </div>
                <div class="col-lg-6 text-center">
                    <a 
                        class="social_icon"
                        href="facebook.com/efcts"
                        target="_blank"
                        aria-label="Facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a
                    class="social_icon"
                        href="instagram.com/efctspix"
                        target="_blank"
                        aria-label="Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a
                    class="social_icon"
                        href="https://www.youtube.com/c/EFCTS"
                        target="_blank"
                        aria-label="Youtube">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a
                    class="social_icon"
                        href="twitter.com/EFCTS"
                        target="_blank"
                        aria-label="Twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a
                    class="social_icon"
                        href="linkedin.com/school/efcts"
                        target="_blank"
                        aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    `
}
add_navbar(navbar)
add_footer(footer)