import type { Client as OpenAPIClient } from "./openapi.d.ts";
type CreateOpenWebUIClientInstanceOptions = {
  token: string;
  baseURL: string;
};
export declare const Client: ({
  token,
  baseURL,
}: CreateOpenWebUIClientInstanceOptions) => OpenAPIClient;
export {};
//# sourceMappingURL=index.d.ts.map
