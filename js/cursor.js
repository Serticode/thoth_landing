const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.transform = "translate3d(" + mx + "px, " + my + "px, 0) translate(-50%, -50%)";
});

function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = "translate3d(" + rx + "px, " + ry + "px, 0) translate(-50%, -50%)";
    requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll("a, button, .demo-tab, .profile-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        ring.style.width = "44px";
        ring.style.height = "44px";
        ring.style.borderColor = "var(--accent)";
    });
    el.addEventListener("mouseleave", () => {
        cursor.style.width = "6px";
        cursor.style.height = "6px";
        ring.style.width = "28px";
        ring.style.height = "28px";
        ring.style.borderColor = "var(--accent-dim)";
    });
});
