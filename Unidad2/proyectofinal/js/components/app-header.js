/**
 * Web Component: AppHeader (<app-header>)
 * Reusable navigation bar with Bootstrap 5 responsive collapse and active page detection.
 */
class AppHeader extends HTMLElement {
    connectedCallback() {
        const navItems = [
            { name: 'Inicio', href: 'index.html' },
            { name: 'MVVM', href: 'mvvm.html' },
            { name: 'MVI', href: 'mvi.html' },
            { name: 'Clean Architecture', href: 'clean-architecture.html' },
            { name: 'Modular', href: 'modular.html' },
            { name: 'Compose UDF', href: 'compose-udf.html' },
            { name: 'MVU / Redux', href: 'mvu-redux.html' },
            { name: 'Diagnóstico', href: 'registro.html' }
        ];

        const path = window.location.pathname;
        const currentFile = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

        const linksHtml = navItems.map(item => {
            const isCurrent = (currentFile === item.href) || ((currentFile === '' || currentFile === 'index.html') && item.href === 'index.html');
            const activeClasses = isCurrent ? 'activo fw-semibold' : 'text-secondary';
            const ariaCurrent = isCurrent ? ' aria-current="page"' : '';
            return `
                <li class="nav-item">
                    <a class="nav-link px-3 py-2 rounded-2 ${activeClasses}" href="${item.href}"${ariaCurrent}>
                        ${item.name}
                    </a>
                </li>
            `;
        }).join('');

        this.innerHTML = `
            <header class="sticky-top bg-white border-bottom shadow-sm">
                <nav class="navbar navbar-expand-xl navbar-light py-2" aria-label="Navegación principal">
                    <div class="container">
                        <a class="navbar-brand fw-bold text-dark d-flex align-items-center gap-2" href="index.html">
                            <i class="bi bi-layers-half text-primary fs-4"></i>
                            <span class="fs-5 fw-bold">Android Arch</span>
                        </a>

                        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Alternar barra de navegación">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="mainNavbar">
                            <ul class="navbar-nav ms-auto mb-2 mb-xl-0 gap-1 align-items-xl-center">
                                ${linksHtml}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}

if (!customElements.get('app-header')) {
    customElements.define('app-header', AppHeader);
}
