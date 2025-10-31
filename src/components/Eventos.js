export default function Eventos({titulo, fecha, contenido, imagenes}) {
    return (
        <div className="eventos" id="eventos">
          <h2>{titulo}</h2>
          <p><strong>Fecha:</strong> {fecha}</p>
          <p className="descripcion-eventos">{contenido}</p>
            {imagenes && imagenes.length > 0 && (
                <div className="imagenes-noticia">
                    {imagenes.map((imgSrc, index) => (
                        <img 
                            key={index} 
                            src={`/static/img/${imgSrc}`} 
                            alt={`Imagen ${index + 1}`} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}