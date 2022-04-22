const navbar = document.getElementById('nav')
const footer = document.getElementById('footer')

function add_navbar(nav){
    nav.innerHTML = /*html*/`    
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="../HTML/landing.html">EFCTS-PS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
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
    `
}
function add_footer(foot){
    foot.innerHTML = /*html*/`
    <footer>
        Test Footer
    </footer>
    `
}
add_navbar(navbar)
add_footer(footer)