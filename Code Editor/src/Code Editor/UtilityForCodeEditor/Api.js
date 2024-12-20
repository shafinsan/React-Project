import axios from "axios";
import { LANGUAGE_VERSIONS } from "./Constent";

const Api = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (sourceCode, currentLanguage) => {
  try {
    const response = await Api.post("/execute", {
      language: currentLanguage,
      version: LANGUAGE_VERSIONS[currentLanguage],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || error.message);
  }
};
