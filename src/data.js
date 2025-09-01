import { API_KEY} from "../dati";


export const valueConverter = (value) => {
  if (!value || isNaN(value)) return 0; // fallback se non è un numero
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)}M`; // milioni
  } else if (value >= 1_000) {
    return `${(value / 1_000).toFixed(2)}K`; // migliaia
  } else {
    return value.toString(); // piccolo numero, lo restituiamo come stringa
  }
};