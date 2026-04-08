const PROJECTS = [
  {
    title: "Dev Companion",
    description:
      "Aplicacion web para organizar proyectos, ideas, errores y notas, con autenticacion, dashboard y panel de administrador.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    iconClass: "fa-solid fa-rocket",
    tone: "Full stack",
    demoUrl: null,
    codeUrl: "https://github.com/Shakiara/Dev_Companion"
  },
  {
    title: "MyPortafolio",
    description:
      "Portafolio personal responsivo con una identidad visual mas fuerte, estructura clara y una capa de interaccion ligera.",
    tags: ["HTML", "CSS", "JavaScript"],
    iconClass: "fa-solid fa-id-card",
    tone: "Portfolio",
    demoUrl: "/",
    codeUrl: "https://github.com/Shakiara/MyPortafolio"
  },
  {
    title: "UI Showcase",
    description:
      "Coleccion de componentes y patrones de interfaz para practicar estados, overlays, navegacion y experimentos de UI.",
    tags: ["UI", "CSS", "JavaScript"],
    iconClass: "fa-solid fa-shapes",
    tone: "Design system",
    demoUrl: "/ui-showcase",
    codeUrl: "https://github.com/Shakiara/MyPortafolio"
  },
  {
    title: "To-Do List App",
    description:
      "Ejercicio para practicar eventos, render dinamico, estados vacios y persistencia basica del lado cliente.",
    tags: ["JavaScript", "DOM", "UX"],
    iconClass: "fa-solid fa-list-check",
    tone: "Practice app",
    demoUrl: null,
    codeUrl: "https://github.com/Shakiara/MyPortafolio"
  },
  {
    title: "Calculator",
    description:
      "Proyecto de logica interactiva enfocado en operaciones, botones de control y feedback instantaneo al usuario.",
    tags: ["Logic", "JavaScript", "UI"],
    iconClass: "fa-solid fa-calculator",
    tone: "Logic",
    demoUrl: null,
    codeUrl: "https://github.com/Shakiara/MyPortafolio"
  },
  {
    title: "Form Validation",
    description:
      "Ejercicio orientado a validacion en cliente, mensajes de error claros y mejores flujos de formulario.",
    tags: ["Forms", "Validation", "Frontend"],
    iconClass: "fa-solid fa-square-check",
    tone: "Forms",
    demoUrl: null,
    codeUrl: "https://github.com/Shakiara/MyPortafolio"
  }
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = PROJECTS.map((project, index) => {
    const demoLink = project.demoUrl
      ? `<a class="ui-btn ui-btn-secondary" href="${project.demoUrl}" ${project.demoUrl.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>Ver demo</a>`
      : '<span>Demo pronto</span>';

    const codeLink = project.codeUrl
      ? `<a class="ui-btn ui-btn-warning" href="${project.codeUrl}" target="_blank" rel="noopener noreferrer">Ver codigo</a>`
      : '<span>Repositorio pronto</span>';

    return `
      <article class="project-card reveal" data-delay="${index * 70}">
        <div class="project-visual">
          <div class="project-accent">
            <span class="project-tone">${project.tone}</span>
            <i class="${project.iconClass}" aria-hidden="true"></i>
          </div>
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-links">
            ${demoLink}
            ${codeLink}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function setupMenu() {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggle || !mobileMenu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.hidden = expanded;
  });
}

function setupSmoothScroll() {
  const controls = document.querySelectorAll("[data-scroll-target]");

  controls.forEach((control) => {
    control.addEventListener("click", (event) => {
      const selector = control.getAttribute("data-scroll-target");

      if (!selector) {
        return;
      }

      const section = document.querySelector(selector);

      if (!section) {
        return;
      }

      event.preventDefault();
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
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const delay = Number(entry.target.getAttribute("data-delay") || "0");
        window.setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupSkills() {
  const bars = document.querySelectorAll(".skill-progress");

  if (!("IntersectionObserver" in window)) {
    bars.forEach((bar) => {
      const level = Number(bar.getAttribute("data-level") || "0");
      window.requestAnimationFrame(() => {
        bar.style.width = `${level}%`;
        bar.classList.add("is-animated");
      });
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const bar = entry.target;
      const level = Number(bar.getAttribute("data-level") || "0");

      window.requestAnimationFrame(() => {
        bar.style.width = `${level}%`;
        bar.classList.add("is-animated");
      });

      observer.unobserve(bar);
    });
  }, { threshold: 0.35 });

  bars.forEach((bar) => {
    observer.observe(bar);
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("contact-feedback");

  if (!form || !feedback) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      feedback.textContent = "Completa todos los campos antes de enviar.";
      return;
    }

    const subject = encodeURIComponent(`Mensaje de ${name} desde el portafolio`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:shakiara.feliciano@gmail.com?subject=${subject}&body=${body}`;
    feedback.textContent = "Se abrió tu app de correo para completar el envio.";
    form.reset();
  });
}

function setupFooterYear() {
  const yearEl = document.getElementById("copyright-year");

  if (!yearEl) {
    return;
  }

  yearEl.textContent = `© ${new Date().getFullYear()} Shakiara Feliciano.`;
}

function initPortfolio() {
  renderProjects();
  setupMenu();
  setupSmoothScroll();
  setupReveal();
  setupSkills();
  setupContactForm();
  setupFooterYear();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
