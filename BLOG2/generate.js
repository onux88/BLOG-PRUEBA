const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const postsData = [
    {
        file: 'articulo1-ia-generativa.html',
        title: 'El Despertar de la IA Generativa',
        category: 'Introducción',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="mb-4 text-xl font-light text-slate-500">La inteligencia artificial generativa ha avanzado a pasos agigantados durante los últimos años. Hoy en día, modelos como GPT-4 o Midjourney son capaces de crear texto, imágenes y hasta bases de código complejas con una fluidez que roza lo humano.</p>
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800">¿Cómo funciona exactamente?</h2>
            <p class="mb-4">Estos algoritmos utilizan redes neuronales masivas entrenadas con enormes fragmentos de la web para predecir y generar el siguiente mejor paso iterativo (ya sea la siguiente sílaba o píxel), aprendiendo patrones de lenguaje y estética estructural a un nivel extraordinario.</p>
            <p class="mb-4">El impacto socio-económico de esta tecnología apenas empieza a sentirse. Desde la automatización masiva de tareas de redacción, programación básica, hasta diseño y atención al cliente, la IA generativa no va a reemplazar humanos, sino que va a desplazar a humanos que no utilicen estas herramientas por humanos que sí sepan aprovecharlas en su flujo de trabajo diario.</p>
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800">Hacia el futuro cercano</h2>
            <p class="mb-4">Hacia dónde nos dirigimos es la gran incógnita. Si las proyecciones de ley de escala computacional se mantienen estables, en tan solo de 3 a 5 años podríamos tener herramientas con verdaderas capacidades iterativas y secuenciales operando sin fricción.</p>
        `
    },
    {
        file: 'articulo2-machine-learning.html',
        title: 'Conceptos Básicos: Machine Learning',
        category: 'Introducción',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="mb-4 text-xl font-light text-slate-500">El Machine Learning (o Aprendizaje Automático) es la disciplina científica de las ciencias de cómputo y pilar de la inteligencia artificial moderna, que se encarga de crear sistemas que aprenden iterativamente sin reglas estrictas.</p>
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800">Aprendizaje Supervisado vs No Supervisado</h2>
            <p class="mb-4">Existen diversas formas en que enseñamos a aprender a estas computadoras. El <strong>aprendizaje supervisado</strong> es el más común, y consiste en mostrarle a la computadora millones de ejemplos ya resueltos (por ejemplo, fotos etiquetadas con "perro" y "gato") hasta que aprenda a identificarlos por su cuenta minimizando márgenes de error.</p>
            <p class="mb-4">Por su parte, el <strong>aprendizaje no supervisado</strong> permite que el algoritmo analice y agrupe por sí solo conjuntos inmensos de información sin categorizar tratar de encontrar inferencias y clústeres ocultos, lo que es súper valioso para la economía y la investigación de mercados.</p>
        `
    },
    {
        file: 'articulo3-medicina.html',
        title: 'IA Revolucionando la Medicina',
        category: 'Aplicaciones',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="mb-4 text-xl font-light text-slate-500">Los algoritmos de auto-aprendizaje han desbloqueado puertas cerradas por décadas en el terreno biológico, permitiendo dar saltos históricos en la medicina moderna para asegurar mayor longevidad y calidad de atención global.</p>
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800">Precisión en diagnóstico médico</h2>
            <p class="mb-4">En la actualidad, cientos de prestigiosos laboratorios y hospitales alrededor del mundo han comenzado a implementar motores visuales automatizados para el análisis de tomografías computarizadas. Estos sistemas identifican diminutas anomalías o nódulos cancerígenos con altísima resolución en etapas tempranas que podrían pasar inadvertidos para un especialista cansado luego de jornadas larguísimas de trabajo.</p>
            <p class="mb-4">Herramientas como AlphaFold lograron lo impensado en años recientes: descubrir las estructuras volumétricas de cada proteína conocida, una proeza equivalente a años continuos de investigación tradicional en una fracción de tiempo irrisoria.</p>
        `
    },
    {
        file: 'articulo4-industria.html',
        title: 'Automatización en la Industria 4.0',
        category: 'Aplicaciones',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="mb-4 text-xl font-light text-slate-500">La denominada Industria 4.0 representa el pináculo de la integración entre la manufactura física y las bases cibernéticas automatizadas interconectadas IoT, con la IA fungiendo como el máximo director de orquesta.</p>
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800">El poder del Mantenimiento Predictivo</h2>
            <p class="mb-4">Anteriormente una compañía lidiaba con la reparación correctiva (cuanto el equipo ya falló) de los motores o el preventivo genérico, deteniendo de manera innecesaria flujos de logística. Ahora, con IA e Internet de las cosas interactuando orgánicamente, presenciamos la era del mantenimiento **predictivo**.</p>
            <p class="mb-4">Capturando firmas microacústicas, temperaturas y métricas de fricción en vivo procesadas por Edge-computing, los motores detonan las alarmas en el milisegundo perfecto antes de su ruptura y envian instrucciones en tiempo real para repuestos. Esto elimina cuellos de botella e ineficiencias de manera espectacular.</p>
        `
    },
    {
        file: 'articulo5-cursos.html',
        title: 'Cursos Recomendados para Empezar',
        category: 'Aprende más',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="mb-4 text-xl font-light text-slate-500">Existen un mundo literalmente infinito de información hoy en día en Internet, lo que en lugar de ayudar tiende a ahogar al que recién enciende su curiosidad. Esta es la hoja de ruta depurada para saltar al charco eficientemente.</p>
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800">Rutas de estudio indispensables</h2>
            <ul class="list-disc list-inside mb-4 space-y-4">
                <li><strong>Coursera y DeepLearning.ai (Andrew Ng):</strong> El bautismo de todo ingeniero que se precie de Silicon Valley. Su especialización en Machine Learning es ya un estandarte en rigor académico, donde aprendes los conceptos desde las propias matemáticas base a código Python.</li>
                <li><strong>Fast.ai:</strong> Diseñado con una filosofía peculiar “from top-down”. Te hace programar y entrenar redes funcionales antes de hundirte la cabeza en derivadas vectoriales y álgebra, resultando fabuloso para motivarte inmediatamente.</li>
                <li><strong>La gran trinidad (Kaggle / PyTorch / HuggingFace):</strong> Una vez con las bases establecidas, la maestría se forja experimentando e integrando lo hecho por miles más. Revisar la documentación al día es imperativo.</li>
            </ul>
        `
    },
    {
        file: 'articulo6-sesgos.html',
        title: 'El Peligro de los Sesgos en la IA',
        category: 'Aprende más',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="mb-4 text-xl font-light text-slate-500">Un algoritmo entrenado masivamente no es más que un prisma en un modelo estocástico: simplemente reflejará con fidelidad cristalina los prejuicios raciales, sistémicos e históricos de la misma sociedad de las que ha sido nutrido para entender el mundo.</p>
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800">La Responsabilidad de la Ética de Datos</h2>
            <p class="mb-4">Mucha de la base contextual inyectada a estos cerebros de silicon se compone de artículos e información subida foros hace 20 años y de literatura sesgada hace 500 años. Si estos set de datos de curación y validación inicial no son filtrados exhaustivamente, las inferencias hechas al respecto tendrán inclinaciones discriminatorias e inaceptables para un producto universal del siglo actual consumido a escalada masiva.</p>
            <p class="mb-4">Es la vital responsabilidad compartida en cada nueva hornada de empresas tecnológicas integrar equipos éticos y mecanismos de recompensas balanceados para que los modelos sean tanto serviciales como universalmente integradores sin desvanecer el contexto cultural inofensivo histórico.</p>
        `
    }
];

