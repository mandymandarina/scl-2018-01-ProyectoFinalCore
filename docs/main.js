window.onload = (() => {
  const seccionLogin = document.getElementById('sectionLogin');
  const seccionCenter = document.getElementById('sectionCenter');
  const seccionMuro = document.getElementById('sectionMuro');
  const inputEmailUser = document.getElementById('inputCorreo');

  inputEmailUser.value = '';
  const inputPasswordUser = document.getElementById('inputPass');
  inputPasswordUser.value = '';
  
});// fin de window onload

// ================SECCIONES DEL DOM=============================================
const seccionLogin = document.getElementById('sectionLogin');
const seccionCenter = document.getElementById('sectionCenter');
const seccionRegistro = document.getElementById('registroUser');
const seccionMuro = document.getElementById('sectionMuro');
// ==========================FUNCIONALIDAD LOGIN=====================================


// LOGARSE CON NOMBRE Y RUT
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {
  const emailUser = document.getElementById('inputCorreo').value;
  const passwordUser = document.getElementById('inputPass').value;
  firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)

    .catch((error) => {
      const inputEmailUser = document.getElementById('inputCorreo');
      inputEmailUser.value = '';
      const inputPasswordUser = document.getElementById('inputPass');
      inputPasswordUser.value = '';
      const alertLogin = document.getElementById('alertPassword');
      const msjErrorFirebase = error.message;
      if (msjErrorFirebase === 'The email address is badly formatted.') {
        alertLogin.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert"> Error: Por favor ingresa un correo eléctronico válido</div>';
      } else if (msjErrorFirebase === 'The password is invalid or the user does not have a password.') {
        alertLogin.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert"> Error: Password Invalido, Ingrese un password de 6 o más caracteres </div>';
      }
      console.log('Error de Firebase > ' + error.code);
      console.log('Error de Firebase > mensaje' + error.message);
    });
}); // fin evento click del boton login normal  

const inputEmailUser = document.getElementById('inputCorreo');
inputEmailUser.addEventListener('click', () => {
  inputEmailUser.value = '';
  const alertLogin = document.getElementById('alertPassword');
  alertLogin.innerHTML = '<div id="alertPassword"></div>';
});
const inputPasswordUser = document.getElementById('inputPass');
inputPasswordUser.addEventListener('click', () => {
  inputPasswordUser.value = '';
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