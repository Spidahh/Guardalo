import { auth, db, googleProvider } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// === DATABASE DATI ANIME ===
const animeData = [
    { title: "91 Days", genres: ["Drama", "Thriller"], year: 2016, img: "img/91_days.jpg", studio: "Shuka", stato: "Finito", synopsis: "Durante l'era del Proibizionismo, Angelo Lagusa cerca vendetta contro la famiglia mafiosa che ha sterminato la sua. Infiltrandosi tra i nemici, innesca una sanguinosa catena di eventi lunga 91 giorni.", structure: [{ name: "Stagione Unica", episodes: "12" }, { name: "OAV", episodes: "1" }] },
    { title: "Abenobashi Magical Shopping Street", genres: ["Comedy", "Fantasy", "Sci-Fi"], year: 2002, img: "img/abenobashi.jpg", studio: "Gainax", stato: "Finito", synopsis: "Due amici d'infanzia vengono catapultati in una serie di mondi paralleli e surreali, ognuno parodia di un diverso genere (fantasy, sci-fi, gangster), nel tentativo di tornare a casa nel loro quartiere commerciale.", structure: [{ name: "Stagione Unica", episodes: "13" }] },
    { title: "Ajin: Demi-Human", genres: ["Horror", "Thriller", "Supernatural"], year: 2016, img: "img/Ajin_Demi-Human.jpg", studio: "Polygon Pictures", stato: "Finito", synopsis: "Gli Ajin sono esseri umani immortali che il governo caccia per esperimenti. Lo studente Kei Nagai scopre di essere un Ajin e deve fuggire, ritrovandosi al centro di un conflitto tra la sua specie e l'umanità.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Stagione 2", episodes: "13" }, { name: "Film Trilogy", episodes: "3" }] },
    { title: "Akame Ga Kill!", genres: ["Action", "Fantasy"], year: 2014, img: "img/akame_ga_kill_.jpg", studio: "White Fox", stato: "Finito", synopsis: "Un giovane contadino si unisce a un gruppo di assassini rivoluzionari, i Night Raid, per rovesciare un governo corrotto. In un mondo senza eroi, ogni scontro è brutale e nessuno è al sicuro.", structure: [{ name: "Stagione Unica", episodes: "24" }] },
    { title: "Akira", genres: ["Sci-Fi", "Cyberpunk"], year: 1988, img: "img/akira.jpg", studio: "TMS Entertainment", stato: "Film", synopsis: "Nella metropoli post-apocalittica di Neo-Tokyo, il capo di una banda di motociclisti cerca di salvare il suo amico Tetsuo, che ha acquisito poteri psichici devastanti e incontrollabili dopo un incidente.", structure: [{ name: "Film", episodes: "1" }] },
    { title: "Akudama Drive", genres: ["Sci-Fi", "Cyberpunk", "Action"], year: 2020, img: "img/akudama_drive.jpg", studio: "Pierrot", stato: "Finito", synopsis: "In un futuro cyberpunk, una ragazza comune viene coinvolta per errore in una missione suicida insieme a un gruppo di criminali di massima sicurezza noti come 'Akudama'. Ogni mossa è una lotta per la sopravvivenza.", structure: [{ name: "Stagione Unica", episodes: "12" }] },
    { title: "Arcane: League of Legends", genres: ["Fantasy", "Sci-Fi", "Action"], year: 2021, img: "img/arcane_league_of_legends.jpg", studio: "Fortiche", stato: "Finito", synopsis: "Nelle città divise di Piltover e Zaun, due sorelle, Vi e Jinx, si ritrovano su fronti opposti di un conflitto crescente tra magia, tecnologia e ideologie contrastanti.", structure: [{ name: "Stagione 1", episodes: "9" }, { name: "Stagione 2", episodes: "9" }] },
    { title: "Attack on Titan", genres: ["Action", "Drama", "Fantasy"], year: 2013, img: "img/attack_on_titan.jpg", studio: "Wit Studio / MAPPA", stato: "Finito", synopsis: "L'umanità si è rifugiata dietro mura colossali per proteggersi da giganti cannibali. Quando un Titano più grande di ogni altro infrange le difese, il giovane Eren Jaeger giura di sterminarli tutti.", structure: [{ name: "Stagione 1", episodes: "25" }, { name: "Stagione 2", episodes: "12" }, { name: "Stagione 3", episodes: "22" }, { name: "S4: The Final Season", episodes: "35" }] },
    { title: "Berserk", genres: ["Fantasy", "Horror", "Action"], year: 1997, img: "img/berserk.jpg", studio: "OLM", stato: "Finito", synopsis: "In un mondo medievale e brutale, il solitario mercenario Guts si unisce alla carismatica 'Squadra dei Falchi'. Un'oscura profezia e un'ambizione smisurata li condurranno verso un destino terrificante.", structure: [{ name: "Serie 1997", episodes: "25" }, { name: "Film Trilogy", episodes: "3" }, { name: "Serie 2016", episodes: "24" }] },
    { title: "Black Clover", genres: ["Action", "Fantasy"], year: 2017, img: "img/black_clover.jpg", studio: "Pierrot", stato: "Finito", synopsis: "In un mondo dove la magia è tutto, il giovane Asta nasce senza alcun potere. Nonostante ciò, sogna di diventare l'Imperatore Magico, spinto da una determinazione d'acciaio e un misterioso grimorio.", structure: [{ name: "Serie TV", episodes: "170" }, { name: "Film: Sword of the Wizard King", episodes: "1" }] },
    { title: "BLEACH", genres: ["Action", "Supernatural"], year: 2004, img: "img/bleach.jpg", studio: "Pierrot", stato: "In corso", synopsis: "Ichigo Kurosaki ottiene i poteri di uno Shinigami e si assume il compito di proteggere gli umani dagli spiriti maligni e di guidare le anime dei defunti nell'aldilà, combattendo minacce sempre più potenti.", structure: [{ name: "Serie Originale", episodes: "366" }, { name: "TYBW Part 1 & 2", episodes: "26" }, { name: "TYBW Part 3", episodes: "13" }] },
    { title: "BNA: Brand New Animal", genres: ["Fantasy", "Sci-Fi"], year: 2020, img: "img/bna_brand_new_animal.jpg", studio: "Trigger", stato: "Finito", synopsis: "Michiru, una ragazza umana, si trasforma improvvisamente in un uomo-bestia tanuki e si rifugia ad Anima City. Lì, cerca una cura mentre scopre i misteri e i conflitti della società dei teriomorfi.", structure: [{ name: "Stagione Unica", episodes: "12" }] },
    { title: "Burn the Witch", genres: ["Fantasy", "Action"], year: 2020, img: "img/burn_the_witch.jpg", studio: "Studio Colorido", stato: "Finito", synopsis: "Nella 'Reverse London', un mondo nascosto, due streghe lavorano per un'agenzia che gestisce i draghi. La loro missione è proteggere i cittadini e mantenere l'equilibrio tra i due mondi.", structure: [{ name: "ONA", episodes: "3" }] },
    { title: "Chainsaw Man", genres: ["Action", "Horror", "Supernatural"], year: 2022, img: "img/chainsaw_man.jpg", studio: "MAPPA", stato: "In corso", synopsis: "Il giovane Denji, fuso con il suo cane-diavolo Pochita, diventa Chainsaw Man. Reclutato da una divisione governativa, dà la caccia ai diavoli in un mondo tanto sanguinoso quanto surreale.", structure: [{ name: "Stagione 1", episodes: "12" }, { name: "Film: Reze Arc", episodes: "1" }] },
    { title: "Claymore", genres: ["Fantasy", "Action"], year: 2007, img: "img/claymore.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Le Claymore sono guerriere per metà umane e per metà demone, create per cacciare mostri divora-uomini. Clare, una di loro, viaggia in cerca di vendetta contro la creatura che ha segnato il suo passato.", structure: [{ name: "Stagione Unica", episodes: "26" }] },
    { title: "Cyberpunk: Edgerunners", genres: ["Sci-Fi", "Cyberpunk"], year: 2022, img: "img/cyberpunk__edgerunners.jpg", studio: "Trigger", stato: "Finito", synopsis: "Nella futuristica e violenta Night City, un ragazzo di strada cerca di sopravvivere diventando un 'edgerunner', un mercenario fuorilegge dotato di potenziamenti cibernetici.", structure: [{ name: "Stagione Unica", episodes: "10" }] },
    { title: "DAN DA DAN", genres: ["Action", "Comedy", "Supernatural"], year: 2024, img: "img/dan_da_dan.jpg", studio: "Science SARU", stato: "Finito", synopsis: "Una ragazza che crede negli spiriti e un ragazzo che crede negli alieni fanno una scommessa per dimostrare chi ha ragione. Finiranno per scoprire che entrambi esistono, venendo risucchiati in un'avventura bizzarra e sovrannaturale.", structure: [{ name: "Stagione 1", episodes: "12" }, { name: "Stagione 2", episodes: "12" }] },
    { title: "Darwin's Game", genres: ["Action", "Thriller"], year: 2020, img: "img/darwin_s_game.jpg", studio: "Nexus", stato: "Finito", synopsis: "Un ragazzo accetta un invito a un gioco per cellulare e si ritrova intrappolato in una mortale competizione reale. Ogni giocatore ha un potere unico e l'unico obiettivo è sopravvivere.", structure: [{ name: "Stagione 1", episodes: "11" }] },
    { title: "Deadman Wonderland", genres: ["Sci-Fi", "Horror"], year: 2011, img: "img/deadman_wonderland.jpg", studio: "Manglobe", stato: "Finito", synopsis: "Accusato ingiustamente di un massacro, Ganta Igarashi viene imprigionato in una prigione-parco a tema. Lì, i detenuti sono costretti a partecipare a giochi mortali per intrattenere il pubblico.", structure: [{ name: "Stagione Unica", episodes: "12" }, { name: "OAV", episodes: "1" }] },
    { title: "Death Note", genres: ["Thriller", "Supernatural", "Psychological"], year: 2006, img: "img/death_note.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Lo studente modello Light Yagami trova un quaderno che uccide chiunque il cui nome vi venga scritto. Inizia così una crociata per purificare il mondo, braccato dal geniale e misterioso detective L.", structure: [{ name: "Stagione Unica", episodes: "37" }] },
    { title: "Deca-Dence", genres: ["Sci-Fi", "Action"], year: 2020, img: "img/deca_dence.jpg", studio: "NUT", stato: "Finito", synopsis: "In un futuro in cui l'umanità vive in una fortezza mobile, i guerrieri combattono contro mostruose creature. Una ragazza che sogna di combattere scopre un segreto sconvolgente sulla vera natura del loro mondo.", structure: [{ name: "Stagione Unica", episodes: "12" }] },
    { title: "Demon Slayer", genres: ["Action", "Fantasy"], year: 2019, img: "img/demon_slayer.jpg", studio: "Ufotable", stato: "In corso", synopsis: "Dopo che la sua famiglia è stata sterminata dai demoni e sua sorella Nezuko trasformata in uno di essi, il giovane Tanjiro Kamado intraprende un viaggio per diventare un cacciatore di demoni e trovare una cura.", structure: [{ name: "Stagione 1", episodes: "26" }, { name: "Film: Mugen Train", episodes: "1" }, { name: "Stagione 2", episodes: "18" }, { name: "Stagione 3", episodes: "11" }, { name: "Stagione 4", episodes: "8" }, { name: "Film: Infinity Castle", episodes: "1" }] },
    { title: "Devil May Cry", genres: ["Action", "Fantasy"], year: 2025, img: "img/devil_may_cry.jpg", studio: "Studio Mir", stato: "Finito", synopsis: "Il cacciatore di demoni Dante, mezzo demone e mezzo umano, affronta forze oscure e sinistre cospirazioni, cercando di impedire l'apertura di un portale che scatenerebbe l'inferno sulla Terra.", structure: [{ name: "Stagione 1", episodes: "8" }] },
    { title: "Devilman Crybaby", genres: ["Horror", "Supernatural"], year: 2018, img: "img/devilman_crybaby.jpg", studio: "Science SARU", stato: "Finito", synopsis: "Per combattere un'antica razza di demoni che minaccia l'umanità, il timido Akira Fudo si fonde con il demone Amon, diventando Devilman. La sua nuova forza lo trascina in una spirale di violenza e disperazione.", structure: [{ name: "Stagione Unica", episodes: "10" }] },
    { title: "Drifters", genres: ["Fantasy", "Action", "Isekai"], year: 2016, img: "img/drifters.jpg", studio: "Hoods Drifters Studio", stato: "Finito", synopsis: "Personaggi storici leggendari, i 'Drifters', vengono trasportati in un mondo fantasy sull'orlo della distruzione. Lì, devono combattere contro altri personaggi storici, gli 'Ends', che vogliono annientare ogni cosa.", structure: [{ name: "Stagione 1", episodes: "12" }, { name: "OAV", episodes: "3" }] },
    { title: "Erased", genres: ["Thriller", "Supernatural"], year: 2016, img: "img/erased.jpg", studio: "A-1 Pictures", stato: "Finito", synopsis: "Un giovane mangaka ha il potere di tornare indietro nel tempo di pochi minuti per prevenire incidenti. Quando viene accusato di omicidio, il suo potere lo riporta a 18 anni prima, dandogli la possibilità di risolvere un mistero della sua infanzia.", structure: [{ name: "Stagione Unica", episodes: "12" }] },
    { title: "Failure Frame", genres: ["Fantasy", "Isekai"], year: 2024, img: "img/failure_frame.jpg", studio: "Seven Arcs", stato: "Finito", synopsis: "Trasportato in un altro mondo con la sua classe, Mimori Touka viene abbandonato perché ritenuto inutile. Dotato di abilità apparentemente deboli, inizia un viaggio solitario per sopravvivere e vendicarsi.", structure: [{ name: "Stagione 1", episodes: "12" }] },
    { title: "Fate/Zero", genres: ["Fantasy", "Action"], year: 2011, img: "img/fate_zero.jpg", studio: "Ufotable", stato: "Finito", synopsis: "Prequel di Fate/stay night, narra la Quarta Guerra del Santo Graal. Sette maghi evocano sette Spiriti Eroici del passato per combattersi a vicenda in una battaglia mortale il cui vincitore otterrà un desiderio.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Stagione 2", episodes: "12" }] },
    { title: "FLCL", genres: ["Sci-Fi", "Comedy"], year: 2000, img: "img/flcl.jpg", studio: "Gainax / Production I.G", stato: "Finito", synopsis: "La vita ordinaria di un ragazzino viene sconvolta dall'arrivo di una donna eccentrica in sella a una Vespa, che lo colpisce in testa con un basso elettrico. Da quel momento, dalla sua fronte iniziano a spuntare robot giganti.", structure: [{ name: "Classic", episodes: "6" }, { name: "Progressive", episodes: "6" }, { name: "Alternative", episodes: "6" }] },
    { title: "Fullmetal Alchemist: Brotherhood", genres: ["Adventure", "Fantasy"], year: 2009, img: "img/fullmetal_alchemist__brotherhood.jpg", studio: "Bones", stato: "Finito", synopsis: "I fratelli Edward e Alphonse Elric usano l'alchimia per cercare la Pietra Filosofale, sperando di recuperare i loro corpi dopo un esperimento fallito. Scopriranno una cospirazione che minaccia l'intera nazione.", structure: [{ name: "Stagione Unica", episodes: "64" }] },
    { title: "Future Diary", genres: ["Thriller", "Supernatural"], year: 2011, img: "img/future_diary.jpg", studio: "Asread", stato: "Finito", synopsis: "Yukiteru Amano è uno dei dodici partecipanti a un gioco mortale in cui ogni concorrente ha un diario che predice il futuro in modi diversi. L'ultimo sopravvissuto diventerà il nuovo Dio del Tempo e dello Spazio.", structure: [{ name: "Stagione Unica", episodes: "26" }, { name: "OAV", episodes: "1" }] },
    { title: "Gachiakuta", genres: ["Action", "Fantasy"], year: 2025, img: "img/gachiakuta.jpg", studio: "Bones", stato: "In corso", synopsis: "Rudo vive nei bassifondi di una città galleggiante, dove i poveri sopravvivono grazie ai rifiuti gettati dai ricchi. Accusato ingiustamente di un crimine orribile, viene gettato nell'Abisso, un mondo infestato da mostri fatti di spazzatura. Lì scopre un potere latente e giura vendetta contro chi lo ha tradito.", structure: [{ name: "Stagione 1", episodes: "24" }] },
    { title: "Gangsta.", genres: ["Action", "Drama"], year: 2015, img: "img/gangsta_.jpg", studio: "Manglobe", stato: "Finito", synopsis: "Nella città di Ergastulum, dominata dalla mafia, due 'factotum' si occupano dei lavori sporchi che nessuno vuole. La loro vita si complica quando decidono di proteggere una prostituta braccata da una gang.", structure: [{ name: "Stagione Unica", episodes: "12" }] },
    { title: "Gantz", genres: ["Sci-Fi", "Horror", "Action"], year: 2004, img: "img/gantz.jpg", studio: "Gonzo", stato: "Finito", synopsis: "Dopo essere morti, due ragazzi si risvegliano in una stanza con una misteriosa sfera nera. Vengono costretti a partecipare a un gioco mortale, cacciando alieni nascosti sulla Terra con armi futuristiche.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Stagione 2", episodes: "13" }] },
    { title: "Gate", genres: ["Fantasy", "Isekai", "Military"], year: 2015, img: "img/gate.jpg", studio: "A-1 Pictures", stato: "Finito", synopsis: "Un portale misterioso si apre a Tokyo, da cui emerge un esercito di creature fantasy. Le Forze di Autodifesa Giapponesi entrano nel portale per esplorare il nuovo mondo e stabilire relazioni diplomatiche.", structure: [{ name: "Stagione 1", episodes: "12" }, { name: "Stagione 2", episodes: "12" }] },
    { title: "Grimgar of Fantasy and Ash", genres: ["Fantasy", "Isekai", "Drama"], year: 2016, img: "img/grimgar_of_fantasy_and_ash.jpg", studio: "A-1 Pictures", stato: "Finito", synopsis: "Un gruppo di estranei si risveglia in un mondo fantasy senza ricordi del proprio passato. Per sopravvivere, devono imparare a combattere, collaborare e affrontare la dura e realistica realtà della vita da avventurieri.", structure: [{ name: "Stagione Unica", episodes: "12" }] },
    { title: "Gurren Lagann", genres: ["Mecha", "Sci-Fi", "Action"], year: 2007, img: "img/gurren_lagann.jpg", studio: "Gainax", stato: "Finito", synopsis: "In un futuro in cui l'umanità vive sottoterra, due ragazzi, Simon e Kamina, trovano un robot a forma di testa. Usandolo, emergono in superficie e iniziano una battaglia epica per la libertà dell'umanità.", structure: [{ name: "Serie TV", episodes: "27" }, { name: "Film 1 & 2", episodes: "2" }] },
    { title: "Handyman Saitou in Another World", genres: ["Fantasy", "Isekai", "Comedy"], year: 2023, img: "img/handyman_saitou_in_another_world.jpg", studio: "C2C", stato: "Finito", synopsis: "Un tuttofare giapponese viene trasportato in un mondo fantasy. Lì, scopre che le sue abilità pratiche, come scassinare serrature e riparare armature, sono incredibilmente utili per i suoi nuovi compagni avventurieri.", structure: [{ name: "Stagione 1", episodes: "12" }] },
    { title: "Heavenly Delusion", genres: ["Sci-Fi", "Adventure", "Mystery"], year: 2023, img: "img/heavenly_delusion.jpg", studio: "Production I.G", stato: "Finito", synopsis: "In un Giappone post-apocalittico, Maru e Kiruko viaggiano attraverso rovine infestate da mostri in cerca di un luogo chiamato 'Paradiso'. Parallelamente, un gruppo di bambini vive in un'utopia isolata dal mondo esterno.", structure: [{ name: "Stagione 1", episodes: "13" }] },
    { title: "Hell's Paradise: Jigokuraku", genres: ["Action", "Fantasy", "Horror"], year: 2023, img: "img/hells_paradise_jigokuraku.jpg", studio: "MAPPA", stato: "In corso", synopsis: "Il ninja Gabimaru 'il Vuoto' viene condannato a morte, ma nessuna esecuzione funziona su di lui. Gli viene offerta la grazia se riuscirà a trovare l'elisir di lunga vita su un'isola misteriosa e letale.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Stagione 2", episodes: "TBA" }] },
    { title: "Hellsing Ultimate", genres: ["Horror", "Action", "Supernatural"], year: 2006, img: "img/hellsing_ultimate.jpg", studio: "Satelight / Madhouse", stato: "Finito", synopsis: "L'organizzazione Hellsing protegge l'Inghilterra da minacce sovrannaturali, avendo come arma definitiva il potente vampiro Alucard. La loro lotta si intensifica con l'arrivo di un'organizzazione di vampiri nazisti.", structure: [{ name: "OAV", episodes: "10" }] },
    { title: "HUNTER x HUNTER", genres: ["Adventure", "Fantasy"], year: 2011, img: "img/hunter_x_hunter.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Gon Freecss scopre che suo padre, che credeva morto, è un leggendario Hunter. Per ritrovarlo, decide di diventare un Hunter anche lui, affrontando prove mortali e stringendo profonde amicizie.", structure: [{ name: "Serie 2011", episodes: "148" }] },
    { title: "JoJo's Bizarre Adventure", genres: ["Action", "Supernatural"], year: 2012, img: "img/jojo_s_bizarre_adventure.jpg", studio: "David Production", stato: "In corso", synopsis: "Le cronache delle bizzarre e sanguinose avventure della famiglia Joestar attraverso le generazioni. Ogni arco narrativo segue un discendente diverso, ognuno con poteri unici, contro nemici sovrannaturali.", structure: [{ name: "S1: Phantom Blood & Battle Tendency", episodes: "26" }, { name: "S2: Stardust Crusaders", episodes: "48" }, { name: "S3: Diamond is Unbreakable", episodes: "39" }, { name: "S4: Golden Wind", episodes: "39" }, { name: "S5: Stone Ocean", episodes: "38" }] },
    { title: "Jujutsu Kaisen", genres: ["Action", "Supernatural"], year: 2020, img: "img/jujutsu_kaisen.jpg", studio: "MAPPA", stato: "In corso", synopsis: "Lo studente Yuji Itadori ingoia un oggetto maledetto per salvare un amico, diventando l'ospite di un potente demone. Entra in una scuola di stregoni per imparare a controllare i suoi nuovi poteri e combattere le maledizioni.", structure: [{ name: "Stagione 1", episodes: "24" }, { name: "Film 0", episodes: "1" }, { name: "Stagione 2", episodes: "23" }, { name: "Stagione 3: Culling Game", episodes: "In corso" }] },
    { title: "Kaiju No. 8", genres: ["Action", "Sci-Fi"], year: 2024, img: "img/kaiju_no__8.jpg", studio: "Production I.G", stato: "Finito", synopsis: "In un Giappone infestato da mostri giganti (Kaiju), Kafka Hibino sogna di unirsi alle Forze di Difesa. Dopo aver ingerito un piccolo Kaiju, acquisisce la capacità di trasformarsi, diventando il ricercato 'Kaiju No. 8'.", structure: [{ name: "Stagione 1", episodes: "12" }] },
    { title: "Kill la Kill", genres: ["Action", "Comedy"], year: 2013, img: "img/kill_la_kill.jpg", studio: "Trigger", stato: "Finito", synopsis: "In cerca dell'assassino di suo padre, Ryuko Matoi arriva all'Accademia Honnouji, dominata da Satsuki Kiryuin e le sue 'Uniformi Goku'. Con l'aiuto di un'uniforme parlante, Senketsu, Ryuko sfida il sistema.", structure: [{ name: "Stagione Unica", episodes: "24" }] },
    { title: "Kingdom", genres: ["Military", "Historical", "Action"], year: 2012, img: "img/kingdom.jpg", studio: "Pierrot", stato: "In corso", synopsis: "Durante il periodo degli Stati Combattenti in Cina, due giovani schiavi sognano di diventare Grandi Generali. Dopo una tragedia, il ragazzo Shin si unisce al giovane re Ei Sei nel suo tentativo di unificare la Cina.", structure: [{ name: "Stagione 1", episodes: "38" }, { name: "Stagione 2", episodes: "39" }, { name: "Stagione 3", episodes: "26" }, { name: "Stagione 4", episodes: "26" }, { name: "Stagione 5", episodes: "13" }] },
    { title: "Lazarus", genres: ["Sci-Fi", "Action"], year: 2025, img: "img/lazarus.jpg", studio: "MAPPA", stato: "Finito", synopsis: "Nel 2052, il mondo vive in pace grazie a un farmaco miracoloso. Ma il suo creatore scompare, per poi tornare tre anni dopo annunciando che il farmaco ucciderà tutti. Una task force speciale ha il compito di trovarlo.", structure: [{ name: "Stagione 1", episodes: "13" }] },
    { title: "Made in Abyss", genres: ["Adventure", "Fantasy", "Sci-Fi"], year: 2017, img: "img/made_in_abyss.jpg", studio: "Kinema Citrus", stato: "In corso", synopsis: "Una ragazzina di nome Riko decide di scendere nell'Abisso, un'enorme voragine inesplorata, per ritrovare sua madre. Accompagnata dal ragazzo robot Reg, affronta un viaggio tanto meraviglioso quanto terrificante.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Film: Dawn of the Deep Soul", episodes: "1" }, { name: "Stagione 2", episodes: "12" }] },
    { title: "Mob Psycho 100", genres: ["Action", "Comedy", "Supernatural"], year: 2016, img: "img/mob_psycho_100.jpg", studio: "Bones", stato: "Finito", synopsis: "Shigeo 'Mob' Kageyama è un ragazzo con poteri psichici devastanti. Per paura di perdere il controllo, cerca di vivere una vita normale, ma le minacce sovrannaturali continuano a perseguitarlo.", structure: [{ name: "Stagione 1", episodes: "12" }, { name: "Stagione 2", episodes: "13" }, { name: "Stagione 3", episodes: "12" }] },
    { title: "My Hero Academia: Vigilantes", genres: ["Action", "Superhero"], year: 2025, img: "img/my_hero_academia__vigilantes.jpg", studio: "Bones", stato: "In corso", synopsis: "In un mondo di eroi, alcuni operano al di fuori della legge. Segue le vicende di un gruppo di 'Vigilanti' che combattono il crimine nell'ombra, in un prequel che esplora gli angoli meno noti della società dei supereroi.", structure: [{ name: "Stagione 1", episodes: "TBA" }] },
    { title: "My Hero Academia", genres: ["Action", "Superhero"], year: 2016, img: "img/my_hero_academia.jpg", studio: "Bones", stato: "Finito", synopsis: "In un mondo dove quasi tutti hanno superpoteri, Izuku Midoriya nasce senza. Il suo incontro con il più grande eroe di tutti, All Might, gli darà la possibilità di realizzare il suo sogno di diventare un eroe.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Stagione 2", episodes: "25" }, { name: "Stagione 3", episodes: "25" }, { name: "Stagione 4", episodes: "25" }, { name: "Stagione 5", episodes: "25" }, { name: "Stagione 6", episodes: "25" }, { name: "Stagione 7", episodes: "21" }, { name: "Stagione 8 (Finale)", episodes: "TBA" }] },
    { title: "NARUTO", genres: ["Action", "Adventure"], year: 2002, img: "img/naruto.jpg", studio: "Pierrot", stato: "Finito", synopsis: "Naruto Uzumaki, un giovane ninja emarginato che ospita dentro di sé un demone, sogna di diventare il leader del suo villaggio, l'Hokage, per ottenere il rispetto di tutti.", structure: [{ name: "Naruto", episodes: "220" }, { name: "Shippuden", episodes: "500" }] },
    { title: "Neon Genesis Evangelion", genres: ["Mecha", "Sci-Fi", "Psychological"], year: 1995, img: "img/neon_genesis_evangelion.jpg", studio: "Gainax", stato: "Finito", synopsis: "In un mondo post-catastrofe, l'adolescente Shinji Ikari viene reclutato per pilotare un mecha gigante, l'Evangelion, e combattere contro mostruosi esseri chiamati Angeli. La battaglia si rivelerà tanto psicologica quanto fisica.", structure: [{ name: "Serie TV", episodes: "26" }, { name: "Film: End of Evan.", episodes: "1" }] },
    { title: "ONE PIECE", genres: ["Adventure", "Fantasy"], year: 1999, img: "img/one_piece.jpg", studio: "Toei Animation", stato: "In corso", synopsis: "Monkey D. Luffy, un ragazzo il cui corpo ha acquisito le proprietà della gomma, viaggia per mare con la sua ciurma alla ricerca del tesoro supremo, il 'One Piece', per diventare il nuovo Re dei Pirati.", structure: [{ name: "Serie TV", episodes: "1100+" }] },
    { title: "One-Punch Man", genres: ["Action", "Comedy", "Superhero"], year: 2015, img: "img/one_punch_man.jpg", studio: "Madhouse / J.C.Staff", stato: "In corso", synopsis: "Saitama è un eroe così potente da sconfiggere qualsiasi nemico con un solo pugno. Questa forza schiacciante lo ha portato a una profonda noia esistenziale, mentre cerca un avversario degno.", structure: [{ name: "Stagione 1", episodes: "12" }, { name: "Stagione 2", episodes: "12" }, { name: "Stagione 3", episodes: "12" }] },
    { title: "Overlord", genres: ["Fantasy", "Isekai"], year: 2015, img: "img/overlord.jpg", studio: "Madhouse", stato: "In corso", synopsis: "Un giocatore rimane intrappolato nel suo videogioco online preferito dopo la chiusura dei server. Nei panni del suo avatar, un potente non-morto, decide di conquistare il nuovo mondo in cui si è ritrovato.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Stagione 2", episodes: "13" }, { name: "Stagione 3", episodes: "13" }, { name: "Stagione 4", episodes: "13" }, { name: "Film: The Sacred Kingdom", episodes: "1" }] },
    { title: "Parasyte -the maxim-", genres: ["Sci-Fi", "Horror"], year: 2014, img: "img/parasyte__the_maxim_.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Lo studente Shinichi Izumi si fonde con un parassita alieno che ha preso il controllo della sua mano destra. I due formano una simbiosi improbabile per combattere altri parassiti che divorano gli esseri umani.", structure: [{ name: "Stagione Unica", episodes: "24" }] },
    { title: "Ranking of Kings", genres: ["Fantasy", "Adventure"], year: 2021, img: "img/ranking_of_kings.jpg", studio: "Wit Studio", stato: "Finito", synopsis: "Il principe Bojji, sordo, muto e apparentemente debole, sogna di diventare un grande re. Nonostante le derisioni, intraprende un'avventura che metterà alla prova il suo coraggio e la sua determinazione.", structure: [{ name: "Stagione 1", episodes: "23" }, { name: "Treasure Chest", episodes: "10" }] },
    { title: "Re:ZERO -Starting Life in Another World-", genres: ["Fantasy", "Isekai", "Psychological"], year: 2016, img: "img/rezero_starting_life_in_another_world.jpg", studio: "White Fox", stato: "Finito", synopsis: "Subaru Natsuki viene trasportato in un mondo fantasy dove scopre di avere un unico, terrificante potere: ogni volta che muore, ritorna in vita in un momento precedente, costretto a rivivere gli eventi per cambiarne l'esito.", structure: [{ name: "Stagione 1", episodes: "25" }, { name: "Stagione 2", episodes: "25" }, { name: "Stagione 3", episodes: "16" }] },
    { title: "Reincarnated as a Sword", genres: ["Fantasy", "Isekai", "Adventure"], year: 2022, img: "img/reincarnated_as_a_sword.jpg", studio: "C2C", stato: "Finito", synopsis: "Un uomo si reincarna in un altro mondo come una spada leggendaria. Viene trovato da una ragazzina gatto, Fran, che diventa la sua padrona. Insieme, formano un duo inarrestabile di avventurieri.", structure: [{ name: "Stagione 1", episodes: "12" }] },
    { title: "Sakamoto Days", genres: ["Action", "Comedy"], year: 2026, img: "img/sakamoto_days.jpg", studio: "TMS Entertainment", stato: "In corso", synopsis: "Taro Sakamoto era il più grande sicario di tutti i tempi, ma si è ritirato per amore. Ora gestisce un minimarket e deve proteggere la sua vita pacifica da ex colleghi e rivali, senza mai più uccidere.", structure: [{ name: "Stagione 1", episodes: "In corso" }] },
    { title: "Shangri-La Frontier", genres: ["Fantasy", "Adventure", "Game"], year: 2023, img: "img/shangri_la_frontier.jpg", studio: "C2C", stato: "Finito", synopsis: "Uno studente esperto nel finire i videogiochi più brutti decide di provare il VRMMORPG del momento, Shangri-La Frontier. Con le sue abilità uniche, si fa rapidamente un nome in questo mondo virtuale.", structure: [{ name: "Stagione 1", episodes: "25" }] },
    { title: "Solo Leveling", genres: ["Action", "Fantasy"], year: 2024, img: "img/solo_leveling.jpg", studio: "A-1 Pictures", stato: "In corso", synopsis: "In un mondo in cui cacciatori dotati di poteri combattono mostri in dungeon, Sung Jinwoo, il cacciatore più debole di tutti, ottiene un potere unico che gli permette di salire di livello senza limiti.", structure: [{ name: "Stagione 1", episodes: "12" }, { name: "Stagione 2", episodes: "In corso" }] },
    { title: "SPY x FAMILY", genres: ["Action", "Comedy", "Slice of Life"], year: 2022, img: "img/spy_x_family.jpg", studio: "Wit Studio / CloverWorks", stato: "Finito", synopsis: "Per una missione segreta, la super spia 'Twilight' deve creare una famiglia fittizia. Adotta una bambina telepate e sposa un'assassina, ma nessuno dei tre conosce la vera identità degli altri.", structure: [{ name: "Stagione 1", episodes: "25" }, { name: "Stagione 2", episodes: "12" }, { name: "Film: Code White", episodes: "1" }, { name: "Stagione 3", episodes: "12" }] },
    { title: "Steins;Gate", genres: ["Sci-Fi", "Thriller"], year: 2011, img: "img/steins_gate.jpg", studio: "White Fox", stato: "Finito", synopsis: "Un gruppo di amici scopre di poter mandare messaggi nel passato usando un forno a microonde modificato. Le loro azioni iniziano a causare cambiamenti imprevisti e pericolosi nella linea temporale.", structure: [{ name: "Serie Principale", episodes: "24" }, { name: "Film", episodes: "1" }, { name: "Steins;Gate 0", episodes: "23" }] },
    { title: "Summer Time Rendering", genres: ["Mystery", "Supernatural", "Thriller"], year: 2022, img: "img/summer_time_rendering.jpg", studio: "OLM", stato: "Finito", synopsis: "Shinpei Ajiro torna sulla sua isola natale per il funerale di un'amica d'infanzia. Scopre presto che una minaccia sovrannaturale legata a delle 'Ombre' sta per consumare l'isola, e lui è intrappolato in un loop temporale.", structure: [{ name: "Stagione Unica", episodes: "25" }] },
    { title: "Sword Art Online", genres: ["Fantasy", "Sci-Fi", "Game"], year: 2012, img: "img/sword_art_online.jpg", studio: "A-1 Pictures", stato: "In corso", synopsis: "Migliaia di giocatori rimangono intrappolati nel videogioco di realtà virtuale 'Sword Art Online'. Morire nel gioco significa morire anche nella vita reale. Kirito, un giocatore solitario, lotta per la sopravvivenza.", structure: [{ name: "Aincrad/Fairy Dance", episodes: "25" }, { name: "Phantom Bullet", episodes: "24" }, { name: "Alicization", episodes: "47" }] },
    { title: "Terra Formars", genres: ["Sci-Fi", "Action", "Horror"], year: 2014, img: "img/terra_formars.jpg", studio: "Liden Films", stato: "Finito", synopsis: "Per terraformare Marte, gli scienziati inviano scarafaggi. Secoli dopo, l'umanità invia un equipaggio per sterminarli, ma scopre che si sono evoluti in creature umanoidi incredibilmente forti e ostili.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Revenge", episodes: "13" }] },
    { title: "The Eminence in Shadow", genres: ["Fantasy", "Isekai", "Comedy"], year: 2022, img: "img/the_eminence_in_shadow.jpg", studio: "Nexus", stato: "In corso", synopsis: "Un ragazzo, reincarnato in un mondo fantasy, inventa per gioco di essere a capo di un'organizzazione segreta che combatte un culto oscuro. Scoprirà con sua grande sorpresa che sia l'organizzazione che il culto esistono davvero.", structure: [{ name: "Stagione 1", episodes: "20" }, { name: "Stagione 2", episodes: "12" }, { name: "Film: Lost Echoes", episodes: "1" }] },
    { title: "The Promised Neverland", genres: ["Thriller", "Horror", "Mystery"], year: 2019, img: "img/the_promised_neverland.jpg", studio: "CloverWorks", stato: "Finito", synopsis: "Un gruppo di orfani scopre che il loro amato orfanotrofio è in realtà una fattoria dove vengono allevati come cibo per demoni. Guidati dalla geniale Emma, pianificano una fuga disperata.", structure: [{ name: "Stagione 1", episodes: "12" }, { name: "Stagione 2", episodes: "11" }] },
    { title: "The Rising of the Shield Hero", genres: ["Fantasy", "Isekai", "Adventure"], year: 2019, img: "img/the_rising_of_the_shield_hero.jpg", studio: "Kinema Citrus", stato: "In corso", synopsis: "Evocato in un mondo fantasy come uno dei quattro eroi leggendari, Naofumi Iwatani riceve solo uno scudo. Tradito e disprezzato, deve trovare un modo per diventare più forte e sopravvivere da solo.", structure: [{ name: "Stagione 1", episodes: "25" }, { name: "Stagione 2", episodes: "13" }, { name: "Stagione 3", episodes: "12" }] },
    { title: "The World's Finest Assassin...", genres: ["Fantasy", "Isekai", "Action"], year: 2021, img: "img/the_worlds_finest_assassin.jpg", studio: "Silver Link / Studio Palette", stato: "Finito", synopsis: "Il più grande assassino della Terra viene reincarnato come erede di una famiglia di assassini in un mondo di magia. Accetta di reincarnarsi a una condizione: uccidere l'Eroe, destinato a distruggere il mondo.", structure: [{ name: "Stagione 1", episodes: "12" }] },
    { title: "To Be Hero X", genres: ["Action", "Superhero"], year: 2024, img: "img/to_be_hero_x.jpg", studio: "BeDream", stato: "Finito", synopsis: "In un mondo diviso tra 'buoni' e 'cattivi', chi ottiene più 'like' sui social network domina. Un eroe caduto in disgrazia e un cattivo di basso rango uniscono le forze per scalare le classifiche.", structure: [{ name: "Stagione 1", episodes: "12" }] },
    { title: "Tokyo Revengers", genres: ["Action", "Drama", "Sci-Fi"], year: 2021, img: "img/tokyo_revengers.jpg", studio: "Liden Films", stato: "Finito", synopsis: "Un ragazzo fallito scopre di poter viaggiare indietro nel tempo di 12 anni. Usa questo potere per tornare ai tempi delle scuole medie e cercare di salvare la sua ex fidanzata, infiltrandosi in una temibile gang di teppisti.", structure: [{ name: "Stagione 1", episodes: "24" }, { name: "Stagione 2", episodes: "13" }, { name: "Stagione 3", episodes: "13" }] },
    { title: "Tower of God", genres: ["Fantasy", "Adventure"], year: 2020, img: "img/tower_of_god.jpg", studio: "Telecom Animation Film", stato: "Finito", synopsis: "Un ragazzo di nome Bam entra nella misteriosa 'Torre' per ritrovare la sua unica amica, Rachel. Per farlo, deve superare una serie di prove mortali e complesse su ogni piano della Torre, affrontando avversari e stringendo alleanze.", structure: [{ name: "Stagione 1", episodes: "13" }, { name: "Stagione 2", episodes: "26" }] },
    { title: "Trigun", genres: ["Sci-Fi", "Action", "Adventure"], year: 1998, img: "img/trigun.jpg", studio: "Madhouse", stato: "Finito", synopsis: "Su un pianeta deserto, Vash the Stampede è un pistolero con una taglia enorme sulla sua testa, accusato di aver distrutto intere città. Nonostante la sua fama, è un pacifista che cerca di evitare la violenza a ogni costo.", structure: [{ name: "Serie 1998", episodes: "26" }, { name: "Film", episodes: "1" }, { name: "Stampede", episodes: "12" }] },
    { title: "Vinland Saga", genres: ["Historical", "Action", "Drama"], year: 2019, img: "img/vinland_saga.jpg", studio: "Wit Studio / MAPPA", stato: "Finito", synopsis: "Il giovane Thorfinn cresce tra i vichinghi cercando vendetta per la morte di suo padre. La sua ricerca lo porterà a servire l'uomo che odia, in un viaggio epico attraverso la guerra e la politica dell'Europa medievale.", structure: [{ name: "Stagione 1", episodes: "24" }, { name: "Stagione 2", episodes: "24" }] },
    { title: "Wistoria: Wand and Sword", genres: ["Fantasy", "Action"], year: 2024, img: "img/wistoria__wand_and_sword.jpg", studio: "Actas / Bandai Namco Pictures", stato: "Finito", synopsis: "In un'accademia di magia, Will Serfort, incapace di usare la magia, lotta per mantenere una promessa d'infanzia. Per farlo, brandisce una spada e si fa strada a modo suo in un mondo che valorizza solo gli incantesimi.", structure: [{ name: "Stagione 1", episodes: "12" }] },
    { title: "Promare", genres: ["Action", "Sci-Fi", "Mecha"], year: 2019, img: "img/promare.jpg", studio: "Trigger", stato: "Film", synopsis: "In un futuro in cui parte dell'umanità ha sviluppato poteri pirocinetici, un'unità di pompieri high-tech combatte contro un gruppo di mutanti piromani. La battaglia tra il pompiere Galo e il leader dei terroristi, Lio, rivelerà una verità sconvolgente.", structure: [{ name: "Film", episodes: "1" }] },
    { title: "Ghost in the Shell", genres: ["Sci-Fi", "Cyberpunk"], year: 1995, img: "img/ghost_in_the_shell.jpg", studio: "Production I.G", stato: "Film", synopsis: "Nel 2029, il Maggiore Motoko Kusanagi, un cyborg a capo di una squadra speciale di sicurezza, dà la caccia a un misterioso e potente hacker conosciuto come il 'Signore dei Pupazzi'.", structure: [{ name: "Film", episodes: "1" }] },
    { title: "Principessa Mononoke", genres: ["Fantasy", "Adventure"], year: 1997, img: "img/principessa_mononoke.jpg", studio: "Studio Ghibli", stato: "Film", synopsis: "Il principe Ashitaka, colpito da una maledizione mortale, si ritrovano nel mezzo di una guerra tra una città mineraria e gli spiriti della foresta, guidati dalla fiera San, la 'Principessa Spettro'.", structure: [{ name: "Film", episodes: "1" }] },
    { title: "La città incantata", genres: ["Fantasy", "Adventure"], year: 2001, img: "img/la_citta_incantata.jpg", studio: "Studio Ghibli", stato: "Film", synopsis: "Chihiro, una bambina di dieci anni, finisce in una città incantata abitata da spiriti e streghe. Per salvare i suoi genitori trasformati in maiali, deve lavorare in un bagno termale gestito dalla strega Yubaba.", structure: [{ name: "Film", episodes: "1" }] },
];

