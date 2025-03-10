async function loadPokedex() {
  const response = await fetch("pokedex_database.json");
  const data = await response.json();
  console.log("Objet JSON", data);

  const pokedex = data.pokemonList;
  console.log("Pokedex 😈", pokedex);

  const totalNumberPokemon = pokedex.length;
  console.log("Nombre de Pokemon :", totalNumberPokemon);

  const namePokemon = pokedex.map((pokemon) => pokemon.name);
  console.log("Nom des pokemon :", namePokemon);

  //const randomIndex = Math.floor(Math.random() * 152); (Non dynamique)
  const randomIndex = Math.floor(Math.random() * pokedex.length);
  const randomPokemon = pokedex[randomIndex];
  console.log("🎲 Pokemon aléatoire :", randomPokemon.name);

  const firePokemon = pokedex.filter((pokemon) =>
    pokemon.type.includes("Fire")
  );
  console.log("🔥Pokemon type feu :", firePokemon);

  //Utilise pokemon.type === "Water" si type est une string.
  //Utilise pokemon.type.includes("Water") si type est un tableau.
  const waterPokemon = pokedex.find((pokemon) =>
    pokemon.type.includes("Water")
  );
  console.log("🐟 Pokemon type water :", waterPokemon);

  //la méthode .filter() fonctionne de manière à exécuter la fonction de rappel (callback) pour chaque élément du tableau, mais elle n'inclut dans le tableau final que les éléments pour lesquels le résultat de la fonction est true. Si la conversion échoue et que la fonction retourne false, l'élément est simplement exclu du tableau filtré.
  const weightPokemon = pokedex
    .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
    .sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
  console.log("Pokemon du plus léger au plus lourd :", weightPokemon);

  const totalWeightPokemon = pokedex
    .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
    .reduce(
      (accumulator, currentValue) =>
        accumulator + parseFloat(currentValue.weight),
      0
    );
  console.log("Poids total de tous les Pokemon :", totalWeightPokemon);

  const allHaveMoreThan30kg = pokedex
  .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
  .every((pokemon) => parseFloat(pokemon.weight) > 30);
  console.log("Les Pokémon ont-ils plus de 30 kg ? ", allHaveMoreThan30kg);

  const hasDragonType = pokedex.some((pokemon) =>
    pokemon.type.includes("Dragon")
  );
  console.log("🐉 Y a-t-il un Pokémon de type Dragon ? ", hasDragonType);

  //La méthode push() en JavaScript modifie le tableau original et renvoie la nouvelle longueur du tableau, pas l'élément ajouté.
  const addPokemon = pokedex.push({
    id: 152,
    name: "Charizard Gigamax",
    type: ["Fire"],
  });
  console.log("Nouvelle longueur du tableau :", addPokemon);
  console.log("Nouveau Pokedex :", pokedex);
  console.log("Nouveau Pokemon :", pokedex[151]); //index 151, car l'indexation commence à 0
}

loadPokedex();
