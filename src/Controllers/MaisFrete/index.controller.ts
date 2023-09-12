import { Request, Response } from "express";
import getInfoService from "../../Services/MaisFrete/index.services";

const getInfoController = async (request: Request, response: Response) => {
  const data = request.body;
  const result = await getInfoService(data);

  return response.status(200).json(result);
};

export default getInfoController;
