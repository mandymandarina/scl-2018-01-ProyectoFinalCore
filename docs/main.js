
window.onload = (() => {
  const seccionLogin = document.getElementById('sectionLogin');
  const seccionCenter = document.getElementById('sectionCenter');
  const seccionMuro = document.getElementById('sectionMuro');
  const inputRutUser = document.getElementById('inputRut');
  const sectionProfile = document.getElementById('sectionProfile');
  const sectionRecipes = document.getElementById('sectionRecipes');
  const sectionFavorite = document.getElementById('sectionFavorite');
  inputRutUser.value = '';
  const inputPersonUser = document.getElementById('inputPerson');
  inputPersonUser.value = '';
  const inputPatenteUser = document.getElementById('inputPatente');
  inputPatenteUser.value = '';
  // Limpiar el textarea
 
  document.getElementsByTagName('input').value = '';
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      seccionLogin.style.display = 'none';
      seccionMuro.style.display = 'block';
      seccionCenter.style.display = 'block';

      /*
      const userLogued = firebase.auth().currentUser;
      const newUserKey = firebase.database().ref().child('users').push().key;
              firebase.database().ref(`users/${newUserKey}`).set({
                idUser: userLogued.uid,
                NameUser: userLogued.displayName,
                EmailUser: userLogued.email
              }); 
              */
      // guardamos el usuario que se ha logado en una coleccion de firebase
      // declaramos el usuario actual, el que se logó
      const userLogued = firebase.auth().currentUser;
      const userData = userLogued.rut; // acá sacamos el email del usuario logado
      let userId = userLogued.uid;
      // llamamos a la coleccion que tiene los usuarios
      const allUsersRegister = firebase.database().ref('users/');
      // revisamos la coleccion en ese momento
      allUsersRegister.once('value', function(snapshot) {
        // paso a arreglo el json que trae de firebase

        // recorro ese arreglo hasta llegar a los keys de c/ usuario
        // console.log(arrayUsers)
        /*
        let compare = allUsersRegister.orderByChild("idUser").equalTo(userId).once('value',(snapshot)=>{
          let arrayUsers = Object.entries(snapshot.val());
          console.log(arrayUsers.val());
        })*/

        let arrayUsers = Object.entries(snapshot.val());
        // for (id in arrayUsers) {
        // let arrayIds = arrayUsers[id];
        // let users = arrayIds[1];
        // console.log( "el id del usuario de la coleccion es:  "+users.idUser);
        // console.log( "el id del usuario logado es:  "+userId);
        // comparamos si el email del usuario de la coleccion es el mismo que se esta logando ahora
        let result;
        let found = arrayUsers.find(item => {
          item.idUser === userId;
          return result = true;
        });

        if (result) {
          console.log('usuario ya añadido anteriormente ' + userId);
        } else {
          console.log('añadiendo usuario  ' + userId);
          const newUserKey = firebase.database().ref().child('users').push().key;
          firebase.database().ref(`users/${newUserKey}`).set({
            idUser: userLogued.uid,
            NameUser: userLogued.displayName,
            RutUser: userLogued.rut
          });
        }
      });
    } else {
      seccionLogin.style.display = 'block';
      seccionMuro.style.display = 'none';
      seccionCenter.style.display = 'none';
      sectionProfile.style.display = 'none';
    }
  });
});// fin de window onload

// ================SECCIONES DEL DOM=============================================
const seccionLogin = document.getElementById('sectionLogin');
const seccionCenter = document.getElementById('sectionCenter');
const seccionRegistro = document.getElementById('registroUser');
const seccionMuro = document.getElementById('sectionMuro');
// ==========================FUNCIONALIDAD LOGIN=====================================


// LOGARSE CON NOMBRE Y RUT


const inputRutUser = document.getElementById('inputRut');
inputRutUser.addEventListener('click', () => {
  inputRutUser.value = '';
  const alertLogin = document.getElementById('alertPassword');
  alertLogin.innerHTML = '<div id="alertPassword"></div>';
});


// LINK A FORMULARIO PARA REGISTRAR NUEVO USUARIO
const btnFormRegister = document.getElementById('registrate');
btnFormRegister.addEventListener('click', () => {
  seccionRegistro.style.display = 'block';
  seccionLogin.style.display = 'none';
});
// LINK PARA REGRESAR A LA SECCION DE LOGIN
const btnReturnLogin = document.getElementById('loginBack');
btnReturnLogin.addEventListener('click', () => {
  seccionLogin.style.display = 'block';
  seccionCenter.style.display = 'none';
  seccionRegistro.style.display = 'none';
  const alertReg = document.getElementById('alertRegister');
  alertReg.innerHTML = '<div id="alertPassword"></div>';
});