// VARIABILI GLOBALI UTENTE
let currentUser = null;
let userLists = { watched: [], towatch: [] };

// DOM Elements
const container = document.getElementById('cards-container');
const genreSelect = document.getElementById('genere-select');
const statusSelect = document.getElementById('status-select');
const userListSelect = document.getElementById('user-list-select'); // Fixed: Added missing declaration
const sortSelect = document.getElementById('sort-select');
const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');

// Modal Elements
const modalContainer = document.getElementById('anime-modal-container');
const closeModalButton = document.querySelector('.close-button');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalStudio = document.getElementById('modal-studio');
const modalStructure = document.getElementById('modal-structure');
const modalMeta = document.getElementById('modal-meta');
const modalSynopsis = document.getElementById('modal-synopsis');
const modalToggleWatched = document.getElementById('modal-toggle-watched');
const modalToggleTowatch = document.getElementById('modal-toggle-towatch');

// Auth Elements
const authModal = document.getElementById('auth-modal');
const loginBtn = document.getElementById('login-btn');
const closeAuthBtn = document.getElementById('close-auth');
const authForm = document.getElementById('auth-form');
const authEmailInput = document.getElementById('auth-email');
const authPassInput = document.getElementById('auth-password');
const authSubmitBtn = authForm.querySelector('button');
const authSwitchBtn = document.getElementById('auth-switch');
const authTitle = document.getElementById('auth-title');
const authError = document.getElementById('auth-error');

