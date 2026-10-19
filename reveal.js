/* reveal.js: fades each .reveal block up into place as it scrolls into view.
   The "js" class on <html> is added in the page head, so without JavaScript
   every block simply stays visible. */

(function () {
    var blocks = document.querySelectorAll(".reveal");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(block) {
        block.classList.add("is-visible");
    }

    if (!("IntersectionObserver" in window) || reduceMotion) {
        blocks.forEach(show);
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                show(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

    blocks.forEach(function (block) {
        observer.observe(block);
    });
}());
