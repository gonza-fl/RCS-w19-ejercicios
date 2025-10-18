7.   Escribir un texto explicativo como si fuera para un niño de 12 años, lo que es un variable, una constante, la diferencia entre definir y declarar, que es un lenguaje de programación interpretado vs compilado y que es el tipado dinámico. Explicar operadores.

¿Que es una variable?
En programación guardamos información con las variables para utilizarla cuando la necesitemos. Ademas le podemos dar su valor propio. Pueden ser un números, palabra, valores o listas

En el programa JS existen 3 variables las cuales son: var (Ya no se usan), let (Variables que pueden cambiar) y const (const significa constante que significa que no pueden cambiar)

Una variable se ve asi: let nombre = Luciano;. El nombre de la variable "let" es "nombre" y el valor que guardamos de ese "nombre" es Luciano.

¿Que es una constante?
Por otra parte una constante es una variable la cual una vez que le damos un valor, este no puede ser cambiado. 

Una constante se ve asi: const PI = 3.14159;

Diferencia en declarar e inicializar
Declaración: Creamos un espacio de memoria para una variable pero todavía no le asignamos un valor. Ejemplo: let nombre

Inicialización: Da un valor a ese espacio de memoria. Ejemplo: let nombre = Luciano

Lenguajes compilados e interpretados 
Estos lenguajes son los encargados de traducir nuestros programas a lenguaje que la maquina pueda entender y existen 2 formas de hacerlo

Compilados: Se necesita un programa compilador para traducir a lenguaje maquina y crea un archivo ejecutable. Corre rápido una vez compilado, pero si hay un error, lo ves antes de empezar

Interpretados: Un interprete traduce paso a paso (linea por linea nuestro código) mientras se ejecuta. Es más fácil probar cambios rápido, pero puede ser más lento

Tipado dinámico
JS es de tipado dinámico porque los datos que utiliza son de diferentes tipos y se los pueden cambiar. Ejemplo: Un tipo de dato presenta información (caracteres) y otro tipo valores matemáticos (numéricos) let numero = 5; let numero = "cinco"; de tipo numero a tipo texto

Operadores
Los operadores son un elemento del lenguaje Javascript que nos permiten hacer diferentes operaciones lógicas. Tenemos diferentes tipos

De asignación: Para poner valores en variables, el mas simple que existe, se usa el "=" (simple asignación) Ejemplo let edad = 15; edad += 5; declaramos variable edad con valor 15 y después le reasignamos una suma de 5 para aumentar su valor a 20 del que teníamos antes.

Aritméticos: Para matemáticas básicas, como sumar o restar. let resta = 20 - 10; resta daría 10

De comparación: Para comparar valores o datos y ver si son iguales o diferentes.