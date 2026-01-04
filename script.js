document.addEventListener('DOMContentLoaded', () => {

    const animeData = [
        { title: "91 Days", genres: ["Seinen"], year: 2016, img: "img/91_days.jpg", studio: "Shuka", stato: "Finito", synopsis: "Durante l'era del Proibizionismo, Angelo Lagusa cerca vendetta contro la famiglia mafiosa che ha sterminato la sua. Infiltrandosi tra i nemici, innesca una sanguinosa catena di eventi lunga 91 giorni.", structure: [{ name: "Stagione Unica", episodes: "12 + 1 OAV" }] },
        { title: "Abenobashi Magical Shopping Street", genres: ["Commedia"], year: 2002, img: "img/abenobashi_magical_shopping_street.jpg", studio: "Gainax", stato: "Finito", synopsis: "Due amici d'infanzia vengono catapultati in una serie di mondi paralleli e surreali, ognuno parodia di un diverso genere (fantasy, sci-fi, gangster), nel tentativo di tornare a casa nel loro quartiere commerciale.", structure: [{ name: "Stagione Unica", episodes: 13 }] },
        { title: "Ajin: Demi-Human", genres: ["Seinen"], year: 2016, img: "img/ajin_demi_human.jpg", studio: "Polygon Pictures", stato: "Finito", synopsis: "Gli Ajin sono esseri umani immortali che il governo caccia per esperimenti. Lo studente Kei Nagai scopre di essere un Ajin e deve fuggire, ritrovandosi al centro di un conflitto tra la sua specie e l'umanità.", structure: [{ name: "Stagione 1", episodes: 13 }, { name: "Stagione 2", episodes: 13 }] },
        { title: "Akame Ga Kill!", genres: ["Shonen"], year: 2014, img: "img/akame_ga_kill.jpg", studio: "White Fox", stato: "Finito", synopsis: "Un giovane contadino si unisce a un gruppo di assassini rivoluzionari, i Night Raid, per rovesciare un governo corrotto. In un mondo senza eroi, ogni scontro è brutale e nessuno è al sicuro.", structure: [{ name: "Stagione Unica", episodes: 24 }] },
        { title: "Akira", genres: ["Seinen"], year: 1988, img: "img/akira.jpg", studio: "TMS Entertainment", stato: "Film", synopsis: "Nella metropoli post-apocalittica di Neo-Tokyo, il capo di una banda di motociclisti cerca di salvare il suo amico Tetsuo, che ha acquisito poteri psichici devastanti e incontrollabili dopo un incidente.", structure: [{ name: "Film", episodes: "1" }] },
        { title: "Akudama Drive", genres: ["Seinen"], year: 2020, img: "img/akudama_drive.jpg", studio: "Pierrot", stato: "Finito", synopsis: "In un futuro cyberpunk, una ragazza comune viene coinvolta per errore in una missione suicida insieme a un gruppo di criminali di massima sicurezza noti come 'Akudama'. Ogni mossa è una lotta per la sopravvivenza.", structure: [{ name: "Stagione Unica", episodes: 12 }] },
        { title: "Arcane: League of Legends", genres: ["Seinen"], year: 2021, img: "img/arcane_league_of_legends.jpg", studio: "Fortiche", stato: "Finito", synopsis: "Nelle città divise di Piltover e Zaun, due sorelle, Vi e Jinx, si ritrovano su fronti opposti di un conflitto crescente tra magia, tecnologia e ideologie contrastanti.", structure: [{ name: "Stagione 1", episodes: 9 }, { name: "Stagione 2", episodes: 9 }] },
        { title: "Attack on Titan", genres: ["Shonen"], year: 2013, img: "img/attack_on_titan.jpg", studio: "Wit Studio / MAPPA", stato: "Finito", synopsis: "L'umanità si è rifugiata dietro mura colossali per proteggersi da giganti cannibali. Quando un Titano più grande di ogni altro infrange le difese, il giovane Eren Jaeger giura di sterminarli tutti.", structure: [{ name: "Stagione 1", episodes: 25 }, { name: "Stagione 2", episodes: 12 }, { name: "Stagione 3", episodes: 22 }, { name: "Stagione Finale", episodes: "30 + Speciali" }] },
        { title: "Berserk", genres: ["Seinen"], year: 1997, img: "img/berserk.jpg", studio: "OLM", stato: "Finito", synopsis: "In un mondo medievale e brutale, il solitario mercenario Guts si unisce alla carismatica 'Squadra dei Falchi'. Un'oscura profezia e un'ambizione smisurata li condurranno verso un destino terrificante.", structure: [{ name: "Serie 1997", episodes: 25 }, { name: "Trilogia Film (L'epoca d'oro)", episodes: "3 Film" }, { name: "Serie 2016-2017", episodes: 24 }] },
        { title: "Black Clover", genres: ["Shonen"], year: 2017, img: "img/black_clover.jpg", studio: "Pierrot", stato: "Finito", synopsis: "In un mondo dove la magia è tutto, il giovane Asta nasce senza alcun potere. Nonostante ciò, sogna di diventare l'Imperatore Magico, spinto da una determinazione d'acciaio e un misterioso grimorio.", structure: [{ name: "Serie TV", episodes: 170 }, { name: "Film", episodes: "1" }] },
        { title: "BLEACH", genres: ["Shonen"], year: 2004, img: "img/bleach.jpg", studio: "Pierrot", stato: "In corso", synopsis: "Ichigo Kurosaki ottiene i poteri di uno Shinigami e si assume il compito di proteggere gli umani dagli spiriti maligni e di guidare le anime dei defunti nell'aldilà, combattendo minacce sempre più potenti.", structure: [{ name: "Serie Originale", episodes: 366 }, { name: "Thousand-Year Blood War", episodes: "Part 1 & 2" }, { name: "TYBW Part 3: The Conflict", episodes: 13 }] },
        { title: "BNA: Brand New Animal", genres: ["Fantasy"], year: 2020, img: "img/bna_brand_new_animal.jpg", studio: "Trigger", stato: "Finito", synopsis: "Michiru, una ragazza umana, si trasforma improvvisamente in un uomo-bestia tanuki e si rifugia ad Anima City. Lì, cerca una cura mentre scopre i misteri e i conflitti della società dei teriomorfi.", structure: [{ name: "Stagione Unica", episodes: 12 }] },
        { title: "Burn the Witch", genres: ["Shonen"], year: 2020, img: "img/burn_the_witch.jpg", studio: "Studio Colorido", stato: "Finito", synopsis: "Nella 'Reverse London', un mondo nascosto, due streghe lavorano per un'agenzia che gestisce i draghi. La loro missione è proteggere i cittadini e mantenere l'equilibrio tra i due mondi.", structure: [{ name: "Serie ONA", episodes: 3 }] },
        { title: "Chainsaw Man", genres: ["Shonen"], year: 2022, img: "img/chainsaw_man.jpg", studio: "MAPPA", stato: "In corso", synopsis: "Il giovane Denji, fuso con il suo cane-diavolo Pochita, diventa Chainsaw Man. Reclutato da una divisione governativa, dà la caccia ai diavoli in un mondo tanto sanguinoso quanto surreale.", structure: [{ name: "Stagione 1", episodes: 12 }, { name: "Film: Reze Arc", episodes: "1 Film" }] },
        { title: "Claymore", genres: ["Shonen"], year: 2007, img: "img/claymore.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Le Claymore sono guerriere per metà umane e per metà demone, create per cacciare mostri divora-uomini. Clare, una di loro, viaggia in cerca di vendetta contro la creatura che ha segnato il suo passato.", structure: [{ name: "Stagione Unica", episodes: 26 }] },
        { title: "Cyberpunk: Edgerunners", genres: ["Seinen"], year: 2022, img: "img/cyberpunk_edgerunners.jpg", studio: "Trigger", stato: "Finito", synopsis: "Nella futuristica e violenta Night City, un ragazzo di strada cerca di sopravvivere diventando un 'edgerunner', un mercenario fuorilegge dotato di potenziamenti cibernetici.", structure: [{ name: "Stagione Unica", episodes: 10 }] },
        { title: "DAN DA DAN", genres: ["Shonen"], year: 2024, img: "img/dan_da_dan.jpg", studio: "Science SARU", stato: "Finito", synopsis: "Una ragazza che crede negli spiriti e un ragazzo che crede negli alieni fanno una scommessa per dimostrare chi ha ragione. Finiranno per scoprire che entrambi esistono, venendo risucchiati in un'avventura bizzarra e sovrannaturale.", structure: [{ name: "Stagione 1", episodes: 12 }, { name: "Stagione 2", episodes: 12 }] },
        { title: "Darwin's Game", genres: ["Shonen"], year: 2020, img: "img/darwins_game.jpg", studio: "Nexus", stato: "Finito", synopsis: "Un ragazzo accetta un invito a un gioco per cellulare e si ritrova intrappolato in una mortale competizione reale. Ogni giocatore ha un potere unico e l'unico obiettivo è sopravvivere.", structure: [{ name: "Stagione 1", episodes: 11 }] },
        { title: "Deadman Wonderland", genres: ["Shonen"], year: 2011, img: "img/deadman_wonderland.jpg", studio: "Manglobe", stato: "Finito", synopsis: "Accusato ingiustamente di un massacro, Ganta Igarashi viene imprigionato in una prigione-parco a tema. Lì, i detenuti sono costretti a partecipare a giochi mortali per intrattenere il pubblico.", structure: [{ name: "Stagione Unica", episodes: "12 + 1 OAV" }] },
        { title: "Death Note", genres: ["Shonen"], year: 2006, img: "img/death_note.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Lo studente modello Light Yagami trova un quaderno che uccide chiunque il cui nome vi venga scritto. Inizia così una crociata per purificare il mondo, braccato dal geniale e misterioso detective L.", structure: [{ name: "Stagione Unica", episodes: 37 }] },
        { title: "Deca-Dence", genres: ["Sci-Fi"], year: 2020, img: "img/deca_dence.jpg", studio: "NUT", stato: "Finito", synopsis: "In un futuro in cui l'umanità vive in una fortezza mobile, i guerrieri combattono contro mostruose creature. Una ragazza che sogna di combattere scopre un segreto sconvolgente sulla vera natura del loro mondo.", structure: [{ name: "Stagione Unica", episodes: 12 }] },
        { title: "Demon Slayer", genres: ["Shonen"], year: 2019, img: "img/demon_slayer.jpg", studio: "Ufotable", stato: "In corso", synopsis: "Dopo che la sua famiglia è stata sterminata dai demoni e sua sorella Nezuko trasformata in uno di essi, il giovane Tanjiro Kamado intraprende un viaggio per diventare un cacciatore di demoni e trovare una cura.", structure: [{ name: "S1-S4", episodes: "Complete" }, { name: "Film 1: Infinity Castle", episodes: "1 Film" }] },
        { title: "Devil May Cry", genres: ["Azione"], year: 2025, img: "img/devil_may_cry.jpg", studio: "Studio Mir", stato: "Finito", synopsis: "Il cacciatore di demoni Dante, mezzo demone e mezzo umano, affronta forze oscure e sinistre cospirazioni, cercando di impedire l'apertura di un portale che scatenerebbe l'inferno sulla Terra.", structure: [{ name: "Stagione 1", episodes: 8 }] },
        { title: "Devilman Crybaby", genres: ["Seinen"], year: 2018, img: "img/devilman_crybaby.jpg", studio: "Science SARU", stato: "Finito", synopsis: "Per combattere un'antica razza di demoni che minaccia l'umanità, il timido Akira Fudo si fonde con il demone Amon, diventando Devilman. La sua nuova forza lo trascina in una spirale di violenza e disperazione.", structure: [{ name: "Stagione Unica", episodes: 10 }] },
        { title: "Drifters", genres: ["Isekai"], year: 2016, img: "img/drifters.jpg", studio: "Hoods Drifters Studio", stato: "Finito", synopsis: "Personaggi storici leggendari, i 'Drifters', vengono trasportati in un mondo fantasy sull'orlo della distruzione. Lì, devono combattere contro altri personaggi storici, gli 'Ends', che vogliono annientare ogni cosa.", structure: [{ name: "Serie TV", episodes: "12 + 3 OAV" }] },
        { title: "Erased", genres: ["Seinen"], year: 2016, img: "img/erased.jpg", studio: "A-1 Pictures", stato: "Finito", synopsis: "Un giovane mangaka ha il potere di tornare indietro nel tempo di pochi minuti per prevenire incidenti. Quando viene accusato di omicidio, il suo potere lo riporta a 18 anni prima, dandogli la possibilità di risolvere un mistero della sua infanzia.", structure: [{ name: "Stagione Unica", episodes: 12 }] },
        { title: "Failure Frame", genres: ["Isekai"], year: 2024, img: "img/failure_frame.jpg", studio: "Seven Arcs", stato: "Finito", synopsis: "Trasportato in un altro mondo con la sua classe, Mimori Touka viene abbandonato perché ritenuto inutile. Dotato di abilità apparentemente deboli, inizia un viaggio solitario per sopravvivere e vendicarsi.", structure: [{ name: "Stagione 1", episodes: 12 }] },
        { title: "Fate/Zero", genres: ["Seinen"], year: 2011, img: "img/fate_zero.jpg", studio: "Ufotable", stato: "Finito", synopsis: "Prequel di Fate/stay night, narra la Quarta Guerra del Santo Graal. Sette maghi evocano sette Spiriti Eroici del passato per combattersi a vicenda in una battaglia mortale il cui vincitore otterrà un desiderio.", structure: [{ name: "Stagione 1", episodes: 13 }, { name: "Stagione 2", episodes: 12 }] },
        { title: "FLCL", genres: ["Commedia"], year: 2000, img: "img/flcl.jpg", studio: "Gainax / Production I.G", stato: "Finito", synopsis: "La vita ordinaria di un ragazzino viene sconvolta dall'arrivo di una donna eccentrica in sella a una Vespa, che lo colpisce in testa con un basso elettrico. Da quel momento, dalla sua fronte iniziano a spuntare robot giganti.", structure: [{ name: "Classic", episodes: 6 }, { name: "Progressive", episodes: 6 }, { name: "Alternative", episodes: 6 }] },
        { title: "Fullmetal Alchemist: Brotherhood", genres: ["Shonen"], year: 2009, img: "img/fullmetal_alchemist_brotherhood.jpg", studio: "Bones", stato: "Finito", synopsis: "I fratelli Edward e Alphonse Elric usano l'alchimia per cercare la Pietra Filosofale, sperando di recuperare i loro corpi dopo un esperimento fallito. Scopriranno una cospirazione che minaccia l'intera nazione.", structure: [{ name: "Stagione Unica", episodes: 64 }] },
        { title: "Future Diary", genres: ["Shonen"], year: 2011, img: "img/future_diary.jpg", studio: "Asread", stato: "Finito", synopsis: "Yukiteru Amano è uno dei dodici partecipanti a un gioco mortale in cui ogni concorrente ha un diario che predice il futuro in modi diversi. L'ultimo sopravvissuto diventerà il nuovo Dio del Tempo e dello Spazio.", structure: [{ name: "Serie TV", episodes: "26 + 1 OAV" }] },
        { title: "Gachiakuta", genres: ["Shonen"], year: 2025, img: "img/gachiakuta.jpg", studio: "Bones", stato: "Finito", synopsis: "Rudo vive nei bassifondi di una città galleggiante, dove i poveri sopravvivono grazie ai rifiuti gettati dai ricchi. Accusato ingiustamente di un crimine orribile, viene gettato nell'Abisso, un mondo infestato da mostri fatti di spazzatura. Lì scopre un potere latente e giura vendetta contro chi lo ha tradito.", structure: [{ name: "Stagione 1", episodes: 24 }] },
        { title: "Gangsta.", genres: ["Seinen"], year: 2015, img: "img/gangsta.jpg", studio: "Manglobe", stato: "Finito", synopsis: "Nella città di Ergastulum, dominata dalla mafia, due 'factotum' si occupano dei lavori sporchi che nessuno vuole. La loro vita si complica quando decidono di proteggere una prostituta braccata da una gang.", structure: [{ name: "Stagione Unica", episodes: 12 }] },
        { title: "Gantz", genres: ["Seinen"], year: 2004, img: "img/gantz.jpg", studio: "Gonzo", stato: "Finito", synopsis: "Dopo essere morti, due ragazzi si risvegliano in una stanza con una misteriosa sfera nera. Vengono costretti a partecipare a un gioco mortale, cacciando alieni nascosti sulla Terra con armi futuristiche.", structure: [{ name: "Stagione Unica", episodes: 26 }] },
        { title: "Gate", genres: ["Isekai"], year: 2015, img: "img/gate.jpg", studio: "A-1 Pictures", stato: "Finito", synopsis: "Un portale misterioso si apre a Tokyo, da cui emerge un esercito di creature fantasy. Le Forze di Autodifesa Giapponesi entrano nel portale per esplorare il nuovo mondo e stabilire relazioni diplomatiche.", structure: [{ name: "Stagione 1", episodes: 12 }, { name: "Stagione 2", episodes: 12 }] },
        { title: "Grimgar of Fantasy and Ash", genres: ["Isekai"], year: 2016, img: "img/grimgar_of_fantasy_and_ash.jpg", studio: "A-1 Pictures", stato: "Finito", synopsis: "Un gruppo di estranei si risveglia in un mondo fantasy senza ricordi del proprio passato. Per sopravvivere, devono imparare a combattere, collaborare e affrontare la dura e realistica realtà della vita da avventurieri.", structure: [{ name: "Stagione Unica", episodes: 12 }] },
        { title: "Gurren Lagann", genres: ["Shonen"], year: 2007, img: "img/gurren_lagann.jpg", studio: "Gainax", stato: "Finito", synopsis: "In un futuro in cui l'umanità vive sottoterra, due ragazzi, Simon e Kamina, trovano un robot a forma di testa. Usandolo, emergono in superficie e iniziano una battaglia epica per la libertà dell'umanità.", structure: [{ name: "Serie TV", episodes: 27 }, { name: "2 Film Riassuntivi", episodes: "2 Film" }] },
        { title: "Handyman Saitou in Another World", genres: ["Isekai"], year: 2023, img: "img/handyman_saitou_in_another_world.jpg", studio: "C2C", stato: "Finito", synopsis: "Un tuttofare giapponese viene trasportato in un mondo fantasy. Lì, scopre che le sue abilità pratiche, come scassinare serrature e riparare armature, sono incredibilmente utili per i suoi nuovi compagni avventurieri.", structure: [{ name: "Stagione 1", episodes: 12 }] },
        { title: "Heavenly Delusion", genres: ["Seinen"], year: 2023, img: "img/heavenly_delusion.jpg", studio: "Production I.G", stato: "Finito", synopsis: "In un Giappone post-apocalittico, Maru e Kiruko viaggiano attraverso rovine infestate da mostri in cerca di un luogo chiamato 'Paradiso'. Parallelamente, un gruppo di bambini vive in un'utopia isolata dal mondo esterno.", structure: [{ name: "Stagione 1", episodes: 13 }] },
        { title: "Hell's Paradise: Jigokuraku", genres: ["Shonen"], year: 2023, img: "img/hells_paradise_jigokuraku.jpg", studio: "MAPPA", stato: "In corso", synopsis: "Il ninja Gabimaru 'il Vuoto' viene condannato a morte, ma nessuna esecuzione funziona su di lui. Gli viene offerta la grazia se riuscirà a trovare l'elisir di lunga vita su un'isola misteriosa e letale.", structure: [{ name: "Stagione 1", episodes: 13 }, { name: "Stagione 2", episodes: "Prossimamente" }] },
        { title: "Hellsing Ultimate", genres: ["Seinen"], year: 2006, img: "img/hellsing_ultimate.jpg", studio: "Satelight / Madhouse", stato: "Finito", synopsis: "L'organizzazione Hellsing protegge l'Inghilterra da minacce sovrannaturali, avendo come arma definitiva il potente vampiro Alucard. La loro lotta si intensifica con l'arrivo di un'organizzazione di vampiri nazisti.", structure: [{ name: "Serie OAV", episodes: 10 }] },
        { title: "HUNTER x HUNTER", genres: ["Shonen"], year: 2011, img: "img/hunter_x_hunter.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Gon Freecss scopre che suo padre, che credeva morto, è un leggendario Hunter. Per ritrovarlo, decide di diventare un Hunter anche lui, affrontando prove mortali e stringendo profonde amicizie.", structure: [{ name: "Serie 2011", episodes: 148 }] },
        { title: "JoJo's Bizarre Adventure", genres: ["Shonen"], year: 2012, img: "img/jojos_bizarre_adventure.jpg", studio: "David Production", stato: "In corso", synopsis: "Le cronache delle bizzarre e sanguinose avventure della famiglia Joestar attraverso le generazioni. Ogni arco narrativo segue un discendente diverso, ognuno con poteri unici, contro nemici sovrannaturali.", structure: [{ name: "S1-S5 (Phantom Blood - Stone Ocean)", episodes: 190 }, { name: "The JoJoLands", episodes: "Manga" }] },
        { title: "Jujutsu Kaisen", genres: ["Shonen"], year: 2020, img: "img/jujutsu_kaisen.jpg", studio: "MAPPA", stato: "In corso", synopsis: "Lo studente Yuji Itadori ingoia un oggetto maledetto per salvare un amico, diventando l'ospite di un potente demone. Entra in una scuola di stregoni per imparare a controllare i suoi nuovi poteri e combattere le maledizioni.", structure: [{ name: "Stagione 1", episodes: 24 }, { name: "Film 0", episodes: "1 Film" }, { name: "Stagione 2", episodes: 23 }, { name: "S3: Culling Game", episodes: "Dall'8 Gennaio" }] },
        { title: "Kaiju No. 8", genres: ["Shonen"], year: 2024, img: "img/kaiju_no_8.jpg", studio: "Production I.G", stato: "Finito", synopsis: "In un Giappone infestato da mostri giganti (Kaiju), Kafka Hibino sogna di unirsi alle Forze di Difesa. Dopo aver ingerito un piccolo Kaiju, acquisisce la capacità di trasformarsi, diventando il ricercato 'Kaiju No. 8'.", structure: [{ name: "Stagione 1", episodes: 12 }] },
        { title: "Kill la Kill", genres: ["Azione"], year: 2013, img: "img/kill_la_kill.jpg", studio: "Trigger", stato: "Finito", synopsis: "In cerca dell'assassino di suo padre, Ryuko Matoi arriva all'Accademia Honnouji, dominata da Satsuki Kiryuin e le sue 'Uniformi Goku'. Con l'aiuto di un'uniforme parlante, Senketsu, Ryuko sfida il sistema.", structure: [{ name: "Stagione Unica", episodes: "24 + 1 Speciale" }] },
        { title: "Kingdom", genres: ["Seinen"], year: 2012, img: "img/kingdom.jpg", studio: "Pierrot", stato: "In corso", synopsis: "Durante il periodo degli Stati Combattenti in Cina, due giovani schiavi sognano di diventare Grandi Generali. Dopo una tragedia, il ragazzo Shin si unisce al giovane re Ei Sei nel suo tentativo di unificare la Cina.", structure: [{ name: "Stagioni 1-5", episodes: "140+ (in corso)" }] },
        { title: "Lazarus", genres: ["Sci-Fi"], year: 2025, img: "img/lazarus.jpg", studio: "MAPPA", stato: "Finito", synopsis: "Nel 2052, il mondo vive in pace grazie a un farmaco miracoloso. Ma il suo creatore scompare, per poi tornare tre anni dopo annunciando che il farmaco ucciderà tutti. Una task force speciale ha il compito di trovarlo.", structure: [{ name: "Stagione 1", episodes: "TBA" }] },
        { title: "Made in Abyss", genres: ["Seinen"], year: 2017, img: "img/made_in_abyss.jpg", studio: "Kinema Citrus", stato: "In corso", synopsis: "Una ragazzina di nome Riko decide di scendere nell'Abisso, un'enorme voragine inesplorata, per ritrovare sua madre. Accompagnata dal ragazzo robot Reg, affronta un viaggio tanto meraviglioso quanto terrificante.", structure: [{ name: "Stagione 1", episodes: 13 }, { name: "Film: Dawn of the Deep Soul", episodes: "1 Film" }, { name: "Stagione 2", episodes: 12 }] },
        { title: "Mob Psycho 100", genres: ["Shonen"], year: 2016, img: "img/mob_psycho_100.jpg", studio: "Bones", stato: "Finito", synopsis: "Shigeo 'Mob' Kageyama è un ragazzo con poteri psichici devastanti. Per paura di perdere il controllo, cerca di vivere una vita normale, ma le minacce sovrannaturali continuano a perseguitarlo.", structure: [{ name: "Stagione 1", episodes: 12 }, { name: "Stagione 2", episodes: 13 }, { name: "Stagione 3", episodes: 12 }] },
        { title: "My Hero Academia: Vigilantes", genres: ["Shonen"], year: 2025, img: "img/my_hero_academia_vigilantes.jpg", studio: "Bones", stato: "In corso", synopsis: "In un mondo di eroi, alcuni operano al di fuori della legge. Segue le vicende di un gruppo di 'Vigilanti' che combattono il crimine nell'ombra, in un prequel che esplora gli angoli meno noti della società dei supereroi.", structure: [{ name: "Stagione 1", episodes: "TBA" }] },
        { title: "My Hero Academia", genres: ["Shonen"], year: 2016, img: "img/my_hero_academia.jpg", studio: "Bones", stato: "Finito", synopsis: "In un mondo dove quasi tutti hanno superpoteri, Izuku Midoriya nasce senza. Il suo incontro con il più grande eroe di tutti, All Might, gli darà la possibilità di realizzare il suo sogno di diventare un eroe.", structure: [{ name: "Stagioni 1-7", episodes: "159" }, { name: "Stagione 8 (Finale)", episodes: 11 }] },
        { title: "NARUTO", genres: ["Shonen"], year: 2002, img: "img/naruto.jpg", studio: "Pierrot", stato: "Finito", synopsis: "Naruto Uzumaki, un giovane ninja emarginato che ospita dentro di sé un demone, sogna di diventare il leader del suo villaggio, l'Hokage, per ottenere il rispetto di tutti.", structure: [{ name: "Naruto", episodes: 220 }, { name: "Naruto: Shippuden", episodes: 500 }] },
        { title: "Neon Genesis Evangelion", genres: ["Seinen"], year: 1995, img: "img/neon_genesis_evangelion.jpg", studio: "Gainax", stato: "Finito", synopsis: "In un mondo post-catastrofe, l'adolescente Shinji Ikari viene reclutato per pilotare un mecha gigante, l'Evangelion, e combattere contro mostruosi esseri chiamati Angeli. La battaglia si rivelerà tanto psicologica quanto fisica.", structure: [{ name: "Serie TV", episodes: 26 }, { name: "Film: The End of Evangelion", episodes: "1 Film" }] },
        { title: "ONE PIECE", genres: ["Shonen"], year: 1999, img: "img/one_piece.jpg", studio: "Toei Animation", stato: "In corso", synopsis: "Monkey D. Luffy, un ragazzo il cui corpo ha acquisito le proprietà della gomma, viaggia per mare con la sua ciurma alla ricerca del tesoro supremo, il 'One Piece', per diventare il nuovo Re dei Pirati.", structure: [{ name: "Serie TV", episodes: "1100+ (in corso)" }] },
        { title: "One-Punch Man", genres: ["Seinen"], year: 2015, img: "img/one_punch_man.jpg", studio: "Madhouse / J.C.Staff", stato: "In corso", synopsis: "Saitama è un eroe così potente da sconfiggere qualsiasi nemico con un solo pugno. Questa forza schiacciante lo ha portato a una profonda noia esistenziale, mentre cerca un avversario degno.", structure: [{ name: "Stagione 1", episodes: 12 }, { name: "Stagione 2", episodes: 12 }, { name: "Stagione 3 (Part 1)", episodes: 12 }] },
        { title: "Overlord", genres: ["Isekai"], year: 2015, img: "img/overlord.jpg", studio: "Madhouse", stato: "In corso", synopsis: "Un giocatore rimane intrappolato nel suo videogioco online preferito dopo la chiusura dei server. Nei panni del suo avatar, un potente non-morto, decide di conquistare il nuovo mondo in cui si è ritrovato.", structure: [{ name: "Stagioni 1-4", episodes: 52 }, { name: "Film", episodes: "Prossimamente" }] },
        { title: "Parasyte -the maxim-", genres: ["Seinen"], year: 2014, img: "img/parasyte_the_maxim.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Lo studente Shinichi Izumi si fonde con un parassita alieno che ha preso il controllo della sua mano destra. I due formano una simbiosi improbabile per combattere altri parassiti che divorano gli esseri umani.", structure: [{ name: "Stagione Unica", episodes: 24 }] },
        { title: "Ranking of Kings", genres: ["Fantasy"], year: 2021, img: "img/ranking_of_kings.jpg", studio: "Wit Studio", stato: "Finito", synopsis: "Il principe Bojji, sordo, muto e apparentemente debole, sogna di diventare un grande re. Nonostante le derisioni, intraprende un'avventura che metterà alla prova il suo coraggio e la sua determinazione.", structure: [{ name: "Stagione 1", episodes: 23 }, { name: "Speciale: Treasure Chest of Courage", episodes: 10 }] },
        { title: "Re:ZERO -Starting Life in Another World-", genres: ["Isekai"], year: 2016, img: "img/rezero_starting_life_in_another_world.jpg", studio: "White Fox", stato: "Finito", synopsis: "Subaru Natsuki viene trasportato in un mondo fantasy dove scopre di avere un unico, terrificante potere: ogni volta che muore, ritorna in vita in un momento precedente, costretto a rivivere gli eventi per cambiarne l'esito.", structure: [{ name: "Stagione 1", episodes: 25 }, { name: "Stagione 2", episodes: 25 }, { name: "Stagione 3", episodes: 16 }] },
        { title: "Reincarnated as a Sword", genres: ["Isekai"], year: 2022, img: "img/reincarnated_as_a_sword.jpg", studio: "C2C", stato: "Finito", synopsis: "Un uomo si reincarna in un altro mondo come una spada leggendaria. Viene trovato da una ragazzina gatto, Fran, che diventa la sua padrona. Insieme, formano un duo inarrestabile di avventurieri.", structure: [{ name: "Stagione 1", episodes: 12 }] },
        { title: "Sakamoto Days", genres: ["Shonen"], year: 2026, img: "img/sakamoto_days.jpg", studio: "TMS Entertainment", stato: "Prossimamente", synopsis: "Taro Sakamoto era il più grande sicario di tutti i tempi, ma si è ritirato per amore. Ora gestisce un minimarket e deve proteggere la sua vita pacifica da ex colleghi e rivali, senza mai più uccidere.", structure: [{ name: "Stagione 1", episodes: "Dall'11 Gennaio 2026" }] },
        { title: "Shangri-La Frontier", genres: ["Isekai"], year: 2023, img: "img/shangri_la_frontier.jpg", studio: "C2C", stato: "Finito", synopsis: "Uno studente esperto nel finire i videogiochi più brutti decide di provare il VRMMORPG del momento, Shangri-La Frontier. Con le sue abilità uniche, si fa rapidamente un nome in questo mondo virtuale.", structure: [{ name: "Stagione 1", episodes: 25 }] },
        { title: "Solo Leveling", genres: ["Shonen"], year: 2024, img: "img/solo_leveling.jpg", studio: "A-1 Pictures", stato: "In corso", synopsis: "In un mondo in cui cacciatori dotati di poteri combattono mostri in dungeon, Sung Jinwoo, il cacciatore più debole di tutti, ottiene un potere unico che gli permette di salire di livello senza limiti.", structure: [{ name: "Stagione 1", episodes: 12 }, { name: "S2: Arise from the Shadow", episodes: "In corso" }] },
        { title: "SPY x FAMILY", genres: ["Shonen"], year: 2022, img: "img/spy_x_family.jpg", studio: "Wit Studio / CloverWorks", stato: "Finito", synopsis: "Per una missione segreta, la super spia 'Twilight' deve creare una famiglia fittizia. Adotta una bambina telepate e sposa un'assassina, ma nessuno dei tre conosce la vera identità degli altri.", structure: [{ name: "Stagione 1", episodes: 25 }, { name: "Stagione 2", episodes: 12 }, { name: "Film: Code White", episodes: "1 Film" }, { name: "Stagione 3", episodes: 12 }] },
        { title: "Steins;Gate", genres: ["Seinen"], year: 2011, img: "img/steins_gate.jpg", studio: "White Fox", stato: "Finito", synopsis: "Un gruppo di amici scopre di poter mandare messaggi nel passato usando un forno a microonde modificato. Le loro azioni iniziano a causare cambiamenti imprevisti e pericolosi nella linea temporale.", structure: [{ name: "Serie Principale", episodes: 24 }, { name: "Film", episodes: "1 Film" }, { name: "Steins;Gate 0", episodes: 23 }] },
        { title: "Summer Time Rendering", genres: ["Thriller"], year: 2022, img: "img/summer_time_rendering.jpg", studio: "OLM", stato: "Finito", synopsis: "Shinpei Ajiro torna sulla sua isola natale per il funerale di un'amica d'infanzia. Scopre presto che una minaccia sovrannaturale legata a delle 'Ombre' sta per consumare l'isola, e lui è intrappolato in un loop temporale.", structure: [{ name: "Stagione Unica", episodes: 25 }] },
        { title: "Sword Art Online", genres: ["Isekai"], year: 2012, img: "img/sword_art_online.jpg", studio: "A-1 Pictures", stato: "In corso", synopsis: "Migliaia di giocatori rimangono intrappolati nel videogioco di realtà virtuale 'Sword Art Online'. Morire nel gioco significa morire anche nella vita reale. Kirito, un giocatore solitario, lotta per la sopravvivenza.", structure: [{ name: "S1: Aincrad/Fairy Dance", episodes: 25 }, { name: "S2: Phantom Bullet", episodes: 24 }, { name: "S3: Alicization", episodes: 47 }, { name: "Film e Spin-off", episodes: "Vari" }] },
        { title: "Terra Formars", genres: ["Seinen"], year: 2014, img: "img/terra_formars.jpg", studio: "Liden Films", stato: "Finito", synopsis: "Per terraformare Marte, gli scienziati inviano scarafaggi. Secoli dopo, l'umanità invia un equipaggio per sterminarli, ma scopre che si sono evoluti in creature umanoidi incredibilmente forti e ostili.", structure: [{ name: "Stagione 1", episodes: 13 }, { name: "Stagione 2: Revenge", episodes: 13 }] },
        { title: "The Eminence in Shadow", genres: ["Isekai"], year: 2022, img: "img/the_eminence_in_shadow.jpg", studio: "Nexus", stato: "In corso", synopsis: "Un ragazzo, reincarnato in un mondo fantasy, inventa per gioco di essere a capo di un'organizzazione segreta che combatte un culto oscuro. Scoprirà con sua grande sorpresa che sia l'organizzazione che il culto esistono davvero.", structure: [{ name: "Stagione 1", episodes: 20 }, { name: "Stagione 2", episodes: 12 }, { name: "Film", episodes: "Prossimamente" }] },
        { title: "The Promised Neverland", genres: ["Shonen"], year: 2019, img: "img/the_promised_neverland.jpg", studio: "CloverWorks", stato: "Finito", synopsis: "Un gruppo di orfani scopre che il loro amato orfanotrofio è in realtà una fattoria dove vengono allevati come cibo per demoni. Guidati dalla geniale Emma, pianificano una fuga disperata.", structure: [{ name: "Stagione 1", episodes: 12 }, { name: "Stagione 2", episodes: 11 }] },
        { title: "The Rising of the Shield Hero", genres: ["Isekai"], year: 2019, img: "img/the_rising_of_the_shield_hero.jpg", studio: "Kinema Citrus", stato: "In corso", synopsis: "Evocato in un mondo fantasy come uno dei quattro eroi leggendari, Naofumi Iwatani riceve solo uno scudo. Tradito e disprezzato, deve trovare un modo per diventare più forte e sopravvivere da solo.", structure: [{ name: "Stagione 1", episodes: 25 }, { name: "Stagione 2", episodes: 13 }, { name: "Stagione 3", episodes: 12 }] },
        { title: "The World's Finest Assassin...", genres: ["Isekai"], year: 2021, img: "img/the_worlds_finest_assassin.jpg", studio: "Silver Link / Studio Palette", stato: "Finito", synopsis: "Il più grande assassino della Terra viene reincarnato come erede di una famiglia di assassini in un mondo di magia. Accetta di reincarnarsi a una condizione: uccidere l'Eroe, destinato a distruggere il mondo.", structure: [{ name: "Stagione 1", episodes: 12 }] },
        { title: "To Be Hero X", genres: ["Azione"], year: 2024, img: "img/to_be_hero_x.jpg", studio: "BeDream", stato: "Finito", synopsis: "In un mondo diviso tra 'buoni' e 'cattivi', chi ottiene più 'like' sui social network domina. Un eroe caduto in disgrazia e un cattivo di basso rango uniscono le forze per scalare le classifiche.", structure: [{ name: "Stagione 1", episodes: 12 }] },
        { title: "Tokyo Revengers", genres: ["Shonen"], year: 2021, img: "img/tokyo_revengers.jpg", studio: "Liden Films", stato: "Finito", synopsis: "Un ragazzo fallito scopre di poter viaggiare indietro nel tempo di 12 anni. Usa questo potere per tornare ai tempi delle scuole medie e cercare di salvare la sua ex fidanzata, infiltrandosi in una temibile gang di teppisti.", structure: [{ name: "S1: Arco Toman", episodes: 24 }, { name: "S2: Arco Christmas Showdown", episodes: 13 }, { name: "S3: Arco Tenjiku", episodes: 13 }] },
        { title: "Tower of God", genres: ["Fantasy"], year: 2020, img: "img/tower_of_god.jpg", studio: "Telecom Animation Film", stato: "Finito", synopsis: "Un ragazzo di nome Bam entra nella misteriosa 'Torre' per ritrovare la sua unica amica, Rachel. Per farlo, deve superare una serie di prove mortali e complesse su ogni piano della Torre, affrontando avversari e stringendo alleanze.", structure: [{ name: "Stagione 1", episodes: 13 }, { name: "Stagione 2", episodes: 13 }] },
        { title: "Trigun", genres: ["Shonen"], year: 1998, img: "img/trigun.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Su un pianeta deserto, Vash the Stampede è un pistolero con una taglia enorme sulla sua testa, accusato di aver distrutto intere città. Nonostante la sua fama, è un pacifista che cerca di evitare la violenza a ogni costo.", structure: [{ name: "Serie 1998", episodes: 26 }, { name: "Film: Badlands Rumble", episodes: "1 Film" }, { name: "Stampede (2023)", episodes: 12 }] },
        { title: "Vinland Saga", genres: ["Seinen"], year: 2019, img: "img/vinland_saga.jpg", studio: "Wit Studio / MAPPA", stato: "Finito", synopsis: "Il giovane Thorfinn cresce tra i vichinghi cercando vendetta per la morte di suo padre. La sua ricerca lo porterà a servire l'uomo che odia, in un viaggio epico attraverso la guerra e la politica dell'Europa medievale.", structure: [{ name: "Stagione 1", episodes: 24 }, { name: "Stagione 2", episodes: 24 }] },
        { title: "Wistoria: Wand and Sword", genres: ["Shonen"], year: 2024, img: "img/wistoria_wand_and_sword.jpg", studio: "Actas / Bandai Namco Pictures", stato: "Finito", synopsis: "In un'accademia di magia, Will Serfort, incapace di usare la magia, lotta per mantenere una promessa d'infanzia. Per farlo, brandisce una spada e si fa strada a modo suo in un mondo che valorizza solo gli incantesimi.", structure: [{ name: "Stagione 1", episodes: 12 }] },
        { title: "Promare", genres: ["Azione"], year: 2019, img: "img/promare.jpg", studio: "Trigger", stato: "Film", synopsis: "In un futuro in cui parte dell'umanità ha sviluppato poteri pirocinetici, un'unità di pompieri high-tech combatte contro un gruppo di mutanti piromani. La battaglia tra il pompiere Galo e il leader dei terroristi, Lio, rivelerà una verità sconvolgente.", structure: [{ name: "Film", episodes: "1" }] },
        { title: "Ghost in the Shell", genres: ["Sci-Fi"], year: 1995, img: "img/ghost_in_the_shell.jpg", studio: "Production I.G", stato: "Film", synopsis: "Nel 2029, il Maggiore Motoko Kusanagi, un cyborg a capo di una squadra speciale di sicurezza, dà la caccia a un misterioso e potente hacker conosciuto come il 'Signore dei Pupazzi'.", structure: [{ name: "Film", episodes: "1" }] },
        { title: "Principessa Mononoke", genres: ["Fantasy"], year: 1997, img: "img/principessa_mononoke.jpg", studio: "Studio Ghibli", stato: "Film", synopsis: "Il principe Ashitaka, colpito da una maledizione mortale, si ritrova nel mezzo di una guerra tra una città mineraria e gli spiriti della foresta, guidati dalla fiera San, la 'Principessa Spettro'.", structure: [{ name: "Film", episodes: "1" }] },
        { title: "La città incantata", genres: ["Fantasy"], year: 2001, img: "img/la_citta_incantata.jpg", studio: "Studio Ghibli", stato: "Film", synopsis: "La giovane Chihiro, durante un trasloco, si ritrova in una città incantata popolata da spiriti e divinità. Per salvare i suoi genitori trasformati in maiali, dovrà lavorare in una misteriosa locanda termale gestita dalla strega Yubaba.", structure: [{ name: "Film", episodes: "1" }] },

    ];

    const container = document.getElementById('cards-container');
    const genreSelect = document.getElementById('genere-select');
    const statusSelect = document.getElementById('status-select');
    const sortSelect = document.getElementById('sort-select');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');
    const modalContainer = document.getElementById('anime-modal-container');
    const closeModalButton = document.querySelector('.close-button');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalStudio = document.getElementById('modal-studio');
    const modalStructure = document.getElementById('modal-structure');
    const modalMeta = document.getElementById('modal-meta');
    const modalSynopsis = document.getElementById('modal-synopsis');

    gridViewBtn.addEventListener('click', () => {
        container.className = 'cards grid-view';
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
        container.className = 'cards list-view';
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });

    function openModal(anime) {
        modalImg.src = anime.img;
        modalTitle.textContent = anime.title;
        modalStudio.textContent = anime.studio;
        modalSynopsis.textContent = anime.synopsis;
        modalMeta.innerHTML = `<span>${anime.genres.join(' / ')}</span><span>${anime.stato}</span><span>${anime.year}</span>`;
        if (anime.structure && anime.structure.length > 0) {
            let structureHtml = '<h4>Struttura</h4><ul>';
            anime.structure.forEach(part => {
                const episodeText = isNaN(part.episodes) ? part.episodes : `${part.episodes} ep.`;
                structureHtml += `<li>${part.name}: <strong>${episodeText}</strong></li>`;
            });
            structureHtml += '</ul>';
            modalStructure.innerHTML = structureHtml;
        } else {
            modalStructure.innerHTML = '';
        }
        modalContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeModalButton.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) { closeModal(); }
    });

    function renderCards(cardsToRender) {
        container.innerHTML = '';
        if (cardsToRender.length === 0) {
            container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1 / -1; margin-top: 2rem;">Nessun anime trovato con questi criteri.</p>';
            return;
        }
        cardsToRender.forEach((anime, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            // Stagger animation: 50ms delay per card
            card.style.animationDelay = `${index * 50}ms`;

            card.innerHTML = `<img src="${anime.img}" alt="Copertina di ${anime.title}"><div class="card-content"><h2>${anime.title}</h2><div class="genres">${anime.genres.join(' / ')}</div><div class="meta"><span>${anime.stato}</span><span>${anime.year}</span></div></div>`;
            container.appendChild(card);
            card.addEventListener('click', () => { openModal(anime); });
        });
    }

    function updateDisplay() {
        const selectedGenre = genreSelect.value;
        const selectedStatus = statusSelect.value;
        const sortCriteria = sortSelect.value;
        let filteredAnime = animeData.filter(anime => {
            const genreMatch = (selectedGenre === 'Tutti') || anime.genres.includes(selectedGenre);
            const statusMatch = (selectedStatus === 'Tutti') || anime.stato === selectedStatus;
            return genreMatch && statusMatch;
        });
        filteredAnime.sort((a, b) => {
            if (sortCriteria === 'titolo') { return a.title.localeCompare(b.title); }
            if (sortCriteria === 'anno') { return b.year - a.year; }
            if (sortCriteria === 'stato') {
                const statusOrder = { "In corso": 1, "Prossimamente": 2, "Finito": 3, "Film": 4 };
                return statusOrder[a.stato] - statusOrder[b.stato];
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

    // Event listener per i filtri
    genreSelect.addEventListener('change', updateDisplay);
    statusSelect.addEventListener('change', updateDisplay);
    sortSelect.addEventListener('change', updateDisplay);

    // Inizializzazione della pagina
    populateGenres();

    // NUOVO: Controllo per la visualizzazione di default su mobile
    if (window.innerWidth <= 768) {
        // Simula un click sul bottone della vista a lista
        listViewBtn.click();
    }

    updateDisplay();
});