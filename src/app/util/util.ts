import { Campeonato } from "../model/campeonato.model";

export class Util {

    public static shuffle(array : any[]) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

      public static ordenaListaCameponato(listaCampeonatos: Campeonato[]) : Campeonato[] {
        return listaCampeonatos.sort((a,b) => a.nomeCampeonato!.localeCompare(b.nomeCampeonato!));
      }

      public static abreviarNomes(nome: string) {
        let nomeArray = nome.split(' ');
        let nomeAbreviado = "";
        let maxStrings = 0;
        let maxLenght = (nomeArray.length > 3) ? 3 : nomeArray.length;
        for(var i = 0; i < maxLenght; i++){
          maxStrings = (i==0) ? 3 : 1;
          nomeAbreviado += nomeArray[i].substring(0,maxStrings);
        }
        return nomeAbreviado;
      }
}