// REGISTRO DE USUARIO NUEVO
const btnRegister = document.getElementById('btnRegistrarse');

btnRegister.addEventListener('click', () => {

  const rutVisitor = document.getElementById('inputRut').value;
  const nameVisitor = document.getElementById('inputName').value;
  const emailVisitor = document.getElementById('inputCorreo').value;
  const cargoVisitor = document.getElementById('inputCargo').value;

  const inputRutVisitor = document.getElementById('inputRut');
  inputRutVisitor.value = '';
  const inputNameVisitor = document.getElementById('inputName');
  inputNameVisitor.value = '';
  const inputEmailVisitor = document.getElementById('inputCorreo');
  inputEmailVisitor.value = '';
  const inputCargoVisitor = document.getElementById('inputCargo');
  inputCargoVisitor.value = '';

  console.log("registrarse");
  
  
  

  const uid = 'rut';

});


/** ******************BOTON ELIMINAR MENSAJE *********************************************/

Window.confirmar = (()=>{
  const confirm = document.getElementById('confirm');
  confirm.style.display = 'block';
  const cancelar = document.getElementById('confirmCancelar');
  const aceptar = document.getElementById('confirmConfirmar');
  cancelar.addEventListener('click', () => {
    confirm.style.display = 'none';
  });                          
  aceptar.addEventListener('click', function(event) {
    deleteButtonClicked(event);
    confirm.style.display = 'none';
  });
});

/** ******************SECCION PERFIL *********************************************/
const sectionProfile = document.getElementById('sectionProfile');

const btnProfile = document.getElementById('nameIconFooterProfile');
btnProfile.addEventListener('click', () => {
  seccionLogin.style.display = 'none';
  seccionCenter.style.display = 'none';
  sectionRecipes.style.display = 'none';
  sectionProfile.style.display = 'block';
  sectionFavorite.style.display = 'none';
});

/** ******************FIN SECCION PERFIL *********************************************/


/** ******************SECCION VOLVER ATRAS PERFIL ****************************/
const btnArrowProfile = document.getElementById('btnArrowProfile');
btnArrowProfile.addEventListener('click', () => {
  sectionProfile.style.display = 'none';
  seccionLogin.style.display = 'none';
  sectionRecipes.style.display = 'none';
  seccionCenter.style.display = 'block'; 
  sectionFavorite.style.display = 'none';
});


/** ******************FIN SECCION VOLVER ATRAS PERFIL ****************************/

/** ******************SECCION RECETAS **************************************/
const sectionRecipes = document.getElementById('sectionRecipes');

const btnRecipes = document.getElementById('nameIconFooterRecipes');
btnRecipes.addEventListener('click', () => {
  sectionProfile.style.display = 'none';
  seccionLogin.style.display = 'none';
  seccionCenter.style.display = 'none';
  sectionRecipes.style.display = 'block';
  sectionFavorite.style.display = 'none';
});
/** ******************FIN SECCION RECETAS*******************************************/


/** ******************SECCION VOLVER ATRAS RECETAS *************************/
/*
const btnArrowRecipes = document.getElementById('btnArrowRecipes');
btnArrowRecipes.addEventListener('click', () => {
  sectionProfile.style.display = 'none';
  seccionLogin.style.display = 'none';
  seccionCenter.style.display = 'block';
  sectionRecipes.style.display = 'none';
  sectionFavorite.style.display = 'none';
}); */
/** ******************FIN SECCION VOLVER ATRAS RECETAS ****************************/

/** ******************SECCION FAVORITOS **************************************/
const sectionFavorite = document.getElementById('sectionFavorite');

const btnFavorite = document.getElementById('nameIconFooterFavourite');
btnFavorite.addEventListener('click', () => {
  sectionProfile.style.display = 'none';
  seccionLogin.style.display = 'none';
  seccionCenter.style.display = 'none';
  sectionRecipes.style.display = 'none';
  sectionFavorite.style.display = 'block';
});
/** ******************FIN SECCION FAVORITOS****************************************/


/** ******************SECCION VOLVER ATRAS FAVORITOS*************************/
/*
const btnArrowFavorite = document.getElementById('btnArrowFavorite');
btnArrowFavorite.addEventListener('click', () => {
  sectionProfile.style.display = 'none';
  seccionLogin.style.display = 'none';
  seccionCenter.style.display = 'block';
  sectionRecipes.style.display = 'none';
  sectionFavorite.style.display = 'none';
}); */
/** ******************FIN SECCION VOLVER ATRAS FAVORITOS****************************/