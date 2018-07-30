// llamamos a un Json de las empresas


// LOGOUT
window.logout = (() => {
  firebase.auth().signOut()
    .then(() => {
      console.log('chao');
    })
    .catch();
});

function saveData() {
  const rutText = inputRut.value;
  const nameLast = inputName.value;
  const mailText = inputEmail.value;
  const patenteText = inputPatente.value;
  const nameVisitText = inputPerson.value;
  const cargoText = inputCargo.value;
  if (rutText === '') {
    errorTxt.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert" id="errorTxt"> Error: Debes ingresar un rut </div>';
    // Limpiar el textarea
    document.getElementById('inputRut').value = '';
  } else {
    const currentUser = firebase.auth().currentUser;
    const rutText = inputRut.value;
    const newVisitKey = firebase.database().ref().child('visits').push().key;
    firebase.database().ref(`visits/${newVisitKey}`).set({           
      Rut: rutText,
      name: nameLast,
      nameVisit: nameVisitText,     
      email: mailText,      
      Patente: patenteText,
      cargo: cargoText,
    });
    // Limpiar el textarea
    document.getElementById('inputRut').value = '';   
  } 
  saveIntrust();  
};

function saveIntrust() {
  const encargoText = inputEncargo.value;
  const obsText = inputObs.value;
  if (encargoText === '') {
    errorTxt.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert" id="errorTxt"> Error: Debes ingresar un rut </div>';
    // Limpiar el textarea
    document.getElementById('inputEncargo').value = '';  
  } else {
    const currentUserTwo = firebase.auth().currentUser;
    const encargoText = inputEncargo.value;
    const newInKey = firebase.database().ref().child('intrust').push().key;
    firebase.database().ref(`intrust/${newInKey}`).set({
      creator: currentUserTwo,             
      Encomienda: encargoText,
      Observaciones: obsText,       
    });
    document.getElementById('inputEncargo').value = '';  
  }
};

const reservarEspacio = (()=> {
  const rutReserve = inputRutReserva.value;
  const nameReserve = inputNameReserva.value;
  const patenteReserve = inputPatenteReserva.value;
  const espacioReserve = inputEspacioReserva.value;
  const numPersonasReserve = inputPersonasReserva.value;
  const ObservacionesReserve = inputObservaciones.value;

  if (rutReserve === '') {
    errorTxt.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert" id="errorTxt"> Error: Debes ingresar un rut </div>';
    // Limpiar el textarea
    inputRutReserva.value = '';
  } else {
    const newReservaKey = firebase.database().ref().child('Reservas').push().key;
    firebase.database().ref(`Reservas/${newReservaKey}`).set({ 
      Rut: rutReserve,
      name: nameReserve,
      patente: patenteReserve,
      espacio: espacioReserve,
      numPersonas: numPersonasReserve,
      observaciones: ObservacionesReserve
    });
  }
});
/** ********************************************Envio Emails*************************************************/
/*
(function(){
  emailjs.init("<YOUR USER ID>");
})();
const vue = new Vue({
  el: '#app',
  data(){
      return {
          from_name: '',
          from_email: '',
          message: '',
          subject: '',
      }
  },
  methods: {
      enviar(){
          let data = {
              from_name: this.from_name,
              from_email: this.from_email,
              message: this.message,
              subject: this.subject,
          };
          
          emailjs.send("<YOUR SERVICE ID>","<YOUR TEMPLATE ID>", data)
          .then(function(response) {
              if(response.text === 'OK'){
                  alert('El correo se ha enviado de forma exitosa');
              }
             console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
          }, function(err) {
              alert('Ocurrió un problema al enviar el correo');
             console.log("FAILED. error=", err);
          });
      }
  }
});
*/
/** ******************************Politica de Privacidad***************************************** */
window.privacyPolicy = (() => {
  const modal = document.getElementById('modalTerms');
  modal.style.display = 'block';

  modal.innerHTML = '<div></div>';
});
/** ******************************FIN Politica de Privacidad***************************************** */