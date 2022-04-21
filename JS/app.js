const navbar = document.getElementById('nav')
const footer = document.getElementById('footer')

function add_navbar(nav){
    nav.innerHTML = /*html*/`
    <nav>
        Test Nav
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