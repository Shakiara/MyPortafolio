const PROJECTS = [
	{
		title: "Landing Page",
		description:
			"P\u00e1gina web responsiva con dise\u00f1o moderno enfocada en la presentaci\u00f3n de productos y experiencia del usuario.",
		tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
		iconClass: "fa-solid fa-laptop-code",
		iconColorClass: "project-icon-pink",
		demoUrl: "https://example.com",
		codeUrl: "https://github.com",
	},
	{
		title: "To-Do List App",
		description: "Aplicaci\u00f3n simple de gesti\u00f3n de tareas con funcionalidades b\u00e1sicas.",
		tags: ["HTML", "CSS", "JavaScript"],
		iconClass: "fa-solid fa-list-check",
		iconColorClass: "project-icon-blue",
		demoUrl: "https://example.com",
		codeUrl: "https://github.com",
	},
	{
		title: "Calculadora",
		description: "Calculadora interactiva para practicar l\u00f3gica y eventos.",
		tags: ["HTML", "CSS", "JavaScript"],
		iconClass: "fa-solid fa-calculator",
		iconColorClass: "project-icon-purple",
		demoUrl: "https://example.com",
		codeUrl: "https://github.com",
	},
	{
		title: "Generador de frases",
		description: "Aplicaci\u00f3n que muestra frases aleatorias.",
		tags: ["HTML", "CSS", "JavaScript"],
		iconClass: "fa-solid fa-quote-right",
		iconColorClass: "project-icon-pink",
		demoUrl: "https://example.com",
		codeUrl: "https://github.com",
	},
	{
		title: "Formulario con validaci\u00f3n",
		description: "Formulario interactivo con validaciones en tiempo real.",
		tags: ["HTML", "CSS", "JavaScript"],
		iconClass: "fa-solid fa-square-check",
		iconColorClass: "project-icon-blue",
		demoUrl: "https://example.com",
		codeUrl: "https://github.com",
	},
	{
		title: "UI Interactiva",
		description: "Interfaz de usuario interactiva con animaciones y efectos.",
		tags: ["HTML", "CSS", "JavaScript"],
		iconClass: "fa-solid fa-object-group",
		iconColorClass: "project-icon-purple",
		demoUrl: "./ui-showcase.html",
		codeUrl: "https://github.com",
	},
	{
		title: "JSON Data Viewer",
		description:
			"Visualizador de datos en JSON para mostrar listas de productos y usuarios de forma clara.",
		tags: ["HTML", "CSS", "JavaScript", "JSON"],
		iconClass: "fa-solid fa-file-code",
		iconColorClass: "project-icon-blue",
		demoUrl: "https://example.com",
		codeUrl: "https://github.com",
	},
];

function renderProjects() {
	const grid = document.getElementById("projects-grid");
	if (!grid) return;

	grid.innerHTML = PROJECTS.map(
		(project) => `
			<article class="project-card reveal" data-delay="120">
				<div class="project-visual">
					<i class="project-icon ${project.iconColorClass} ${project.iconClass}" aria-hidden="true"></i>
				</div>
				<div class="project-body">
					<h3>${project.title}</h3>
					<p>${project.description}</p>
					<div class="tags">
						${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
					</div>
					<div class="project-links">
						<a class="ui-btn ui-btn-secondary" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Ver demo">Demo</a>
						<a class="ui-btn ui-btn-warning" href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Ver c\u00f3digo">C\u00f3digo</a>
					</div>
				</div>
			</article>
		`,
	).join("");
}

function setupMenu() {
	const toggle = document.getElementById("menu-toggle");
	const mobileMenu = document.getElementById("mobile-menu");
	if (!toggle || !mobileMenu) return;

	toggle.addEventListener("click", () => {
		const expanded = toggle.getAttribute("aria-expanded") === "true";
		toggle.setAttribute("aria-expanded", String(!expanded));
		mobileMenu.hidden = expanded;
	});
}

function setupSmoothScroll() {
	const controls = document.querySelectorAll("[data-scroll-target]");
	controls.forEach((control) => {
		control.addEventListener("click", () => {
			const selector = control.getAttribute("data-scroll-target");
			if (!selector) return;

			const section = document.querySelector(selector);
			if (!section) return;

			section.scrollIntoView({ behavior: "smooth", block: "start" });

			const toggle = document.getElementById("menu-toggle");
			const mobileMenu = document.getElementById("mobile-menu");
			if (toggle && mobileMenu && !mobileMenu.hidden) {
				toggle.setAttribute("aria-expanded", "false");
				mobileMenu.hidden = true;
			}
		});
	});
}

function setupReveal() {
	const revealElements = document.querySelectorAll(".reveal");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				const delay = Number(entry.target.getAttribute("data-delay") || "0");
				window.setTimeout(() => {
					entry.target.classList.add("is-visible");
				}, delay);
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.15 },
	);

	revealElements.forEach((el) => observer.observe(el));
}

function setupSkills() {
	const skillRows = document.querySelectorAll(".skill-row");

	skillRows.forEach((row) => {
		const nameSpan = row.querySelector("div span:first-child");
		const progress = row.querySelector(".skill-progress");
		const level = progress?.getAttribute("data-level") || "0";

		const showDetails = () => {
			row.classList.add("is-detail-visible");
			if (progress) progress.style.width = `${level}%`;
		};

		const hideDetails = () => {
			row.classList.remove("is-detail-visible");
			if (progress) progress.style.width = "0";
		};

		if (nameSpan) {
			nameSpan.classList.add("skill-name");
			nameSpan.setAttribute("tabindex", "0");
		}

		row.addEventListener("mouseenter", showDetails);
		row.addEventListener("mouseleave", hideDetails);
		row.addEventListener("focusin", showDetails);
		row.addEventListener("focusout", (event) => {
			if (row.contains(event.relatedTarget)) return;
			hideDetails();
		});
	});
}

function setupFooterYear() {
	const yearEl = document.getElementById("copyright-year");
	if (yearEl) {
		yearEl.textContent = `© ${new Date().getFullYear()} Todos los derechos reservados.`;
	}
}

function initPortfolio() {
	renderProjects();
	setupMenu();
	setupSmoothScroll();
	setupReveal();
	setupSkills();
	setupFooterYear();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
