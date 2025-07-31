     // A l'initialisation la calculatrice est éteinte
  let isOn = false;

  // A l'initialisation rien n'est affiché 
  let Input = '';

  //////////////////// On/off la calculatrice/////////////////////////

  function togglePower() {

    // isOn est l'inverse du la varaiable isOn de départ 
    isOn = (!isOn); // on allume la calculatrice

    Input = ''; // Au On on vide le display et on affiche "0"

    // const calc = document.getElementById('calculator');

    const Display = document.getElementById('input');

    
    // si On est activé "0" s'affiche sur l'écran sinon il reste vide

    if (isOn) {
      Display.textContent = '0';
     
    } else {
      Display.textContent = '';
    }
  }
  
  //////////////////// Actualisation de l'affichage de la calculatrice/////////////////////////

  // fonction qui quand elle appellée  actualise l'affichage 
  function updateDisplay() {
    const Display = document.getElementById('input');
    Display.textContent = Input || '0';
  }

    //////////////////// Ajouter  à l'affichage les chiffres, les opérateurs sélectionnés par click/////////////////////////

  // Fonction genérale qui permet d'ajouter à l'affichage le chiffre surlequel on a cliqué.
  //Elle est rappelé dans le html au niveau de chaque button correspondant à un chiffre avec l'attribut onclick
  function appendNumber(number) {
    if (!isOn) return; // si off la function ne peut pa être appalée
    Input += number; // on ajoute le nombre à ce qui est déjà affiché
    updateDisplay(); // la function actualisation de l'affichage est appalée et conclut la function appendNumber()
  }

  // Fonction genérale qui permet d'ajouter à l'affichage l'opérateur surlequel on a cliqué.
  //Elle est rappelé dans le html au niveau de chaque button correspondant à un opérateur avec l'attribut onclick
  function appendOperator(operator) {
    if (!isOn) return; // si off la function ne peut pas être appalée
    if (Input === '') return; // si rien n'est affiché la function ne peut pas être appalée
    if (/[-+*/]$/.test(Input)) return; // si un opérateur est déjà affiché dans l'input on ne peut pas en affiché un autre à la suite
    Input += operator; // on ajoute l'opérateur à ce qui est déjà affiché
    updateDisplay();// la function actualisation de l'affichage est appalée et conclut la function appendOperator()
  }

  // Fonction genérale qui permet d'ajouter à l'affichage un nombre décimal
  //Elle est rappelé dans le html au niveau du button "," avec l'attribut onclick
  function appendDecimal() {
    if (!isOn) return; // si off la function ne peut pa être appalée
    let parts = Input.split(/[-+*/]/); // sépare par les opérateurs
    let lastPart = parts[parts.length - 1];
    if (!lastPart.includes('.')) {
      Input += '.';
      updateDisplay();
    }
  }
   ////////////////////  Remise à "0" de l'affichage au click de la touche Clear (C) /////////////////////////

  // Quand on clique sur C
  function clearDisplay() {
    if (!isOn) return;
    Input = '';
    updateDisplay();
  }


   ////////////////////Fonction pour arrondir le résultat à 3 chiffres aprés la virgule  /////////////////////////
  function roundResult(value, decimals = 3) {
    return Number(value.toFixed(decimals) ) // toFixed converti en chaîne de caractéres le nombre décimal limté à 3 chiffres aprés la virgule.
    //Number permet de reconvertir la chaîne de caractére en nombre
     }

   ////////////////////  Calculer et afficher le résultat des oépartions  /////////////////////////

    function calculate() {
    if (!isOn) return; // si off la function ne peut pa être appalée
    let result = eval(Input); // eval() évalue la valeur finale de l'expression arithmétique convertie en chaîne de caractéres ("") 
    result = roundResult(result); // la valeur résultat est arrondie à trois chiffres aprés la virgule
    Input = result.toString(); // la valeur résultat est convertie en chaîne de caratéres
    updateDisplay(); // On actualise l'affichage
    }






  