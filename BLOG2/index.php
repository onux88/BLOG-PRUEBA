<?php
// 1. Cargamos los datos de los posts
require_once 'posts.php';

// 2. Cargamos el encabezado de la página (plantilla reutilizable)
require_once 'header.php';
?>

<!-- Sección Hero (Presentación principal) -->
<header class="relative overflow-hidden bg-white pt-20 pb-24 md:pt-32 md:pb-32 text-center isolate">
    <!-- Círculo de fondo con blur (efecto moderno) -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#14b8a6] to-[#3b82f6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            El Futuro es la <br>
            <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 block mt-2">Inteligencia
                Artificial</span>
        </h1>
        <p class="mt-6 text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Descubre cómo las máquinas aprenden, razonan y cambiarán nuestro mundo. Artículos, tutoriales y reflexiones
            sobre el mundo del mañana.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#introduccion"
                class="btn-primary rounded-full px-8 py-3.5 text-white font-medium shadow-lg hover:shadow-teal-500/30 transition-all transform hover:-translate-y-1">
                Comenzar a leer
            </a>
            <a href="#aprende-mas"
                class="rounded-full px-8 py-3.5 text-slate-700 bg-white border border-slate-200 font-medium hover:bg-slate-50 transition-all">
                Cursos y recursos
            </a>
        </div>
    </div>
</header>

<!-- Controles de Filtro -->
<section class="border-b border-slate-200 bg-white sticky top-20 z-40 shadow-sm" id="barra-filtros">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-wrap gap-3 justify-center md:justify-start" id="filtros-container">
            <button
                class="filter-btn active px-6 py-2 rounded-full border border-slate-200 text-sm font-medium transition-colors"
                data-filter="all">Todos</button>
            <button
                class="filter-btn px-6 py-2 rounded-full border border-slate-200 text-sm font-medium hover:text-brand-500 transition-colors"
                data-filter="Introducción">Introducción</button>
            <button
                class="filter-btn px-6 py-2 rounded-full border border-slate-200 text-sm font-medium hover:text-brand-500 transition-colors"
                data-filter="Aplicaciones">Aplicaciones</button>
            <button
                class="filter-btn px-6 py-2 rounded-full border border-slate-200 text-sm font-medium hover:text-brand-500 transition-colors"
                data-filter="Aprende más">Aprende Más</button>
        </div>
    </div>
</section>

<!-- Definición de las Secciones -->
<?php
$sections = [
    'introduccion' => ['title' => 'Introducción', 'filter' => 'Introducción', 'desc' => 'Conoce los fundamentos básicos y el impacto de esta tecnología.'],
    'aplicaciones' => ['title' => 'Aplicaciones', 'filter' => 'Aplicaciones', 'desc' => 'Casos de uso reales donde la IA ya está cambiando las reglas del juego.'],
    'aprende-mas' => ['title' => 'Aprende Más', 'filter' => 'Aprende más', 'desc' => 'Recursos, ética y siguientes pasos en tu viaje educativo.']
];
?>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

    <!-- Iteramos por cada sección definida -->
    <?php foreach ($sections as $id => $section): ?>
        <section id="<?php echo $id; ?>" class="mb-24 scroll-mt-32 category-section">
            <div class="mb-10">
                <div class="flex items-center justify-between mb-2">
                    <h2 class="text-3xl font-bold text-slate-800 tracking-tight"><?php echo $section['title']; ?></h2>
                    <div class="h-px bg-slate-200 flex-grow ml-6 hidden sm:block"></div>
                </div>
                <p class="text-slate-500"><?php echo $section['desc']; ?></p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $hasPosts = false;
                // Listamos los posts que pertenecen a esta categoría
                foreach ($posts as $post):
                    if ($post['category'] === $section['filter']):
                        $hasPosts = true;
                        ?>
                        <article
                            class="post-card group bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-2xl transition-all duration-300 border border-slate-100/50 overflow-hidden flex flex-col h-full transform hover:-translate-y-1"
                            data-category="<?php echo $post['category']; ?>">
                            <div class="aspect-video w-full overflow-hidden relative">
                                <img src="<?php echo $post['image']; ?>" alt="Imagen de <?php echo $post['title']; ?>"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out">
                                <div class="absolute top-4 left-4 z-10">
                                    <span
                                        class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-brand-600 shadow-sm border border-white/50 inline-block font-sans">
                                        <?php echo $post['category']; ?>
                                    </span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col flex-grow relative">
                                <!-- Elemento decorativo del diseño -->
                                <div class="absolute h-1 w-12 bg-gradient-to-r from-teal-400 to-blue-500 top-0 left-6"></div>

                                <h3
                                    class="text-xl font-bold mb-3 text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                                    <?php echo $post['title']; ?>
                                </h3>
                                <p class="text-slate-500 mb-6 flex-grow leading-relaxed text-sm line-clamp-3">
                                    <?php echo $post['content']; ?>
                                </p>
                                <div class="mt-auto border-t border-slate-100 pt-4">
                                    <a href="#"
                                        class="inline-flex items-center text-sm text-brand-600 font-semibold hover:text-brand-900 transition-colors group">
                                        Leer artículo completo
                                        <svg class="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    <?php
                    endif;
                endforeach;

                // Si no hay posts en esta categoría (preventivo)
                if (!$hasPosts):
                    ?>
                    <div class="col-span-full p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
                        <p class="text-slate-500 italic">No hay publicaciones disponibles en esta categoría por el momento.</p>
                    </div>
                <?php endif; ?>
            </div>
        </section>
    <?php endforeach; ?>

    <!-- Otras Páginas Section (Enlaces) -->
    <section id="otras-paginas" class="mb-12 scroll-mt-32 category-section">
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-bold text-slate-800 tracking-tight">Otras Páginas</h2>
            <div class="h-px bg-slate-200 flex-grow ml-6"></div>
        </div>
        <div
            class="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <!-- Patrón de fondo -->
            <div class="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
            <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-brand-500 opacity-20 rounded-full blur-xl">
            </div>

            <p class="mb-8 text-slate-300 text-lg relative z-10">Explora otros proyectos web desarrollados:</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <a href="#"
                    class="flex flex-col p-6 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-all duration-300 group">
                    <div
                        class="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/20">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    </div>
                    <span class="font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">Portafolio
                        Web</span>
                    <span class="text-sm text-slate-400">Diseño personal y proyectos.</span>
                </a>

                <a href="#"
                    class="flex flex-col p-6 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                    <div
                        class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/20">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                            </path>
                        </svg>
                    </div>
                    <span class="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">E-Commerce
                        Moderno</span>
                    <span class="text-sm text-slate-400">Tienda con carrito y pagos.</span>
                </a>
            </div>
        </div>
    </section>
</div>

<?php
// 3. Cargamos el pie de página
require_once 'footer.php';
?>