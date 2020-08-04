//Return welcome in the language given as a parameter. If the language does not exist default to 'Welcome' in English.

function greet(language) {
  let obj ={
	english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
    }
  let values = Object.values(obj);
  console.log(values)
  let keys = Object.keys(obj)
  for(let i = 0; i < keys.length; i++){
    if(keys[i] === language){
      return values[i]
    }
  }return 'Welcome'
}
