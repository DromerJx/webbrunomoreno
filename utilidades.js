/* ============================================================
   ARCHIVO MAESTRO DE HERRAMIENTAS
   ------------------------------------------------------------
   Aquí agregas, quitas o cambias herramientas.
   Cada herramienta tiene:
     nombre       -> el título que se muestra
     descripcion  -> texto pequeño debajo del nombre
     url          -> el enlace que se abre al hacer clic
     icono        -> un emoji o letra (opcional)

   Para AGREGAR una herramienta: copia un bloque { ... }
   y pégalo dentro de la categoría que quieras.
   Para QUITAR una: borra su bloque { ... }.
   ============================================================ */
const CATEGORIAS = [
  {
    nombre: "Redes",
    herramientas: [
      {
        nombre: "HiTools Delivery",
        descripcion: "Gestión de cámaras y NVRs",
        url: "https://www.hikvision.com/en/support/tools/hitools/cl7f0143d2c781a3e3/",
        icono: "📹",
      },
      {
        nombre: "Ubiquiti UniFi",
        descripcion: "Controlador de red UniFi",
        url: "https://www.ui.com/download/unifi",
        icono: "🛰️",
      },
      {
        nombre: "Omada Controller",
        descripcion: "Gestión de red TP-Link",
        url: "https://support.omadanetworks.com/us/download/software/omada-controller/",
        icono: "📡",
      },
      {
        nombre: "PuTTY",
        descripcion: "Cliente SSH y Telnet",
        url: "https://www.putty.org/",
        icono: "🖥️",
      },
      {
        nombre: "Advanced IP Scanner",
        descripcion: "Escáner de red LAN",
        url: "https://www.advanced-ip-scanner.com/",
        icono: "🔍",
      },
    ],
  },
  {
    nombre: "Sistemas",
    herramientas: [
      {
        nombre: "Ninite",
        descripcion: "Empaquetador de utilidades básicas",
        url: "https://ninite.com/",
        icono: "💎",
      },
      {
        nombre: "Chris Titus WinTool",
        descripcion: "Optimización y limpieza de Windows",
        url: "https://github.com/christitustech/winutil",
        icono: "⚙️",
      },
      {
        nombre: "MiniTool Partition Wizard",
        descripcion: "Gestor de particiones para Windows",
        url: "https://cdn2.minitool.com/?p=pw&e=pw-free",
        icono: "💽",
      },
      {
        nombre: "CrystalDisk - Info/Mark",
        descripcion: "Estado y salud de Discos",
        url: "https://crystalmark.info/en/download/",
        icono: "💧",
      },
      {
        nombre: "Debian ISO",
        descripcion: "Imagen de instalación Debian",
        url: "https://www.debian.org/download",
        icono: "💿",
      },
      {
        nombre: "Ubuntu Server",
        descripcion: "Sistema operativo servidor",
        url: "https://ubuntu.com/download/server",
        icono: "🖧",
      },
      {
        nombre: "Rufus",
        descripcion: "Creador de USB booteables",
        url: "https://rufus.ie/",
        icono: "🔌",
      },
      {
        nombre: "BalenaEtcher",
        descripcion: "Grabador de imágenes en disco",
        url: "https://etcher.balena.io/",
        icono: "💾",
      },
      {
        nombre: "Office 2024",
        descripcion: "Suite de productividad de Microsoft",
        url: "https://download.winandoffice.com/Volume/office/2024/ES/Office_2024_ES_64Bits.exe",
        icono: "🗂️",
      },
      {
        nombre: "Project 2024 Professional LTSC",
        descripcion: "Productividad de Microsoft",
        url: "https://download.winandoffice.com/Volume/project/2024/ES/project_2024_ES_64Bits.exe",
        icono: "🗂️",
      },
      {
        nombre: "Windows 11",
        descripcion: "Sistema operativo de Microsoft",
        url: "https://www.microsoft.com/en-us/software-download/windows11",
        icono: "🪟",
      },
    ],
  },
  {
    nombre: "Programación",
    herramientas: [
      {
        nombre: "VS Code",
        descripcion: "Editor de código de Microsoft",
        url: "https://code.visualstudio.com/",
        icono: "📝",
      },
      {
        nombre: "Git",
        descripcion: "Control de versiones distribuido",
        url: "https://git-scm.com/downloads",
        icono: "🌿",
      },
      {
        nombre: "Node.js",
        descripcion: "Entorno de ejecución JavaScript",
        url: "https://nodejs.org/",
        icono: "⬡",
      },
      {
        nombre: "FileZilla",
        descripcion: "Cliente FTP/SFTP",
        url: "https://filezilla-project.org/",
        icono: "🗂️",
      },
    ],
  },
];