let isLoginMode = true;

// === USER AUTH LOGIC ===

// Monitor Auth State
onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    if (user) {
        loginBtn.textContent = "Profilo";
        authModal.style.display = 'none';
        // Listener realtime sul database
        onSnapshot(doc(db, "users", user.uid), (doc) => {
            if (doc.exists()) {
                userLists = doc.data();
                updateDisplay(); // Rerenderizza per aggiornare icone
            } else {
                // Crea profilo vuoto se non esiste
                setDoc(doc.ref, { watched: [], towatch: [] });
            }
        });
    } else {
        loginBtn.textContent = "Accedi";
        userLists = { watched: [], towatch: [] };
        updateDisplay();
    }
});

// Import Google Auth handled at top

// Auth Elements

// ... (Rest of imports and state are fine)

// Auth Elements
const googleLoginBtn = document.getElementById('google-login');
const forgotPassBtn = document.getElementById('forgot-password');
// ...

// Handle Google Login
if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // The onAuthStateChanged listener will handle the rest
        } catch (error) {
            if (authError) authError.textContent = "Errore Google Login: " + error.message;
            console.error(error);
        }
    });
}

// Auth Modal Controls
loginBtn.addEventListener('click', () => {
    if (currentUser) {
        // Logout logic
        const confirmLogout = confirm("Vuoi disconnetterti?");
        if (confirmLogout) signOut(auth);
    } else {
        authModal.style.display = 'flex';
    }
});
closeAuthBtn.addEventListener('click', () => authModal.style.display = 'none');

