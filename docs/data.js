
// LOGOUT
window.logout = (() => {
  firebase.auth().signOut()
    .then(() => {
      console.log('chao');
    })
    .catch();
});

