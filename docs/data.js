//llamamos a un Json de las empresas


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
  if (rutText === '') {
    errorTxt.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert" id="errorTxt"> Error: Debes ingresar un rut </div>';
    // Limpiar el textarea
    document.getElementById('inputRut').value = '';
  } else {
    const currentUser = firebase.auth().currentUser;
    const rutText = inputRut.value;
    const newVisitKey = firebase.database().ref().child('visits').push().key;
    firebase.database().ref(`visits/${newVisitKey}`).set({
      creator: currentUser,      
      Rut: rutText,
      email: 0,
      name: 0,
      Patente: 0,
    });
    // Limpiar el textarea
    document.getElementById('inputRut').value = '';   
  }
};

function options() {
  event.stopPropagation();
  const optionVis = document.getElementById('inputGroupSelect01');
  firebase.database().ref('visits/' + optionVis).once('value', function(post) {   
    firebase.database().ref('visits/').child(optionVis).update({
      option: optionVis,
    });
  });
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
      name:nameReserve,
      patente:patenteReserve,
      espacio:espacioReserve,
      numPersonas:numPersonasReserve,
      observaciones:ObservacionesReserve
    });
  }
});
/**********************************************Envio Emails*************************************************/
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

  modal.innerHTML = `<div></div>`;
});
/** ******************************FIN Politica de Privacidad***************************************** */