import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
// import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];

  citta = [
    {
      id: 'madrid',
      nome: 'Madrid',
      nazione: 'spagna',
      descrizione_breve: ' Città moderna e d\'arte, Madrid è conosciuta come la città della movida: i suoi abitanti hanno orari estremamente flessibili... ',
      descrizione_ext: ' Città moderna e d\'arte, Madrid è conosciuta come la città della movida: i suoi abitanti hanno orari estremamente flessibili e sono soliti cenare a qualunque ora. Per questa ragione, e per molte altre, i ristoranti sono aperti fino ad ora tarda! Grazie ai nuovi voli low cost che da tutta l’Italia portano diretti nella capitale spagnola, è possibile trascorrere due giorni a Madrid per un weekend di divertimento e buon cibo. Ad aiutarvi nella scoperta di questa città troverete una delle più efficienti reti di trasporti d’Europa con numerosi autobus e linee di metropolitana che giungono fino all’aeroporto internazionale di Barajas o alla stazione ferroviaria di Atocha e che in breve tempo vi condurranno in qualsiasi zona della città.'
    },
    {
      id: 'newyork',
      nome: 'New York',
      nazione: 'Stati Uniti',
      descrizione_breve: '  Vedere da vicino l’Empire State Building, Central Park, Times Square o ancora la Fifth Avenue, rappresenta il sogno di una vita per molte persone...  ',
      descrizione_ext: ' Città moderna e d\'arte, Madrid è conosciuta come la città della movida: i suoi abitanti hanno orari estremamente flessibili e sono soliti cenare a qualunque ora. Per questa ragione, e per molte altre, i ristoranti sono aperti fino ad ora tarda! Soprannominata la Grande Mela, New York, cosmopolita per eccellenza, resta una delle mete turistiche più desiderate del mondo, un set che non smette mai di ispirare scrittori e registi. New York raccoglie il meglio dell\'arte, del design, dell\'architettura e della musica di tutto il mondo. Luogo di sogni ed emblema del "nuovo mondo", New York è simbolo del viaggio oltreoceano, di culture e stili diversi che ogni giorno si incontrano nella sua frenetica e ricchissima quotidianità extra-ordinaria. "The city that never sleeps..." recita una nota canzone, è il luogo ideale dove vivere un\'esperienza diversa e scoprire le sue più incredibili realtà caratterizzate da musei, parchi sconfinati, centri commerciali, locali di ogni stile e gusto in cui, da una settimana all\'altra, nascono nuove idee, nuove tendenze, nuove mode che da qui si propagano nel resto del mondo. Situata sulla costa orientale dell\'America settentrionale è ubicata alla foce del fiume Hudson (che costituisce il suo confine occidentale, separandola da una serie di sobborghi nel New Jersey). Delle 5 circoscrizioni (boroughs) in cui è divisa la città, solamente una (Bronx) si trova sul continente vero e proprio, mentre due (Brooklyn e Queens) occupano l\'estremità occidentale di Long Island, e gli altri (Manhattan e Staten Island) occupano due isole omonime di dimensioni intermedie. Esistono anche numerose isole di dimensioni più piccole, come Ellis Island, l\'isola in cui un tempo sbarcavano le navi piene di immigrati provenienti dall\'Europa, e dove questi venivano tenuti in quarantena per un certo periodo prima di essere ammessi al resto degli Stati Uniti, o Liberty Island, l\'isola dove è collocata la Statua della Libertà.'
    },
    {
      id: 'mosca',
      nome: 'Mosca',
      nazione: 'Russia',
      descrizione_breve: 'Città viva tutto l’anno e a qualsiasi ora del giorno e della notte, dove ha sede il Cremlino e alcune tra le più belle... ',
      descrizione_ext: ' Città moderna e d\'arte, Madrid è conosciuta come la città della movida: i suoi abitanti hanno orari estremamente flessibili e sono soliti cenare a qualunque ora. Per questa ragione, e per molte altre, i ristoranti sono aperti fino ad ora tarda! Mosca va assaporata e visitata con calma, iniziando con i luoghi più celebri fino a cercare gli angoli più remoti che nascondono bellezze uniche. Si parte dalla famosa Piazza Rossa, che ospita cattedrali, musei e complessi ricchi di storia e cultura. Assolutamente da visitare la Cattedrale di S. Basilio, conosciuta in tutto il mondo per i suoi colori e la sua copertura multipla a forma di cipolla; il Museo Statale Puškin di Belle Arti e il mausoleo di Lenin, in cui in una bara di cristallo giace il corpo del celeberrimo politico. Sempre sulla piazza si trova il GUM, l’edificio dei Grandi Magazzini, pieno di scale, ponti, negozi e boutique di grandi firme. La Piazza Rossa è adiacente alla fortezza del Cremlino, residenza del Presidente Russo. Un enorme complesso di chiese e mura antiche, una cittadella nella città, il cuore stesso di Mosca in cui spiccano le 20 torri e la Campana dello Zar, la più grande al mondo.\n' +
          '\n' +
          'Per spostarsi dal centro della città è consigliabile utilizzare la metropolitana di Mosca, anche perché le strade in città sono trafficatissime e il pedone sulle strisce non sempre ha la precedenza! Calda, pulita, luminosa, economica e bella, la metropolitana è considerata un monumento artistico. Le stazioni sembrano sale di palazzi ottocenteschi con mosaici, dipinti, lampadari imponenti, statue. Attenzione perché i cartelli sono in cirillico, quindi bisogna munirsi prima di una mappa con traduzione almeno in inglese. Tra le più belle stazioni la semplice ed elegante Majakovskaja, fermata Belorusskaja, con mosaici di scene rurali e un pavimento che imita il disegno di un tappeto bielorusso, e Teatral’naja, con marmi bianchi e maioliche in bassorilievo sul soffitto, dalla quale si raggiunge lo splendido Teatro Bolshoi, universalmente rinomato non solo per l’imponenza della struttura ma anche per la perfetta riproposizione di opere come “Il lago dei Cigni” di Tchaikovsky.\n' +
          '\n' +
          'La Mosca nascosta, quella meno frequentata dai turisti, è ricca di un fascino indescrivibile. Il negozio di giocattoli in piazza Lubjianka, il Detskij Mir, che all’interno ha anche una giostra da luna park; il Monastero delle Vergini (Monastero Novodevicij), un’oasi di pace alle porte di Mosca, dove un tempo trovavano rifugio le figlie della nobiltà russa; le Colline dei Passeri (ex colline Lenin), poco distanti dal centro, dalla cui sommità si apre un indimenticabile panorama; Patriarshie Prudi, un favoloso parco in cui passeggiare d’estate e pattinare d’inverno sul lago ghiacciato; Via Arbat, simbolo di Mosca con gruppi musicali che suonano a tutte le ore, pittori e poeti, oltre a negozi che vendono di tutto, dalle famose matrioske a gioielli e vestiti di marca, a metà prezzo.'
    }
  ];


  ngOnInit() {
  }


  constructor(private modalController: ModalController) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  async dettaglio(city: string) {
    let cit;
    for (const index in this.citta) {
      if (this.citta[index].id === city) {
        cit = this.citta[index];
      }
    }

    console.log(cit);
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        citta: cit.nome,
        descrizione: cit.descrizione_ext
      }
    });
    return await modal.present();
  }
}
