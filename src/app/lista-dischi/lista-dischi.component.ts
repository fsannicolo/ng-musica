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

  //creo la var di tipo string e la metto private
  //l'accesso sarà tramite i metodi setter e getter
  private _listFilter: string = '';

  //metodi getter e setter
  get listFilter(): string {
    return this._listFilter;
  }
  //per un primo test mettiamo anche l'istruzione
  //console.log('metodo setter: ', value)
  //così vediamo il risultato nella console del browser
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('nel setter: ', value);
    //l'array creato richiama il metodo creaFiltro
    //che restituisce un nuovo array.
    this.filteredRegistrazioni = this.datiFiltrati(value);
  }
  //creo un array di IRegistrazione che conterrà
  //l'elenco filtrato
  filteredRegistrazioni: IRegistrazione[] = [];

  dischi: IRegistrazione[] = [
    {
      autore: 'Thin Lizzy',
      titolo: 'Renegade',
      prezzo: 10,
      immagine:
        'https://tse2.mm.bing.net/th?id=OIP.vSwIRzO7pXv8Lc-hXlD7xQAAAA&pid=Api',
    },
    {
      autore: 'Stick Figure',
      titolo: 'Wisdom',
      prezzo: 15,
      immagine: 'https://cdn.albumoftheyear.org/album/554294-wisdom.jpg',
    },
    {
      autore: 'Stick Figure',
      titolo: 'Set in stone',
      prezzo: 15,
      immagine:
        'http://3.bp.blogspot.com/-Pxcyw3sFfeA/VkEXDXzEsWI/AAAAAAAAAjI/JooZUZLS2RA/s1600/SetinStone%2B-%2BAlbum%2BArt%2B-final%2Bfinal%2Bfinal.jpg',
    },
  ];
  //passiamo una stringa come argomento (filtratoPer)
  //e ci viene restituito un array di IRegistrazione
  datiFiltrati(filtratoPer: string): IRegistrazione[] {
    //metto tutto in lowercase
    filtratoPer = filtratoPer.toLocaleLowerCase();
    //creo l'array filtrato e lo ritorno
    //la function filter ritorna una array e passo una registrazione
    //come argomento.
    //Il nuovo array include (grazie ad includes) il valore
    //passato inizialmente alla function datiFiltrati
    return this.dischi.filter((registrazione: IRegistrazione) =>
      registrazione.autore.toLocaleLowerCase().includes(filtratoPer)
    );
  }
  mostraNascondiImg() {
    this.mostraImmagine = !this.mostraImmagine;
  }
  ngOnInit(): void {
    //nella fase di caricamento impostiamo il filtro ""
    //qui sotto viene assegnato il valore alla var _listFileter
    //attraverso il set
    this.listFilter = '';
  }
}
