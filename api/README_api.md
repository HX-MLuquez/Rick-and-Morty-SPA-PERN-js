# **💪 HW5 | Express - Integration**

## **🕒 DURACIÓN ESTIMADA**

XX minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

En esta homework crearemos un servidor con la librería de express. A su vez crearemos distintas rutas, y también simularemos una base de datos apra nuestros personajes favoritos.

Esta vez las rutas que crearemos son:

-  **`GET getCharById`**: esta ruta obtendrá personajes de la API mediante su **id**.
-  **`GET login`**: esta ruta es la que le dará o no acceso al usuario para usar la aplicación.
-  **`POST postFav`**: esta ruta guardará en nuestro servidor a nuestros personajes favoritos.
-  **`DELETE deleteFav`**: esta ruta eliminará a un personaje de nuestros favoritos.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Servidor**

Instala la librería **`express`**. Luego dirígete al archivo **`index.js`** y elimina todo su contenido. Ahora crearemos el servidor con esta librería.

1. Dentro del archivo **index.js** importa **`express`** e inicializa un nuevo servidor en el puerto 3001. Esta sería una forma de seguir buenas prácticas:

```js
const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
```

¡Acabas de crear tu servidor con Express! 😎

<br />

---

### **👩‍💻 EJERCICIO 2 | GET getCharById**

En este ejercicio construiremos la nueva versión de este controlador para que nos sirva con **express**. Dirígete al archivo **`getCharById.js`** y elimina todo el contenido que hay dentro de él.

1. Crea una constante llamada **`URL`** y guarda lo siguiente: "**https://rickandmortyapi.com/api/character/**".

2. Crea una función con el nombre **`getCharById`** y expórtala. Recibe por parámetro a los objetos **`req`** y **`res`**.

3. Dentro de la función haz una petición a la API a partir del **id** que recibes por **`Params`**.

> [**NOTA**]: no olvides importar **`axios`**.

4. En el caso de que todo salga OK y se encuentre a un personaje, devuelve un JSON con las propiedades: **id**, **status**, **name**, **species**, **origin**, **image** y **gender**.

5. En el caso de que todo salga OK pero no se encuentre a un personaje, devuelve un mensaje con **status 404** que diga _Not fount_.

6. Si hay un error debes responder con un status 500, y un texto con la propiedad **`message`** de **error**.

</br>

---

### **👩‍💻 EJERCICIO 3 | GET login**

En este ejercicio construiremos un controlador que validará que el usuario que se está logeando tenga permiso. Para definir quienes tendrán permisos ve a tu carpeta **utils** y crea un archivo llamado **`users.js`**. Aquí solo deberas exportar un arrgelo con un solo objeto. Este objeto debe tener esta estructura:

```js
module.exports = [{email: /*Tu email*/, password: /*Tu password*/}];
```

1. Dentro de tu carpeta **controllers** crea un archivo llamado **`login.js`**. Dentro de este deberás crear y exportar una función que recibirá por parámetro a los objetos **`req`** y **`res`**.

2. Deberás obtener los datos **email** y **password** que recibes mediante **`Query`**. Una vez hecho esto, importa tu arreglo de usuarios y verifica si dentro de ese arreglo hay un usuario que coincida tanto su email y su contraseña con los que recibes por **`Query`**.

3. En el caso de que haya un usuario que cumpla esa condición, entonces debes devolver una respuesta con **status 200**, y, en formato JSON, un objeto con una propiedad **access: `true`**. Caso contrario devuelve lo mismo pero con la propiedad **access: `false`**.

<br />

---

### **👩‍💻 EJERCICIO 4 | POST & DELETE favorites**

Dentro de tu carpeta **controllers** crea un archivo con el nombre **`handleFavorites.js`**. Dentro de este archivo deberás declarar un **arreglo vacío** llamado **`myFavorites`**.

> [**NOTA**]: es importante que **NO** declares este arreglo como constante ya que lo modificaremos.

1. Crea una función llamada **`postFav`** que reciba por parámetro los objetos **`req`** y **`res`**.

2. Agrega en tu arreglo de favoritos el personaje que estarás recibiendo por **`Body`**.

3. Finalmente devuelve tu arreglo de favoritos en formato JSON.

4. Crea una función llamada **`deleteFav`** que reciba por parámetro los objetos **`req`** y **`res`**.

5. Filtra a tus personajes favoritos de manera que elimines aquel que tiene el mismo **id** que recibes por **`Params`**.

6. Finalmente devuelve tu arreglo de favoritos en formato JSON.

7. Exporta ambas funciones.

<br />

---

### **👩‍💻 EJERCICIO 5 | Rutas**

Dirígete a la carpeta **routes** y crea un archivo con el nombre **`index.js`**. Dentro de este deberás importar todos tus controladores. También deberás importar las función **`Router`** de **express**. Crea una ruta para cada controlador con los siguientes paths:

