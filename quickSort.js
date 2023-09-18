//EXERCICE D'ALGORITHMIE
// QUICK SORT = TRI RAPIDE = dernier chiffre en pivot, tout ce qui est plus grand dans un tableau à droite, tout ce qui est plus petit dans un autre à gauche.
//Puis re-chiffre pivot, plus petit à gauche, plus grand à droite, etc...


//FONCTION RECURSIVE :
function quickSort(array) {

  //Régle pour que la fonction ne s'appelle pas à l'infinie (arrêt à un élèment) :
  if (array.length === 1) {
    return array;
  }

  //Codage du pivot : 
  //Pivot est le dernier élèment du tableau :
  const pivot = array[array.length -1];
  //Déclarer le tableau de gauche et le tableau de droite (pour pouvoir pousser des élèments dedans)
  let arrLeft = [];
  let arrRight = [];

  //Parcourir le tableau :
  for (let i = 0; i < array.length -1; i++) {
    //Si l'élèment (i) est + petit que le pivot, pousse le dans le tableau left, sinon pousse le dans le tableau right :
    array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
  }
  
  //On relance la fonction quickSort pour les deux tableaux que l'on vient de créer (arrLeft et arrRight) :
  //On s'assure qu'ils ne soient pas vides :
  if (arrLeft.length > 0 && arrRight.length > 0) {
    
    //Retourne-moi un array : 
    //"..." : spread operator pour casser et mettre les élèments dans un tableau
    // Suivi de la fonction avec en paramètre le tableau de gauche
    //Suivi du pivot
    //Même chose pour tableau de droite
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];

    //Mettre la condition pour les deux tableaux séparemment car ne font pas forcément la même taille (et dans la première condition, il y a un &&) :
  } else if (arrLeft.length > 0) {
    return[...quickSort(arrLeft), pivot];
  } else {
    return[pivot, ...quickSort(arrRight)];
  }
}


console.log(
quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
);
