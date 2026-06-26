document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".demo-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            const idx = parseInt(tab.dataset.tab, 10);
            document.querySelectorAll(".demo-tab").forEach((t, i) => t.classList.toggle("active", i === idx));
            document.querySelectorAll(".demo-pane").forEach((p, i) => p.classList.toggle("active", i === idx));
        });
    });
});
