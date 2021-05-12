// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDk-6g8xcjw7D5VuXDVaHAe3jqnPjC_JME",
  authDomain: "unidad3firebase.firebaseapp.com",
  projectId: "unidad3firebase",
  storageBucket: "unidad3firebase.appspot.com",
  messagingSenderId: "96679644322",
  appId: "1:96679644322:web:a798bc56a70777915b1bfb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Declaro variable para mi bd
var bd = firebase.database();

// variable para comunicarme con mi html
var app = document.getElementById('app');

// consumir datos de realtime
/* var coleccion = firebase.database().ref().child('mensaje');
coleccion.on('value', (snapshot) => {
    console.log(snapshot.val());
})
*/

// consumir datos de realtime
function readVal(){
  var coleccion = bd.ref("users").child('username');
  coleccion.on('value', (snapshot) => {
  console.log(snapshot.val());
  app.innerText = 'Resultado de la coleccion users/username: ' + snapshot.val();
  });
}
  
function readGet() {
  bd.ref("users").child('username').get().then(function(snapshot) {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    app.innerHTML = 'Resultado de la coleccion users/username: ' + snapshot.val();
  }
  else {
    console.log("No data available");
    app.innerHTML = 'No data available';
  }
  }).catch(function(error) {
    console.error(error);
  });
}

// Agregar datos a la coleccion
function agregar() {
    bd.ref('users').set({
      email: "carlos@maildrop.cc",
      username: "Carlos"
    });
    console.log('registro agregado');
}