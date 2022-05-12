function mostrarAbout(){
    const about = document.getElementById('aboutme');
    about.classList.toggle('mostrar');
    const arrow = document.getElementById('arrow__clicked');
    arrow.classList.toggle('rotate')

    const sectionTecnologias = document.getElementById('tecnologias');
    sectionTecnologias.classList.toggle('ocultar');
}