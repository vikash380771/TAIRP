var typed = new Typed(".text-changing", {
    strings: ["Frontend Developer", "Web Developer", "UI/UX Designer", "Web Designer", "FullStack Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true
}
);


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



