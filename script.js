document.addEventListener('DOMContentLoaded', () => {

    // ====================================================================
    // 1. DATABASE DEGLI ANIME (COMPLETO E SENZA LINK)
    // ====================================================================
    const animeData = [
        { title: "91 Days", genres: ["Drammatico", "Storico"], vote: 8, year: 2016, img: "img/91_days.jpg" },
        { title: "Abenobashi Magical Shopping Street", genres: ["Commedia", "Fantasy"], vote: 8, year: 2002, img: "img/abenobashi_magical_shopping_street.jpg" },
        { title: "Ajin: Demi-Human", genres: ["Azione", "Thriller"], vote: 7, year: 2016, img: "img/ajin_demi_human.jpg" },
        { title: "Akame Ga Kill!", genres: ["Azione", "Fantasy oscuro"], vote: 8, year: 2014, img: "img/akame_ga_kill.jpg" },
        { title: "Akira", genres: ["Sci-Fi", "Azione"], vote: 9, year: 1988, img: "img/akira.jpg" },
        { title: "Akudama Drive", genres: ["Sci-Fi", "Azione"], vote: 7, year: 2020, img: "img/akudama_drive.jpg" },
        { title: "Arcane: League of Legends", genres: ["Azione", "Avventura"], vote: 9, year: 2021, img: "img/arcane_league_of_legends.jpg" },
        { title: "Attack on Titan", genres: ["Azione", "Fantasy oscuro"], vote: 9, year: 2013, img: "img/attack_on_titan.jpg" },
        { title: "Berserk", genres: ["Fantasy oscuro", "Azione"], vote: 10, year: 1997, img: "img/berserk.jpg" },
        { title: "Black Clover", genres: ["Fantasy", "Azione"], vote: 8, year: 2017, img: "img/black_clover.jpg" },
        { title: "BLEACH", genres: ["Azione", "Fantasy"], vote: 10, year: 2004, img: "img/bleach.jpg" },
        { title: "BNA: Brand New Animal", genres: ["Fantasy", "Azione"], vote: 7, year: 2020, img: "img/bna_brand_new_animal.jpg" },
        { title: "Burn the Witch", genres: ["Fantasy", "Azione"], vote: 7, year: 2020, img: "img/burn_the_witch.jpg" },
        { title: "Chainsaw Man", genres: ["Azione", "Horror"], vote: 8, year: 2022, img: "img/chainsaw_man.jpg" },
        { title: "Claymore", genres: ["Fantasy oscuro", "Azione"], vote: 7, year: 2007, img: "img/claymore.jpg" },
        { title: "Cyberpunk: Edgerunners", genres: ["Sci-Fi", "Azione"], vote: 9, year: 2022, img: "img/cyberpunk_edgerunners.jpg" },
        { title: "DAN DA DAN", genres: ["Sci-Fi", "Commedia"], vote: 9, year: 2025, img: "img/dan_da_dan.jpg" },
        { title: "Darwin's Game", genres: ["Azione", "Thriller"], vote: 7, year: 2020, img: "img/darwins_game.jpg" },
        { title: "Deadman Wonderland", genres: ["Azione", "Horror"], vote: 7, year: 2011, img: "img/deadman_wonderland.jpg" },
        { title: "Death Note", genres: ["Thriller", "Sovrannaturale"], vote: 9, year: 2006, img: "img/death_note.jpg" },
        { title: "Deca-Dence", genres: ["Sci-Fi", "Azione"], vote: 7, year: 2020, img: "img/deca_dence.jpg" },
        { title: "Demon Slayer", genres: ["Azione", "Fantasy oscuro"], vote: 9, year: 2019, img: "img/demon_slayer.jpg" },
        { title: "Devil May Cry", genres: ["Azione", "Fantasy oscuro"], vote: 8, year: 2025, img: "img/devil_may_cry.jpg" },
        { title: "Devilman Crybaby", genres: ["Horror", "Azione"], vote: 8, year: 2018, img: "img/devilman_crybaby.jpg" },
        { title: "Drifters", genres: ["Azione", "Fantasy"], vote: 7, year: 2016, img: "img/drifters.jpg" },
        { title: "Erased", genres: ["Thriller", "Sovrannaturale"], vote: 7, year: 2016, img: "img/erased.jpg" },
        { title: "Failure Frame", genres: ["Isekai", "Fantasy"], vote: 8, year: 2024, img: "img/failure_frame.jpg" },
        { title: "Fate/Zero", genres: ["Azione", "Fantasy"], vote: 7, year: 2011, img: "img/fate_zero.jpg" },
        { title: "FLCL", genres: ["Sci-Fi", "Commedia"], vote: 8, year: 2000, img: "img/flcl.jpg" },
        { title: "Fullmetal Alchemist: Brotherhood", genres: ["Azione", "Fantasy"], vote: 10, year: 2009, img: "img/fullmetal_alchemist_brotherhood.jpg" },
        { title: "Future Diary", genres: ["Azione", "Thriller"], vote: 8, year: 2015, img: "img/future_diary.jpg" },
        { title: "Gangsta.", genres: ["Azione", "Drammatico"], vote: 9, year: 2004, img: "img/gangsta.jpg" },
        { title: "Gantz", genres: ["Azione", "Sci-Fi"], vote: 8, year: 2015, img: "img/gantz.jpg" },
        { title: "Gate", genres: ["Isekai", "Fantasy"], vote: 8, year: 2016, img: "img/gate.jpg" },
        { title: "Grimgar of Fantasy and Ash", genres: ["Fantasy", "Avventura"], vote: 9, year: 2007, img: "img/grimgar_of_fantasy_and_ash.jpg" },
        { title: "Gurren Lagann", genres: ["Azione", "Sci-Fi"], vote: 8, year: 2023, img: "img/gurren_lagann.jpg" },
        { title: "Handyman Saitou in Another World", genres: ["Isekai", "Fantasy"], vote: 9, year: 2023, img: "img/handyman_saitou_in_another_world.jpg" },
        { title: "Heavenly Delusion", genres: ["Sci-Fi", "Mistero"], vote: 8, year: 2023, img: "img/heavenly_delusion.jpg" },
        { title: "Hell's Paradise: Jigokuraku", genres: ["Azione", "Fantasy oscuro"], vote: 7, year: 2006, img: "img/hells_paradise_jigokuraku.jpg" },
        { title: "Hellsing Ultimate", genres: ["Azione", "Horror"], vote: 9, year: 2011, img: "img/hellsing_ultimate.jpg" },
        { title: "HUNTER x HUNTER", genres: ["Azione", "Avventura"], vote: 10, year: 2012, img: "img/hunter_x_hunter.jpg" },
        { title: "JoJo's Bizarre Adventure", genres: ["Azione", "Avventura"], vote: 9, year: 2020, img: "img/jojos_bizarre_adventure.jpg" },
        { title: "Jujutsu Kaisen", genres: ["Azione", "Fantasy oscuro"], vote: 9, year: 2024, img: "img/jujutsu_kaisen.jpg" },
        { title: "Kaiju No. 8", genres: ["Azione", "Sci-Fi"], vote: 8, year: 2013, img: "img/kaiju_no_8.jpg" },
        { title: "Kill la Kill", genres: ["Azione", "Sci-Fi"], vote: 9, year: 2012, img: "img/kill_la_kill.jpg" },
        { title: "Kingdom", genres: ["Storico", "Azione"], vote: 9, year: 2014, img: "img/kingdom.jpg" },
        { title: "Made in Abyss", genres: ["Avventura", "Fantasy oscuro"], vote: 9, year: 2017, img: "img/made_in_abyss.jpg" },
        { title: "Mob Psycho 100", genres: ["Azione", "Commedia"], vote: 9, year: 2011, img: "img/mob_psycho_100.jpg" },
        { title: "My Hero Academia", genres: ["Azione", "Commedia"], vote: 7, year: 2021, img: "img/my_hero_academia.jpg" },
        { title: "NARUTO", genres: ["Azione", "Avventura"], vote: 8, year: 2016, img: "img/naruto.jpg" },
        { title: "Neon Genesis Evangelion", genres: ["Sci-Fi", "Mecha"], vote: 10, year: 2002, img: "img/neon_genesis_evangelion.jpg" },
        { title: "ONE PIECE", genres: ["Avventura", "Azione"], vote: 9, year: 1995, img: "img/one_piece.jpg" },
        { title: "One-Punch Man", genres: ["Azione", "Commedia"], vote: 10, year: 1999, img: "img/one_punch_man.jpg" },
        { title: "Overlord", genres: ["Isekai", "Fantasy"], vote: 9, year: 2015, img: "img/overlord.jpg" },
        { title: "Parasyte -the maxim-", genres: ["Sci-Fi", "Horror"], vote: 7, year: 2015, img: "img/parasyte_the_maxim.jpg" },
        { title: "Ranking of Kings", genres: ["Fantasy", "Avventura"], vote: 8, year: 2021, img: "img/ranking_of_kings.jpg" },
        { title: "Re:ZERO -Starting Life in Another World-", genres: ["Isekai", "Fantasy"], vote: 8, year: 2016, img: "img/rezero_starting_life_in_another_world.jpg" },
        { title: "Reincarnated as a Sword", genres: ["Isekai", "Fantasy"], vote: 8, year: 2022, img: "img/reincarnated_as_a_sword.jpg" },
        { title: "Sakamoto Days", genres: ["Azione", "Commedia"], vote: 7, year: 2025, img: "img/sakamoto_days.jpg" },
        { title: "Shangri-La Frontier", genres: ["Isekai", "Azione"], vote: 9, year: 2023, img: "img/shangri_la_frontier.jpg" },
        { title: "Solo Leveling", genres: ["Azione", "Fantasy"], vote: 9, year: 2024, img: "img/solo_leveling.jpg" },
        { title: "SPY x FAMILY", genres: ["Commedia", "Azione"], vote: 7, year: 2022, img: "img/spy_x_family.jpg" },
        { title: "Steins;Gate", genres: ["Sci-Fi", "Thriller"], vote: 9, year: 2011, img: "img/steins_gate.jpg" },
        { title: "Summer Time Rendering", genres: ["Mistero", "Thriller"], vote: 9, year: 2022, img: "img/summer_time_rendering.jpg" },
        { title: "Sword Art Online", genres: ["Isekai", "Avventura"], vote: 8, year: 2012, img: "img/sword_art_online.jpg" },
        { title: "Terra Formars", genres: ["Sci-Fi", "Horror"], vote: 7, year: 2014, img: "img/terra_formars.jpg" },
        { title: "The Eminence in Shadow", genres: ["Fantasy", "Commedia"], vote: 7, year: 2022, img: "img/the_eminence_in_shadow.jpg" },
        { title: "The Promised Neverland", genres: ["Thriller", "Fantasy oscuro"], vote: 8, year: 2024, img: "img/the_promised_neverland.jpg" },
        { title: "The Rising of the Shield Hero", genres: ["Isekai", "Fantasy"], vote: 8, year: 2019, img: "img/the_rising_of_the_shield_hero.jpg" },
        { title: "The World's Finest Assassin...", genres: ["Isekai", "Fantasy"], vote: 7, year: 2019, img: "img/the_worlds_finest_assassin.jpg" },
        { title: "Tokyo Revengers", genres: ["Azione", "Drammatico"], vote: 7, year: 2021, img: "img/tokyo_revengers.jpg" },
        { title: "Tower of God", genres: ["Fantasy", "Avventura"], vote: 7, year: 2020, img: "img/tower_of_god.jpg" },
        { title: "Trigun", genres: ["Azione", "Sci-Fi"], vote: 8, year: 1998, img: "img/trigun.jpg" },
        { title: "Vinland Saga", genres: ["Storico", "Azione"], vote: 9, year: 2019, img: "img/vinland_saga.jpg" },
        { title: "Wistoria: Wand and Sword", genres: ["Fantasy", "Avventura"], vote: 7, year: 2024, img: "img/wistoria_wand_and_sword.jpg" }
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
            card.innerHTML = `
                <img src="${anime.img}" alt="Copertina di ${anime.title}">
                <div class="card-content">
                    <h2>${anime.title}</h2>
                    <div class="genres">${anime.genres.join(' / ')}</div>
                    <div class="meta">
                        <span>VOTO: ${anime.vote}</span>
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
        filteredAnime.sort((a, b) => {
            if (sortCriteria === 'titolo') {
                return a.title.localeCompare(b.title);
            }
            if (sortCriteria === 'voto') {
                return b.vote - a.vote;
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