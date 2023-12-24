const inputFile = document.getElementById('inputFile');
const contenidoArchivo = document.getElementById('contenido-archivo');
inputFile.addEventListener('change', function(event) {
  const archivo = event.target.files[0];
  if (!archivo) {
    return;
  }
  const lector = new FileReader();
  lector.onload = function() {
    const contenido = lector.result;
    contenidoArchivo.textContent = contenido;
    document.getElementById('content').innerHTML = marked.parse(contenido);
  };
  lector.readAsText(archivo);
});

var xhr = new XMLHttpRequest();
xhr.open('GET', 'wikis.json', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var contenido = xhr.responseText;
    console.log(contenido);
    nombreDeLaFuncion(contenido);
        
  }
    
};
xhr.send();

function nombreDeLaFuncion(contenido) {
    // Código que hace algo con los parámetros
    // Puedes realizar cualquier acción aquí
    const baseObjeto = JSON.parse(contenido);

    const grops = baseObjeto.groups;

    for (const key in grops) {
      if (grops.hasOwnProperty(key)) {
        const name = grops[key];
        const title = name.Title;
        console.log("Name:", name);
        console.log("titile:", title);
        console.log("####");
        for (const keyy in name) {
          if (name.hasOwnProperty(keyy)) {
            const nameP = name[keyy];
            const titleP = nameP.Title;
            const markdown = nameP.Markdown;
            if(titleP != null){
              console.log("Name:", nameP);
              console.log("titile:", titleP);
              console.log("markdown", markdown);
              console.log("========================");
            }
            
          }
        }
        console.log("------------------------");
      }
    }
  }





document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#titler');
    const subtitle = document.querySelector('#sutT');
    const I = document.querySelector('#I');
    const A = document.querySelector('#P');
    const C = document.querySelector('#S');
    const Acer = document.querySelector('#AT');
    const D = document.querySelector("#D");
    const text = 'KenderDev\n proyects';
  
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
    typeWriter(A,"Kits de inicio",0);
    typeWriter(C,"soporte",0);
    typeWriter(D,"Discord",0);
    typeWriter(title, text, 0);
    setTimeout(() => {
      const subtitleText = 'El launcher mas seguro';
      typeWriter(subtitle, subtitleText, 0);
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







