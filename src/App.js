import logo from './logo.svg';
import './App.css';
import Noticia from './components/Noticia';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <header>
        {/* Nota: Logo arriba del título, acordarse de mirar bien el tipo de imagen */}
        <img src="img/logo.jpeg" alt="Logo Colegio San Blas" className="logo" />
        <h1>Noticias del Colegio San Blas</h1>
        <p>¡Bienvenido a nuestra revista digital de noticias escolares!</p>
      </header>

      <nav>
        <a href="#inicio">Noticias</a>
        <a href="#eventos">Eventos</a>
        <a href="#galeria">Galería</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div className="container">
        {/* La clase "Eventos del San Blas" tiene espacios, lo cual es inusual para una clase CSS. 
            La he mantenido, pero considera renombrarla a algo como "eventos-san-blas" en tu CSS.*/}
        <div className="Eventos del San Blas"> 
          <h2>Bienvenidos a la revista digital de Noticias del Colegio Privado Subvencionado San Blas</h2>
          <p>Este es el espacio digital oficial para mantener informada a toda nuestra comunidad educativa sobre el acontecer diario de nuestra querida institución en Obligado. Como pilar de la educación en el corazón de las Colonias Unidas por más de 70 años, nuestro compromiso es con la excelencia académica y la comunicación transparente.
            Aquí encontrarán las últimas noticias, comunicados importantes, los logros de nuestros estudiantes en el ámbito académico, deportivo y artístico, así como información sobre los próximos eventos que nos unen como la gran familia San Blas.
            Les invitamos a navegar por nuestras secciones para estar siempre al día.
            </p>
          <p>Colegio San Blas: Tradición que educa, futuro que inspira.</p>
        </div>

        {
          data.noticias.map((noticia, index) => (
            <Noticia
              key={index}
              titulo={noticia.titulo}
              fecha={noticia.fecha}
              contenido={noticia.contenido}
              imagenes={noticia.imagenes}
            />
          ))
        }


        <div className="noticia">
          <h2>Estudiantes desarrollan una aplicación web para optimizar la gestión de turnos en el Centro de Salud de Obligado</h2>
          <p><strong>Fecha:</strong> 27 de octubre del 2025</p>
          <p>En un mundo cada vez más digitalizado, un grupo de jóvenes estudiantes ha decidido aplicar sus conocimientos para resolver un problema cotidiano en su comunidad: las largas esperas en el centro de salud local. Alexis Krug, Nehemias Troche, Luana Scholler y Kiara Trombbeta son los artífices de una nueva aplicación web diseñada para modernizar el sistema de turnos, reducir los tiempos de espera y, en consecuencia, mejorar significativamente la atencion de los pacientes.
            La iniciativa surge como respuesta a la necesidad de incorporar herramientas tecnológicas que faciliten la gestión y mejoren la accesibilidad a la atención médica. "Observamos la frustración de la gente al tener que esperar horas para ser atendida y pensamos que podíamos hacer algo al respecto", comenta Nehemias Troche, uno de los desarrolladores del proyecto.
            El sistema propuesto permite a los pacientes solicitar y gestionar sus turnos de manera remota, evitando aglomeraciones y optimizando la organización del personal de salud. La plataforma busca ofrecer una interfaz sencilla e intuitiva para que personas de todas las edades puedan utilizarla sin dificultad. "Nuestro objetivo principal es que la tecnología sea una aliada para el bienestar de la comunidad, no una barrera".
            El equipo, compuesto por Krug, Troche, Scholler y Trombbeta, ha trabajado intensamente en el desarrollo y las pruebas de la aplicación. "Cada uno aportó desde su área de conocimiento para crear una solución funcional. Estamos muy entusiasmados con el potencial que tiene para cambiar la experiencia de los pacientes".
            El proyecto no tiene fines de lucro. Una vez que la aplicación demuestre su efectividad y se realicen los ajustes finales basados en la experiencia de uso, el equipo planea ceder completamente el sistema a la institución pública. "Queremos que este sea un legado para nuestra comunidad. La idea es que el Centro de Salud de Obligado pueda administrarlo de forma autónoma y que los beneficios lleguen a todos".
            Esta iniciativa representa un claro ejemplo de cómo la innovación tecnológica, impulsada por jóvenes talentos locales, puede generar un impacto social positivo y directo, abordando problemas reales y ofreciendo soluciones concretas para mejorar la calidad de los servicios públicos esenciales.</p>
          <img src="img/imagenemi.jpg" alt="Imagen de la noticia" width="550" />
          <img src="img/imagenemi2.jpg" alt="Imagen de la noticia" width="550" />
        </div>

        <div className="noticia">
          <h2>Modernización en Obligado: Lanzan Plataforma Digital para Consultar y Preservar Ordenanzas</h2>
          <p><strong>Fecha:</strong> 27 de octubre del 2025</p>
          <p>La Municipalidad de Obligado da un paso clave hacia la modernización con el desarrollo de una nueva herramienta digital para su página web. Este innovador proyecto permitirá a los ciudadanos verificar ordenanzas y resoluciones de forma rápida y sencilla, al tiempo que busca preservar el archivo histórico del distrito.
            Una de las motivaciones principales de la iniciativa es el rescate de documentos antiguos, muchos de los cuales se encuentran en avanzado estado de deterioro. La digitalización asegurará su conservación y acceso para futuras generaciones, protegiendo el patrimonio legislativo local.
            El equipo responsable de este avance está compuesto por los jóvenes profesionales Mayra Welchen, Mauricio Noguera, Luis Gonzales y Fabricio Teloken. Su trabajo se enfoca en ofrecer una solución que fomente la transparencia y facilite la participación ciudadana.
            Esta plataforma no solo agilizará los trámites y consultas, sino que también posiciona a Obligado como un municipio a la vanguardia en gobierno electrónico, comprometido con la eficiencia y el acceso a la información pública.</p>
          <img src="img/Imagendeproyectodemunicipalidad.jpg" alt="proyecto para la Municipalidad" width="300" />
        </div>

        <div className="noticia">
          <h2>Tradición y Alegría Familiar Marcan el Exitoso San Juan del Colegio San Blas
            El emblemático colegio de Obligado congregó a cientos de personas en una celebración que reafirma la vigencia de la cultura paraguaya con comidas típicas, juegos y shows artísticos para toda la comunidad.iesta del San Juan en el colegio San Blas</h2>
          <p><strong>Fecha:</strong> 20 de Junio</p>
          <p>El inconfundible aroma a mbejú y el eco de las polcas envolvieron el predio del Colegio Privado Subvencionado San Blas durante su esperada Fiesta de San Juan, celebrada este viernes. La institución educativa se convirtió, una vez más, en el epicentro de una de las tradiciones más queridas del calendario paraguayo, atrayendo a una multitud de estudiantes, padres, exalumnos y vecinos de las Colonias Unidas.
            El evento, que se ha consolidado como una cita ineludible en la agenda local, demostró nuevamente por qué es tan esperado. Los patios, adornados con coloridas banderas y guirnaldas, albergaron una kermés que ofreció una auténtica inmersión en la cultura nacional.</p>
          <p>Los puestos de comida, gestionados con entusiasmo por distintas comisiones de padres y alumnos, fueron uno de los principales atractivos. Los asistentes pudieron deleitarse con un menú completo de delicias típicas, donde no faltaron el clásico pastel mandi'o, el crocante pajagua mascada, el sabroso chicharõ trenzado y, por supuesto, el infaltable mbejú hecho al momento.</p>
          <img src="img/sanjuan1.jpg" alt="san juan" width="300" />
        </div>

        <div className="noticia">
          <h2>Estudiantes del colegio San Blas sorprendieron a sus maestros con un emotivo y original homenaje por su día, presentando una obra de teatro basada en el cuento "El maestro" de Rafael Barrett.</h2>
          <p><strong>Fecha:</strong> 30 de Abril</p>
          <p>La adaptación teatral, que tuvo como protagonista al emblemático personaje Señor Cuadrado, fue el resultado de un proyecto coordinado por Mayra Welchen y supervisado por el profesor Fernando Cristaldo. Los alumnos se sumergieron en la historia para darle vida a este personaje, símbolo de la vocación docente, a través de una puesta en escena que exploró las alegrías, desafíos y sacrificios de la profesión.
            El público, conformado por todo el cuerpo docente del colegio, aplaudió la conmovedora interpretación. Este gesto no solo demostró el talento de los jóvenes artistas, sino también su profundo aprecio por la labor diaria de sus educadores. La iniciativa se convirtió en uno de los momentos más destacados de la semana de celebraciones en honor a los maestros.</p>
          <img src="img/teatro.jpg" alt="sorprendieron" width="300" />
          <img src="img/teatro 2.jpg" alt="sorprendieron" width="300" />
        </div>

        <div className="noticia">
          <h2>Elecciones del 2025</h2>
          <p><strong>Fecha: </strong>3 de abril</p>
          <p>La victoria de la Lista 1 fue recibida con gran alegria por sus simpatizantes, acto realizado en el estadio del colegio. El equipo de la lista 1 siendo el capitan Ulises Sotelo basó su campaña en tres pilares fundamentales: la promoción de más actividades de integración deportiva y cultural, la creación de un programa de apoyo académico entre pares y la mejora de los espacios comunes para los estudiantes.</p>
          <p>La dirección del colegio felicitó a todos los participantes por el alto nivel de compromiso y madurez demostrado durante todo el proceso electoral, que sin duda fortalece la formación en valores democráticos de los jóvenes.</p>
          <p>Desde aquí, nuestras felicitaciones a Ulises Sotelo y a todo el equipo de la Lista 1 por su contundente victoria. Una clara demostración de que la juventud de Itapúa está comprometida y lista para asumir nuevos desafíos.</p>
          <img src="img/Imagen 1.jpg" alt="vistaso del colegio" width="300" />
        </div>

        <div className="noticia">
          <h2>Vibrante Desfile del Colegio San Blas Celebra la Tradición y el Futuro en Obligado</h2>
          <p><strong>Fecha:</strong> 25 de mayo del 2025</p>
          <p> Las calles se vistieron de gala para presenciar el tan esperado desfile del aniversario de esta hermosa ciudad con la participacion del prestigioso Colegio Privado Subvencionado San Blas, una institución con más de 70 años de trayectoria forjando el futuro de la juventud en el corazón de las Colonias Unidas.</p>
          <p>Con un entusiasmo contagiante, estudiantes, docentes y directivos de la casa de estudios marcharon con orgullo, exhibiendo la rica historia y la vibrante actualidad del colegio. Desde los más pequeños del nivel inicial hasta los jóvenes bachilleres, cada uno de los más de 900 alumnos participó con esmero en este evento que ya es una tradición en nuestra comunidad.</p>
          <p>El desfile, que recorrió las principales avenidas de Obligado, no solo fue una demostración de disciplina y coordinación, sino también un mosaico de la diversidad de talentos que alberga el San Blas. Los aplausos del público, que se congregó masivamente a lo largo del recorrido, fueron el mejor reconocimiento al esfuerzo y la dedicación de toda la comunidad educativa.</p>
          <p>Este evento cobra un significado especial al enmarcarse en las continuas celebraciones por las más de siete décadas de fundación del colegio, un pilar fundamental en la educación y la cultura de nuestro departamento. La participación activa de exalumnos y padres de familia en la organización y el apoyo al desfile es un claro testimonio del profundo arraigo y el cariño que la comunidad siente por esta emblemática institución.</p>
          <img src="img/Imagen del desfile 1.jpg" alt="desfile" width="300" />
          <img src="img/Imagen del desfile 2.jpg" alt="desfile" width="300" />
          <img src="img/Imagen del desfile 3.jpg" alt="desfile" width="300" />
        </div>

        <div className="noticia" id="eventos">
          {/* Contenido de eventos, si lo hubiera */}
        </div>

        <div className="noticia" id="galeria">
          <h2>Galería del colegio</h2>
          <p>Imágenes o contenido de la galería:</p>
          <img src="img/Imagen 1.jpg" alt="vistaso del colegio" width="300" />
          <img src="img/Imagen 2.jpg" alt="vistaso del colegio" width="300" />
          <img src="img/Imagen 3.jpg" alt="vistaso del colegio" width="300" />
          <img src="img/Imagen 4.jpg" alt="vistaso del colegio" width="300" />
          <img src="img/Imagen 5.jpg" alt="vistaso del colegio" width="300" />
          <img src="img/Imagen 6.jpg" alt="vistaso del colegio" width="300" />
          <img src="img/Imagen 7.jpeg" alt="vistaso del colegio" width="300" />
          <img src="img/Imagen 8.jpeg" alt="vistaso del colegio" width="300" />
          <img src="img/Imagen 9.jpeg" alt="vistaso del colegio" width="300" />
        </div>

        <div className="noticia" id="contacto">
          <h2>Contacto</h2>
          <p>Información de contacto: (071) 720 055 </p>
          <p>Culquier consulta se puede hacer desde este numero o yendo al colegio donde se lo atendera. Muchas Gracias</p>
          <p>Hecho por Guillermo Blaich, Joel Benítez, Keyla Benedix, Lucas Duré y Eliel Almada</p>
        </div>
      </div>

      <footer>
        &copy; 2025 Colegio San Blas, BTI - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
