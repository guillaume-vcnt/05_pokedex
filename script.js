async function loadPokedex() {
  const response = await fetch("pokedex_database.json");
  const data = await response.json();
  console.log("Objet JSON", data);

  const pokedex = data.pokemonList;
  console.log("Pokédex 😈", pokedex);

  const totalPokemon = pokedex.length;
  console.log("Nombre total de Pokémon :", totalPokemon);

  const namePokemon = pokedex.map((pokemon) => pokemon.name);
  console.log("Nom des Pokémon :", namePokemon);

  //const randomIndex = Math.floor(Math.random() * 152); (Non dynamique)
  const randomIndex = Math.floor(Math.random() * pokedex.length);
  const randomPokemon = pokedex[randomIndex];
  console.log("🎲 Pokémon aléatoire :", randomPokemon.name);

  const firePokemon = pokedex.filter((pokemon) =>
    pokemon.type.includes("Fire")
  );
  console.log("🔥 Tous les Pokémon type fire :", firePokemon);

  //Utilise pokemon.type === "Water" si type est une string.
  //Utilise pokemon.type.includes("Water") si type est un tableau.
  const waterPokemon = pokedex.find((pokemon) =>
    pokemon.type.includes("Water")
  );
  console.log("🐟 Pokémon type water :", waterPokemon);

  //la méthode .filter() fonctionne de manière à exécuter la fonction de rappel (callback) pour chaque élément du tableau, mais elle n'inclut dans le tableau final que les éléments pour lesquels le résultat de la fonction est true. Si la conversion échoue et que la fonction retourne false, l'élément est simplement exclu du tableau filtré.
  const weightPokemon = pokedex
    .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
    .sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
  console.log("Pokémon du plus léger au plus lourd :", weightPokemon);

  const totalWeightPokemon = pokedex
    .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
    .reduce(
      (accumulator, currentValue) =>
        accumulator + parseFloat(currentValue.weight),
      0
    );
  console.log("Poids total de tous les Pokémon :", totalWeightPokemon);

  const allHaveMoreThan10kg = pokedex
    .filter((pokemon) => !isNaN(parseFloat(pokemon.weight)))
    .every((pokemon) => parseFloat(pokemon.weight) > 10);
  console.log(
    "⚖️ Tous les Pokémon ont-ils plus de 10 Kg ? ",
    allHaveMoreThan10kg
  );

  const hasDragonType = pokedex.some((pokemon) =>
    pokemon.type.includes("Dragon")
  );
  console.log("🐉 Y a-t-il un Pokémon de type Dragon ? ", hasDragonType);

  //La méthode push() en JavaScript modifie le tableau original et renvoie la nouvelle longueur du tableau, pas l'élément ajouté.
  pokedex.push({
    id: 152,
    name: "Tortank Gigamax",
    type: ["Water"],
  });
  console.log("Nouveau Pokédex :", pokedex);
  //index 151, car l'indexation commence à 0
  console.log("➕ Liste après ajout de Tortank Gigamax :", pokedex[151]);

  pokedex.splice(151, 1, {
    id: 152,
    name: "Charizard Gigamax",
    type: ["Fire"],
  });
  console.log("Nouveau Pokédex :", pokedex);
  //index 151, car l'indexation commence à 0
  console.log("➕ Liste après ajout de Charizard Gigamax :", pokedex[151]);

  const firstPokemon = pokedex.shift();
  console.log("Premier Pokémon de la liste:", firstPokemon);
  console.log("Nouveau Pokédex :", pokedex);

  const lastPokemon = pokedex.pop();
  console.log("Dernier Pokémon de la liste:", lastPokemon);
  console.log("Nouveau Pokédex :", pokedex);

  //Si array est garanti d’avoir au moins un élément, alors initialiser avec array[0] est plus efficace.
  //Si array peut être vide, alors la première approche (let heaviestPokemon;) est plus sécurisée.
  let heaviestPokemon;
  let maxWeight = -Infinity;
  for (const pokemon of pokedex) {
    const weightValue = parseFloat(pokemon.weight);
    if (weightValue > maxWeight) {
      maxWeight = weightValue;
      heaviestPokemon = pokemon.name;
    }
  }
  console.log("Pokemon le plus lourd :", heaviestPokemon);

  // let maxWeight = -Infinity;
  // let heaviestPokemon;
  // //   for (let i = 0; i < pokedex.length; i++) {
  // //     const weightValue = parseFloat(pokedex[i].weight);
  // //     if (weightValue > maxWeight) {
  // //       maxWeight = weightValue;
  // //       heaviestPokemon = pokedex[i].name;
  // //     }
  // //   }
  // //   console.log("Pokemon le plus lourd :", heaviestPokemon);
  // // }

  const grassPokemon = pokedex.filter((pokemon) =>
    pokemon.type.includes("Grass")
  );
  console.log("🌿 Tous les Pokémon type grass :", grassPokemon);

  grassPokemon.forEach((pokemon) => {
    console.log(`Hello je suis ${pokemon.name}`);
  });
}

loadPokedex();
