export default function Galeria({galeria}) {
    return (
        <div className="galeria" id="galeria">
            <div className="titulo-galeria">
                <h2>Galería del colegio</h2>
                <p>Imágenes o contenido de la galería:</p>
            </div>
          {galeria.map((img, index) => (
            <img key={index} src={`/static/img/${img.imagen}`} alt="imagen de la galería" width="300" />
          ))}
        </div>
    );
}