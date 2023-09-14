import apiMaisFrete from "../../Utils/MaisFrete/Api.MaisFrete";
import { transformData } from "../../Utils/MaisFrete/transformData";
import AppError from "../../error";
import { GetInfoServiceProps } from "../../interfaces/maisFrete.interfaces";

const getInfoService = async ({
  conjunto_de_dados,
  cnpj,
  dt_ini,
  dt_fim,
  username,
  password,
}: GetInfoServiceProps) => {
  if (!username || username === "" || !password || password === "") {
    throw new AppError("Os campos 'username' e 'password' são obrigatórios!");
  }

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

  const { data } = await apiMaisFrete.post("", formData, {
    auth: {
      username,
      password,
    },
  });
  // console.log("--------->", data);

  const newResult = transformData(conjunto_de_dados, data);
  // console.log("-------->", newResult);

  return newResult;
};

export default getInfoService;
