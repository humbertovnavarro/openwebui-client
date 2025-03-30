import type { Client } from "./openapi.d.ts";
type CreateOpenWebUIClientInstanceOptions = {
  token: string;
  baseURL: string;
};
export declare const instance: ({
  token,
  baseURL,
}: CreateOpenWebUIClientInstanceOptions) => Client;
export {};
//# sourceMappingURL=index.d.ts.map
