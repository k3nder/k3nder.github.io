document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#titler');
    const subtitle = document.querySelector('#sutT');
    const I = document.querySelector('#I');
    const A = document.querySelector('#P');
    const C = document.querySelector('#S');
    const Acer = document.querySelector('#AT');
    const D = document.querySelector("#D");
    const text = 'No se que poner aqui xd';
  
    const typeWriter = (element, text, i) => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1), 100);
      }
    };
  
    const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo HTML actual
  
  // Verificar en qué página te encuentras y realizar acciones correspondientes
    if (currentPage === 'acercade.html') {
      console.log('Estás en la página: mi_pagina.html');
      // Aquí puedes colocar el código que deseas ejecutar en esa página específica
      typeWriter(Acer,'Acerca de el launcher',0);
      // Seleccionar el elemento que queremos observar
      
      
  
      // Configurar el Intersection Observer
      const options = {
        root: null, // Observar en el viewport
        rootMargin: '0px', // Margen adicional al rededor del viewport
        threshold: 0.5, // Porcentaje de intersección requerido para disparar la callback
      };
  
      // Callback que se ejecutará cuando el elemento esté en el campo de visión
      const MTSV = (text,id) => {
        const callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // El elemento está en el campo de visión
            console.log('El texto está visible en el campo de visión');
            setTimeout(() => {
              typeWriter(id,text,0)
            }, text.length * 100 + 1000);
    
            
          } else {
            // El elemento no está en el campo de visión
           console.log('El texto no está visible en el campo de visión');
          }
        });
      };
        // Crear el Intersection Observer
      const observer = new IntersectionObserver(callback, options);
  
      // Iniciar la observación del elemento
      observer.observe(id);
      };
  
      const inf = document.getElementById('SAT');
      const info = document.getElementById('info');
      
      MTSV("Estamos trabajando en mejoras muchas cosas aqui hay un resumen de ellas",inf);
  
      MTSV("La lista es la siguiente: ", info );
      
      }
    
    typeWriter(I,"Inicio",0);
    typeWriter(A,"proyectos",0);
    typeWriter(C,"soporte",0);
    typeWriter(D,"Discord",0);
    typeWriter(title, text, 0);
    setTimeout(() => {
      const subtitleText = 'El launcher mas seguro';
      typeWriter(subtitle, "manden ideas por whatsApp, esta seria una pagina web para el grupo de los avengers", 0);
    }, text.length * 100 + 1000);
    
  });
  
  document.getElementById('inst').addEventListener('click', function() {
    // URL del archivo que deseas descargar
    const url = 'https://bitbucket.org/ltbase/files/downloads/LauncherTrinity.exe';
  
    // Crear un enlace temporal
    const enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = url;
  
    // Agregar el enlace temporal al documento y activarlo para iniciar la descarga
    document.body.appendChild(enlaceTemporal);
    enlaceTemporal.click();
  
    // Remover el enlace temporal del documento después de iniciada la descarga
    document.body.removeChild(enlaceTemporal);
  });