// Forgot Password (Simple Alert for now)
forgotPassBtn.addEventListener('click', () => {
    alert("Funzione di recupero password in arrivo! Per ora usa 'Continua con Google' o crea un nuovo account.");
});

authSwitchBtn.addEventListener('click', () => {
    isLoginMode = !isLoginMode;
    // Update UI Text
    const switchSpan = authSwitchBtn.querySelector('strong');

    if (isLoginMode) {
        authTitle.textContent = "Accedi";
        authSubmitBtn.textContent = "Entra";
        authSwitchBtn.innerHTML = `Non hai un account? <strong style="color: white;">Registrati</strong>`;
        if (googleLoginBtn) googleLoginBtn.style.display = 'flex'; // Show Google on login
        if (document.querySelector('.auth-divider')) document.querySelector('.auth-divider').style.display = 'flex';
    } else {
        authTitle.textContent = "Crea Account";
        authSubmitBtn.textContent = "Registrati";
        authSwitchBtn.innerHTML = `Hai già un account? <strong style="color: white;">Accedi</strong>`;
        if (googleLoginBtn) googleLoginBtn.style.display = 'none'; // Simplify register view
        if (document.querySelector('.auth-divider')) document.querySelector('.auth-divider').style.display = 'none';
    }
    authError.textContent = "";
});

