# Prueba Técnica Kamaytech

## Descripción

Esta es una prueba técnica para Kamaytech en la que se ha desarrollado una API RESTful utilizando Node.js y MongoDB. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una colección de documentos de usuarios. La autenticación está implementada utilizando JWT y bcrypt para el manejo seguro de contraseñas.

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para JavaScript en el lado del servidor.
- **NestJS**: Framework de Node.js para construir aplicaciones del lado del servidor.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar documentos.
- **Mongoose**: Biblioteca de modelado de objetos MongoDB para Node.js.
- **Swagger**: Herramienta para la documentación interactiva de la API.
- **bcrypt**: Biblioteca para la encriptación de contraseñas.
- **JWT (JSON Web Token)**: Mecanismo para la autenticación de usuarios.

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/andgz2307/PruebaTecnicaNodeJS.git
   
2. **Acceder al directorio del proyecto**

cd PruebaTecnicaNodeJS

3. **Instalar las dependencias**

npm install

4 **Configurar el archivo .env**

Crea un archivo .env en la raíz del proyecto y agrega la URL de conexión de MongoDB Atlas:

MONGODB\_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

JWT\_SECRET=<tu\_clave\_secreta>

5. **Iniciar la aplicación**

npm run start:dev

La aplicación estará disponible en http://localhost:3000.

## Documentación de la API

La documentación de la API está disponible a través de Swagger en:


http://localhost:3000/api

## Endpoints

##Crear un Usuario

Método: POST

Ruta: /users

Descripción: Crea un nuevo usuario.

Cuerpo de la Solicitud (JSON):

json



{

"name": "Juan Pérez",

"email": "juan.perez@example.com",

"age": 30,

"password": "contraseña123"

}

Respuesta: Código 201 - Usuario creado exitosamente.

##Obtener Todos los Usuarios

Método: GET

Ruta: /users

Descripción: Obtiene todos los usuarios.

Respuesta: Código 200 - Lista de usuarios.

##Obtener un Usuario por ID

Método: GET

Ruta: /users/:id

Descripción: Obtiene un usuario específico por su ID.

Parámetros de la URL: id - ID del usuario.

Respuesta: Código 200 - Usuario encontrado.

Actualizar un Usuario

##Método: PUT

Ruta: /users/:id

Descripción: Actualiza un usuario específico por su ID.

Parámetros de la URL: id - ID del usuario.

Cuerpo de la Solicitud (JSON):

json



{

"name": "Juan Pérez",

"email": "juan.perez@example.com",

"age": 31,

"password": "nueva\_contraseña123"

}

Respuesta: Código 200 - Usuario actualizado exitosamente.

##Eliminar un Usuario

Método: DELETE

Ruta: /users/:id

Descripción: Elimina un usuario específico por su ID.

Parámetros de la URL: id - ID del usuario.

Respuesta: Código 200 - Usuario eliminado exitosamente.

Autenticación

Método: POST

Ruta: /auth/login

Descripción: Inicia sesión y obtiene un token JWT.

Cuerpo de la Solicitud (JSON):

json

Copiar código

{

"email": "juan.perez@example.com",

"password": "contraseña123"

}

Respuesta: Código 200 - Token JWT.

##Cómo Probar los Endpoints

Accede a la interfaz de Swagger en http://localhost:3000/api.

Utiliza los formularios proporcionados para probar cada uno de los endpoints.

Ingresa los datos necesarios y envía las solicitudes para verificar el comportamiento de la API.

Autor

Nombre: Andrés Guaicha


Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

javascript



Este `README.md` proporciona una guía completa para la instalación, configuración, y uso de la API, así como detalles sobre la documentación y los endpoints.


