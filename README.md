# BlackBoard3d

## Instalación en LOCALHOST.
Requisitos:
 - Tener Instalado NodeJS en el SO. https://nodejs.org/

 Abrir el CMD en la carpeta raiz del programa y ejecutar
 ```
node servidor.js
 ```
para iniciar el servidor, ir a http://localhost:8969 o mirar que ip estan disponibles en la linea de comandos ejecutadas segudos del puerto 8969 ex: http://192.168.1.130:8969/,


## Subir a bmdevel
subir la carpeta "/assets/imgfiles/blackboard3D" como archivos estaticos, y copiar el codigo de las paginas de la carpeta views a sus respectivas paginas en bmdevel.

blackboardv1.html
head.html
menuHorizontal.html
menuvertical.html

## Direcciones LocalHost IMPORTANTES
https://locahost:89699/ Plantilla basica donde se le especifica una PIZARRA (Lo que se ve en Blacboard.1d3a.com);

https://locahost:89699/template1 una plantilla simulando el espacio de TAREAS

https://locahost:89699/small una plantilla simulando el espacio de SCOUTING

https://locahost:89699/params una plantilla donde se pueden cambiar los parametros de configuración.

## Documentacion de librerias y herramientas
*documentación de la tecnologia utilizada en este proyecto.*
### Servidor NodeJS
- **EJS MATE** Gestor MV y Layouts del servidor NodeJS (https://www.npmjs.com/package/ejs-mate)
- **LocalTunnel** Exponer el servidor en un dominio de desarrollo https://localtunnel.github.io/
#### BlackBoard
- **Blender** Modelado de Objetos en 3D (https://www.blender.org/)
##### Backend
- **THREEJS** Framework 3D en JS (https://threejs.org/)
- **Tween JS** Libreria para animacion, reproduccion y tweening (https://www.npmjs.com/package/tweenjs)
##### Frontend
- **Bootstrap** Interfaz de usuario, popups, formularios, modelos (https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- **FontAwesome** Iconos y fuentes (https://fontawesome.com/)


## Documentacion de desarrollo

Los Archivos Utilizados se encuentran en /imgfiles/blackboard3d - Todos estos archivos son necesarios para el correcto funcionamiento, cada carpeta forma parte del programa,
en la raiz /blackboard3d se encuentran los esenciales con las configuraciones, enumerados por lanzamiento de ejecución y su titulo indicando a que afecta para el programa.

### Funciones Principales

#### 0compiler.js

Este documento, mantiene variables esenciales para el compilado inicial del programa, ejecuta la plantilla, la version, el idioma, el dispositivo, si estouch o no lo es,


### 0langBlackboard.js
un json de objetos con las variables utilizadas para mostrar el idioma correcto,

### 0template.js
un documentos con variables que especifican el template utilizado en cada entorno

### 1-1enviroment.js
un documento que se mantiene ejecutando en background, controlando que cada entorno sea el que se tiene que mostrar, (estilos, variables, etc.)

### 1mainconfig.js
configuración inicial, aqui se establece las configuraciones principales de ThreeJS, ademas de variables de inicializacion, se inicializa la mayoria de cosas esenciales como camaras, etc.
hay otras opciones como el debug, para activarlo se encuentra en la variable "stats" - hay que descomentar la linea 1105,
 ```
var stats = new Stats();
stats.showPanel( 0 );
console.log(stats);
document.getElementById('blackboardpage').appendChild( stats.domElement  );
```

### 2camera.js
configuración de las camaras avanzada, posicionamiento, botones de ejecucion, modo movimiento, rotación, etc. controla los botones de ejecucion y sus estilos.
hay una variable que es cameramode=["2D","LR"] //2D indicando que se encuentra en 2D y LR para 3D.
cameramodeswitch(); //se encarga de actualizar la vista de la variable cameramode.
 - si te encuentras en entorno 3D cambias la variable, cameramode="2D"; y ejecutas la función cameramodeswitch(); veras la camara en 2D.
camera2D(); //se encarga de cambiar las variables para posicionar la camara en 2D estos cambios solo afectan a esta camara, si te encuentras en la camara en 3D no veras ningun efecto.  
cameraLR(); //se encarga de cambiar las variables para posicionar la camara en 3D estos cambios solo afectan a esta camara, si te encuentras en la camara en 2D no veras ningun efecto.  
cameraReset([isbutton=false]); //se encarga de resetear la camara actual a su posición por defecto en funcion a los valores dados por la funcion camera2DEnvoirmentSetResponsive();
 -isButton (opcional): establece si se a ejecutado la funcion mediante el botton para editar su estilo también. o si se ejecuta como un comando de otra función.
camera2DEnvoirmentSetResponsive(); //función que varia la posición de la camara en funcion al dispositivo detectado y establece sus valores por defecto.
cameraStateSavedForScreenShot(); //función que cambia las cámara, (realiza un zoom y centra el campo) para realizar una captura de pantalla que se guardará en funcion de lo que se esté haciendo.
cuando se termine la tarea para la que se necesite esta funcion es necesario, hacer un cameraReset();

### 3backgrounds.js
entorno virtual, un cubo con imagenes que imitan a un espacio en 3D infinito, planos,  

### 4functions.js
funciones para el correcto funcionamiento de la aplicacion:

estilosActivateDeactivate(activate:string,d1:string,d2:string,d3:string,d4:string...); //funcion que añade la clase de "btnActivated" de la id de Activate y le elimina en caso que tenga
la clase de "btnDeactivated" y lo contrario con las demas opciones, elimina la clase de la variable "btnActivated" y añade la clase de "btnDeactivated" por defecto las clases de los botones
son las siguientes dos variables
btnActivated="btn-gray" //Estilo clase en caso de boton activado
btnDeactivated="btn-primary" //Estilo clase en caso de boton Desactivado
var finish, especifica la escena actual en movimiento. y se queda en la ultima. si hay 3 escenas y se mueve hasta la 2, se muestra la escena. 1,y2 pero cuando termina vuelve al 3
var isplaying, especifica si actualmente se esta moviendo algo o no..
