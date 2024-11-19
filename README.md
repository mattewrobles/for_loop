# FOR LOOP

Este es un proyecto de integración para usar for loop.

## Descripción

Este proyecto utiliza la biblioteca p5.js para crear un lienzo en el que se dibujan cuadrados de colores. El tamaño de los cuadrados cambia dinámicamente según la posición del mouse en el eje X.

## Archivos

- `index.html`: Archivo HTML que carga la biblioteca p5.js y el archivo `sketch.js`.
- `sketch.js`: Contiene el código JavaScript que dibuja los cuadrados en el lienzo.

## Cómo funciona

1. **Configuración del lienzo**: En la función `setup()`, se crea un lienzo que ocupa todo el tamaño de la ventana del navegador usando `createCanvas(windowWidth, windowHeight)`.

2. **Dibujo en el lienzo**: La función `draw()` se ejecuta en un bucle continuo. En cada iteración:
   - Se genera un color de fondo aleatorio pero no exagerado.
   - Se calcula el tamaño de los cuadrados basado en la posición del mouse en el eje X usando `map(mouseX, 0, width, 10, 250)`.
   - Se dibujan cuadrados en una cuadrícula, con el tamaño calculado y un color específico.

3. **Interacción con el mouse**: La posición del mouse afecta tanto el tamaño de los cuadrados como la distancia entre ellos en los ejes X e Y.

## Ejecución

Para ejecutar este proyecto, simplemente abre el archivo `index.html` en un navegador web. Asegúrate de que los archivos `p5.js` y `sketch.js` estén en las ubicaciones correctas.

## Dependencias

- [p5.js](https://p5js.org/): Biblioteca de JavaScript para la creación de gráficos y animaciones.