const legalPages = [
    {
        file: 'terminos.html',
        title: 'Términos y Condiciones',
        content: `
            <h1 class="text-4xl font-extrabold mb-8 text-slate-800 tracking-tight">Términos y Condiciones Generales de Uso</h1>
            <p class="mb-6 text-lg text-slate-600">Bienvenido a su plataforma informativa. Al acceder, navegas y hacer uso continuado de las informaciones contenidas este sitio web, usted consiente de manera rotunda estar sujeto, regido y amparado por los actuales Términos y Condiciones generales acá delineados de manera taxativa.</p>
            
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800 border-b border-slate-200 pb-2">I. Propiedad Intelectual e Ingeniería Inversa</h2>
            <p class="mb-6 text-slate-600">Absolutamente la totalidad de los contenidos presentados de esta presente web; es decir sus notas, reportes e investigaciones al igual que sus diagramaciones visuales, logotipo y sistemas son considerados propiedad intelectual titular registrada y no deben ser apropiados bajo pretexto de modificación leve ni ser replicados ni indexados comercialmente bajo licencias o productos de monetización alternos externos sin expresa y documentada validación.</p>
            
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800 border-b border-slate-200 pb-2">II. Responsabilidad ante acciones de Terceros y Consecuencias</h2>
            <p class="mb-6 text-slate-600">Toda información técnica dispuesta o descrita aquí responde exclusivamente a resúmenes analíticos interpretados de nuestro propio comité. En ningún universo legal representa la guía oficial ni puede ser citada ni accionada de manera empresarial sin que realicen sus estudios directos a manuales y entes reguladores de mercado o sanidad. Los dueños de esta Web rechazan contundentemente cualquier litigio de daños colaterales monetarios ni empresariales originados tras interpretar de manera literal nuestra bitácora pública de lectura.</p>
            
            <p class="mt-12 text-slate-400 text-sm py-4 border-t border-slate-100">Estos términos fueron publicados, reformados y adaptados en fecha actual (Última actualización: Abril de 2026).</p>
        `
    },
    {
        file: 'privacidad.html',
        title: 'Política de Privacidad',
        content: `
            <h1 class="text-4xl font-extrabold mb-8 text-slate-800 tracking-tight">Política Integral de Privacidad</h1>
            <p class="mb-6 text-lg text-slate-600">Esta directriz y Política de Privacidad expone metodológicamente la manera en que esta plataforma ("Nosotros o El Administrador") procede a recolectar y anonimizar los perfiles técnicos originados durante su estancia pasiva en nuestros servicios.</p>
            
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800 border-b border-slate-200 pb-2">Qué recabamos y de qué orígen</h2>
            <p class="mb-6 text-slate-600">La actual navegación recaba, dentro del umbral natural de las métricas contemporáneas las trazas del ancho de red para estabilizar elementos multimedia del Layout web y reportes anónimos procesados de "Google Tag/Analytics" estandarizados de duración y saltos de sesiones, todo esto excluyendo sistemática y directamente capturas intrusivas directas del IP físico estático privado final del cual consume ni datos interconectados a su cuenta corporativa por lo que jamás identificaremos a su figura social y el dato estadístico no cruzará los linderos perjudiciales de seguridad ni privacidad básica del usuario.</p>
            
            <h2 class="text-2xl font-bold mt-10 mb-4 text-slate-800 border-b border-slate-200 pb-2">Implementación del Framework de Cookies</h2>
            <p class="mb-6 text-slate-600">Por la naturaleza estática e indirecta del formato web desplegado en las presentes versiones se utilizarán pequeños y no maliciosos injertos o "cookies de memoria y localstorage" persistentes que dictaminarán los controles visuales que tú activaste y modificaste. Solo las mantendremos 30 días para efectos de que cuando vuelvas los artículos se acomoden veloz en pantalla de inmediato exactamente en sus mismas iteraciones previas minimizando y optimizando tráfico del Data Center.</p>
            
            <p class="mt-12 text-slate-400 text-sm py-4 border-t border-slate-100">Bajo peticiones explícitas basadas en la actual regulación Europea General (GDPR) y su contraparte de privacidad Global; para revisiones contactar directamente en ventanilla de atención o email corporativo legal compliance del equipo directivo general.</p>
        `
    }
];

