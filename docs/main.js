window.listaEmpresas = [];
window.onload = (() => {
  const lista = document.getElementById('listaEmpresas');
  fetch('../data/empresas.json')
    .then(response => response.json()) 
    .then(data => {
      data.forEach(element => {
        console.log(element.name);
      });
      data.forEach(element => {
        let optionEmpresa = document.createElement('option');
        optionEmpresa.text = element.name;
        lista.add(optionEmpresa);
      }); 
      console.log('holi');
    });
});// fin de window onload


// ================SECCIONES DEL DOM=============================================
const seccionLogin = document.getElementById('sectionLogin');
const seccionCenter = document.getElementById('sectionCenter');
const seccionRegistro = document.getElementById('registroUser');
const seccionMuro = document.getElementById('sectionMuro');
// ==========================FUNCIONALIDAD LOGIN=====================================


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