-  GET **`getCharById`**: "/character/:id"
-  GET **`login`**: "/login"
-  POST **`postFav`**: "/fav"
-  DELETE **`deleteFav`**: "/fav/:id"

Finalmente exporta tu router.

<br />

---

### **👩‍💻 EJERCICIO 6 | Middlewares**

Dirígete al archivo **`index.js`** en el que tienes tu servidor. Aquí deberás:

1. Importar tu router.

2. Copia este middleware en tu servidor:

   ```js
   server.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header(
         'Access-Control-Allow-Headers',
         'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
   });
   ```

3. Crea un middleware que ejecute a **`express.json()`**.

4. Crea un middleware que agregue el string "**`/rickandmorty`**" antes de cada una de tus rutas.

<br />

---

### **👩‍💻 EJERCICIO 7 | Back & Front**

Llegó el momento para conectar nuestro nuevo servidor con nuestro Front-End. Para este ejercicio simplemente tendrás que reemplazar código de tu Front-End por los distintos snippets que te presentaremos a continuación. Para esto dirígete a tu carpeta **Client**.

1. Dirígete a tu archivo **`App.js`** y busca tu función **`login`**. Elimina por completo esta función, ya que la reemplazaremos con esta:

   ```js
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   ```

2. Ahora conectaremos nuestra ruta **postFav**. Para esto dirígete a tu archivo **`actions.js`** y reemplaza tu función addFav. Luego dirígete a tu **`reducer`** y reemplaza tu caso "ADD_FAV".

   ```js
   import axios from "axios";

   // ACTION | addFav
   export const addFav = (character) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return (dispatch) => {
         axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
               type: 'ADD_FAV',
               payload: data,
            });
         });
      };
   };

   // REDUCER | ADD_FAV
   case 'ADD_FAV':
         return { ...state, myFavorites: payload, allCharacters: payload };
   ```

> [**NOTA**]: debes importar **axios**.

3. Por último nos queda conectar nuestra ruta **deleteFav**. Para esto dirígete a tu archivo **`actions.js`** y reemplaza tu función removeFav. Luego dirígete a tu **`reducer`** y reemplaza tu caso "REMOVE_FAV".

   ```js
   // ACTION | removeFav
   export const removeFav = (id) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return (dispatch) => {
         axios.delete(endpoint).then(({ data }) => {
            return dispatch({
               type: 'REMOVE_FAV',
               payload: data,
         });
         });
      };
   };

   // REDUCER | REMOVE_FAV
   case 'REMOVE_FAV':
         return { ...state, myFavorites: payload };
   ```








# ---------------------------------------------------------------------------------------------

# ---------------------------------------------------------------------------------------------


# **💪 HW3 | Promises - Integration**

## **🕒 DURACIÓN ESTIMADA**

XX minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

En esta homework crearemos una ruta GET que realizará una peticion asincrónica a la API de Rick & Morty. De esta manera podremos obtener un personaje por **id**, y podremos enviar esta información a nuestro Front-End.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Controlador**

Instala la librería **`axios`**. Luego dirígete a la carpeta **controllers** y crea un archivo llamado **`getCharById.js`**. Dentro de este archivo deberás:

1. Crea y exporta una función llamada **`getCharById`**. Esta recibirá dos parámetros: **res** y **id**.

2. Dentro de esta función deberás realizar una petición a la API **`https://rickandmortyapi.com/api/character/:id`** de Rick & Morty. Utiliza promesas y no olvides que el **id** que utilices debe ser el que recibes por parámetro.

> **[NOTA]:** tendrás que importar **`axios`**.

3. Una vez que tienes la respuesta de tu petición crea un objeto en el que guardes las siguientes propiedades del personaje: **id** (lo recibes por parámetro), **name**, **gender**, **species**, **origin**, **image** y **status**.

> [**NOTA**]: revisa cómo es la estructura de la respuesta que recibes de la API para poder acceder correctamente a los datos.

4. Una vez creado el objeto, devuelve una respuesta en formato JSON y status igual a 200 con el personaje que obtuviste.

5. Concatena un **`.catch`** al final de la promesa para poder manejar el error. Dentro de él deberás devolver una respuesta con status **`500`**, un Content-Type igual a **`text/plain`**, y finalmente responder con la propiedad **`message`** del error.

<br />

---

### **👩‍💻 EJERCICIO 2 | Ruta**

Dirígete al archivo **`index.js`** y elimina el condicional que creaste en la homework anterior. También elimina la importación y el archivo **`data.js`**.

1. Importa tu controlador **`getCharById`**.

2. Crea un condicional que pregunte si la **url** incluye el string "**`/rickandmorty/character`**". En el caso de que si lo incluya deberás ejecutar el controlador que creamos en el ejercicio anterior pasándole como argumentos:

   -  El primer parámetro debe ser parámetro **`res`**.
   -  El segundo parámetro debe ser el **id** del personaje que recibes mediante la como parámetro.

   > **[NOTA]:** dentro del parámetro **`req.url`** está el id del personaje.

