/**
 * Diagnóstico de Arquitectura Android - Unidad 2 Proyecto Final
 * Criterio 3.5: Formulario complejo y validación dinámica con JS
 * Criterio 3.6: Innovación tecnológica con SweetAlert2 y localStorage
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form-diagnostico');
    const resultadoContainer = document.querySelector('#resultado-diagnostico');
    const tituloArquitectura = document.querySelector('#titulo-arquitectura');
    const resumenArquitectura = document.querySelector('#resumen-arquitectura');
    const barrasContainer = document.querySelector('#barras-compatibilidad');
    const btnVerArquitectura = document.querySelector('#btn-ver-arquitectura');

    // Mapeo de páginas y descripciones para cada arquitectura
    const infoArquitecturas = {
        'MVVM': {
            nombre: 'Model-View-ViewModel (MVVM)',
            pagina: 'mvvm.html',
            resumen: 'Recomendada para tu proyecto: excelente balance entre separación de responsabilidades, ciclo de vida robusto y adopción oficial de Google mediante StateFlow y ViewModel.',
            color: '#4f46e5'
        },
        'MVI': {
            nombre: 'Model-View-Intent (MVI)',
            pagina: 'mvi.html',
            resumen: 'Recomendada para tu proyecto: ideal para pantallas con alta concurrencia, transacciones críticas y estados inmutables que previenen condiciones de carrera.',
            color: '#0891b2'
        },
        'Clean Architecture': {
            nombre: 'Clean Architecture',
            pagina: 'clean-architecture.html',
            resumen: 'Recomendada para tu proyecto: tus reglas de negocio son complejas y requieren desacoplamiento total de la UI, alta testeabilidad y soporte offline-first.',
            color: '#059669'
        },
        'Modular Architecture': {
            nombre: 'Arquitectura Modular (Multi-módulo Gradle)',
            pagina: 'modular.html',
            resumen: 'Recomendada para tu proyecto: la escala del equipo, autonomía de squads y velocidad de compilación exigen fronteras físicas estrictas entre módulos.',
            color: '#7c3aed'
        },
        'Compose UDF': {
            nombre: 'Jetpack Compose UDF (Unidirectional Data Flow)',
            pagina: 'compose-udf.html',
            resumen: 'Recomendada para tu proyecto: diseño 100% declarativo moderno con State Hoisting nativo y optimización de recomposiciones reactivas.',
            color: '#2563eb'
        },
        'MVU / Redux': {
            nombre: 'Model-View-Update (Redux)',
            pagina: 'mvu-redux.html',
            resumen: 'Recomendada para tu proyecto: necesitas sincronizar un estado global único compartido entre múltiples pantallas o vistas flotantes en tiempo real.',
            color: '#ea580c'
        },
        'VIPER': {
            nombre: 'VIPER (View-Interactor-Presenter-Entity-Router)',
            pagina: 'clean-architecture.html',
            resumen: 'Recomendada para tu proyecto: paridad estricta 1:1 con arquitectura de iOS y desacoplamiento absoluto de la lógica de navegación fuera de la UI.',
            color: '#dc2626'
        },
        'Monolito / MVP': {
            nombre: 'Monolito Ágil / MVP',
            pagina: 'index.html',
            resumen: 'Recomendada para tu proyecto: máxima velocidad inicial para validar prototipos o MVPs sin sobreingeniería innecesaria.',
            color: '#4b5563'
        }
    };

    // Matriz de pesos por pregunta y opción
    const matrizPesos = {
        p1: { A: { 'Monolito / MVP': 3, 'MVVM': 1 }, B: { 'MVVM': 3, 'Compose UDF': 2 }, C: { 'Modular Architecture': 4, 'Clean Architecture': 2 }, D: { 'VIPER': 4, 'Modular Architecture': 2 } },
        p2: { A: { 'Monolito / MVP': 3, 'MVVM': 2 }, B: { 'Modular Architecture': 3, 'MVVM': 2 }, C: { 'Modular Architecture': 4, 'Clean Architecture': 3 }, D: { 'Clean Architecture': 4, 'Compose UDF': 1 } },
        p3: { A: { 'Monolito / MVP': 4 }, B: { 'MVVM': 3, 'Compose UDF': 3 }, C: { 'Clean Architecture': 4, 'Modular Architecture': 4 } },
        p4: { A: { 'MVVM': 4 }, B: { 'Clean Architecture': 4, 'VIPER': 3 }, C: { 'MVI': 3, 'Compose UDF': 3 } },
        p5: { A: { 'MVVM': 3, 'Compose UDF': 3 }, B: { 'VIPER': 4 }, C: { 'Clean Architecture': 4, 'Modular Architecture': 2 }, D: { 'MVVM': 2, 'Monolito / MVP': 2 } },
        p6: { A: { 'MVVM': 3 }, B: { 'MVI': 4, 'MVU / Redux': 2 }, C: { 'Compose UDF': 4, 'MVVM': 1 }, D: { 'Monolito / MVP': 4 } },
        p7: { A: { 'MVVM': 3, 'MVI': 2 }, B: { 'MVU / Redux': 4, 'MVI': 2 }, C: { 'Clean Architecture': 3, 'MVVM': 2 }, D: { 'Monolito / MVP': 3 } },
        p8: { A: { 'MVVM': 3, 'Monolito / MVP': 2 }, B: { 'MVI': 4, 'Compose UDF': 3 }, C: { 'MVU / Redux': 4 }, D: { 'Monolito / MVP': 3 } },
        p9: { A: { 'MVVM': 3 }, B: { 'MVI': 4, 'Compose UDF': 3 }, C: { 'Clean Architecture': 4 }, D: { 'Monolito / MVP': 3 } },
        p10: { A: { 'MVVM': 3, 'Clean Architecture': 2 }, B: { 'MVI': 4, 'MVU / Redux': 3 }, C: { 'Monolito / MVP': 3 } },
        p11: { A: { 'MVVM': 3, 'Monolito / MVP': 2 }, B: { 'Clean Architecture': 4, 'MVVM': 2 }, C: { 'Compose UDF': 2, 'MVI': 2 } },
        p12: { A: { 'MVVM': 3, 'Monolito / MVP': 2 }, B: { 'Clean Architecture': 4, 'MVVM': 2 }, C: { 'MVU / Redux': 4, 'MVI': 2 }, D: { 'Monolito / MVP': 3 } },
        p13: { A: { 'MVVM': 3 }, B: { 'MVI': 4, 'Compose UDF': 3 }, C: { 'Clean Architecture': 4 }, D: { 'Monolito / MVP': 3 } },
        p14: { A: { 'MVVM': 3, 'Monolito / MVP': 2 }, B: { 'Clean Architecture': 4 }, C: { 'Modular Architecture': 4 }, D: { 'Monolito / MVP': 3 } },
        p15: { A: { 'MVVM': 3, 'Monolito / MVP': 2 }, B: { 'Clean Architecture': 4, 'MVI': 2 }, C: { 'Compose UDF': 3, 'MVI': 2 }, D: { 'Clean Architecture': 4 } },
        p16: { A: { 'Monolito / MVP': 3, 'MVVM': 2 }, B: { 'Modular Architecture': 4 }, C: { 'MVVM': 3 }, D: { 'Clean Architecture': 3 } },
        p17: { A: { 'MVVM': 4, 'Compose UDF': 2 }, B: { 'Clean Architecture': 4, 'VIPER': 2 }, C: { 'MVU / Redux': 4 }, D: { 'Monolito / MVP': 4 } },
        p18: { A: { 'MVVM': 3, 'Monolito / MVP': 2 }, B: { 'Clean Architecture': 4, 'Modular Architecture': 2 }, C: { 'MVI': 3, 'MVU / Redux': 3 }, D: { 'Monolito / MVP': 3 } },
        p19: { A: { 'MVVM': 3 }, B: { 'Compose UDF': 4 }, C: { 'VIPER': 4 }, D: { 'Monolito / MVP': 3 } },
        p20: { A: { 'Monolito / MVP': 3 }, B: { 'MVVM': 3, 'Compose UDF': 2 }, C: { 'Clean Architecture': 4, 'Modular Architecture': 4 } }
    };
    const selectExperiencia = document.querySelector('#nivelExperiencia');

    /**
     * Función pura de cálculo diagnóstica (desacoplada del DOM)
     */
    function calcularDiagnostico(respuestas) {
        const puntajes = {
            'MVVM': 0,
            'MVI': 0,
            'Clean Architecture': 0,
            'Modular Architecture': 0,
            'Compose UDF': 0,
            'MVU / Redux': 0,
            'VIPER': 0,
            'Monolito / MVP': 0
        };

        for (let i = 1; i <= 20; i++) {
            const resp = respuestas[`p${i}`];
            const regla = matrizPesos[`p${i}`]?.[resp];
            if (regla) {
                for (const [arqui, puntos] of Object.entries(regla)) {
                    if (puntajes[arqui] !== undefined) {
                        puntajes[arqui] += puntos;
                    }
                }
            }
        }

        let mejorArquitectura = 'MVVM';
        let maxPuntaje = -1;
        let totalPuntos = 0;

        for (const [arqui, pts] of Object.entries(puntajes)) {
            totalPuntos += pts;
            if (pts > maxPuntaje) {
                maxPuntaje = pts;
                mejorArquitectura = arqui;
            }
        }

        return {
            mejorArquitectura,
            puntajes,
            totalPuntos,
            infoGanadora: infoArquitecturas[mejorArquitectura] || infoArquitecturas['MVVM']
        };
    }

    // Limpieza reactiva de errores visuales
    form.addEventListener('change', (e) => {
        const fieldset = e.target.closest('fieldset');
        if (fieldset) {
            fieldset.classList.remove('border-danger', 'bg-danger-subtle');
            fieldset.classList.add('border-success-subtle');
        }
        if ((e.target.id === 'nivelExperiencia' || e.target.name === 'nivelExperiencia') && e.target.value) {
            selectExperiencia?.classList.remove('is-invalid');
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Extracción en O(1) con FormData nativo
        const formData = new FormData(form);
        const respuestas = Object.fromEntries(formData.entries());
        if (!respuestas.nivelExperiencia && selectExperiencia?.value) {
            respuestas.nivelExperiencia = selectExperiencia.value;
        }
        let formularioValido = true;
        let primerElementoFaltante = null;

        // Validar select de experiencia
        if (!respuestas.nivelExperiencia) {
            selectExperiencia?.classList.add('is-invalid');
            formularioValido = false;
            primerElementoFaltante = selectExperiencia;
        } else {
            selectExperiencia?.classList.remove('is-invalid');
        }

        // Validar las 20 preguntas usando sus contenedores fieldset
        for (let i = 1; i <= 20; i++) {
            const fieldset = form.querySelector(`input[name="p${i}"]`)?.closest('fieldset');
            if (!respuestas[`p${i}`]) {
                formularioValido = false;
                if (!primerElementoFaltante) primerElementoFaltante = fieldset;
                fieldset?.classList.add('border-danger', 'bg-danger-subtle');
            } else {
                fieldset?.classList.remove('border-danger', 'bg-danger-subtle');
                fieldset?.classList.add('border-success-subtle');
            }
        }

        if (!formularioValido) {
            Swal.fire({
                icon: 'warning',
                title: 'Preguntas Incompletas',
                text: 'Por favor responde todas las preguntas y campos requeridos para calcular el diagnóstico.',
                confirmButtonColor: '#4f46e5'
            });

            primerElementoFaltante?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        // Ejecutar cálculo puro
        const { mejorArquitectura, puntajes, totalPuntos, infoGanadora } = calcularDiagnostico(respuestas);

        // Guardar resultado en localStorage (Criterio 3.6)
        try {
            localStorage.setItem('diagnosticoAndroid', JSON.stringify({
                recomendada: mejorArquitectura,
                experiencia: respuestas.nivelExperiencia || 'no_especificado',
                fecha: new Date().toISOString()
            }));
        } catch (err) {
            console.warn('LocalStorage no disponible:', err);
        }

        // Renderizar dinámicamente en el DOM
        tituloArquitectura.textContent = infoGanadora.nombre;
        resumenArquitectura.textContent = infoGanadora.resumen;
        btnVerArquitectura.href = infoGanadora.pagina;

        // Renderizar las 4 arquitecturas más compatibles con su porcentaje
        barrasContainer.innerHTML = Object.entries(puntajes)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4)
            .map(([arqui, pts]) => {
                const porcentaje = totalPuntos > 0 ? Math.round((pts / totalPuntos) * 100) : 0;
                const color = infoArquitecturas[arqui]?.color || '#4f46e5';
                return `
                    <div class="col-12 col-md-6 mb-3">
                        <div class="d-flex justify-content-between small fw-semibold text-dark mb-1">
                            <span>${arqui}</span>
                            <span>${porcentaje}%</span>
                        </div>
                        <div class="progress" style="height: 12px; border-radius: 6px;">
                            <div class="progress-bar" role="progressbar" style="width: ${porcentaje}%; background-color: ${color};" aria-valuenow="${porcentaje}" aria-valuemin="0" aria-valuemax="100" aria-label="Compatibilidad ${arqui}"></div>
                        </div>
                    </div>
                `;
            }).join('');

        // Mostrar contenedor de resultado directamente debajo del formulario y hacer scroll
        resultadoContainer.classList.remove('d-none');
        resultadoContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
