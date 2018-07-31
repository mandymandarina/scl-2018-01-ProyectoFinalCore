window.datos = [];
window.onload = (() => {
  const lista = document.getElementById('listaEmpresas');
  const list = document.getElementById('listaEmpresa');
  fetch('../data/empresas.json')
    .then(response => response.json())
    .then(data => {
      window.datos = data;
      console.log(data);
      data.forEach(element => {
        let optionEmpresa = document.createElement('option');
        optionEmpresa.text = element.name;
        lista.add(optionEmpresa);
      });
      data.forEach(element => {
        let optionEmpresas = document.createElement('option');
        optionEmpresas.text = element.name;
        list.add(optionEmpresas);
      });

      console.log('holi');
    });
});// fin de window onload


const seccionPrincipal = document.getElementById('sectionPrincipal');
const seccionVisitas = document.getElementById('sectionVisitas');
const seccionEncomiedas = document.getElementById('sectionEncomiendas');
const seccionRvaEspacios = document.getElementById('sectionEspacios');

// const btnAtras = document.getElementsByClassName("btnAtras");
const btnVisitas = document.getElementById('btnVisitas');
const btnEncomiedas = document.getElementById('btnEncomiendas');
const btnRvaEspacios = document.getElementById('btnReservaEspacios');

btnVisitas.addEventListener('click', () => {
  seccionPrincipal.style.display = 'none';
  seccionVisitas.style.display = 'block';
  seccionEncomiedas.style.display = 'none';
  seccionRvaEspacios.style.display = 'none';
});

btnEncomiedas.addEventListener('click', () => {
  seccionPrincipal.style.display = 'none';
  seccionVisitas.style.display = 'none';
  seccionEncomiedas.style.display = 'block';
  seccionRvaEspacios.style.display = 'none';
});

btnRvaEspacios.addEventListener('click', () => {
  seccionPrincipal.style.display = 'none';
  seccionVisitas.style.display = 'none';
  seccionEncomiedas.style.display = 'none';
  seccionRvaEspacios.style.display = 'block';
});

const atras = (() => {
  if (seccionRvaEspacios.style.display = 'block') {
    seccionPrincipal.style.display = 'none';
    seccionVisitas.style.display = 'none';
    seccionEncomiedas.style.display = 'none';
  }
  if (seccionEncomiedas.style.display = 'block') {
    seccionPrincipal.style.display = 'none';
    seccionVisitas.style.display = 'none';
    seccionRvaEspacios.style.display = 'none';
  }
  if (seccionVisitas.style.display = 'block') {
    seccionPrincipal.style.display = 'none';
    seccionRvaEspacios.style.display = 'none';
    seccionEncomiedas.style.display = 'none';
  }
  if (seccionPrincipal.style.display = 'block') {
    seccionEncomiedas.style.display = 'none';
    seccionVisitas.style.display = 'none';
    seccionRvaEspacios.style.display = 'none';
  }
});

/** ******Pestañas Reserva Espacios*/
const pestIngresoRva = document.getElementById('btnIngresoRva');
const pestHistorialRva = document.getElementById('btnHistoryRva');
const contenidoIngresoRva = document.getElementById('ingresoReserva');
const contenidotHistorialRva = document.getElementById('historyReserva');


pestIngresoRva.addEventListener('click', () => {
  contenidotHistorialRva.style.display = 'none';
  contenidoIngresoRva.style.display = 'block';
});
pestHistorialRva.addEventListener('click', () => {
  contenidotHistorialRva.style.display = 'block';
  contenidoIngresoRva.style.display = 'none';
});
// seccion visitas 
const pestIngresoV = document.getElementById('btnPestIngreso');
const pestHistorialV = document.getElementById('btnPestHistorial');
const contenidoIngresoV = document.getElementById('seccionViIngreso');
const contenidotHistorialV = document.getElementById('seccionViHistorial');

pestIngresoV.addEventListener('click', () => {
  contenidotHistorialV.style.display = 'none';
  contenidoIngresoV.style.display = 'block';
});
pestHistorialV.addEventListener('click', () => {
  contenidotHistorialV.style.display = 'block';
  contenidoIngresoV.style.display = 'none';
});

// Boton cargo y mail

const questYes = document.getElementById('btnSi');
const contenidoYes = document.getElementById('secctionYes');

questYes.addEventListener('click', () =>{
  contenidoYes.style.display = 'block';
});

// flecha para atras

const arrowAtras = document.getElementById('arr');

arrowAtras.addEventListener('click', () =>{
  sectionVisitas.style.display = 'none';
  sectionPrincipal.style.display = 'block';
});

const arrowAtras2 = document.getElementById('arro');

arrowAtras2.addEventListener('click', () =>{
  sectionEncomiendas.style.display = 'none';
  sectionPrincipal.style.display = 'block';
});

const arrowAtras3 = document.getElementById('arrows');

arrowAtras3.addEventListener('click', () =>{
  sectionEncomiendas.style.display = 'none';
  sectionPrincipal.style.display = 'block';
});