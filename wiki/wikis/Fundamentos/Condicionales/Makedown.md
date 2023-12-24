## que son las condicionales?

las condicionales como su propo nobre lo indica son las cosas que se usan para comprbar si algo es cierto o no tambien sirven para dicerentes tipos de casos,

aqui tenes ejemplos de condicionales i los mas usados:

el IF:
<pre>
    if(condicion){

    }
</pre>
esta sintaxis casi no cambia en los diferentes lengiajes i se usa para combrobar si algo es veradero con las condiciones que vimos en los operadores lo que se pone en las llaves(estas {} llaves) se ejecuta si es verdadero se puede usar con un else:
<pre>
    if(0 == 0){
        print("hola");
    }else{
        print("como que 0 no es igual a 0?");
    }
</pre>
en este caso se comprueba si 0 es igual a 0 i si es asi manda un mensaje en la terminal de hola si no es asi manda el mensaje de "como que 0 no es igual a 0?"

tambien esta el Swhitch(Creo que lo e escrito mal) esto lo que hace es en un caso de, un ejemplo es:
<pre>
    shitch(variable){
        case 0{
            print("es 0")
            break
        }
        case 1{
            print("es 1")
            break
        }
    }
</pre>
esto lo que hace es si la variable tiene 0 impimir "es 0" i si tiene 1 imprimir "es 1" siempre hay que poner break almenos en el jaso de java ya que no se si otros lenguajes tendran esta condicional se pone break para romper el bucle que hay ya que si no estara viendo todo el rato si la variable es esto i con break salimos del bucle

tabien esta el while su objetivo es hacer un bucle si algo es verdadero por ejemplo:
<pre>
    while(true){
        print("esto se va a repetir infinitamente no lo uses con paneles")
    }
</pre>
aqui en la condicional e puesto un valor boolean ya que si en cualquier condicional pones una variable o dato booleano si es varadero se ejecuta como en este caso i si es falso no pasa nada

yo uso solo estos condicionales pero tabien esta el bucle for esto no se le puede llamar como condicional pero es parecido, su funcionamiento es un poco complejo pero lo que hace es si hay una variable con por ejemplo un 3 puedes hacer lo siguiente:
<pre>
    for(int i=0; i<10; i++){
        print("bucle numero " + i)
    }
</pre>
esto lo que hace es, se crea una variable i esta va aumentando por cada buble gracias a que emos puesto i++ cuando i sea igual a 10 el bucle se detiene

veamos un ejemplo mas complejo de lo que emos apendido:
<pre>
    String msg = "hola!";

    if(msg == "hola!"){

        print(" el mesaje es hola")

        int intt = 2

        switch(intt){

            case 2{

                print("es 2")

                boolean bool = true

                if(bool){

                    print("es verdadero")

                }else{

                    print("es falso")

                }
            }
        }
    }

</pre>
no pasa nada si no lo enteindes solo intenta pensar lina por linea lo que esta pasando ya que haun no emos pasado a programar i este leguaje en el que estoy escribiendo es una mezcla de python i java i no va a funcionar con ningun lengiaje conocido