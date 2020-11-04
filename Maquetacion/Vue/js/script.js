window.addEventListener("load", function() {
    let template = document.getElementById("article-template");
    let articles = document.getElementById("articles");

    for (let i = 1; i < 5; i++) {
        let clonar = template.cloneNode(true);
        clonar.removeAttribute("id");
        let h2 = clonar.getElementsByTagName("h2")[0];
        h2.innerHTML = h2.textContent + ' ' + i;
        articles.appendChild(clonar);
    }
});