import axios from "axios";

const apiMaisFrete = axios.create({
  baseURL: "https://consulta.maisfrete.com.br/api/contabilidade/index.php",
});

export default apiMaisFrete;
