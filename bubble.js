//EXERCICE D'ALGORITHMIE
// BUBBLE SORT = TRI A BULLE : quel est l'élèment le plus grand (+ grand au + petit)

function bubbleSort(array){

  //i avance de 1 à chaque fois dans le tableau :
  for (let i = 0; i < array.length -1; i++) {
    //j parcourt tout le tableau pour intervertir les élèments :
    for (let j = 0; j < array.length -1 -i; j++) {
      //Condition pour comparer :
      //Est-ce que j est supérieur à son voisin de droite :
      if (array[j] > array[j + 1]) {
        //Si oui, on les interverti :
        //On stocke "array[j]" dans une variable temporaire
        let temp = array[j];
        //array[j], je t'intervertis avec ton voisin (donc tu es égale à ton voisin) :
        array[j] = array[j + 1];
        //array[j+1], tu vas à la place de ton voisin de gauche : array[j] (temp) :
        array[j + 1] = temp;

        //Autre méthode plus courte :
        //On compare deux tableaux, avec les valeurs inversées, pour les intervertir (array[j] donne sa valeur à array[j + 1] et inversement)
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];

        console.log(array);
      }
    }
  }
  console.log(array);
}

bubbleSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);





//On peut également appliquer à l'array la méthode ".sort", plus rapide, (prend toujours a et b en paramètres) qui permet de trier :
// function bubble(array) {
//   console.log(array.sort((a,b) => a - b));

// }

// bubble([451, 2, 65, 4, 7, 98, 2, 3, 1]);
