import axios from "axios";

const apiMaisFrete = axios.create({
  baseURL: "https://consulta.maisfrete.com.br/api/contabilidade/index.php",
  headers: { Authorization: "Basic RkxFWDpmbGV4ODA5MDEw" },
});

export default apiMaisFrete;
