import Ipico from "../interfaces/Ipico";

class PicoPlacaSerivice implements Ipico {


    private static restricciones:{[key: string]:Number[]} ={
        'lunes': [1, 2],
        'martes': [3, 4],
        'miercoles': [5, 6],
        'jueves': [7, 8],
        'viernes': [9, 0],
        'sabado': [],
        'domingo': []
    }

    constructor(public numeroPlaca: String, public diaSemana: String) { }

    public cirular(): String {

        if (!(this.diaSemana.toLowerCase() in PicoPlacaSerivice.restricciones)) {
            return "El dia no es valido";
        }

        const n = this.numeroPlaca.toLowerCase().split("-")[1];
        const numero = parseInt(n);
        if (isNaN(numero)) {
            return "El número de placa no es válido";
        }

        const restriccionesDia = PicoPlacaSerivice.restricciones[this.diaSemana.toLowerCase()]  ||[];
        if(restriccionesDia.includes(parseInt(n.slice(-1)))){
            return "Hoy no puedes circular de 06:00 am a 9:30 am y en la tarde noche de 16:00 pm a 21:30 pm";
        }
        return "Puedes circular con exito";
    }

    getNumeroPlaca(): String {
        return this.numeroPlaca
    }

    getDiaSemana(): String {
        return this.diaSemana
    }


}

export default PicoPlacaSerivice