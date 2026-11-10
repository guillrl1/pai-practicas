# Práctica 4. Introducción a TypeScript. TypeDoc.
### Factor de ponderación: 5

### Objetivos
Los objetivos de esta práctica son:
* Ser capaz de desarrollar programas simples en TypeScript en el entorno Linux de la VM de la asignatura usando
  `ts-node`
* Ser capaz de generar documentación para sus programas TypeScript utilizando
  [TypeDoc](https://typedoc.org/)
  y de visualizar dicha documentación en un servidor web

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen
* El alumnado debe ser capaz de resolver problemas tanto en JS como en TS en la plataforma Exercism subiendo sus soluciones a la misma.
* Acreditar que conoce la herramienta 
  [ESLint](https://eslint.org/)
y que es capaz de trabajar con la misma en Visual Studio Code.
* Acreditar que conoce las etiquetas de 
  [JSDoc](https://jsdoc.app/)
* Acreditar que es capaz de generar documentación para sus programas utilizando
  [TypeDoc](https://typedoc.org/)
y que es capaz de generar documentación para sus programas utilizando la herramienta.
* El alumnado ha de acreditar que es capaz de desarrollar programas de la plataforma Jutge
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de las Guías de Estilo de Google
  para Javascript y/o TypeScript
* Todas las prácticas realizadas hasta la fecha, incluída la que se presenta para su evaluación, se encuentran alojadas en repositorios privados de GitHub.
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio Code

## Introducción a TypeScript
TypeScript (TS) es un superconjunto de JavaScript (JS). 
No se trata de un lenguaje de programación completamente nuevo, sino que ha sido diseñado 
partiendo de JS, tomándolo como base y añadiéndole nuevas características y funcionalidades, 
lo que permite desarrollar código de un modo más sencillo, limpio y libre de errores.

TypeScript no es solo un lenguaje de programación, sino un traductor que permite generar código fuente 
en JS a partir de código fuente escrito en TS. 
Como su nombre indica, TS permite utilizar tipos de datos estáticos. 
lo cual es muy relevante, puesto que los tipos de datos estáticos permiten detectar errores en el código 
en fases más tempranas del desarrollo del software y no, por ejemplo, en tiempo de ejecución, cuando el 
software ya se encuentra en producción.

Utilice como punto de partida para estudiar TypeScript el material del trabajo
[Introduction to
TypeScript](https://github.com/ULL-ESIT-PAI-2025-2026/2025-2026-pai-intro-ts-introduccion_typescript.git)
expuesto en las clases de la asignatura.
A continuación estudie las secciones 1 (*Getting Started*), 2 (*Basic Types*) y 4 (*Functions*) del
[TypeScript Tutorial](https://www.typescripttutorial.net/)
No deje de revisar la sección 3 (*Control Flow Statements*) del tutorial, aunque la sintaxis y semántica de las 
sentencias de control en TS son las mismas que ya conoce de JS.
En el aula virtual de PAI encontrará también las transparencias
[TypeScript
Functions](https://docs.google.com/presentation/d/1mj1uw-d3-2-V-wBjJ-M_2N1wScdZ0j73W318kJoL5WE/edit?slide=id.gc020fe88af_0_0#slide=id.gc020fe88af_0_0)
que debe estudiar.
En el material anterior no es necesario que estudie, por ahora, nada relativo a programación orientada a objetos en
la implementación que TS realiza de este paradigma.

El siguiente paso en esta práctica será que desarrolle Ud. en TypeScript todos los programas que haya realizado
hasta ahora en JavaScript.
Para la ejecución de esos programas practique tanto a utilizar el compilador de TS (`tsc`)  como
`ts-node`, el motor de ejecución de TS para Node.js.
El el directorio principal de esta práctica hallará sendos ficheros
`tsconfig.json` y `package.json` para trabajar con TS.
Examine el contenido de esos ficheros y cree un subdirectorio dentro de `src` para cada uno de los programas
que desarrolle en esta práctica.
Consulte la
[TSConfig Reference](https://www.typescriptlang.org/tsconfig)
para conocer el significado de algunas de las opciones disponibles en el fichero `tsconfig.json`
Modifique estos ficheros libremente, si le resulta conveniente.

### Ejercicios simples de TypeScript en Exercism
Únase al
[TypeScript track in Exercism](https://exercism.org/tracks/typescript)
y realice en él todos los ejercicios que sea capaz, particularmente aquellos que ya haya realizado en JavaScript.
Del mismo modo que hizo en JS, comience con los problemas más sencillos como **Hello World** o **Two Fer** y progrese
en este itinerario tanto como le sea posible.
De la sección
[Explore the TypeScript exercises on Exercism](https://exercism.org/tracks/typescript/exercises)
una vez que haya realizdo algunos de los ejercicios catalogados como fáciles (*Easy*) preste atención a
algunos de los de dificultad media o alta.
Tenga en cuenta que por ahora no se le requerirá trabajar con ejercicios que conlleven programación orientada a objetos.

Todos los ejercicios que realice en TS han de seguir los criterios de formato, estilo y documentación que
se han venido estudiando hasta ahora.
Para el caso de TS recuerde que existe una guía de estilo específica,
[Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
que para algunos aspectos concretos complementa a la guía de estilo para JS.

En cuanto a documentación de código se seguirán utilizando los mismos criterios y etiquetas de JSDoc que ya
se han estudiado.

Recuerde que Exercism también utiliza Jest como plataforma de testing para los ejercicios de TS.
Para cada problema, preste atención a los tests que su código ha de superar y la implementación de los mismos.

## TypeDoc
[TypeDoc](https://typedoc.org/)
es una generador de documentación para proyectos TypeScript, similar a JsDoc o javadoc.
Funciona del mismo modo que JSDoc: la herramienta extrae los comentarios de documentación directamente del código fuente
genera un sitio web de documentación HTML para el proyecto.

Para comenzar a usar TypeDoc simplemente ejecute los siguientes comandos:
```
# Install
npm install --save-dev typedoc

# Execute typedoc on your project
npx typedoc src/index.ts
```
Para un conocimiento más exhaustivo de la herramienta revise el vídeo
[Configuración y y uso de TypeDoc](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view)
del profesor 
[Eduardo Segredo](https://portalciencia.ull.es/investigadores/80784/detalle)
y/o el
[TypeDoc Tutorial](https://cancerberosgx.github.io/javascript-documentation-examples/examples/typedoc-tutorial-basic/docs/docco/src/index.html#:~:text=TypeDoc%20is%20an%20API%20documentation,HTML%20documentation%20website%20for%20you.)

Para los problemas de Jutge:

4. [P80660](https://jutge.org/problems/P80660) The sequence of Collatz
5. [P91173](https://jutge.org/problems/P91173_en) Collatz pseudo-sequences (1)
7. [P76024](https://jutge.org/problems/P76024_en) Sum of fractions

Genere con TypeDoc la documentación en formato HTML para cada uno de estos problemas y haga que dicha documentación 
sea accesible a través de un servidor web en su máquina virtual de la asignatura.

En TypeDoc se puede generar la documentación utilizando diferentes formatos.
Utilicen siempre algún formato de documentación que incluya en la misma (en los ficheros HTML) enlaces a 
los ficheros de código fuente de cada una de las clases, métodos, etc. 

## Referencias
* [Exercism](https://exercism.io/)
* [Introduction to TypeScript](https://github.com/alumno/Introduction-to-TypeScript)
* [TypeScript Tutorial](https://www.typescripttutorial.net/)
* [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
* [TypeDoc](https://typedoc.org/)
* [TypeDoc Tutorial](https://cancerberosgx.github.io/javascript-documentation-examples/examples/typedoc-tutorial-basic/docs/docco/src/index.html#:~:text=TypeDoc%20is%20an%20API%20documentation,HTML%20documentation%20website%20for%20you.)
* [TypeScript track in Exercism](https://exercism.org/tracks/typescript)
* [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [Jutge web site](https://jutge.org/)
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
