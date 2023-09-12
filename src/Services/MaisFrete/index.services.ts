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
  let newResult;
  if (conjunto_de_dados === "viagens") {
    newResult = result.data
      .replace("<viagens>", "[")
      .replace("</viagens>", "]")
      .replaceAll("<viagem>", "{")
      .replaceAll("</viagem>", "}");
  } else if (conjunto_de_dados === "motoristas") {
    newResult = result.data
      .replace("<motoristas>", "[")
      .replace("</motoristas>", "]")
      .replaceAll("<motorista>", "{")
      .replaceAll("</motorista>", "}");
  } else if (conjunto_de_dados === "proprietarios") {
    newResult = result.data
      .replace("<proprietarios>", "[")
      .replace("</proprietarios>", "]")
      .replaceAll("<proprietario>", "{")
      .replaceAll("</proprietario>", "}");
  } else if (conjunto_de_dados === "veiculos") {
    newResult = result.data
      .replace("<veiculos>", "[")
      .replace("</veiculos>", "]")
      .replaceAll("<veiculo>", "{")
      .replaceAll("</veiculo>", "}");
  }

  newResult = newResult
    .replace(/(<\/)([a-zA-Z])\w+(>)/g, "")
    .replace(/</g, '","')
    .replace(/>/g, '":"')
    .replace('[{",', "[{")
    .replace("}]", '"}]')
    .replace(/{",/g, "{")
    .replace(/(\d)}/g, '"}')
    .replace(/}{/g, "},{");

  return JSON.parse(newResult);
};

export default getInfoService;
