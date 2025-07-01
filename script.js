document.addEventListener('DOMContentLoaded', () => {

    const animeData = [
        { title: "91 Days", genres: ["Seinen"], year: 2016, img: "img/91_days.jpg", studio: "Shuka", stato: "Finito" },
        { title: "Abenobashi Magical Shopping Street", genres: ["Commedia"], year: 2002, img: "img/abenobashi_magical_shopping_street.jpg", studio: "Gainax", stato: "Finito" },
        { title: "Ajin: Demi-Human", genres: ["Seinen"], year: 2016, img: "img/ajin_demi_human.jpg", studio: "Polygon Pictures", stato: "Finito" },
        { title: "Akame Ga Kill!", genres: ["Shonen"], year: 2014, img: "img/akame_ga_kill.jpg", studio: "White Fox", stato: "Finito" },
        { title: "Akira", genres: ["Seinen"], year: 1988, img: "img/akira.jpg", studio: "TMS Entertainment", stato: "Film" },
        { title: "Akudama Drive", genres: ["Seinen"], year: 2020, img: "img/akudama_drive.jpg", studio: "Pierrot", stato: "Finito" },
        { title: "Arcane: League of Legends", genres: ["Seinen"], year: 2021, img: "img/arcane_league_of_legends.jpg", studio: "Fortiche", stato: "Finito" },
        { title: "Attack on Titan", genres: ["Shonen"], year: 2013, img: "img/attack_on_titan.jpg", studio: "Wit Studio / MAPPA", stato: "Finito" },
        { title: "Berserk", genres: ["Seinen"], year: 1997, img: "img/berserk.jpg", studio: "OLM", stato: "Finito" },
        { title: "Black Clover", genres: ["Shonen"], year: 2017, img: "img/black_clover.jpg", studio: "Pierrot", stato: "Finito" },
        { title: "BLEACH", genres: ["Shonen"], year: 2004, img: "img/bleach.jpg", studio: "Pierrot", stato: "In corso" },
        { title: "BNA: Brand New Animal", genres: ["Fantasy"], year: 2020, img: "img/bna_brand_new_animal.jpg", studio: "Trigger", stato: "Finito" },
        { title: "Burn the Witch", genres: ["Shonen"], year: 2020, img: "img/burn_the_witch.jpg", studio: "Studio Colorido", stato: "Finito" },
        { title: "Chainsaw Man", genres: ["Shonen"], year: 2022, img: "img/chainsaw_man.jpg", studio: "MAPPA", stato: "In corso" },
        { title: "Claymore", genres: ["Shonen"], year: 2007, img: "img/claymore.jpg", studio: "Madhouse", stato: "Finito" },
        { title: "Cyberpunk: Edgerunners", genres: ["Seinen"], year: 2022, img: "img/cyberpunk_edgerunners.jpg", studio: "Trigger", stato: "Finito" },
        { title: "DAN DA DAN", genres: ["Shonen"], year: 2024, img: "img/dan_da_dan.jpg", studio: "Science SARU", stato: "In corso" },
        { title: "Darwin's Game", genres: ["Shonen"], year: 2020, img: "img/darwins_game.jpg", studio: "Nexus", stato: "Finito" },
        { title: "Deadman Wonderland", genres: ["Shonen"], year: 2011, img: "img/deadman_wonderland.jpg", studio: "Manglobe", stato: "Finito" },
        { title: "Death Note", genres: ["Shonen"], year: 2006, img: "img/death_note.jpg", studio: "Madhouse", stato: "Finito" },
        { title: "Deca-Dence", genres: ["Sci-Fi"], year: 2020, img: "img/deca_dence.jpg", studio: "NUT", stato: "Finito" },
        { title: "Demon Slayer", genres: ["Shonen"], year: 2019, img: "img/demon_slayer.jpg", studio: "Ufotable", stato: "In corso" },
        { title: "Devil May Cry", genres: ["Azione"], year: 2025, img: "img/devil_may_cry.jpg", studio: "Studio Mir", stato: "Finito" },
        { title: "Devilman Crybaby", genres: ["Seinen"], year: 2018, img: "img/devilman_crybaby.jpg", studio: "Science SARU", stato: "Finito" },
        { title: "Drifters", genres: ["Isekai"], year: 2016, img: "img/drifters.jpg", studio: "Hoods Drifters Studio", stato: "Finito" },
        { title: "Erased", genres: ["Seinen"], year: 2016, img: "img/erased.jpg", studio: "A-1 Pictures", stato: "Finito" },
        { title: "Failure Frame", genres: ["Isekai"], year: 2024, img: "img/failure_frame.jpg", studio: "Seven Arcs", stato: "Finito" },
        { title: "Fate/Zero", genres: ["Seinen"], year: 2011, img: "img/fate_zero.jpg", studio: "Ufotable", stato: "Finito" },
        { title: "FLCL", genres: ["Commedia"], year: 2000, img: "img/flcl.jpg", studio: "Gainax / Production I.G", stato: "Finito" },
        { title: "Fullmetal Alchemist: Brotherhood", genres: ["Shonen"], year: 2009, img: "img/fullmetal_alchemist_brotherhood.jpg", studio: "Bones", stato: "Finito" },
        { title: "Future Diary", genres: ["Shonen"], year: 2011, img: "img/future_diary.jpg", studio: "Asread", stato: "Finito" },
        { title: "Gangsta.", genres: ["Seinen"], year: 2015, img: "img/gangsta.jpg", studio: "Manglobe", stato: "Finito" },
        { title: "Gantz", genres: ["Seinen"], year: 2004, img: "img/gantz.jpg", studio: "Gonzo", stato: "Finito" },
        { title: "Gate", genres: ["Isekai"], year: 2015, img: "img/gate.jpg", studio: "A-1 Pictures", stato: "Finito" },
        { title: "Grimgar of Fantasy and Ash", genres: ["Isekai"], year: 2016, img: "img/grimgar_of_fantasy_and_ash.jpg", studio: "A-1 Pictures", stato: "Finito" },
        { title: "Gurren Lagann", genres: ["Shonen"], year: 2007, img: "img/gurren_lagann.jpg", studio: "Gainax", stato: "Finito" },
        { title: "Handyman Saitou in Another World", genres: ["Isekai"], year: 2023, img: "img/handyman_saitou_in_another_world.jpg", studio: "C2C", stato: "Finito" },
        { title: "Heavenly Delusion", genres: ["Seinen"], year: 2023, img: "img/heavenly_delusion.jpg", studio: "Production I.G", stato: "Finito" },
        { title: "Hell's Paradise: Jigokuraku", genres: ["Shonen"], year: 2023, img: "img/hells_paradise_jigokuraku.jpg", studio: "MAPPA", stato: "In corso" },
        { title: "Hellsing Ultimate", genres: ["Seinen"], year: 2006, img: "img/hellsing_ultimate.jpg", studio: "Satelight / Madhouse", stato: "Finito" },
        { title: "HUNTER x HUNTER", genres: ["Shonen"], year: 2011, img: "img/hunter_x_hunter.jpg", studio: "Madhouse", stato: "Finito" },
        { title: "JoJo's Bizarre Adventure", genres: ["Shonen"], year: 2012, img: "img/jojos_bizarre_adventure.jpg", studio: "David Production", stato: "In corso" },
        { title: "Jujutsu Kaisen", genres: ["Shonen"], year: 2020, img: "img/jujutsu_kaisen.jpg", studio: "MAPPA", stato: "In corso" },
        { title: "Kaiju No. 8", genres: ["Shonen"], year: 2024, img: "img/kaiju_no_8.jpg", studio: "Production I.G", stato: "Finito" },
        { title: "Kill la Kill", genres: ["Azione"], year: 2013, img: "img/kill_la_kill.jpg", studio: "Trigger", stato: "Finito" },
        { title: "Kingdom", genres: ["Seinen"], year: 2012, img: "img/kingdom.jpg", studio: "Pierrot", stato: "In corso" },
        { title: "Lazarus", genres: ["Sci-Fi"], year: 2025, img: "img/lazarus.jpg", studio: "MAPPA", stato: "Finito" },
        { title: "Made in Abyss", genres: ["Seinen"], year: 2017, img: "img/made_in_abyss.jpg", studio: "Kinema Citrus", stato: "In corso" },
        { title: "Mob Psycho 100", genres: ["Shonen"], year: 2016, img: "img/mob_psycho_100.jpg", studio: "Bones", stato: "Finito" },
        { title: "My Hero Academia: Vigilantes", genres: ["Shonen"], year: 2025, img: "img/my_hero_academia_vigilantes.jpg", studio: "Bones", stato: "In corso" },
        { title: "My Hero Academia", genres: ["Shonen"], year: 2016, img: "img/my_hero_academia.jpg", studio: "Bones", stato: "In corso" },
        { title: "NARUTO", genres: ["Shonen"], year: 2002, img: "img/naruto.jpg", studio: "Pierrot", stato: "Finito" },
        { title: "Neon Genesis Evangelion", genres: ["Seinen"], year: 1995, img: "img/neon_genesis_evangelion.jpg", studio: "Gainax", stato: "Finito" },
        { title: "ONE PIECE", genres: ["Shonen"], year: 1999, img: "img/one_piece.jpg", studio: "Toei Animation", stato: "In corso" },
        { title: "One-Punch Man", genres: ["Seinen"], year: 2015, img: "img/one_punch_man.jpg", studio: "Madhouse / J.C.Staff", stato: "In corso" },
        { title: "Overlord", genres: ["Isekai"], year: 2015, img: "img/overlord.jpg", studio: "Madhouse", stato: "In corso" },
        { title: "Parasyte -the maxim-", genres: ["Seinen"], year: 2014, img: "img/parasyte_the_maxim.jpg", studio: "Madhouse", stato: "Finito" },
        { title: "Ranking of Kings", genres: ["Fantasy"], year: 2021, img: "img/ranking_of_kings.jpg", studio: "Wit Studio", stato: "Finito" },
        { title: "Re:ZERO -Starting Life in Another World-", genres: ["Isekai"], year: 2016, img: "img/rezero_starting_life_in_another_world.jpg", studio: "White Fox", stato: "Finito" },
        { title: "Reincarnated as a Sword", genres: ["Isekai"], year: 2022, img: "img/reincarnated_as_a_sword.jpg", studio: "C2C", stato: "Finito" },
        { title: "Sakamoto Days", genres: ["Shonen"], year: 2025, img: "img/sakamoto_days.jpg", studio: "TMS Entertainment", stato: "In corso" },
        { title: "Shangri-La Frontier", genres: ["Isekai"], year: 2023, img: "img/shangri_la_frontier.jpg", studio: "C2C", stato: "Finito" },
        { title: "Solo Leveling", genres: ["Shonen"], year: 2024, img: "img/solo_leveling.jpg", studio: "A-1 Pictures", stato: "In corso" },
        { title: "SPY x FAMILY", genres: ["Shonen"], year: 2022, img: "img/spy_x_family.jpg", studio: "Wit Studio / CloverWorks", stato: "In corso" },
        { title: "Steins;Gate", genres: ["Seinen"], year: 2011, img: "img/steins_gate.jpg", studio: "White Fox", stato: "Finito" },
        { title: "Summer Time Rendering", genres: ["Thriller"], year: 2022, img: "img/summer_time_rendering.jpg", studio: "OLM", stato: "Finito" },
        { title: "Sword Art Online", genres: ["Isekai"], year: 2012, img: "img/sword_art_online.jpg", studio: "A-1 Pictures", stato: "In corso" },
        { title: "Terra Formars", genres: ["Seinen"], year: 2014, img: "img/terra_formars.jpg", studio: "Liden Films", stato: "Finito" },
        { title: "The Eminence in Shadow", genres: ["Isekai"], year: 2022, img: "img/the_eminence_in_shadow.jpg", studio: "Nexus", stato: "In corso" },
        { title: "The Promised Neverland", genres: ["Shonen"], year: 2019, img: "img/the_promised_neverland.jpg", studio: "CloverWorks", stato: "Finito" },
        { title: "The Rising of the Shield Hero", genres: ["Isekai"], year: 2019, img: "img/the_rising_of_the_shield_hero.jpg", studio: "Kinema Citrus", stato: "In corso" },
        { title: "The World's Finest Assassin...", genres: ["Isekai"], year: 2021, img: "img/the_worlds_finest_assassin.jpg", studio: "Silver Link / Studio Palette", stato: "Finito" },
        { title: "To Be Hero X", genres: ["Azione"], year: 2024, img: "img/to_be_hero_x.jpg", studio: "BeDream", stato: "Finito" },
        { title: "Tokyo Revengers", genres: ["Shonen"], year: 2021, img: "img/tokyo_revengers.jpg", studio: "Liden Films", stato: "Finito" },
        { title: "Tower of God", genres: ["Fantasy"], year: 2020, img: "img/tower_of_god.jpg", studio: "Telecom Animation Film", stato: "Finito" },
        { title: "Trigun", genres: ["Shonen"], year: 1998, img: "img/trigun.jpg", studio: "Madhouse", stato: "Finito" },
        { title: "Vinland Saga", genres: ["Seinen"], year: 2019, img: "img/vinland_saga.jpg", studio: "Wit Studio / MAPPA", stato: "Finito" },
        { title: "Wistoria: Wand and Sword", genres: ["Shonen"], year: 2024, img: "img/wistoria_wand_and_sword.jpg", studio: "Actas / Bandai Namco Pictures", stato: "Finito" }
    ];

    // Selettori degli elementi del DOM
    const container = document.getElementById('cards-container');
    const searchInput = document.getElementById('search-input');
    const genreSelect = document.getElementById('genere-select');
    const statusSelect = document.getElementById('status-select');
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
                    <div class="studio">${anime.studio}</div>
                    <div class="meta">
                        <span>${anime.stato}</span>
                        <span>${anime.year}</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Questa è la funzione centrale che gestisce TUTTI i filtri
    function updateDisplay() {
        // 1. Raccoglie i valori di tutti i filtri
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreSelect.value;
        const selectedStatus = statusSelect.value;
        const sortCriteria = sortSelect.value;
        
        // 2. Applica i filtri in sequenza
        let filteredAnime = animeData.filter(anime => {
            // Filtro di ricerca per titolo
            const searchMatch = anime.title.toLowerCase().includes(searchTerm);
            // Filtro per genere
            const genreMatch = (selectedGenre === 'Tutti') || anime.genres.includes(selectedGenre);
            // Filtro per stato
            const statusMatch = (selectedStatus === 'Tutti') || anime.stato === selectedStatus;
            
            return searchMatch && genreMatch && statusMatch;
        });

        // 3. Applica l'ordinamento alla lista già filtrata
        filteredAnime.sort((a, b) => {
            if (sortCriteria === 'titolo') {
                return a.title.localeCompare(b.title);
            }
            if (sortCriteria === 'anno') {
                return b.year - a.year;
            }
        });
        
        // 4. Mostra le schede finali
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

    // Aggiungi gli event listener a TUTTI i controlli
    searchInput.addEventListener('input', updateDisplay);
    genreSelect.addEventListener('change', updateDisplay);
    statusSelect.addEventListener('change', updateDisplay);
    sortSelect.addEventListener('change', updateDisplay);

    // Inizializzazione della pagina
    populateGenres();
    updateDisplay();
});