/* ============================================================
   A PARTIR DE AQUÍ ES LA LÓGICA DE LA PÁGINA.
   Normalmente NO necesitas tocar nada debajo de esta línea.
   ============================================================ */

// Flecha que aparece a la derecha de cada tarjeta
const ARROW_SVG =
  '<svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';

// Dibuja todas las categorías y tarjetas en la página
function dibujarCategorias() {
  const contenedor = document.getElementById("categories");
  contenedor.innerHTML = "";

  CATEGORIAS.forEach((categoria) => {
    // Título de la categoría
    const titulo = document.createElement("h2");
    titulo.className = "category-title";
    titulo.textContent = categoria.nombre;
    titulo.dataset.categoria = categoria.nombre;
    contenedor.appendChild(titulo);

    // Rejilla de tarjetas
    const grid = document.createElement("div");
    grid.className = "tools-grid";
    grid.dataset.categoria = categoria.nombre;

    categoria.herramientas.forEach((herramienta) => {
      // Cada tarjeta es un enlace <a href> que abre la página del programa
      const card = document.createElement("a");
      card.className = "tool-card";
      card.href = herramienta.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.dataset.nombre = herramienta.nombre.toLowerCase();
      card.dataset.desc = herramienta.descripcion.toLowerCase();

      card.innerHTML = `
        <div class="tool-icon">${herramienta.icono || "🔧"}</div>
        <div class="tool-info">
          <div class="tool-name">${herramienta.nombre}</div>
          <div class="tool-desc">${herramienta.descripcion}</div>
        </div>
        <div class="tool-arrow">${ARROW_SVG}</div>
      `;

      grid.appendChild(card);
    });

    contenedor.appendChild(grid);
  });
}

// Filtra las tarjetas según lo que se escribe en la búsqueda
function filtrar(texto) {
  const busqueda = texto.trim().toLowerCase();
  const tarjetas = document.querySelectorAll(".tool-card");
  let visibles = 0;

  tarjetas.forEach((card) => {
    const coincide =
      card.dataset.nombre.includes(busqueda) ||
      card.dataset.desc.includes(busqueda);
    card.style.display = coincide ? "" : "none";
    if (coincide) visibles++;
  });

  // Oculta títulos y rejillas de categorías vacías
  document.querySelectorAll(".tools-grid").forEach((grid) => {
    const algunaVisible = grid.querySelector('.tool-card:not([style*="none"])');
    const mostrar = !!algunaVisible;
    grid.style.display = mostrar ? "" : "none";
    const titulo = document.querySelector(
      `.category-title[data-categoria="${grid.dataset.categoria}"]`
    );
    if (titulo) titulo.style.display = mostrar ? "" : "none";
  });

  // Mensaje de "sin resultados"
  document.getElementById("no-results").hidden = visibles > 0;
}

// Cambia entre modo claro y oscuro
function alternarTema() {
  const esOscuro = document.body.classList.toggle("dark");
  const boton = document.getElementById("theme-toggle");
  boton.setAttribute(
    "aria-label",
    esOscuro ? "Activar modo claro" : "Activar modo oscuro"
  );
}

// ===== Arranca todo cuando la página carga =====
dibujarCategorias();

document.getElementById("search").addEventListener("input", (e) => {
  filtrar(e.target.value);
});
document.getElementById("theme-toggle").addEventListener("click", alternarTema);
