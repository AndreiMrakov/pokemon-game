import { Pokemon, PokemonType } from '@/components/PokemonCard/PokemonCard.types';

export const pokemonsMock :Pokemon[] = [
  {
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 71
    },
    "type": PokemonType.FLYING,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": '17',
    "values": {
      "top": "A",
      "right": 2,
      "bottom": 7,
      "left": 5
    }
  },
  {
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "specialAttack": 65,
      "specialDefense": 79,
      "speed": 80
    },
    "type": PokemonType.POISON,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "name": "arbok",
    "base_experience": 157,
    "height": 35,
    "id": '24',
    "values": {
      "top": 5,
      "right": 9,
      "bottom": "A",
      "left": "A"
    }
  },
  {
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "specialAttack": 50,
      "specialDefense": 50,
      "speed": 90
    },
    "type": PokemonType.ELECTRIC,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "name": "pikachu",
    "base_experience": 112,
    "height": 4,
    "id": '25',
    "values": {
      "top": 8,
      "right": "A",
      "bottom": 9,
      "left": 6
    }
  },
  {
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "specialAttack": 65,
      "specialDefense": 65,
      "speed": 45
    },
    "type": PokemonType.GRASS,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "name": "bulbasaur",
    "base_experience": 64,
    "height": 7,
    "id": '1',
    "values": {
      "top": 8,
      "right": 4,
      "bottom": 2,
      "left": 7
    }
  },
  {
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "specialAttack": 60,
      "specialDefense": 50,
      "speed": 65
    },
    "type": PokemonType.FIRE,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "name": "charmander",
    "base_experience": 62,
    "height": 6,
    "id": '4',
    "values": {
      "top": 7,
      "right": 6,
      "bottom": 1,
      "left": 4
    }
  }
]