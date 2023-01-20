import { Component, OnInit, VERSION } from '@angular/core';
import { IRegistrazione } from './registrazione';

@Component({
  selector: 'lista-dischi',
  templateUrl: './lista-dischi.component.html',
  styleUrls: ['./lista-dischi.component.css'],
})
export class ListaDischiComponent implements OnInit {
  mostraImmagine: boolean = false;

  //listFilter: string = '';

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('nel setter: ', value);
    //l'array creato richiama il metodo creaFiltro che restituisce un nuovo array.
    this.filteredRegistrazioni = this.datiFiltrati(value);
  }
  //creo un array di IRegistrazione che conterrà l'elenco filtrato
  filteredRegistrazioni: IRegistrazione[] = [];

  dischi: IRegistrazione[] = [
    {
      autore: 'Linkin Park',
      titolo: 'Hybrid Theory',
      prezzo: 10,
      immagine:
        'https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg',
    },
    {
      autore: 'Linkin Park',
      titolo: 'Meteora',
      prezzo: 15,
      immagine:
        'https://upload.wikimedia.org/wikipedia/en/0/0c/Linkin_Park_Meteora_Album_Cover.jpg',
    },
    {
      autore: 'Muse',
      titolo: 'Black Holes and Revelations',
      prezzo: 15,
      immagine:
        'https://miro.medium.com/max/1400/1*6gmTHZkC6z5gyyS2oo_xUQ.jpeg',
    },
  ];

  //passiamo una stringa come argomento (filtratoPer) viene restituito un array di IRegistrazione
  datiFiltrati(filtratoPer: string): IRegistrazione[] {
    //la function filter ritorna una array e passo una registrazione come argomento
    //il nuovo array include (grazie ad includes) il valore passato inizialmente alla function datiFiltrati
    return this.dischi.filter((registrazione: IRegistrazione) =>
      registrazione.autore
        .toLocaleLowerCase()
        .includes(filtratoPer.toLocaleLowerCase())
    );
  }

  mostraNascondiImg() {
    this.mostraImmagine = !this.mostraImmagine;
  }

  ngOnInit(): void {
    //implicitamente richiama set
    this.listFilter = '';
  }
}
