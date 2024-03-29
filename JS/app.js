const navbar = document.getElementById('nav')
const footer = document.getElementById('footer')

function add_navbar(nav){
    nav.innerHTML = /*html*/`<br><br><br>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top custom_nav" >
        <div class="container-fluid">
            <a class=" nav-color" href="../HTML/landing.html"><img src="../Media/Logo 3.png" height="75px" class="logo-bg">EFCTS-PS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--justify-content-end-->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <!--text-center on the <ul> tag makes the links centered when the button is toggled-->
                <ul class="navbar-nav text-center">
                    <li class="nav-item">
                        <a class="nav-color" aria-current="page" href="../HTML/landing.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-color" href="../HTML/projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-color" href="../HTML/class_layout.html">Our Classroom</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-color" href="../HTML/course_offerings.html">What You Learn</a>
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
                        <ul class="list-style" style="list-style:none;">
                            <li><h2 class="sub-title">EFCTS Sites</h2 class="sub-title"></li>
                            <li><a href="https://www.eastland-fairfield.com/" target="_blank">Main Site</a></li>
                            <li><a href="https://www.eastlandfairfield.com/Newsletters.aspx" target="_blank">Newsletter</a></li>
                            <li><a href="https://www.eastlandfairfield.com/ProgramsCourses.aspx" target="_blank">Careers</a></li>
                            <li><a href="https://www.eastlandfairfield.com/BusinessPartnerships.aspx" target="_blank">Business Partners</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 text-center">
                        <ul class="list-style" style="list-style:none;">
                            <li><h2 class="sub-title">Contact Us</h2 class="sub-title"></li>
                            <li><a href="https://www.eastland-fairfield.com/ContactUs.aspx" target="_blank">Contact </a></li>
                            <li><a href="https://www.eastlandfairfield.com/FAQs1.aspx" target="_blank">Support</a></li>
                            <li><a href="https://www.eastlandfairfield.com/Tours.aspx" target="_blank">Tours</a></li>
                            <li><a href="https://www.eastlandfairfield.com/Admissions.aspx" target="_blank">Admissions</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 text-center">
                        <ul class="list-style" style="list-style:none;">
                            <li><h2 class="sub-title">Social Media</h2 class="sub-title"></li>
                            <li><a href="https://www.instagram.com/efctspix" target="_blank">Instagram</a></li>
                            <li><a href="https://www.facebook.com/efcts" target="_blank">Facebook</a></li>
                            <li><a href="https://www.youtube.com/c/EFCTS" target="_blank">Youtube</a></li>
                            <li><a href="https://www.twitter.com/EFCTS" target="_blank">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-xs-12">
                    <a class="footer-color" href="../HTML/landing.html"><img src="../Media/Logo 3.png" width="50px" class="logo logo-bg">EFCTS-PS</a>
                </div>
                <div class="col-lg-6 col-xs-12 text-end">
                    <a 
                        class="social_icon"
                        href="https://www.facebook.com/efcts"
                        target="_blank"
                        aria-label="Facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a
                    class="social_icon"
                        href="https://www.instagram.com/efctspix"
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
                        href="https://www.linkedin.com/school/efcts"
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