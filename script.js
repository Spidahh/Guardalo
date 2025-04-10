const films = [
  {
    "titolo": "91 Days",
    "genere1": "Drammatico",
    "genere2": "Storico",
    "voto": 8,
    "anno": 2016,
    "immagine": "img/91_days.jpg"
  },
  {
    "titolo": "Abenobashi Magical Shopping Street",
    "genere1": "Commedia",
    "genere2": "Fantasy",
    "voto": 8,
    "anno": 2002,
    "immagine": "img/abenobashi_magical_shopping_street.jpg"
  },
  {
    "titolo": "Ajin: Demi-Human",
    "genere1": "Azione",
    "genere2": "Thriller",
    "voto": 7,
    "anno": 2016,
    "immagine": "img/ajin_demi_human.jpg"
  },
  {
    "titolo": "Akame Ga Kill!",
    "genere1": "Azione",
    "genere2": "Fantasy oscuro",
    "voto": 8,
    "anno": 2014,
    "immagine": "img/akame_ga_kill_.jpg"
  },
  {
    "titolo": "Akira",
    "genere1": "Sci-Fi",
    "genere2": "Azione",
    "voto": 9,
    "anno": 1988,
    "immagine": "img/akira.jpg"
  },
  {
    "titolo": "Akudama Drive",
    "genere1": "Sci-Fi",
    "genere2": "Azione",
    "voto": 7,
    "anno": 2020,
    "immagine": "img/akudama_drive.jpg"
  },
  {
    "titolo": "Arcane: League of Legends",
    "genere1": "Azione",
    "genere2": "Avventura",
    "voto": 9,
    "anno": 2021,
    "immagine": "img/arcane_league_of_legends.jpg"
  },
  {
    "titolo": "Attack on Titan",
    "genere1": "Azione",
    "genere2": "Fantasy oscuro",
    "voto": 9,
    "anno": 2013,
    "immagine": "img/attack_on_titan.jpg"
  },
  {
    "titolo": "Berserk",
    "genere1": "Fantasy oscuro",
    "genere2": "Azione",
    "voto": 10,
    "anno": 1997,
    "immagine": "img/berserk.jpg"
  },
  {
    "titolo": "Black Clover",
    "genere1": "Fantasy",
    "genere2": "Azione",
    "voto": 8,
    "anno": 2017,
    "immagine": "img/black_clover.jpg"
  },
  {
    "titolo": "BLEACH",
    "genere1": "Azione",
    "genere2": "Fantasy",
    "voto": 10,
    "anno": 2004,
    "immagine": "img/bleach.jpg"
  },
  {
    "titolo": "BNA: Brand New Animal",
    "genere1": "Fantasy",
    "genere2": "Azione",
    "voto": 7,
    "anno": 2020,
    "immagine": "img/bna_brand_new_animal.jpg"
  },
  {
    "titolo": "Burn the Witch",
    "genere1": "Fantasy",
    "genere2": "Azione",
    "voto": 7,
    "anno": 2020,
    "immagine": "img/burn_the_witch.jpg"
  },
  {
    "titolo": "Chainsaw Man",
    "genere1": "Azione",
    "genere2": "Horror",
    "voto": 8,
    "anno": 2022,
    "immagine": "img/chainsaw_man.jpg"
  },
  {
    "titolo": "Claymore",
    "genere1": "Fantasy oscuro",
    "genere2": "Azione",
    "voto": 7,
    "anno": 2007,
    "immagine": "img/claymore.jpg"
  },
  {
    "titolo": "Cyberpunk: Edgerunners",
    "genere1": "Sci-Fi",
    "genere2": "Azione",
    "voto": 9,
    "anno": 2022,
    "immagine": "img/cyberpunk_edgerunners.jpg"
  },
  {
    "titolo": "DAN DA DAN",
    "genere1": "Sci-Fi",
    "genere2": "Commedia",
    "voto": 9,
    "anno": 2025,
    "immagine": "img/dan_da_dan.jpg"
  },
  {
    "titolo": "Darwin's Game",
    "genere1": "Azione",
    "genere2": "Thriller",
    "voto": 7,
    "anno": 2020,
    "immagine": "img/darwin_s_game.jpg"
  },
  {
    "titolo": "Deadman Wonderland",
    "genere1": "Azione",
    "genere2": "Horror",
    "voto": 7,
    "anno": 2011,
    "immagine": "img/deadman_wonderland.jpg"
  },
  {
    "titolo": "Death Note",
    "genere1": "Thriller",
    "genere2": "Sovrannaturale",
    "voto": 9,
    "anno": 2006,
    "immagine": "img/death_note.jpg"
  },
  {
    "titolo": "Deca-Dence",
    "genere1": "Sci-Fi",
    "genere2": "Azione",
    "voto": 7,
    "anno": 2020,
    "immagine": "img/deca_dence.jpg"
  },
  {
    "titolo": "Demon Slayer: Kimetsu no Yaiba",
    "genere1": "Azione",
    "genere2": "Fantasy oscuro",
    "voto": 9,
    "anno": 2019,
    "immagine": "img/demon_slayer_kimetsu_no_yaiba.jpg"
  },
  {
    "titolo": "Devil May Cry",
    "genere1": "Azione",
    "genere2": "Fantasy oscuro",
    "voto": 8,
    "anno": 2025,
    "immagine": "img/devil_may_cry.jpg"
  },
  {
    "titolo": "Devilman Crybaby",
    "genere1": "Horror",
    "genere2": "Azione",
    "voto": 8,
    "anno": 2018,
    "immagine": "img/devilman_crybaby.jpg"
  },
  {
    "titolo": "Drifters",
    "genere1": "Azione",
    "genere2": "Fantasy",
    "voto": 7,
    "anno": 2016,
    "immagine": "img/drifters.jpg"
  },
  {
    "titolo": "Erased",
    "genere1": "Thriller",
    "genere2": "Sovrannaturale",
    "voto": 7,
    "anno": 2016,
    "immagine": "img/erased.jpg"
  },
  {
    "titolo": "Failure Frame: I Became the Strongest and Can Annihilate Everything With Low-Level Spells",
    "genere1": "Isekai",
    "genere2": "Fantasy",
    "voto": 8,
    "anno": 2024,
    "immagine": "img/failure_frame_i_became_the_strongest_and_can_annihilate_everything_with_low_level_spells.jpg"
  },
  {
    "titolo": "Fate/Zero",
    "genere1": "Azione",
    "genere2": "Fantasy",
    "voto": 7,
    "anno": 2011,
    "immagine": "img/fate_zero.jpg"
  },
  {
    "titolo": "FLCL",
    "genere1": "Sci-Fi",
    "genere2": "Commedia",
    "voto": 8,
    "anno": 2000,
    "immagine": "img/flcl.jpg"
  },
  {
    "titolo": "Fullmetal Alchemist: Brotherhood",
    "genere1": "Azione",
    "genere2": "Fantasy",
    "voto": 10,
    "anno": 2009,
    "immagine": "img/fullmetal_alchemist_brotherhood.jpg"
  },
  {
    "titolo": "Future Diary",
    "genere1": "Azione",
    "genere2": "Thriller",
    "voto": 8,
    "anno": 2015,
    "immagine": "img/future_diary.jpg"
  },
  {
    "titolo": "Gangsta.",
    "genere1": "Azione",
    "genere2": "Drammatico",
    "voto": 9,
    "anno": 2004,
    "immagine": "img/gangsta_.jpg"
  },
  {
    "titolo": "Gantz",
    "genere1": "Azione",
    "genere2": "Sci-Fi",
    "voto": 8,
    "anno": 2015,
    "immagine": "img/gantz.jpg"
  },
  {
    "titolo": "Gate: Thus the JSDF Fought There!",
    "genere1": "Azione",
    "genere2": "Fantasy",
    "voto": 8,
    "anno": 2016,
    "immagine": "img/gate_thus_the_jsdf_fought_there_.jpg"
  },
  {
    "titolo": "Grimgar of Fantasy and Ash",
    "genere1": "Fantasy",
    "genere2": "Avventura",
    "voto": 9,
    "anno": 2007,
    "immagine": "img/grimgar_of_fantasy_and_ash.jpg"
  },
  {
    "titolo": "Gurren Lagann",
    "genere1": "Azione",
    "genere2": "Sci-Fi",
    "voto": 8,
    "anno": 2023,
    "immagine": "img/gurren_lagann.jpg"
  },
  {
    "titolo": "Handyman Saitou in Another World",
    "genere1": "Isekai",
    "genere2": "Fantasy",
    "voto": 9,
    "anno": 2023,
    "immagine": "img/handyman_saitou_in_another_world.jpg"
  },
  {
    "titolo": "Heavenly Delusion",
    "genere1": "Sci-Fi",
    "genere2": "Mistero",
    "voto": 8,
    "anno": 2023,
    "immagine": "img/heavenly_delusion.jpg"
  },
  {
    "titolo": "Hell's Paradise: Jigokuraku",
    "genere1": "Azione",
    "genere2": "Fantasy oscuro",
    "voto": 7,
    "anno": 2006,
    "immagine": "img/hell_s_paradise_jigokuraku.jpg"
  },
  {
    "titolo": "Hellsing Ultimate",
    "genere1": "Azione",
    "genere2": "Horror",
    "voto": 9,
    "anno": 2011,
    "immagine": "img/hellsing_ultimate.jpg"
  },
  {
    "titolo": "HUNTER x HUNTER",
    "genere1": "Azione",
    "genere2": "Avventura",
    "voto": 10,
    "anno": 2012,
    "immagine": "img/hunter_x_hunter.jpg"
  },
  {
    "titolo": "JoJo's Bizarre Adventure",
    "genere1": "Azione",
    "genere2": "Avventura",
    "voto": 9,
    "anno": 2020,
    "immagine": "img/jojo_s_bizarre_adventure.jpg"
  },
  {
    "titolo": "Jujutsu Kaisen",
    "genere1": "Azione",
    "genere2": "Fantasy oscuro",
    "voto": 9,
    "anno": 2024,
    "immagine": "img/jujutsu_kaisen.jpg"
  },
  {
    "titolo": "Kaiju No. 8",
    "genere1": "Azione",
    "genere2": "Sci-Fi",
    "voto": 8,
    "anno": 2013,
    "immagine": "img/kaiju_no_8.jpg"
  },
  {
    "titolo": "Kill la Kill",
    "genere1": "Azione",
    "genere2": "Sci-Fi",
    "voto": 9,
    "anno": 2012,
    "immagine": "img/kill_la_kill.jpg"
  },
  {
    "titolo": "Kingdom",
    "genere1": "Storico",
    "genere2": "Azione",
    "voto": 9,
    "anno": 2014,
    "immagine": "img/kingdom.jpg"
  },
  {
    "titolo": "Made in Abyss",
    "genere1": "Avventura",
    "genere2": "Fantasy oscuro",
    "voto": 9,
    "anno": 2017,
    "immagine": "img/made_in_abyss.jpg"
  },
  {
    "titolo": "Mob Psycho 100",
    "genere1": "Azione",
    "genere2": "Commedia",
    "voto": 9,
    "anno": 2011,
    "immagine": "img/mob_psycho_100.jpg"
  },
  {
    "titolo": "Mushoku Tensei: Jobless Reincarnation",
    "genere1": "Isekai",
    "genere2": "Fantasy",
    "voto": 9,
    "anno": 2016,
    "immagine": "img/mushoku_tensei_jobless_reincarnation.jpg"
  },
  {
    "titolo": "My Hero Academia",
    "genere1": "Azione",
    "genere2": "Commedia",
    "voto": 7,
    "anno": 2021,
    "immagine": "img/my_hero_academia.jpg"
  },
  {
    "titolo": "NARUTO",
    "genere1": "Azione",
    "genere2": "Avventura",
    "voto": 8,
    "anno": 2016,
    "immagine": "img/naruto.jpg"
  },
  {
    "titolo": "Neon Genesis Evangelion",
    "genere1": "Sci-Fi",
    "genere2": "Mecha",
    "voto": 10,
    "anno": 2002,
    "immagine": "img/neon_genesis_evangelion.jpg"
  },
  {
    "titolo": "ONE PIECE",
    "genere1": "Avventura",
    "genere2": "Azione",
    "voto": 9,
    "anno": 1995,
    "immagine": "img/one_piece.jpg"
  },
  {
    "titolo": "One-Punch Man",
    "genere1": "Azione",
    "genere2": "Commedia",
    "voto": 10,
    "anno": 1999,
    "immagine": "img/one_punch_man.jpg"
  },
  {
    "titolo": "Overlord",
    "genere1": "Isekai",
    "genere2": "Fantasy",
    "voto": 9,
    "anno": 2015,
    "immagine": "img/overlord.jpg"
  },
  {
    "titolo": "Parasyte -the maxim-",
    "genere1": "Sci-Fi",
    "genere2": "Horror",
    "voto": 7,
    "anno": 2015,
    "immagine": "img/parasyte_the_maxim_.jpg"
  },
  {
    "titolo": "Ranking of Kings",
    "genere1": "Fantasy",
    "genere2": "Avventura",
    "voto": 8,
    "anno": 2021,
    "immagine": "img/ranking_of_kings.jpg"
  },
  {
    "titolo": "Re:ZERO -Starting Life in Another World-",
    "genere1": "Isekai",
    "genere2": "Fantasy",
    "voto": 8,
    "anno": 2016,
    "immagine": "img/re_zero_starting_life_in_another_world_.jpg"
  },
  {
    "titolo": "Reincarnated as a Sword",
    "genere1": "Isekai",
    "genere2": "Fantasy",
    "voto": 8,
    "anno": 2022,
    "immagine": "img/reincarnated_as_a_sword.jpg"
  },
  {
    "titolo": "Sakamoto Days",
    "genere1": "Azione",
    "genere2": "Commedia",
    "voto": 7,
    "anno": 2025,
    "immagine": "img/sakamoto_days.jpg"
  },
  {
    "titolo": "Shangri-La Frontier: Crappy Game Hunter Challenges God-Tier Game",
    "genere1": "Isekai",
    "genere2": "Azione",
    "voto": 9,
    "anno": 2023,
    "immagine": "img/shangri_la_frontier_crappy_game_hunter_challenges_god_tier_game.jpg"
  },
  {
    "titolo": "Solo Leveling",
    "genere1": "Azione",
    "genere2": "Fantasy",
    "voto": 9,
    "anno": 2024,
    "immagine": "img/solo_leveling.jpg"
  },
  {
    "titolo": "SPY x FAMILY",
    "genere1": "Commedia",
    "genere2": "Azione",
    "voto": 7,
    "anno": 2022,
    "immagine": "img/spy_x_family.jpg"
  },
  {
    "titolo": "Steins;Gate",
    "genere1": "Sci-Fi",
    "genere2": "Thriller",
    "voto": 9,
    "anno": 2011,
    "immagine": "img/steins_gate.jpg"
  },
  {
    "titolo": "Summer Time Rendering",
    "genere1": "Mistero",
    "genere2": "Thriller",
    "voto": 9,
    "anno": 2022,
    "immagine": "img/summer_time_rendering.jpg"
  },
  {
    "titolo": "Sword Art Online",
    "genere1": "Sci-Fi",
    "genere2": "Avventura",
    "voto": 8,
    "anno": 2012,
    "immagine": "img/sword_art_online.jpg"
  },
  {
    "titolo": "Terra Formars",
    "genere1": "Sci-Fi",
    "genere2": "Horror",
    "voto": 7,
    "anno": 2014,
    "immagine": "img/terra_formars.jpg"
  },
  {
    "titolo": "The Eminence in Shadow",
    "genere1": "Fantasy",
    "genere2": "Commedia",
    "voto": 7,
    "anno": 2022,
    "immagine": "img/the_eminence_in_shadow.jpg"
  },
  {
    "titolo": "The Promised Neverland",
    "genere1": "Thriller",
    "genere2": "Fantasy oscuro",
    "voto": 8,
    "anno": 2024,
    "immagine": "img/the_promised_neverland.jpg"
  },
  {
    "titolo": "The Rising of the Shield Hero",
    "genere1": "Isekai",
    "genere2": "Fantasy",
    "voto": 8,
    "anno": 2019,
    "immagine": "img/the_rising_of_the_shield_hero.jpg"
  },
  {
    "titolo": "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
    "genere1": "Isekai",
    "genere2": "Fantasy",
    "voto": 7,
    "anno": 2019,
    "immagine": "img/the_world_s_finest_assassin_gets_reincarnated_in_another_world_as_an_aristocrat.jpg"
  },
  {
    "titolo": "Tokyo Revengers",
    "genere1": "Azione",
    "genere2": "Drammatico",
    "voto": 7,
    "anno": 2021,
    "immagine": "img/tokyo_revengers.jpg"
  },
  {
    "titolo": "Tower of God",
    "genere1": "Fantasy",
    "genere2": "Avventura",
    "voto": 7,
    "anno": 2020,
    "immagine": "img/tower_of_god.jpg"
  },
  {
    "titolo": "Trigun",
    "genere1": "Azione",
    "genere2": "Sci-Fi",
    "voto": 8,
    "anno": 1998,
    "immagine": "img/trigun.jpg"
  },
  {
    "titolo": "Vinland Saga",
    "genere1": "Storico",
    "genere2": "Azione",
    "voto": 9,
    "anno": 2019,
    "immagine": "img/vinland_saga.jpg"
  },
  {
    "titolo": "Wistoria: Wand and Sword",
    "genere1": "Fantasy",
    "genere2": "Avventura",
    "voto": 7,
    "anno": 2024,
    "immagine": "img/wistoria_wand_and_sword.jpg"
  }
];

const container = document.getElementById('cards-container');

films.forEach(film => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${film.immagine}" alt="Locandina di ${film.titolo}">
    <div class="card-content">
      <h2>${film.titolo}</h2>
      <p><strong>Genere principale:</strong> ${film.genere1}</p>
      <p><strong>Genere secondario:</strong> ${film.genere2}</p>
      <p><strong>Voto:</strong> ${film.voto}</p>
      <p><strong>Anno:</strong> ${film.anno}</p>
    </div>
  `;
  container.appendChild(card);
});
