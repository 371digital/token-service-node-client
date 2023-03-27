import axios from "axios";
import { endPoints } from "_constants";
import { prepareResponse } from "utils";

const validateToken = async (token, slug) => {
  return await axios.get(endPoints.validateToken(token, slug)).then(prepareResponse)
};

export default validateToken;