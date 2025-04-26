const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo",
    kilometraje: 15000,
    combustible: "Híbrido",
    transmisión: "Automática",
    precio: 25000,
    dueñosAnteriores: ["Juan Pérez", "Ana Gómez"],
    especificaciones: {
      motor: {
        tipo: "4 cilindros",
        potencia: "140 HP",
        torque: "190 Nm",
      },
      seguridad: {
        airbags: 8,
        frenosABS: true,
        controlEstabilidad: true,
      },
      dimensiones: {
        largo: "4.63 m",
        ancho: "1.78 m",
        altura: "1.45 m",
      },
    },
    opciones: ["Asientos de cuero", "Pantalla táctil", "Cámara de reversa"],
    historialMantenimiento: [
      {
        fecha: "10/03/2023",
        servicio: "Cambio de aceite",
        costo: 120,
      },
      {
        fecha: "15/07/2023",
        servicio: "Rotación de llantas",
        costo: 50,
      },
    ],
    // Método para calcular depreciación
     calcularDepreciacion: function (añoActual) {
       return this.precio * 0.9 ** (añoActual - this.año);
     },
  };

  let contenedor = document.getElementById("background");

  let imagen = document.createElement("img");
  imagen.src = "https://images.caricos.com/t/toyota/2020_toyota_corolla/images/2560x1440/2020_toyota_corolla_22_2560x1440.jpg";
  imagen.alt = "Toyota Corolla 2020";
  imagen.className = "rounded-lg shadow-lg my-4"; 
  
  contenedor.appendChild(imagen);
  

let html =`

<ul class="border-2 w-[300px] text-center bg-[#373A40] h-[350px] pt-[20px]">
    <li><strong>Marca: </strong>${auto.marca} </li>
    <li><strong>Modelo: </strong>${auto.modelo} </li>
    <li><strong>Año: </strong>${auto.año} </li>
    <li><strong>Color: </strong>${auto.color} </li>
    <li><strong>Kilometraje: </strong>${auto.kilometraje} </li>
    <li><strong>Combustible:</strong> ${auto.combustible} </li>
    <li><strong>Transmision: </strong>${auto.transmisión} </li>
    <li><strong>Precio: $</strong>${auto.precio} </li>
 </ul>

`;

html += `<div class="w-[300px] border-2 text-center bg-[#373A40] pt-[20px] h-[350px]">`;
    html +=`<h3><strong>Especificaciones</strong></h3>`
    for (const key in auto.especificaciones) {
    html +=`<li><strong>${key}:</strong></li><ul> `
    for (let propiedad in auto.especificaciones[key]){
    html +=`<li>${propiedad}: ${auto.especificaciones[key][propiedad]}</li>`
    }
    html += `</ul>`;
}
html += `</div>`;

html += `<div class="w-[300px] border-2 text-center bg-[#373A40] pt-[20px] h-[350px]">`;
html+= `<li><strong>Dueños anteriores:</strong></li><ul>`
for (let i = 0; i < auto.dueñosAnteriores.length; i++) {
html +=`<li>${auto.dueñosAnteriores[i]}</li>` 
}

html += `</ul>`;


html+=`<li><strong>Opciones:</strong></li><ul>`
for (let i = 0; i < auto.opciones.length; i++) {
html+=`<li>${auto.opciones[i]}</li>`
}

html += `</ul>`;
html += `</div>`;

html += `<div class="w-[300px] border-2 text-center bg-[#373A40] pt-[20px] h-[350px]">`;
html+=`<li><strong>Historial de Mantenimiento:</strong></li><ul>`
auto.historialMantenimiento.forEach((item) => {
  html+=`<li>Fecha:${item.fecha}</li>`
  html+=`<li>Servicio:${item.servicio}</li>`
  html+=`<li>Costo:${item.costo}$</li>`
});
html += `</ul>`
html += `</div>`;


document.getElementById("autoInfo").innerHTML=html;