// 1. Modificar index.html links
let count = 0;
indexHtml = indexHtml.replace(/<a href="#" class="inline-flex items-center text-sm/g, (match) => {
    if (count < 6) {
        let rs = `<a href="${postsData[count].file}" class="inline-flex items-center text-sm`;
        count++;
        return rs;
    }
    return match;
});

// Cambiar el footer para los links legales
const footerOld = `<div class="mt-8 border-t border-slate-100 pt-8 text-center md:text-right">
                <p class="text-sm text-slate-400">
                    &copy; 2026 Proyecto Blog. Todos los derechos reservados.
                </p>
            </div>`;
const footerNew = `<div class="mt-8 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
                <p class="text-sm text-slate-400">
                    &copy; 2026 IA Insights Blog. Todos los derechos reservados.
                </p>
                <div class="mt-4 md:mt-0 flex space-x-6 text-sm text-slate-500">
                    <a href="terminos.html" class="hover:text-brand-500 font-medium transition-colors">Términos y Condiciones</a>
                    <a href="privacidad.html" class="hover:text-brand-500 font-medium transition-colors">Política de Privacidad</a>
                </div>
            </div>`;
indexHtml = indexHtml.replace(footerOld, footerNew);

// Guardar index.html actualizado
fs.writeFileSync('index.html', indexHtml);

// 2. Extraer el header y el footer base del indexhtml para reusarlo
const headerMatch = indexHtml.match(/([\s\S]*?)<!-- Inicio del contenido principal -->/);
const footerMatch = indexHtml.match(/<!-- Fin del contenido principal -->([\s\S]*?)<\/html>/);

const baseHeader = headerMatch ? headerMatch[1] : '';
const baseFooter = footerMatch ? '<!-- Fin del contenido principal -->\n' + footerMatch[1] + '</html>' : '';

// 3. Generar las páginas de posts
for (let post of postsData) {
    const pageHtml = `${baseHeader}
    <main class="flex-grow pt-28 pb-20 bg-white">
        <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-8">
                <a href="index.html" class="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors mb-6 bg-brand-50 px-4 py-2 rounded-full">
                    <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Volver al inicio
                </a>
                <br>
                <span class="px-3 py-1 bg-brand-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">${post.category}</span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 text-slate-900 tracking-tight leading-tight">${post.title}</h1>
            </div>
            <div class="w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-14 relative group">
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-60"></div>
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out">
            </div>
            <div class="prose prose-lg prose-slate max-w-3xl mx-auto text-slate-700 leading-relaxed font-sans pb-10 border-b border-slate-100">
                ${post.content}
            </div>
        </article>
    </main>
    ${baseFooter}`;
    
    fs.writeFileSync(post.file, pageHtml);
}

// 4. Generar páginas legales
for (let legal of legalPages) {
    const pageHtml = `${baseHeader}
    <main class="flex-grow pt-32 pb-20 bg-slate-50">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="index.html" class="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors mb-8 bg-brand-50 px-4 py-2 rounded-full">
                <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Volver al inicio
            </a>
            <div class="bg-white p-8 md:p-14 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 prose prose-slate max-w-none prose-h1:text-4xl prose-p:text-slate-600 prose-h2:text-2xl">
                ${legal.content}
            </div>
        </div>
    </main>
    ${baseFooter}`;
    
    fs.writeFileSync(legal.file, pageHtml);
}

console.log('Se generaron exitosamente las páginas estáticas del blog!');
