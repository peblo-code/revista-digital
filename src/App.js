import Noticia from './components/Noticia';
import Header from './components/Header';
import Galeria from './components/Galeria';
import Descripcion from './components/Descripcion';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import { useEffect, useState } from 'react';

import logo from './logo.jpeg';
import CRUD from './CRUD';
import './App.css';

function App() {

  const [noticias, setNoticias] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [galeria, setGaleria] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // Noticias
      const noticiasCol = collection(db, 'noticias');
      const noticiasSnapshot = await getDocs(noticiasCol);
      const noticiasList = noticiasSnapshot.docs.map(doc => {
        const data = doc.data();
        let fecha = '';
        if (data && data.fecha) {
          if (typeof data.fecha.toDate === 'function') {
            try {
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

      // Galería
      const galeriaCol = collection(db, 'galeria');
      const galeriaSnapshot = await getDocs(galeriaCol);
      const galeriaList = galeriaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGaleria(galeriaList);
      console.log('Galería cargada:', galeriaList);

      // Eventos (opcional, si tienes la colección)
      const eventosCol = collection(db, 'eventos');
      const eventosSnapshot = await getDocs(eventosCol);
      const eventosList = eventosSnapshot.docs.map(doc => {
        const data = doc.data();
        let fecha = '';
        if (data && data.fecha) {
          if (typeof data.fecha.toDate === 'function') {
            try {
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
      setEventos(eventosList);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header
        logoImg={logo}
        titulo="Noticias del Colegio San Blas"
        descripcion="¡Bienvenido a nuestra revista digital de noticias escolares!"
      />

      <div style={{ textAlign: 'right', padding: '0 2em' }}>
        <button onClick={() => setIsAdmin(v => !v)} style={{ padding: '8px 12px', marginTop: '8px' }}>
          {isAdmin ? 'Volver a vista pública' : 'Abrir panel admin'}
        </button>
      </div>
      <div className="container">
        {isAdmin ? (
          <CRUD />
        ) : (
          <>
            <Descripcion />
            {noticias.map((noticia, index) => (
              <Noticia
                key={index}
                titulo={noticia.titulo}
                fecha={noticia.fecha}
                contenido={noticia.contenido}
                imagenes={noticia.imagenes}
              />
            ))}
            {eventos.map((evento, index) => (
              <Noticia
                key={index}
                titulo={evento.titulo}
                fecha={evento.fecha}
                contenido={evento.contenido}
              />
            ))}
            <Galeria galeria={galeria} />
            <div className="noticia" id="contacto">
              <h2>Contacto</h2>
              <p>Información de contacto: (071) 720 055 </p>
              <p>Culquier consulta se puede hacer desde este numero o yendo al colegio donde se lo atendera. Muchas Gracias</p>
              <p>Hecho por Guillermo Blaich, Joel Benítez, Keyla Benedix, Lucas Duré y Eliel Almada</p>
            </div>
          </>
        )}
      </div>

      <footer>
        &copy; 2025 Colegio San Blas, BTI - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
