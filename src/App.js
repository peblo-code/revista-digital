import './App.css';
import Noticia from './components/Noticia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import { useEffect, useState } from 'react';
import logoImg from './logo.jpeg';

function App() {

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const noticiasCol = collection(db, 'noticias');
      const noticiasSnapshot = await getDocs(noticiasCol);
      const noticiasList = noticiasSnapshot.docs.map(doc => {
        const data = doc.data();
        // Firestore Timestamp has toDate(); convert to string for rendering
        let fecha = '';
        if (data && data.fecha) {
          if (typeof data.fecha.toDate === 'function') {
            try {
              // Mostrar solo la fecha en español, sin la hora
              fecha = data.fecha.toDate().toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              });
            } catch (e) {
              fecha = String(data.fecha);
            }
          } else {
            fecha = String(data.fecha);
          }
        }
        return { id: doc.id, ...data, fecha };
      });
      setNoticias(noticiasList);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        {/* Nota: Logo arriba del título, acordarse de mirar bien el tipo de imagen */}
        <img src={logoImg} alt="Logo Colegio San Blas" className="logo" />
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
          noticias.map((noticia, index) => (
            <Noticia
              key={index}
              titulo={noticia.titulo}
              fecha={noticia.fecha}
              contenido={noticia.contenido}
              imagenes={noticia.imagenes}
            />
          ))
        }

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
