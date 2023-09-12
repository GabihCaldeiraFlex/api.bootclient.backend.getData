import apiMaisFrete from "../../Utils/Api.MaisFrete";
import AppError from "../../error";
import { GetInfoServiceProps } from "../../interfaces/maisFrete.interfaces";

const getInfoService = async ({
  conjunto_de_dados,
  cnpj,
  dt_ini,
  dt_fim,
}: GetInfoServiceProps) => {
  let emptyFields = [];
  if (!conjunto_de_dados || conjunto_de_dados === "") {
    emptyFields.push("conjunto_de_dados");
  }
  if (!cnpj || cnpj === "") {
    emptyFields.push("cnpj");
  }
  if (!dt_ini || dt_ini === "") {
    emptyFields.push("dt_ini");
  }
  if (!dt_fim || dt_fim === "") {
    emptyFields.push("dt_fim");
  }

  if (emptyFields.length > 0) {
    throw new AppError(
      `O${emptyFields.length > 1 ? "s" : ""} campo${
        emptyFields.length > 1 ? "s" : ""
      } ${emptyFields.join(", ")} ${
        emptyFields.length === 1 ? "é" : "são"
      } obrigatório${emptyFields.length > 1 ? "s" : ""} `,
      400
    );
  }

  const formData = new FormData();
  formData.append("conjunto_de_dados", conjunto_de_dados);
  formData.append("cnpj", cnpj);
  formData.append("dt_ini", dt_ini);
  formData.append("dt_fim", dt_fim);

  const result = await apiMaisFrete.post("", formData);

  return result.data;
};

export default getInfoService;
