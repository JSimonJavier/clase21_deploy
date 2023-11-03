/*
DEPLOY de nuestra pagian -> vamos a compartir nuestro proyecto al mundo
  *-> deploy:
    proceso de lanzar y poner en funcionamiento una app o sistema en un entorno de producción, para que este disponible y accesible para los usuarios finales

  *-> objetivos:
    - hacer el deploy -> RENDER
    - varibales de entorno
    - readme
    - refactorizar

? Deploy
  - complejo y desafiante
  - importante => el desarrollador debe entregar su trabajo final
  - ayuda al armado del PORTFOLIO => coleccione de trabajo o proeyecto de un a persona
  - una vez deployados cualquier persona que quiero verlo podra (futuro empleador)

  * Github => es un sitio donde solemos consultar los trabajos que a realizado un desarrollador
    - recordatorio de comandos:
      git init
      git add .
      git add nombreDelArchivos.js
      git status
      git push -u origin master

    - buenas practicas commits
      -> verbo de acciones = agregar, cambiar, remover
      -> corto y conciso
      -> agregar un prefijo:
        => chore: para hacer referencia a la ralizacion de una nueva tarea
        => fix: para arreglar bugs
        git commit -m 'chore: agregue una nueva navbar'

?variables de entorno
   - al deployar nuestro codigo va a poder ser visto por todos -> NO HAY QUE DEJAR INFOMACION EXPUESTA!!!!!!
   - ej: contraseñas, nombres de usuarios, mail personal, secrets JWT, comentarios ocultos que no correspondan

   -> hay qeu asegurarnos de poder traajar y que nuestra informacion no que comprometida al leer nuestro codigo cuando este publico

   * que son?????
    - son valores que se almancenan fuera del codigo fuente de la app, en el sistema operativo o en un archivo de configuracion externa
    - almacenar informacion sensible.

   !-como utilizarlas??
    1) definimos en un archivo de configuracion externa
      - en algunos casos -> a traves de una interfaz de usuario o mediate una linea de comandos
      - en otros -> se define un archivo especifico -> .env -> se almancena en la rai del proyecto
    
    *supongamos
      - guardar un string conexion bs -> DATABASE_URL
      - guardar nuetro secret -> SECRET_KEY
        *=> nuestro archivo .env deber ser
          DATABASE_URL = mongodb://localhost:27017/
          SECRET_KEY = mi_api_key_secreta
      -una vez definas -> podemos acceder a las variables de entoner -> sintaxis especifica del lenguaje de programacion utilizado
        *ejemplo node.js -> SECRET_KEY -> process.env.SECRET_KEY
          => PROCESS:  objeto global de Node -> es responsable de facilitar la interaccion con el sistema operativo y objetener inf sore la app en ejecucion dentro del entornde de nodejs

      * dotenv -> libreria para guardar nuestras variables de entorno y poder acceder después a ellas
          1) instalar -> npm i dotenv
          2) agregamos un archivo .env donde vamso a guardar nuestras variables
          3) usar la libreria
          4) ejecutamos la funcion dotenv.config() -> va a a tomar todas las variables de .env y lo va a cargar en el process
          5) llamamos y utilizamos las variables
          6) antes pushear a github -> gitignore -> .env

*/