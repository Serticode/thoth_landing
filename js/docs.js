document.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll(".sidebar-link");
	const sections = [];

	links.forEach((link) => {
		const href = link.getAttribute("href");
		if (href && href.startsWith("#")) {
			const el = document.getElementById(href.slice(1));
			if (el) sections.push({ el, link });
		}
	});

	const observer = new IntersectionObserver(
		(entries) => {
			let active = null;
			entries.forEach((e) => {
				if (e.isIntersecting) active = e.target;
			});
			if (!active) return;
			sections.forEach((s) => {
				s.link.classList.toggle("active", s.el === active);
			});
		},
		{ threshold: 0.2, rootMargin: "-80px 0px -60% 0px" },
	);

	sections.forEach((s) => observer.observe(s.el));
});
