import apiMaisFrete from "../../Utils/Api.MaisFrete";
import AppError from "../../error";
import { GetInfoServiceProps } from "../../interfaces/maisFrete.interfaces";

const getInfoService = async ({
  conjuto_de_dados,
  cnpj,
  dt_ini,
  dt_fim,
}: GetInfoServiceProps) => {
  const formData = new FormData();
  formData.append("conjuto_de_dados", conjuto_de_dados);
  formData.append("cnpj", cnpj);
  formData.append("dt_ini", dt_ini);
  formData.append("dt_fim", dt_fim);

  await apiMaisFrete
    .post("", formData)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw new AppError("Erro oa pegar informação", 400);
    });
};

export default getInfoService;
