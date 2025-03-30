import type { Client as OpenAPIClient } from "./openapi.d.ts";
import OpenAPIClientAxios, { type Document } from "openapi-client-axios";
import Definition from "./openapi.json";

type CreateOpenWebUIClientInstanceOptions = {
  token: string;
  baseURL: string;
};

export const Client = ({
  token,
  baseURL,
}: CreateOpenWebUIClientInstanceOptions) => {
  const api = new OpenAPIClientAxios({
    definition: Definition as Document,
    axiosConfigDefaults: {
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  return api.initSync<OpenAPIClient>();
};
