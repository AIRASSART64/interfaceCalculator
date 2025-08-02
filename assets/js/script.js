     // Déclaration de la variable booléenne "isOn" qui false au chargement de la page
  let isOn = false;

  // Déclaration de la variable "input" qui est vide au chargement de la page
  let Input = '';

  //////////////////// On/off la calculatrice/////////////////////////

  function togglePower() {

    // Quand on appuie sur "On" la variable booléenne let isOn qui était false, devient true
    isOn = (!isOn); 

    Input = ''; // Au "On" on vide le display et on affiche "0"

    const Display = document.getElementById('input'); // La varaible "Display" qui correspond à l'affichage de "l'input" ,est appaléé

    
    // Quand "On" est activé "0" s'affiche sur l'écran sinon il reste vide

    if (isOn) {
      Display.textContent = '0';
     
    } else {
      Display.textContent = '';
    }
  }
  
  //////////////////// Actualisation de l'affichage de la calculatrice/////////////////////////

  // fonction qui quand elle appellée actualise l'affichage 
   function updateDisplay() {
   const Display = document.getElementById('input');
   Display.textContent = Input || '0';
  }

    //////////////////// Ajouter  à l'affichage les chiffres, les opérateurs sélectionnés par click/////////////////////////

  // Fonction genérale qui permet d'ajouter à l'affichage le chiffre surlequel on a cliqué.
  //Elle est appelée dans le html au niveau de chaque button correspondant à un chiffre avec l'attribut onclick
  function appendNumber(number) {
    if (!isOn) return; // si off la function ne s'éxecute pas
    Input += number; // on ajoute le nombre à ce qui est déjà affiché
    updateDisplay(); // la function actualisation de l'affichage est appelée et conclut la function appendNumber()
  }

  // Fonction genérale qui permet d'ajouter à l'affichage l'opérateur surlequel on a cliqué.
  //Elle est appelée dans le html au niveau de chaque button correspondant à un opérateur avec l'attribut onclick
  function appendOperator(operator) {
    if (!isOn) return; // si off la function ne s'éxecute pas
    if (Input === '') return; // la saisi de l'opérateur est prise en compte que si un chiffre à d'abord été saisi
    if (/[-+*/]$/.test(Input)) return; // si un opérateur est déjà affiché dans l'input on ne peut pas en affiché un autre à la suite
    Input += operator; // on ajoute l'opérateur à ce qui est déjà affiché
    updateDisplay();// la function actualisation de l'affichage est appelée et conclut la function appendOperator()
  }

  // Fonction genérale qui permet d'ajouter à l'affichage un nombre décimal
  //Elle est appelée dans le html au niveau du button "," avec l'attribut onclick
  function appendDecimal() {
    if (!isOn) return; //si off la function ne s'éxecute pas
    let parts = Input.split(/[-+*/]/); // dans la chaîne de caractéres de l'input on exclu les oparateurs
    let lastPart = parts[parts.length - 1]; // on appelle une variable qui correspond au dernier chiffre de la chaine de caractéres saisies dans l'input
    if (!lastPart.includes('.')) { // si cette variable ne contient pas déjà une virgule la saisie de la virgule peut être prise en compte
      Input += '.';
      updateDisplay();//la function actualisation de l'affichage est appelée et conclut la function appendDcimal()
    }
  }
   ////////////////////  Remise à "0" de l'affichage au click de la touche Clear (C) /////////////////////////

  // Quand on clique sur C
  function clearDisplay() {
    if (!isOn) return; //si off la function ne s'éxecute pas
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
    if (!isOn) return; // si off la function ne s'éxecute pas
    let result = eval(Input); // eval() évalue le code js de l'opération arithmétique saisie dans l'input sous forme d'une chaîne de caractéres 
    result = roundResult(result); // la valeur résultat est arrondie à trois chiffres aprés la virgule
    Input = result.toString(); // la valeur résultat est convertie en chaîne de caratéres
    updateDisplay(); // On actualise l'affichage
    }






  