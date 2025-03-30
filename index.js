"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
const openapi_client_axios_1 = __importDefault(require("openapi-client-axios"));
const openapi_json_1 = __importDefault(require("./openapi.json"));
const instance = ({ token, baseURL }) => {
  const api = new openapi_client_axios_1.default({
    definition: openapi_json_1.default,
    axiosConfigDefaults: {
      baseURL,
      headers: {
        Authorization: token,
      },
    },
  });
  return api.initSync();
};
exports.instance = instance;
