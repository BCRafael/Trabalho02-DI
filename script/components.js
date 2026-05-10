// ============================================
// COMPONENTES WEB REUTILIZÁVEIS
// Header, Nav e Footer com Template e Slots
// ============================================

// ============================================
// WEB COMPONENT: MyHeader
// Componente reutilizável para o cabeçalho
// ============================================
class MyHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }

                header {
                    background-color: #0d6efd;
                    color: white;
                    padding: 1.5rem 1rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                h1 {
                    text-align: center;
                    margin: 0;
                    font-size: 2rem;
                    font-weight: bold;
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 1.5rem;
                    }

                    header {
                        padding: 1rem;
                    }
                }
            </style>

            <header>
                <div class="container">
                    <h1>
                        <slot name="title">Design de Interação</slot>
                    </h1>
                </div>
            </header>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// ============================================
// WEB COMPONENT: MyNav
// Componente reutilizável para navegação
// ============================================
class MyNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                }

                nav {
                    background-color: #212529;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 1rem;
                }

                .brand {
                    color: white;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 1.25rem;
                    padding: 1rem 0;
                }

                .brand:hover {
                    opacity: 0.8;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 0;
                }

                .nav-item {
                    margin: 0;
                }

                .nav-link {
                    color: #ffffff;
                    text-decoration: none;
                    padding: 1rem 1.25rem;
                    display: block;
                    transition: all 0.3s ease;
                    font-weight: 500;
                    font-size: 1rem;
                }

                .nav-link:hover {
                    color: #ffffff;
                    background-color: rgba(255, 255, 255, 0.25);
                    font-weight: 600;
                }

                .nav-link.active {
                    color: #ffffff;
                    background-color: rgba(13, 110, 253, 0.3);
                    border-bottom: 3px solid #0d6efd;
                    font-weight: 600;
                }

                .nav-link.disabled {
                    color: #aaaaaa;
                    cursor: not-allowed;
                    opacity: 0.6;
                    font-weight: 400;
                }

                @media (max-width: 768px) {
                    .container {
                        flex-wrap: wrap;
                    }

                    .nav-menu {
                        width: 100%;
                        flex-direction: column;
                        gap: 0;
                    }

                    .nav-link {
                        border-bottom: 1px solid #435493;
                    }
                }
            </style>

            <nav>
                <div class="container">
                    <a class="brand" href="/" data-home-link>
                        <slot name="brand">Disciplina Web</slot>
                    </a>
                    <ul class="nav-menu">
                        <slot name="items"></slot>
                    </ul>
                </div>
            </nav>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Ajusta links de home conforme necessário
        this.shadowRoot.querySelector('[data-home-link]').href = this.getHomeLink();
    }

    getHomeLink() {
        const path = window.location.pathname;
        if (path.includes('/pages/')) {
            return '../index.html';
        }
        return 'index.html';
    }
}

// ============================================
// WEB COMPONENT: MyFooter
// Componente reutilizável para rodapé
// ============================================
class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-top: auto;
                }

                footer {
                    background-color: #212529;
                    color: #adb5bd;
                    padding: 2rem 1rem;
                    border-top: 1px solid #404249;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }

                .footer-section h3 {
                    color: white;
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }

                .footer-section ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-section li {
                    margin-bottom: 0.5rem;
                }

                .footer-section a {
                    color: #adb5bd;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer-section a:hover {
                    color: #0d6efd;
                }

                .footer-bottom {
                    border-top: 1px solid #404249;
                    padding-top: 2rem;
                    text-align: center;
                    font-size: 0.9rem;
                }

                .footer-bottom p {
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }

                    footer {
                        padding: 1.5rem 1rem;
                    }
                }
            </style>

            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>Sobre</h3>
                            <ul>
                                <li><a href="../index.html">Portal de Trabalhos</a></li>
                                <li><a href="#">Sobre a Disciplina</a></li>
                                <li><a href="#">Recursos</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Trabalhos</h3>
                            <ul>
                                <li><a href="../pages/editor.html">Editor de Cartões</a></li>
                                <li><a href="../pages/prova.html">Prova de Programação</a></li>
                                <li><a href="#">Trabalho 3</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Tecnologias</h3>
                            <ul>
                                <li>HTML5 & CSS3</li>
                                <li>JavaScript Moderno</li>
                                <li>Web Components</li>
                                <li>Bootstrap 5</li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2026 Design de Interação - Todos os direitos reservados.</p>
                        <p>
                            <slot name="credits">
                                Desenvolvido como parte da disciplina de Interface Web
                            </slot>
                        </p>
                    </div>
                </div>
            </footer>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// ============================================
// REGISTRAR WEB COMPONENTS
// ============================================
customElements.define('my-header', MyHeader);
customElements.define('my-nav', MyNav);
customElements.define('my-footer', MyFooter);
