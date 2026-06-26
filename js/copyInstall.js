document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".copy-btn").addEventListener("click", () => {
        navigator.clipboard.writeText("npm install -g thoth-cli").then(() => {
            const btn = document.querySelector(".copy-btn");
            btn.textContent = "Copied!";
            btn.style.color = "var(--accent)";
            setTimeout(() => {
                btn.textContent = "Copy";
                btn.style.color = "";
            }, 1800);
        }).catch(() => {
            const btn = document.querySelector(".copy-btn");
            btn.textContent = "Failed";
            setTimeout(() => { btn.textContent = "Copy"; btn.style.color = ""; }, 1800);
        });
    });
});