// Handle Login/Register
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = authEmailInput.value;
    const password = authPassInput.value;
    authError.textContent = "";

    try {
        if (isLoginMode) {
            await signInWithEmailAndPassword(auth, email, password);
        } else {
            await createUserWithEmailAndPassword(auth, email, password);
        }
    } catch (error) {
        let msg = error.message;
        if (error.code === 'auth/invalid-email') msg = "Email non valida.";
        if (error.code === 'auth/wrong-password') msg = "Password errata.";
        if (error.code === 'auth/user-not-found') msg = "Utente non trovato.";
        if (error.code === 'auth/email-already-in-use') msg = "Email già in uso.";
        authError.textContent = msg;
    }
});

// === DATABASE LOGIC ===

async function toggleStatus(animeTitle, listType) {
    if (!currentUser) {
        authModal.style.display = 'flex';
        return;
    }

    // listType is 'watched' or 'towatch'
    const otherList = listType === 'watched' ? 'towatch' : 'watched';

    let newList = [...userLists[listType]];
    let otherListContent = [...userLists[otherList]];

    // Toggle logic
    if (newList.includes(animeTitle)) {
        newList = newList.filter(t => t !== animeTitle);
    } else {
        newList.push(animeTitle);
        // Remove from other list if present (can't be watched and to-watch same time?)
        // Let's decide: Yes, exclusive makes sense usually, or not. Let's keep distinct.
        if (otherListContent.includes(animeTitle)) {
            otherListContent = otherListContent.filter(t => t !== animeTitle);
        }
    }

    try {
        await updateDoc(doc(db, "users", currentUser.uid), {
            [listType]: newList,
            [otherList]: otherListContent
        });
    } catch (e) {
        console.error("Error updating status:", e);
    }
}

