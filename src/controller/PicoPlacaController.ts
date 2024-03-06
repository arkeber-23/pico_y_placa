import Ipico from "../interfaces/Ipico";
import PicoPlacaSerivice from "../services/PicoPlacaSerivice";

class PicoPlacaController {

    public static PicoPlaca(ipico: Ipico): String {
        if(ipico.diaSemana === undefined || ipico.diaSemana === null  
            || ipico.diaSemana === "" || ipico.numeroPlaca === undefined 
            || ipico.numeroPlaca === null  || ipico.numeroPlaca === ""){
            return "Los datos son obligatorios";
        }
        
        const picoPlaca = new PicoPlacaSerivice(ipico.numeroPlaca, ipico.diaSemana);
       return picoPlaca.cirular();
    }

}

export default PicoPlacaController