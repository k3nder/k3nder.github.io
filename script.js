document.addEventListener('DOMContentLoaded', () => {
    const I = document.querySelector('#I');
    const A = document.querySelector('#P');
    const C = document.querySelector('#S');
    const Acer = document.querySelector('#AT');
    const D = document.querySelector("#D");
    const Tie = document.getElementById("Tie");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "config/proyects.json", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var contenido = xhr.responseText;
        console.log(contenido);
        nombreDeLaFuncion(contenido);

    }

  };  
  xhr.send();

  const typeWriter = (element, text, i) => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(element, text, i + 1), 100);
    }
  };


  var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', "config/principal.config.json", true);
    xhr1.onreadystatechange = function () {
      if (xhr1.readyState === 4 && xhr1.status === 200) {
        var contenido = xhr1.responseText;
        console.log(contenido);
        const j = JSON.parse(contenido);
        typeWriter(Tie,j.logo,0);
        
        

    }

  };  
  xhr1.send();

    

  
  
    
  
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
    //setTimeout(() => {
    //  const subtitleText = 'El launcher mas seguro';
    //  typeWriter(subtitle, subtitleText, 0);
    //}, text.length * 100 + 1000);
    
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



function nombreDeLaFuncion(contenido) {
    // Código que hace algo con los parámetros
    // Puedes realizar cualquier acción aquí
    const baseObjeto = JSON.parse(contenido);

    const grops = baseObjeto.Proyects;

    for (const key in grops) {
      if (grops.hasOwnProperty(key)) {
        const name = grops[key];
        const title = name.Title;
        const Description = name.Description;
        const a = name.a;
        const color = name.color;
        console.log("Title:", title);
        console.log("key:", key);
        console.log("description: ", Description);
        console.log("a", a);
        console.log("color", color);
        const imagePath = "scr/" + key + "/img.png"
        console.log("ImagePath", imagePath);
        console.log("------------------------");
        NewProyect(title, Description, a , imagePath, color);
      }
    }
  }
function NewProyect(name, description, a, imagePath, color){
  // Obtener una referencia al elemento contenedor en el que deseas agregar el grupo
  const contenedor = document.getElementById("proyects"); // Reemplaza "miContenedor" con el ID de tu contenedor

  // Crear un div con la clase "LA"
  const divLA = document.createElement("div");

  divLA.style.color = "black";
  divLA.style.textDecoration = "none";
  divLA.style.marginLeft = "10px"; // Ajusta el margen a 10 píxeles
  divLA.style.backgroundColor = color; // Cambia el color de fondo a lightblue
  divLA.style.display = "inline-block";
  divLA.style.margin = "0px";
  divLA.style.width = "210px";
  divLA.style.height = "290px";
  divLA.style.marginLeft = "10px";
  divLA.style.marginBottom = "0px";
  divLA.style.paddingBottom = "0px";





  // Crear un enlace <a> dentro del div
  const enlace = document.createElement("a");
  enlace.href = a;
  enlace.style.color = "back";
  enlace.style.textDecoration = "none";


  // Crear un div con la clase "LAC" dentro del enlace
  const divLAC = document.createElement("div");
  divLAC.style.marginLeft = "15px";

  // Crear un encabezado <h3> con la clase "LAT" dentro del divLAC
  const h3LAT = document.createElement("h3");
  h3LAT.textContent = name;
  h3LAT.style.margin = "0px";
  h3LAT.style.paddingLeft = "20px";
  h3LAT.style.marginLeft = "30px";
  h3LAT.style.textDecoration = "none";
  h3LAT.style.color = "black";

  // Crear un elemento de imagen <img> con la clase "LAIM" dentro del divLAC
  const imgLAIM = document.createElement("img");
  imgLAIM.src = imagePath;
  imgLAIM.style.margin = "0px";
  imgLAIM.style.width = "180px";
  imgLAIM.style.height = "180px";

  // Crear un párrafo <p> dentro del divLAC
  const parrafo = document.createElement("p");
  parrafo.textContent = description;
  parrafo.style.textDecoration = "none";
  parrafo.style.color = "black";

  // Agregar los elementos al DOM en la estructura deseada
  divLAC.appendChild(h3LAT);
  divLAC.appendChild(document.createElement("div")); // Div vacío
  divLAC.appendChild(imgLAIM);
  divLAC.appendChild(parrafo);

  enlace.appendChild(divLAC);
  divLA.appendChild(enlace);
  contenedor.appendChild(divLA);

    // Agregar estilos para el hover directamente en JavaScript
    divLA.addEventListener("mouseenter", function() {
      this.style.backgroundColor = "#4c5c64";
      this.style.transform = "translateY(-10px)";
    });
  
    divLA.addEventListener("mouseleave", function() {
      this.style.backgroundColor = color; // Establecer el color de fondo original
      this.style.transform = "none"; // Eliminar la transformación translateY
    });
}
