function switchTab(idx) {
    document.querySelectorAll(".demo-tab").forEach((t, i) => t.classList.toggle("active", i === idx));
    document.querySelectorAll(".demo-pane").forEach((p, i) => p.classList.toggle("active", i === idx));
}
