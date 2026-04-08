document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto Glassmorphism en el Navbar al hacer scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('nav-scrolled');
            // Quitar estilos transparentes iniciales si tuviera
            navbar.classList.remove('border-transparent');
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.add('border-transparent');
        }
    });

    // 2. Sistema de Filtrado de Posts por Categoría
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.category-section');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Eliminar estado activo de todos los botones
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-teal-500', 'text-white');
                // Restauramos clases hover
                if(!b.classList.contains('active')) {
                    b.classList.add('hover:text-brand-500');
                }
            });
            
            // Añadir estado activo al botón clickeado
            btn.classList.add('active');
            btn.classList.remove('hover:text-brand-500');
            
            const categoryFilter = btn.getAttribute('data-filter');
            
            // Lógica de mostrar / ocultar secciones
            sections.forEach(section => {
                // Reiniciar animación quitando la clase
                section.classList.remove('animate-fade-up');
                
                if (categoryFilter === 'all') {
                    // Mostrar todas
                    section.style.display = 'block';
                    // Trigger reflow para reiniciar animación
                    void section.offsetWidth;
                    section.classList.add('animate-fade-up');
                } else {
                    const sectionTitleNodes = section.querySelector('h2');
                    
                    if (section.id !== 'otras-paginas') {
                        // Comparar con el título de la sección o su filter implícito
                        const title = sectionTitleNodes ? sectionTitleNodes.innerText.trim() : '';
                        
                        if (title === categoryFilter) {
                            section.style.display = 'block';
                            void section.offsetWidth;
                            section.classList.add('animate-fade-up');
                        } else {
                            section.style.display = 'none';
                        }
                    } else {
                        // Ocultar "Otras páginas" si estamos filtrando temas específicos
                        // para enfocar la lectura en los posts de esa categoría
                        section.style.display = 'none';
                    }
                }
                
                // Limpiar la clase de animación después de que termine para que pueda volver a usarse
                setTimeout(() => {
                    section.classList.remove('animate-fade-up');
                }, 600);
            });
            
            // Smooth scroll leve para ubicar al usuario si está muy abajo
            const isMobile = window.innerWidth < 768;
            if(isMobile) {
                const navHeight = 120;
                const offsetPosition = document.getElementById('barra-filtros').offsetTop - navHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
