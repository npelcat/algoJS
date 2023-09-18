//EXERCICE D'ALGORITHMIE
// SELECTION SORT = TRI A SELECTION = quel est l'élement le plus petit (+ petit au + grand)

function selectionSort(array){

  //i avance de 1 à chaque fois dans le tableau :
  for (let i = 0; i < array.length -1; i++) {
    //Prévoir une boite (minIndex) pour stocker l'élément minimum (i) :
    let minIndex = i;
     //j parcourt tout le tableau (i + 1) pour comparer et trouver le plus petit :
    for (let j = i + 1; j < array.length; j++) {
      //Est-ce que array[j] est + petit que array[minIndex] ? :
      if (array[j] < array[minIndex]) {
        //Si oui : 
        minIndex = j;
      }
    }
    //Après la boucle j, intervertir les positions :
    //Le chiffre le plus petit (minIndex) partira au niveau de la première position (i)
    //Et le chiffre correspondant à la première position part à la place de celui en minIndex
    //Etc à chaque tour de boucle
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  console.log(array);
}

selectionSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);

