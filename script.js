document.addEventListener('DOMContentLoaded', () => {

    // ====================================================================
    // 1. DATABASE DEGLI ANIME (AGGIORNATO E SENZA VOTO)
    // ====================================================================
    const animeData = [
        { title: "91 Days", genres: ["Seinen"], year: 2016, img: "img/91_days.jpg" },
        { title: "Abenobashi Magical Shopping Street", genres: ["Commedia"], year: 2002, img: "img/abenobashi_magical_shopping_street.jpg" },
        { title: "Ajin: Demi-Human", genres: ["Seinen"], year: 2016, img: "img/ajin_demi_human.jpg" },
        { title: "Akame Ga Kill!", genres: ["Shonen"], year: 2014, img: "img/akame_ga_kill.jpg" },
        { title: "Akira", genres: ["Seinen"], year: 1988, img: "img/akira.jpg" },
        { title: "Akudama Drive", genres: ["Seinen"], year: 2020, img: "img/akudama_drive.jpg" },
        { title: "Arcane: League of Legends", genres: ["Seinen"], year: 2021, img: "img/arcane_league_of_legends.jpg" },
        { title: "Attack on Titan", genres: ["Shonen"], year: 2013, img: "img/attack_on_titan.jpg" },
        { title: "Berserk", genres: ["Seinen"], year: 1997, img: "img/berserk.jpg" },
        { title: "Black Clover", genres: ["Shonen"], year: 2017, img: "img/black_clover.jpg" },
        { title: "BLEACH", genres: ["Shonen"], year: 2004, img: "img/bleach.jpg" },
        { title: "BNA: Brand New Animal", genres: ["Fantasy"], year: 2020, img: "img/bna_brand_new_animal.jpg" },
        { title: "Burn the Witch", genres: ["Shonen"], year: 2020, img: "img/burn_the_witch.jpg" },
        { title: "Chainsaw Man", genres: ["Shonen"], year: 2022, img: "img/chainsaw_man.jpg" },
        { title: "Claymore", genres: ["Shonen"], year: 2007, img: "img/claymore.jpg" },
        { title: "Cyberpunk: Edgerunners", genres: ["Seinen"], year: 2022, img: "img/cyberpunk_edgerunners.jpg" },
        { title: "DAN DA DAN", genres: ["Shonen"], year: 2025, img: "img/dan_da_dan.jpg" },
        { title: "Darwin's Game", genres: ["Shonen"], year: 2020, img: "img/darwins_game.jpg" },
        { title: "Deadman Wonderland", genres: ["Shonen"], year: 2011, img: "img/deadman_wonderland.jpg" },
        { title: "Death Note", genres: ["Shonen"], year: 2006, img: "img/death_note.jpg" },
        { title: "Deca-Dence", genres: ["Sci-Fi"], year: 2020, img: "img/deca_dence.jpg" },
        { title: "Demon Slayer", genres: ["Shonen"], year: 2019, img: "img/demon_slayer.jpg" },
        { title: "Devil May Cry", genres: ["Azione"], year: 2025, img: "img/devil_may_cry.jpg" },
        { title: "Devilman Crybaby", genres: ["Seinen"], year: 2018, img: "img/devilman_crybaby.jpg" },
        { title: "Drifters", genres: ["Isekai"], year: 2016, img: "img/drifters.jpg" },
        { title: "Erased", genres: ["Seinen"], year: 2016, img: "img/erased.jpg" },
        { title: "Failure Frame", genres: ["Isekai"], year: 2024, img: "img/failure_frame.jpg" },
        { title: "Fate/Zero", genres: ["Seinen"], year: 2011, img: "img/fate_zero.jpg" },
        { title: "FLCL", genres: ["Commedia"], year: 2000, img: "img/flcl.jpg" },
        { title: "Fullmetal Alchemist: Brotherhood", genres: ["Shonen"], year: 2009, img: "img/fullmetal_alchemist_brotherhood.jpg" },
        { title: "Future Diary", genres: ["Shonen"], year: 2015, img: "img/future_diary.jpg" },
        { title: "Gangsta.", genres: ["Seinen"], year: 2004, img: "img/gangsta.jpg" },
        { title: "Gantz", genres: ["Seinen"], year: 2015, img: "img/gantz.jpg" },
        { title: "Gate", genres: ["Isekai"], year: 2016, img: "img/gate.jpg" },
        { title: "Grimgar of Fantasy and Ash", genres: ["Isekai"], year: 2007, img: "img/grimgar_of_fantasy_and_ash.jpg" },
        { title: "Gurren Lagann", genres: ["Shonen"], year: 2023, img: "img/gurren_lagann.jpg" },
        { title: "Handyman Saitou in Another World", genres: ["Isekai"], year: 2023, img: "img/handyman_saitou_in_another_world.jpg" },
        { title: "Heavenly Delusion", genres: ["Seinen"], year: 2023, img: "img/heavenly_delusion.jpg" },
        { title: "Hell's Paradise: Jigokuraku", genres: ["Shonen"], year: 2006, img: "img/hells_paradise_jigokuraku.jpg" },
        { title: "Hellsing Ultimate", genres: ["Seinen"], year: 2011, img: "img/hellsing_ultimate.jpg" },
        { title: "HUNTER x HUNTER", genres: ["Shonen"], year: 2012, img: "img/hunter_x_hunter.jpg" },
        { title: "JoJo's Bizarre Adventure", genres: ["Shonen"], year: 2020, img: "img/jojos_bizarre_adventure.jpg" },
        { title: "Jujutsu Kaisen", genres: ["Shonen"], year: 2024, img: "img/jujutsu_kaisen.jpg" },
        { title: "Kaiju No. 8", genres: ["Shonen"], year: 2013, img: "img/kaiju_no_8.jpg" },
        { title: "Kill la Kill", genres: ["Azione"], year: 2012, img: "img/kill_la_kill.jpg" },
        { title: "Kingdom", genres: ["Seinen"], year: 2014, img: "img/kingdom.jpg" },
        { title: "Lazarus", genres: ["Sci-Fi"], year: 2025, img: "img/lazarus.jpg" },
        { title: "Made in Abyss", genres: ["Seinen"], year: 2017, img: "img/made_in_abyss.jpg" },
        { title: "Mob Psycho 100", genres: ["Shonen"], year: 2011, img: "img/mob_psycho_100.jpg" },
        { title: "My Hero Academia: Vigilantes", genres: ["Shonen"], year: 2025, img: "img/my_hero_academia_vigilantes.jpg" },
        { title: "My Hero Academia", genres: ["Shonen"], year: 2021, img: "img/my_hero_academia.jpg" },
        { title: "NARUTO", genres: ["Shonen"], year: 2016, img: "img/naruto.jpg" },
        { title: "Neon Genesis Evangelion", genres: ["Seinen"], year: 2002, img: "img/neon_genesis_evangelion.jpg" },
        { title: "ONE PIECE", genres: ["Shonen"], year: 1995, img: "img/one_piece.jpg" },
        { title: "One-Punch Man", genres: ["Seinen"], year: 1999, img: "img/one_punch_man.jpg" },
        { title: "Overlord", genres: ["Isekai"], year: 2015, img: "img/overlord.jpg" },
        { title: "Parasyte -the maxim-", genres: ["Seinen"], year: 2015, img: "img/parasyte_the_maxim.jpg" },
        { title: "Ranking of Kings", genres: ["Fantasy"], year: 2021, img: "img/ranking_of_kings.jpg" },
        { title: "Re:ZERO -Starting Life in Another World-", genres: ["Isekai"], year: 2016, img: "img/rezero_starting_life_in_another_world.jpg" },
        { title: "Reincarnated as a Sword", genres: ["Isekai"], year: 2022, img: "img/reincarnated_as_a_sword.jpg" },
        { title: "Sakamoto Days", genres: ["Shonen"], year: 2025, img: "img/sakamoto_days.jpg" },
        { title: "Shangri-La Frontier", genres: ["Isekai"], year: 2023, img: "img/shangri_la_frontier.jpg" },
        { title: "Solo Leveling", genres: ["Shonen"], year: 2024, img: "img/solo_leveling.jpg" },
        { title: "SPY x FAMILY", genres: ["Shonen"], year: 2022, img: "img/spy_x_family.jpg" },
        { title: "Steins;Gate", genres: ["Seinen"], year: 2011, img: "img/steins_gate.jpg" },
        { title: "Summer Time Rendering", genres: ["Thriller"], year: 2022, img: "img/summer_time_rendering.jpg" },
        { title: "Sword Art Online", genres: ["Isekai"], year: 2012, img: "img/sword_art_online.jpg" },
        { title: "Terra Formars", genres: ["Seinen"], year: 2014, img: "img/terra_formars.jpg" },
        { title: "The Eminence in Shadow", genres: ["Isekai"], year: 2022, img: "img/the_eminence_in_shadow.jpg" },
        { title: "The Promised Neverland", genres: ["Shonen"], year: 2024, img: "img/the_promised_neverland.jpg" },
        { title: "The Rising of the Shield Hero", genres: ["Isekai"], year: 2019, img: "img/the_rising_of_the_shield_hero.jpg" },
        { title: "The World's Finest Assassin...", genres: ["Isekai"], year: 2019, img: "img/the_worlds_finest_assassin.jpg" },
        { title: "To Be Hero X", genres: ["Azione"], year: 2024, img: "img/to_be_hero_x.jpg" },
        { title: "Tokyo Revengers", genres: ["Shonen"], year: 2021, img: "img/tokyo_revengers.jpg" },
        { title: "Tower of God", genres: ["Fantasy"], year: 2020, img: "img/tower_of_god.jpg" },
        { title: "Trigun", genres: ["Shonen"], year: 1998, img: "img/trigun.jpg" },
        { title: "Vinland Saga", genres: ["Seinen"], year: 2019, img: "img/vinland_saga.jpg" },
        { title: "Wistoria: Wand and Sword", genres: ["Shonen"], year: 2024, img: "img/wistoria_wand_and_sword.jpg" }
    ];

    const container = document.getElementById('cards-container');
    const genreSelect = document.getElementById('genere-select');
    const sortSelect = document.getElementById('sort-select');

    function renderCards(cardsToRender) {
        container.innerHTML = '';
        if (cardsToRender.length === 0) {
            container.innerHTML = '<p style="color: var(--muted); text-align: center; grid-column: 1 / -1;">Nessun anime trovato con questi criteri.</p>';
            return;
        }
        cardsToRender.forEach(anime => {
            const card = document.createElement('div');
            card.className = 'card';
            // Ho rimosso il VOTO dal blocco HTML qui sotto
            card.innerHTML = `
                <img src="${anime.img}" alt="Copertina di ${anime.title}">
                <div class="card-content">
                    <h2>${anime.title}</h2>
                    <div class="genres">${anime.genres.join(' / ')}</div>
                    <div class="meta">
                        <span>ANNO: ${anime.year}</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    function updateDisplay() {
        const selectedGenre = genreSelect.value;
        const sortCriteria = sortSelect.value;
        let filteredAnime = animeData;
        if (selectedGenre !== 'Tutti') {
            filteredAnime = animeData.filter(anime => anime.genres.includes(selectedGenre));
        }
        // Ho rimosso la logica di ordinamento per VOTO
        filteredAnime.sort((a, b) => {
            if (sortCriteria === 'titolo') {
                return a.title.localeCompare(b.title);
            }
            if (sortCriteria === 'anno') {
                return b.year - a.year;
            }
        });
        renderCards(filteredAnime);
    }
    
    function populateGenres() {
        const allGenres = new Set();
        animeData.forEach(anime => {
            anime.genres.forEach(genre => allGenres.add(genre));
        });
        const sortedGenres = Array.from(allGenres).sort();
        sortedGenres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreSelect.appendChild(option);
        });
    }

    genreSelect.addEventListener('change', updateDisplay);
    sortSelect.addEventListener('change', updateDisplay);

    populateGenres();
    updateDisplay();
});