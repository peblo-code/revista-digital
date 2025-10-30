export default function Header({ logoImg, titulo, descripcion }) {
    return (
        <>
            <header>
                {/* Nota: Logo arriba del título, acordarse de mirar bien el tipo de imagen */}
                <img src={logoImg} alt="Logo Colegio San Blas" className="logo" />
                <div className="titulo-header">
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>
            </header>
            
            <nav>
                <a href="#inicio">Noticias</a>
                <a href="#eventos">Eventos</a>
                <a href="#galeria">Galería</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </>
    )};