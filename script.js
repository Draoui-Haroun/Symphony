const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(1.2)";

        setTimeout(() => {
            link.style.transform = "scale(1)";
        }, 300);
    });
});