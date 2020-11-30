var newPage = new TimelineLite({ onComplete: newPage });
newPage.to("#loading_bar", 2.2, { width: "600px", ease: Power0.easeOut });

function newPage() {
    window.location.replace("https://henipatel8.github.io/insect_website_final/bug.html");
}