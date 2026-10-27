/**
 * Web Component: AppHeader (<app-header>)
 * Barra de navegación horizontal limpia con detección de página activa.
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
            const activeClass = isCurrent ? ' class="activo"' : '';
            return `<a href="${item.href}"${activeClass}>${item.name}</a>`;
        }).join('\n        ');

        this.innerHTML = `
<header>
    <nav>
        ${linksHtml}
    </nav>
</header>
        `;
    }
}

if (!customElements.get('app-header')) {
    customElements.define('app-header', AppHeader);
}
