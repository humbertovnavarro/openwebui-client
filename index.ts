import axios, { type AxiosInstance } from "axios";
import { z } from "zod";

const DataSchema = z.object({
  content: z.string(),
});

const MetaSchema = z.object({
  name: z.string(),
  content_type: z.string(),
  size: z.number(),
  data: z.record(z.unknown()),
  collection_name: z.string(),
});

const UploadFileResponseSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  hash: z.string(),
  filename: z.string(),
  data: DataSchema,
  meta: MetaSchema,
  created_at: z.number(),
  updated_at: z.number(),
});

type UploadFileResponse = typeof UploadFileResponseSchema._type;

type ClientOptions = {
  host: string;
  token: string;
  timeout?: number;
};

const OPENWEBUI_CLIENT_DEFAULT_TIMEOUT = 5000; //ms

export class Client {
  host: string;
  token: string;
  instance: AxiosInstance;
  constructor({ host, token, timeout }: ClientOptions) {
    this.host = host;
    this.token = token;
    this.instance = axios.create({
      baseURL: host,
      timeout: timeout || OPENWEBUI_CLIENT_DEFAULT_TIMEOUT,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  // Upload a file to the vector database and return its handle.
  async uploadFile(data: Blob, filename: string): Promise<UploadFileResponse> {
    const formData = new FormData();
    formData.append("file", data, filename);
    const resp = await this.instance.post("/api/v1/files", formData);
    const uploadFileResponse = UploadFileResponseSchema.parseAsync(resp.data);
    return uploadFileResponse;
  }
}
