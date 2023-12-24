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


var xhr = new XMLHttpRequest();
xhr.open('GET', '/jsonFiles/wikis.json', true);
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

    const grops = baseObjeto.group;

    for (const key in grops) {
      if (grops.hasOwnProperty(key)) {
        const name = grops[key];
        const title = name.Title;
        console.log("Title:", title);
        console.log("key:", key);
        console.log("------------------------");

        // Obtener una referencia al elemento contenedor en el que deseas agregar el grupo
        const contenedor = document.getElementById("WikiIndex"); // Reemplaza "miContenedor" con el ID de tu contenedor

        const grups = NewGroup(title);

        contenedor.appendChild(grups);
        for (const keyy in name) {
            if (name.hasOwnProperty(keyy)) {
              const namee = name[keyy];
              const titlee = namee.Title;
              if(titlee != null){
                const Markdown = namee.Markdown;

                
                newPage(titlee,Markdown + ".md");
                console.log("Title:", titlee);
                console.log("key:", keyy);
                console.log("markdownFile", Markdown);
                console.log("------------------------");
                
                
              }
              
            }
          }
      }
    }
  }
function NewGroup(Title){
  const titlee = document.createElement("h5");
  titlee.textContent = ">>>>" + Title + "<<<<";
  return titlee;
}
function newPage(Title, markdown){
    const titlee = document.createElement("p");
    titlee.textContent = Title;

    const contenedor = document.getElementById("WikiIndex"); // Reemplaza "miContenedor" con el ID de tu contenedor

    contenedor.appendChild(titlee);
    console.log("qwerqwerqwerqwe",markdown);
    titlee.addEventListener("click", function() {
        fetch(markdown)
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo cargar el archivo.');
          }
          return response.text(); // O .json() si es un archivo JSON
        })
        .then(data => {
          // Trabaja con el contenido del archivo aquí
          console.log(data);
          document.getElementById('Markdown').innerHTML = marked.parse(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
        
      });
    titlee.addEventListener("mouseleave", function() {
      this.style.color = "white"; // Establecer el color de fondo original
      this.style.transform = "none"; // Eliminar la transformación translateY
    });
    // Agregar estilos para el hover directamente en JavaScript
    titlee.addEventListener("mouseenter", function() {
      this.style.color = "#b2b2b2";
    });
  
    
}



function readFile(Path){
  fetch(Path)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo.');
    }
    return response.text(); // O .json() si es un archivo JSON
  })
  .then(data => {
    // Trabaja con el contenido del archivo aquí
    console.log(data);
    return data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}