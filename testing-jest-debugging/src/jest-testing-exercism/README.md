# Jest + Exercism (Testing Focus)

Este directorio se centra en el valor de los tests de Jest dentro del flujo de trabajo de Exercism. La idea no es solo resolver ejercicios, sino entender como los tests guian el desarrollo, validan el comportamiento y documentan la intencion del codigo.

## Por que Jest es clave aqui

- Convierte requisitos en casos de prueba ejecutables.
- Permite iterar con seguridad: cada cambio se valida en segundos.
- Ofrece retroalimentacion inmediata sobre errores de logica.
- Actua como documentacion viva del comportamiento esperado.

## Como funciona en este entorno

1. Cada ejercicio incluye un archivo de tests Jest ya definido.
2. El objetivo es hacer que la implementacion pase todas las pruebas.
3. Los tests fallidos indican exactamente que comportamiento falta o esta mal.
4. Los tests aprobados confirman que la solucion cumple el contrato.

## Buenas practicas con los tests

- Leer el fallo antes de modificar el codigo.
- Arreglar un caso a la vez y volver a ejecutar los tests.
- Mantener soluciones simples y enfocadas en los casos de prueba.
- Usar los tests como guia, no como un obstaculo.

## Errores tipicos y como interpretarlos

- Mensaje esperado vs recibido: compara el valor esperado con el real y rastrea la funcion que produce la salida.
- Excepciones no controladas: revisa entradas limite y valida antes de operar.
- Fallos en casos borde: mira los nombres de los tests para entender el escenario especifico.
- Tests que tardan o cuelgan: busca bucles infinitos o recursion sin caso base.

## Omitir o saltar tests

En Jest puedes omitir tests de forma temporal cuando estas aislando un fallo, pero no es una solucion final.

```bash
test.skip('descripcion', () => { /* ... */ })
describe.skip('bloque', () => { /* ... */ })
```

Para ejecutar solo un test mientras depuras:

```bash
test.only('descripcion', () => { /* ... */ })
describe.only('bloque', () => { /* ... */ })
```

Consejo: recuerda eliminar `skip` o `only` antes de considerar el ejercicio terminado.

## Ejecucion rapida

Desde la carpeta del ejercicio:

```bash
yarn install
yarn test
```

## Objetivo didactico

Este conjunto de ejercicios sirve para practicar una mentalidad de testing: pensar primero en el comportamiento, despues en la implementacion. Los tests de Jest son la herramienta principal para reforzar este enfoque.
