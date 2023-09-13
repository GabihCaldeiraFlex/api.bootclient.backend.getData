export const transformData = (conjunto_de_dados: string, data: string) => {
  let transformedData;

  if (conjunto_de_dados === "viagens") {
    if (data.includes("<viagens/>")) {
      transformedData = "[]";
    } else {
      transformedData = data
        .replace("<viagens>", "[")
        .replace("</viagens>", "]")
        .replace(/<viagem>/g, "{")
        .replace(/<\/viagem>/g, "}")
        .replace(/(<\/)([a-zA-Z])\w+(>)/g, "")
        .replace(/</g, '","')
        .replace(/>/g, '":"')
        .replace('[{",', "[{")
        .replace("}]", '"}]')
        .replace(/{",/g, "{")
        .replace(/(\d)}/g, '"}')
        .replace(/}{/g, "},{");
    }
  }

  if (conjunto_de_dados === "motoristas") {
    if (data.includes("<motoristas/>")) {
      transformedData = "[]";
    } else {
      transformedData = data
        .replace("<motoristas>", "[")
        .replace("</motoristas>", "]")
        .replace(/<motorista>/g, "{")
        .replace(/<\/motorista>/g, "}")
        .replace(/(<\/)([a-zA-Z])\w+(>)/g, "")
        .replace(/</g, '","')
        .replace(/>/g, '":"')
        .replace('[{",', "[{")
        .replace("}]", '"}]')
        .replace(/{",/g, "{")
        .replace(/(\d)}/g, '"}')
        .replace(/}{/g, "},{");
    }
  }

  if (conjunto_de_dados === "proprietarios") {
    if (data.includes("<proprietarios/>")) {
      transformedData = "[]";
    } else {
      transformedData = data
        .replace("<proprietarios>", "[")
        .replace("</proprietarios>", "]")
        .replace(/<proprietario>/g, "{")
        .replace(/<\/proprietario>/g, "}")
        .replace(/(<\/)([a-zA-Z])\w+(>)/g, "")
        .replace(/</g, '","')
        .replace(/>/g, '":"')
        .replace('[{",', "[{")
        .replace("}]", '"}]')
        .replace(/{",/g, "{")
        .replace(/(\d)}/g, '"}')
        .replace(/}{/g, "},{");
    }
  }

  if (conjunto_de_dados === "veiculos") {
    if (data.includes("<veiculos/>")) {
      transformedData = "[]";
    } else {
      transformedData = data
        .replace("<veiculos>", "[")
        .replace("</veiculos>", "]")
        .replace(/<veiculo>/g, "{")
        .replace(/<\/veiculo>/g, "}")
        .replace(/<cavalo>/g, '"cavalo":{')
        .replace(/<\/cavalo>/g, "},")
        .replace(/\/>/g, ">")
        .replace(/(<\/)([a-zA-Z])\w+(>)/g, "")
        .replace(/</g, '","')
        .replace(/>/g, '":"')
        .replace('[{",', "[{")
        .replace("}]", '"}]')
        .replace(/{",/g, "{")
        .replace(/(\d)}/g, '"}')
        .replace(/}{/g, "},{")
        .replace(/},",/g, "},");
    }
  }

  return JSON.parse(transformedData!);
};
