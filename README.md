**Proyecto: Data Lovers - Rick and Morty**
[TOCM]

[TOC]
### Data lovers:
![Banner](https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1020&quality=85&auto=format&fit=max&s=9dbc7c10980d174e67725b5cacf3c3a2)
## RICK AND MORTY
Rick y Morty es una serie de televisión estadounidense de animación para adultos. La serie tiene gran acogida a nivel mundial, de todo este fandom hay un grupo que desea poder interactuar y ver la información de los personajes y de la serie en general.

#### Investigación con seguidores de Rick and Morty
Hicimos una rápida investigación sobre la información que podrían necesitar nuestros usuarios y encontramos que los datos de mayor interés para ellos son:

Información relevante sobre los personajes, como nombre, género, especie, lugar de origen, imagen y episodios donde aparece.

Adicionalmente a esta información, para nuestros usuarios es importante poder ver la lista de personajes que aparecen en la serie, la cantidad de episodios, los diferentes lugares de origen, para tener mayor información de la serie.

#### Problema del usuario
El usuario quiere encontrar información de un personaje pero no tiene una herramienta que le permita hacerlo desde una web.

#### Definición del producto
Aplicación web de búsqueda de personajes de "Rick and Morty" por: nombre, estado de vida, género, especie, lugar de origen,  y episodios en los que aparece. Además tiene una sección de estadísticas sobre datos de los personajes, una sección con información sobre la serie y un enlace para poder ver los caítulos de la serie.

