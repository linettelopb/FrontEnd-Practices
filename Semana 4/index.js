const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log("data",data);
            //Imagen
            let pokeImg = data.sprites.other.dream_world.front_default;
            pokeImage(pokeImg);
            //Nombre pokemon
            let Myelement = document.getElementById("pokemon");
            console.log(Myelement.value);
            Myelement.value = data.name;

            document.getElementById("typePoke").value = data.types[0].type.name;//Tipo pokemon
            //Estadisticas pokemon
            document.getElementById("PokeHp").value = data.stats[0].base_stat;
            document.getElementById("PokeAttack").value = data.stats[1].base_stat;
            document.getElementById("PokeDef").value = data.stats[2].base_stat;
            document.getElementById("PokeAttackE").value = data.stats[3].base_stat;
            document.getElementById("PokeDefE").value = data.stats[4].base_stat;
            document.getElementById("PokeSpeed").value = data.stats[5].base_stat;
            //Medidas corporales
            var peso = data.weight / 10;//Convertir a KG
            document.getElementById("height").value = data.height;
            document.getElementById("weight").value = peso;
            //Movimientos
            document.getElementById("mov1").value = data.moves[0].move.name;
            document.getElementById("mov2").value = data.moves[1].move.name;
            document.getElementById("mov3").value = data.moves[2].move.name;
            document.getElementById("mov4").value = data.moves[3].move.name;
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}