// === RENDER LOGIC ===

function renderCards(cardsToRender) {
    container.innerHTML = '';
    if (cardsToRender.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1 / -1; margin-top: 2rem;">Nessun anime trovato con questi criteri.</p>';
        return;
    }
    cardsToRender.forEach((anime, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 50}ms`;

        // Check user status
        const isWatched = userLists.watched && userLists.watched.includes(anime.title);
        const isToWatch = userLists.towatch && userLists.towatch.includes(anime.title);

        if (isWatched) card.classList.add('watched');
        if (isToWatch) card.classList.add('towatch');

        card.innerHTML = `
            <img src="${anime.img}" alt="Copertina di ${anime.title}">
            <div class="card-content">
                <h2>${anime.title}</h2>
                <div class="genres">${anime.genres.join(' / ')}</div>
                <div class="meta"><span>${anime.stato}</span><span>${anime.year}</span></div>
            </div>
            <div class="card-actions">
                 <div class="status-btn ${isWatched ? 'active-watched' : ''}" title="Visto" onclick="window.toggleCardStatus('${anime.title.replace(/'/g, "\\'")}', 'watched', event)">👁️</div>
                 <div class="status-btn ${isToWatch ? 'active-towatch' : ''}" title="Da Vedere" onclick="window.toggleCardStatus('${anime.title.replace(/'/g, "\\'")}', 'towatch', event)">🕒</div>
            </div>
        `;

        container.appendChild(card);

        // Card click opens modal (ignore clicks on action buttons)
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.status-btn')) {
                openModal(anime);
            }
        });
    });
}

// Global function for onclick events in HTML
window.toggleCardStatus = (title, type, event) => {
    event.stopPropagation();
    toggleStatus(title, type);
};

function updateDisplay() {
    const selectedGenre = genreSelect.value;
    const selectedStatus = statusSelect.value;
    const selectedUserList = userListSelect ? userListSelect.value : 'Tutti';
    const sortCriteria = sortSelect.value;

    let filteredAnime = animeData.filter(anime => {
        const genreMatch = (selectedGenre === 'Tutti') || anime.genres.includes(selectedGenre);
        const statusMatch = (selectedStatus === 'Tutti') || anime.stato === selectedStatus;

        // Semantic check for user lists
        let userListMatch = true;
        if (selectedUserList === 'watched') {
            userListMatch = userLists.watched && userLists.watched.includes(anime.title);
        } else if (selectedUserList === 'towatch') {
            userListMatch = userLists.towatch && userLists.towatch.includes(anime.title);
        }

        return genreMatch && statusMatch && userListMatch;
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

if (userListSelect) userListSelect.addEventListener('change', updateDisplay);

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

    // Modal Action Buttons State
    const isWatched = userLists.watched && userLists.watched.includes(anime.title);
    const isToWatch = userLists.towatch && userLists.towatch.includes(anime.title);

    modalToggleWatched.className = `auth-btn ${isWatched ? 'active' : ''}`;
    modalToggleWatched.style.background = isWatched ? '#00e676' : 'transparent';
    modalToggleWatched.style.color = isWatched ? 'black' : 'var(--accent)';

    modalToggleTowatch.className = `auth-btn ${isToWatch ? 'active' : ''}`;
    modalToggleTowatch.style.background = isToWatch ? '#ffea00' : 'transparent';
    modalToggleTowatch.style.color = isToWatch ? 'black' : 'var(--accent)';

    // Attach listeners dynamically
    modalToggleWatched.onclick = () => toggleStatus(anime.title, 'watched').then(() => openModal(anime));
    modalToggleTowatch.onclick = () => toggleStatus(anime.title, 'towatch').then(() => openModal(anime));

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

// View Swithcers
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
statusSelect.addEventListener('change', updateDisplay);
sortSelect.addEventListener('change', updateDisplay);

// Init
populateGenres();
if (window.innerWidth <= 768) {
    listViewBtn.click();
}
updateDisplay();