#### Proceso de diseño
El diseño de la página web se centra en mostrar los personajes, ordenados y en páginas para una búsqueda rápida y fácil.
Como filtro principal está el filtro por nombre para el que elegimos usar una caja de texto porque permite ingresar rápidamente la búsqueda con el teclado.
Además agregamos un elemento select para elegir un orden alfabético, que puede ser de A-Z y de Z-A.
El filtro avanzado está conformado por una sección con etiquetas select y opciones de cada filtro por: status, species, gender, origin, episodes. Se organizó de esta forma por la facilidad de uso y rapidez de búsqueda de la información que quiere encontrar, en la parte inferior se agregó un botón para limpiar todos los filtros con etiqueta select para poder hacer una nueva búsqueda desde cero. 
La barra de navegación tiene 4 botones:
- "Home" es un botón que nos lleva a la página inicial con todos los personajes. 
- "Statistics" es un botón que nos lleva a una pantalla donde están los calculos agregados con datos de interés sobre características de los personajes de "R&M".
- "About" es un botón que nos lleva a una url con [información sobre "R&M"](https://rickandmorty.fandom.com/wiki/Rick_and_Morty_(TV_series))
- "Watch Online" es un botón que nos lleva a una url de los [capitulos de "R&M"](https://www.adultswim.com/streams/rick-and-morty) de la página de adultswim de manera gratuita.

#### Cómo resuelve los problemas del usuario
La aplicacion web tiene:
- Tarjetas de los personajes con información relevante como nombre, género, especie.
- Un filtro para buscar por nombre a los personajes de la serie. 
- Un filtro para especifcar el género, especie, lugar de origen y episodios donde aparece.
- Orden alfabético para encontrar más fácilmente a los personajes.
- Paginación.
- Información sobre la serie.
- Estadisticas sobre los personajes.

#### Historias de usuario
**1. Yo como usuario
	Quiero ver a los personajes de Rick and Morty para obtener información de cada uno.
	Para poder conocer más sobre cada uno de los personajes.**

   ***Criterios de aceptación ***
1.	El usuario puede visualizar a todos los personajes en la web en tarjetas con el nombre, especie y estado de vida.
2.	El usuario puede ingresar desde el navegador web Google Chrome.
3.	El usuario puede visualizar 20 personajes como máximo en cada página.
4.	El usuario puede seleccionar a qué página se dirigirá.

***Definición de terminado ***
1.	El código cumple con la guía de estilos acordada.
2.	El código está en el repositorio.
3.	El código tiene, y pasa, los test necesarios.
4.	El código ha sido hecho en pair-programming.
5.	La historia ha sido testeada con al menos 5 usuarios y se implementaron las mejoras.
6.	El código hace que se muestren 20 personajes por página.

**2. Yo como Usuario
Quiero tener opciones de filtrado
Para encontrar información sobre los personajes de forma rápida. **

***Criterios de aceptación.***

1. El usuario puede filtrar personajes por el nombre.
2. El usuario puede ordenar los personajes alfabéticamente.
3. El usuario puede filtrar personajes por: estado de vida, especie, género, origen, episodio.
4. El usuario puede ver la información completa del personaje haciendo click en la tarjeta del personaje.

***Definición de terminado***
1. El código cumple con la guía de estilos acordada.
2. El código está en el repositorio.
3. El código tiene, y pasa, los test necesarios.
4. El código ha sido hecho en pair-programming.
5. El código de filtrado funciona uniendo los filtros.
6. El código tiene orden alfabético.
7. El código muestra un mensaje de “Sorry, not found” cuando no encuentra coincidencias con la búsqueda.
8. El código permite buscar por el nombre de los personajes con minúsculas o mayúsculas.

**3. Yo como Usuario
Quiero poder acceder/visualizar la página en celulares, tablet y computadora.
Para poder usar la página en celuares, tablets y computadoras.**

***Criterios de aceptación***
1. El usuario puede ver las tarjetas adaptadas a la pantalla que está usando.
2. El usuario puede ver las imágenes y texto adaptados a la pantalla.
3. El usuario puede ver el modal dentro de la pantalla, sin importar el dispositivo que use.

***Definición de terminado* **
1. El código cumple con la guía de estilos.
2. El código está en el repositorio.
3. El código de estilo (css) cumple con adaptar la página web a los distintos dispositivos en los que se use (celulares, tablet y computadora).
4. La historia ha sido testeada con al menos 5 usuarios y se implementaron las mejoras.

**4. Yo como Usuario
Quiero que la página se vea ordenada y armoniosa en colores, contraste, alineación y jerarquía.
Para que sea más atractivo de usar.**

***Criterios de aceptación***
1. El usuario puede ver la página ordenada por secciones.
2. El usuario recibe una página con los colores característicos de la serie.
3. El usuario puede visualizar claramente las palabras dentro de la página web.
4. El usuario puede navegar por la página de forma intuitiva.
5. El usuario visualiza primero el título de la página y la barra de búsqueda al ingresas a la página.

***Definición de terminado ***
1. El código cumple con la guía de estilos acordada.
2. El código está en el repositorio.
3. El código tiene implementado las etiquetas del HTML5.
4. El código html ayuda a ordenar la página por jerarquía/importancia.


#### Diseño de interfaz de usuario
El diseño de la página se hizo basado en los colores y temas de la serie "Rick and Morty" y en los intereses de un grupo del fandom que busca acceder facilmente a información sobre los personajes y datos de interés sobre ellos.
Consta de tarjetas con el nombre, imagen y datos (estado de vida, especie, género) para mostrar a los personajes en la pantalla principal y que puedan interactuar facilmente con ellos.
Para la busqueda de personajes específicos, cuenta con un buscador por nombre en la parte superior, también tiene la opción de ordenar alfabéticamente con un selector de opciones de "A-Z" o "Z-A".
Cuenta con un filtro avanzado para las busquedas más específicas con las opciones de filtrado: Estado de vida, Especies, Género, Origen, Episodios en los que aparece.
Para poder ver la información completa sobre un personaje, usamos una ventana emergente o modal en forma de tarjeta de identificación donde muestra: Imágen del personaje, nombre, estado de vida, especie, tipo, género, origen, localización y los episodios en los que aparece. 
En la barra de navegación se puede acceder a tres opciones: About, donde hay información resumida sobre la serie, Statistics con datos agrupados y graficos estadísticos con datos relevantes sobre los personajes y Watch Online que lleva a un enlace para poder ver capitulos de la serie de manera gratuita.

##### Prototipo de baja fidelidad
Sketch de la solución
**Desktop**
![Banner](https://i.imgur.com/jRH9IZW.jpg)
**Modal**
![Banner](https://i.imgur.com/Onyg1o8.jpg)
**Movile**
![Banner](https://i.imgur.com/O1tULo2.jpg)
**Mejoras en la propuesta final:**
- Implementación de la pantalla de inicio.
![Banner](https://i.imgur.com/rnD33eR.jpg)
- Implementación del apartado de estadísticas.
![Banner](https://imgur.com/iystcVF.jpg)
##### Prototipo de alta fidelidad
Diseño de la Interfaz de Usuario:
[Figma: Desktop](https://www.figma.com/file/1Lwf3mKnS7NLDSKOVpWkvF/Rick-y-morty-pc?node-id=0%3A1)
[Figma: Movile](https://www.figma.com/file/wqaeab4MosleGeD2Hk5H9x/Rick-y-morty-mobile?node-id=55%3A168)

##### Testeos de usabilidad
[Link a Zeplin](https://scene.zeplin.io/project/603db83201cfd737ae87e53b)
Se realizaron tests de usabilidad con distintos usuarios, mediante el feedback con compañeras del bootcamp y en base a los resultados iteramos los diseños.

*Problemas de usabilidad detectados a través de los tests:*
- Tamaño de la letra.
- Agregar una pantalla de inicio.
- Efecto mouse hover en las tarjetas.
- Botón clean filter.