<br />

---

### **👀 COMPROBEMOS...**

Levanta tu proyecto del lado Front-End y Back-End. Hasta este momento deberías poder utilizar tu aplicación con normalidad y poder buscar un personaje con cualquier **id**.

<img src="./img/example.gif" alt="" />




















# **💪 HW2 | Web Server - Integration**

## **🕒 DURACIÓN ESTIMADA**

90 minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

Hasta este momento hemos construido una Single Page Aplication por el lado del Front-End. Ahora llego la hora de construir un servidor que nos permita realizar acciones y comunicar información a nuestra App.

En esta homework vamos a estructurar nuestro proyecto por el lado del Back-End, crear nuestro primer servidor y conectar Front-End con este.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Estructuración**

Dirígete al directorio en el que tienes tu proyecto **`Rick & Morty`** y ábrelo en tu VSC.

1. En la raíz de tu proyecto crea una carpeta llamada **`Client`**. Todo el contenido trabajado durante el Módulo 2 guárdalo dentro de esta carpeta.

2. Crea una segunda carpeta al mismo nivel **`Server`**. Dentro de esta crea una carpeta con el nombre **src** y otra con el nombre **test**.

3. Dentro de la carpeta **src** crea lo siguiente:

   -  Un archivo llamado **`index.js`**.
   -  Una carpeta llamada **`controllers`**.
   -  Una carpeta llamada **`routes`**.
   -  Una carpeta llamada **`utils`**.

4. Copia el archivo [**data.js**](./data.js) que se encuentra en esta carpeta y pégalo dentro de tu pryecto en la carpeta **utils**.

</br >

---

### **👩‍💻 EJERCICIO 2 | Configuración**

En la carpeta raíz de tu Back-End tendrás que ejecutar el comando:

```bash
    npm init
```

De esta manera crearás un archivo **`package.json`**. En este solo deberás instalar la librería **nodemon** de la siguiente manera:

```bash
    npm install nodemon
```

Una vez hecho esto, dentro del objeto **scripts** tienes que dejar el script **`start`** de la siguiente manera:

```json
    "start": "nodemon ./src/index.js"
```

<br />

---

### **👩‍💻 EJERCICIO 3 | Servidor**

Dírigete al archivo llamado **`index.js`** que creaste en el ejercicio 1. Dentro de este deberás:

1. Importar **http** desde el módulo **`http`**.

2. A partir de **http** crea y levanta un servidor en el puerto **3001**.

3. Copia y pega la siguiente línea dentro del callback de tu servidor

   ```js
   res.setHeader('Access-Control-Allow-Origin', '*');
   ```

4. Crea un condicional que verfique si la **url** incluye el string "**`/rickandmorty/character`**". En el caso de que si lo haga deberás obtener el **id** del personaje que te llega por la **url**. Luego de obtener el **id**, búscalo dentro del archivo **`data.js`** (deberás importar el archivo). Ten en cuenta que el **id** de la url es un string, y los **id** de los personajes son números.

> [**NOTA**]: la url te llegará con la siguiente estructura. Ejemplo: **`/rickandmorty/character/:id`**. Piensa en una lógica que te permita obtener el **id** del final.

5. Envía como respuesta un JSON que contenga al personaje.

<br />

---

### **👩‍💻 EJERCICIO 4 | Front & Back**

1. Abre tu proyecto en la carpeta **`Client`** y dirígete al archivo **`App.js`** en el que realizarás un pequeño cambio.

2. Busca tu función **`onSearch`**. Deberás reemplazar la url a la que se le está haciendo la petición:

   -  **URL anitgua**: "**https://rickandmortyapi.com/api/character/${id}**".
   -  **URL por la que debes reemplazar**: "**http://localhost:3001/rickandmorty/character/${id}**".

3. Ahora dirígete a tu componente **`Detail`** . Aquí tienes un **`useEffect`** que también está haciendo una petición a la API, por lo que debemos hacer el mismo cambio que antes:

   -  **URL anitgua**: "**https://rickandmortyapi.com/api/character/${id}**".
   -  **URL por la que debes reemplazar**: "**http://localhost:3001/rickandmorty/character/${id}**".

> **[NOTA]:** recuerda agregar el **id** como parámetro al final.

<br />

---

### **👀 ¡COMPROBEMOS NUESTRO TRABAJO!**

Ahora comprobaremos que todo funciona correctamente. Para esto:

1. Abre dos terminales. En una deberás levantar tu proyecto del lado Front-End, y en la otra levantar tu proyecto en el lado Back-End.

2. Una vez que todo esté arriba, intenta utilizar tu aplicación. Trae personajes e ingresa a sus detalles para chequear que no haya ningún error.

> [**NOTA**]: solo podrás buscar a los personajes con id **1**, **2**, **3**, **4** y **5**, ya que estos son los que tienes guardados en tu archivo **`data.js`**.

</br >

<img src="./img/example.gif" alt="" />
