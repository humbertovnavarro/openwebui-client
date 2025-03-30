import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from "openapi-client-axios";

declare namespace Components {
  namespace Schemas {
    /**
     * AddMemoryForm
     */
    export interface AddMemoryForm {
      /**
       * Content
       */
      content: string;
    }
    /**
     * AddPipelineForm
     */
    export interface AddPipelineForm {
      /**
       * Url
       */
      url: string;
      /**
       * Urlidx
       */
      urlIdx: number;
    }
    /**
     * AddUserForm
     */
    export interface AddUserForm {
      /**
       * Name
       */
      name: string;
      /**
       * Email
       */
      email: string;
      /**
       * Password
       */
      password: string;
      /**
       * Profile Image Url
       */
      profile_image_url?: /* Profile Image Url */ string | null;
      /**
       * Role
       */
      role?: /* Role */ string | null;
    }
    /**
     * AdminConfig
     */
    export interface AdminConfig {
      /**
       * Show Admin Details
       */
      SHOW_ADMIN_DETAILS: boolean;
      /**
       * Webui Url
       */
      WEBUI_URL: string;
      /**
       * Enable Signup
       */
      ENABLE_SIGNUP: boolean;
      /**
       * Enable Api Key
       */
      ENABLE_API_KEY: boolean;
      /**
       * Enable Api Key Endpoint Restrictions
       */
      ENABLE_API_KEY_ENDPOINT_RESTRICTIONS: boolean;
      /**
       * Api Key Allowed Endpoints
       */
      API_KEY_ALLOWED_ENDPOINTS: string;
      /**
       * Enable Channels
       */
      ENABLE_CHANNELS: boolean;
      /**
       * Default User Role
       */
      DEFAULT_USER_ROLE: string;
      /**
       * Jwt Expires In
       */
      JWT_EXPIRES_IN: string;
      /**
       * Enable Community Sharing
       */
      ENABLE_COMMUNITY_SHARING: boolean;
      /**
       * Enable Message Rating
       */
      ENABLE_MESSAGE_RATING: boolean;
    }
    /**
     * ApiKey
     */
    export interface ApiKey {
      /**
       * Api Key
       */
      api_key?: /* Api Key */ string | null;
    }
    /**
     * AudioConfigUpdateForm
     */
    export interface AudioConfigUpdateForm {
      tts: /* TTSConfigForm */ TTSConfigForm;
      stt: /* STTConfigForm */ STTConfigForm;
    }
    /**
     * Automatic1111ConfigForm
     */
    export interface Automatic1111ConfigForm {
      /**
       * Automatic1111 Base Url
       */
      AUTOMATIC1111_BASE_URL: string;
      /**
       * Automatic1111 Api Auth
       */
      AUTOMATIC1111_API_AUTH: string;
      /**
       * Automatic1111 Cfg Scale
       */
      AUTOMATIC1111_CFG_SCALE: /* Automatic1111 Cfg Scale */
        | string
        | number
        | number
        | null;
      /**
       * Automatic1111 Sampler
       */
      AUTOMATIC1111_SAMPLER: /* Automatic1111 Sampler */ string | null;
      /**
       * Automatic1111 Scheduler
       */
      AUTOMATIC1111_SCHEDULER: /* Automatic1111 Scheduler */ string | null;
    }
    /**
     * BannerModel
     */
    export interface BannerModel {
      /**
       * Id
       */
      id: string;
      /**
       * Type
       */
      type: string;
      /**
       * Title
       */
      title?: /* Title */ string | null;
      /**
       * Content
       */
      content: string;
      /**
       * Dismissible
       */
      dismissible: boolean;
      /**
       * Timestamp
       */
      timestamp: number;
    }
    /**
     * BatchProcessFilesForm
     */
    export interface BatchProcessFilesForm {
      /**
       * Files
       */
      files: /* FileModel */ FileModel[];
      /**
       * Collection Name
       */
      collection_name: string;
    }
    /**
     * BatchProcessFilesResponse
     */
    export interface BatchProcessFilesResponse {
      /**
       * Results
       */
      results: /* BatchProcessFilesResult */ BatchProcessFilesResult[];
      /**
       * Errors
       */
      errors: /* BatchProcessFilesResult */ BatchProcessFilesResult[];
    }
    /**
     * BatchProcessFilesResult
     */
    export interface BatchProcessFilesResult {
      /**
       * File Id
       */
      file_id: string;
      /**
       * Status
       */
      status: string;
      /**
       * Error
       */
      error?: /* Error */ string | null;
    }
    /**
     * Body_transcription_api_v1_audio_transcriptions_post
     */
    export interface BodyTranscriptionApiV1AudioTranscriptionsPost {
      /**
       * File
       */
      file: string; // binary
    }
    /**
     * Body_upload_file_api_v1_files__post
     */
    export interface BodyUploadFileApiV1FilesPost {
      /**
       * File
       */
      file: string; // binary
      /**
       * File Metadata
       */
      file_metadata?: {
        [key: string]: any;
      };
    }
    /**
     * Body_upload_model_ollama_models_upload_post
     */
    export interface BodyUploadModelOllamaModelsUploadPost {
      /**
       * File
       */
      file: string; // binary
    }
    /**
     * Body_upload_model_ollama_models_upload__url_idx__post
     */
    export interface BodyUploadModelOllamaModelsUploadUrlIdxPost {
      /**
       * File
       */
      file: string; // binary
    }
    /**
     * Body_upload_pipeline_api_v1_pipelines_upload_post
     */
    export interface BodyUploadPipelineApiV1PipelinesUploadPost {
      /**
       * Urlidx
       */
      urlIdx: number;
      /**
       * File
       */
      file: string; // binary
    }
    /**
     * ChannelForm
     */
    export interface ChannelForm {
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description?: /* Description */ string | null;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
    }
    /**
     * ChannelModel
     */
    export interface ChannelModel {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Type
       */
      type?: /* Type */ string | null;
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description?: /* Description */ string | null;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
    }
    /**
     * ChatFolderIdForm
     */
    export interface ChatFolderIdForm {
      /**
       * Folder Id
       */
      folder_id?: /* Folder Id */ string | null;
    }
    /**
     * ChatForm
     */
    export interface ChatForm {
      /**
       * Chat
       */
      chat: {
        [key: string]: any;
      };
    }
    /**
     * ChatImportForm
     */
    export interface ChatImportForm {
      /**
       * Chat
       */
      chat: {
        [key: string]: any;
      };
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Pinned
       */
      pinned?: /* Pinned */ boolean | null;
      /**
       * Folder Id
       */
      folder_id?: /* Folder Id */ string | null;
    }
    /**
     * ChatPermissions
     */
    export interface ChatPermissions {
      /**
       * Controls
       */
      controls?: boolean;
      /**
       * File Upload
       */
      file_upload?: boolean;
      /**
       * Delete
       */
      delete?: boolean;
      /**
       * Edit
       */
      edit?: boolean;
      /**
       * Temporary
       */
      temporary?: boolean;
    }
    /**
     * ChatResponse
     */
    export interface ChatResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Title
       */
      title: string;
      /**
       * Chat
       */
      chat: {
        [key: string]: any;
      };
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Share Id
       */
      share_id?: /* Share Id */ string | null;
      /**
       * Archived
       */
      archived: boolean;
      /**
       * Pinned
       */
      pinned?: /* Pinned */ boolean | null;
      /**
       * Meta
       */
      meta?: {
        [key: string]: any;
      };
      /**
       * Folder Id
       */
      folder_id?: /* Folder Id */ string | null;
    }
    /**
     * ChatTitleIdResponse
     */
    export interface ChatTitleIdResponse {
      /**
       * Id
       */
      id: string;
      /**
       * Title
       */
      title: string;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
    }
    /**
     * ChatTitleMessagesForm
     */
    export interface ChatTitleMessagesForm {
      /**
       * Title
       */
      title: string;
      /**
       * Messages
       */
      messages: {
        [key: string]: any;
      }[];
    }
    /**
     * ChunkParamUpdateForm
     */
    export interface ChunkParamUpdateForm {
      /**
       * Text Splitter
       */
      text_splitter?: /* Text Splitter */ string | null;
      /**
       * Chunk Size
       */
      chunk_size: number;
      /**
       * Chunk Overlap
       */
      chunk_overlap: number;
    }
    /**
     * CloneForm
     */
    export interface CloneForm {
      /**
       * Title
       */
      title?: /* Title */ string | null;
    }
    /**
     * CodeForm
     */
    export interface CodeForm {
      /**
       * Code
       */
      code: string;
    }
    /**
     * CodeInterpreterConfigForm
     */
    export interface CodeInterpreterConfigForm {
      /**
       * Enable Code Execution
       */
      ENABLE_CODE_EXECUTION: boolean;
      /**
       * Code Execution Engine
       */
      CODE_EXECUTION_ENGINE: string;
      /**
       * Code Execution Jupyter Url
       */
      CODE_EXECUTION_JUPYTER_URL: /* Code Execution Jupyter Url */
        | string
        | null;
      /**
       * Code Execution Jupyter Auth
       */
      CODE_EXECUTION_JUPYTER_AUTH: /* Code Execution Jupyter Auth */
        | string
        | null;
      /**
       * Code Execution Jupyter Auth Token
       */
      CODE_EXECUTION_JUPYTER_AUTH_TOKEN: /* Code Execution Jupyter Auth Token */
        | string
        | null;
      /**
       * Code Execution Jupyter Auth Password
       */
      CODE_EXECUTION_JUPYTER_AUTH_PASSWORD: /* Code Execution Jupyter Auth Password */
        | string
        | null;
      /**
       * Code Execution Jupyter Timeout
       */
      CODE_EXECUTION_JUPYTER_TIMEOUT: /* Code Execution Jupyter Timeout */
        | number
        | null;
      /**
       * Enable Code Interpreter
       */
      ENABLE_CODE_INTERPRETER: boolean;
      /**
       * Code Interpreter Engine
       */
      CODE_INTERPRETER_ENGINE: string;
      /**
       * Code Interpreter Prompt Template
       */
      CODE_INTERPRETER_PROMPT_TEMPLATE: /* Code Interpreter Prompt Template */
        | string
        | null;
      /**
       * Code Interpreter Jupyter Url
       */
      CODE_INTERPRETER_JUPYTER_URL: /* Code Interpreter Jupyter Url */
        | string
        | null;
      /**
       * Code Interpreter Jupyter Auth
       */
      CODE_INTERPRETER_JUPYTER_AUTH: /* Code Interpreter Jupyter Auth */
        | string
        | null;
      /**
       * Code Interpreter Jupyter Auth Token
       */
      CODE_INTERPRETER_JUPYTER_AUTH_TOKEN: /* Code Interpreter Jupyter Auth Token */
        | string
        | null;
      /**
       * Code Interpreter Jupyter Auth Password
       */
      CODE_INTERPRETER_JUPYTER_AUTH_PASSWORD: /* Code Interpreter Jupyter Auth Password */
        | string
        | null;
      /**
       * Code Interpreter Jupyter Timeout
       */
      CODE_INTERPRETER_JUPYTER_TIMEOUT: /* Code Interpreter Jupyter Timeout */
        | number
        | null;
    }
    /**
     * ComfyUIConfigForm
     */
    export interface ComfyUIConfigForm {
      /**
       * Comfyui Base Url
       */
      COMFYUI_BASE_URL: string;
      /**
       * Comfyui Api Key
       */
      COMFYUI_API_KEY: string;
      /**
       * Comfyui Workflow
       */
      COMFYUI_WORKFLOW: string;
      /**
       * Comfyui Workflow Nodes
       */
      COMFYUI_WORKFLOW_NODES: {
        [key: string]: any;
      }[];
    }
    /**
     * ConfigForm
     */
    export interface ConfigForm {
      /**
       * Enabled
       */
      enabled: boolean;
      /**
       * Engine
       */
      engine: string;
      /**
       * Prompt Generation
       */
      prompt_generation: boolean;
      openai: /* OpenAIConfigForm */ OpenWebuiRoutersImagesOpenAIConfigForm;
      automatic1111: /* Automatic1111ConfigForm */ Automatic1111ConfigForm;
      comfyui: /* ComfyUIConfigForm */ ComfyUIConfigForm;
      gemini: /* GeminiConfigForm */ GeminiConfigForm;
    }
    /**
     * ConfigUpdateForm
     */
    export interface ConfigUpdateForm {
      /**
       * Rag Full Context
       */
      RAG_FULL_CONTEXT?: /* Rag Full Context */ boolean | null;
      /**
       * Bypass Embedding And Retrieval
       */
      BYPASS_EMBEDDING_AND_RETRIEVAL?: /* Bypass Embedding And Retrieval */
        | boolean
        | null;
      /**
       * Pdf Extract Images
       */
      pdf_extract_images?: /* Pdf Extract Images */ boolean | null;
      /**
       * Enable Google Drive Integration
       */
      enable_google_drive_integration?: /* Enable Google Drive Integration */
        | boolean
        | null;
      /**
       * Enable Onedrive Integration
       */
      enable_onedrive_integration?: /* Enable Onedrive Integration */
        | boolean
        | null;
      file?: /* FileConfig */ FileConfig | null;
      content_extraction?: /* ContentExtractionConfig */ ContentExtractionConfig | null;
      chunk?: /* ChunkParamUpdateForm */ ChunkParamUpdateForm | null;
      youtube?: /* YoutubeLoaderConfig */ YoutubeLoaderConfig | null;
      web?: /* WebConfig */ WebConfig | null;
    }
    /**
     * ContentExtractionConfig
     */
    export interface ContentExtractionConfig {
      /**
       * Engine
       */
      engine?: string;
      /**
       * Tika Server Url
       */
      tika_server_url?: /* Tika Server Url */ string | null;
      document_intelligence_config?: /* DocumentIntelligenceConfigForm */ DocumentIntelligenceConfigForm | null;
    }
    /**
     * ContentForm
     */
    export interface ContentForm {
      /**
       * Content
       */
      content: string;
    }
    /**
     * CopyModelForm
     */
    export interface CopyModelForm {
      /**
       * Source
       */
      source: string;
      /**
       * Destination
       */
      destination: string;
    }
    /**
     * CreateModelForm
     */
    export interface CreateModelForm {
      [name: string]: any;
      /**
       * Model
       */
      model?: /* Model */ string | null;
      /**
       * Stream
       */
      stream?: /* Stream */ boolean | null;
      /**
       * Path
       */
      path?: /* Path */ string | null;
    }
    /**
     * DeleteForm
     */
    export interface DeleteForm {
      /**
       * Collection Name
       */
      collection_name: string;
      /**
       * File Id
       */
      file_id: string;
    }
    /**
     * DeletePipelineForm
     */
    export interface DeletePipelineForm {
      /**
       * Id
       */
      id: string;
      /**
       * Urlidx
       */
      urlIdx: number;
    }
    /**
     * DirectConnectionsConfigForm
     */
    export interface DirectConnectionsConfigForm {
      /**
       * Enable Direct Connections
       */
      ENABLE_DIRECT_CONNECTIONS: boolean;
    }
    /**
     * DocumentIntelligenceConfigForm
     */
    export interface DocumentIntelligenceConfigForm {
      /**
       * Endpoint
       */
      endpoint: string;
      /**
       * Key
       */
      key: string;
    }
    /**
     * EmbeddingModelUpdateForm
     */
    export interface EmbeddingModelUpdateForm {
      openai_config?: /* OpenAIConfigForm */ OpenWebuiRoutersRetrievalOpenAIConfigForm | null;
      ollama_config?: /* OllamaConfigForm */ OpenWebuiRoutersRetrievalOllamaConfigForm | null;
      /**
       * Embedding Engine
       */
      embedding_engine: string;
      /**
       * Embedding Model
       */
      embedding_model: string;
      /**
       * Embedding Batch Size
       */
      embedding_batch_size?: /* Embedding Batch Size */ number | null;
    }
    /**
     * FeaturesPermissions
     */
    export interface FeaturesPermissions {
      /**
       * Web Search
       */
      web_search?: boolean;
      /**
       * Image Generation
       */
      image_generation?: boolean;
      /**
       * Code Interpreter
       */
      code_interpreter?: boolean;
    }
    /**
     * FeedbackForm
     */
    export interface FeedbackForm {
      [name: string]: any;
      /**
       * Type
       */
      type: string;
      data?: /* RatingData */ RatingData | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      snapshot?: /* SnapshotData */ SnapshotData | null;
    }
    /**
     * FeedbackModel
     */
    export interface FeedbackModel {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Version
       */
      version: number;
      /**
       * Type
       */
      type: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Snapshot
       */
      snapshot?: /* Snapshot */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
    }
    /**
     * FeedbackUserResponse
     */
    export interface FeedbackUserResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Version
       */
      version: number;
      /**
       * Type
       */
      type: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
      user?: /* UserModel */ UserModel | null;
    }
    /**
     * FileConfig
     */
    export interface FileConfig {
      /**
       * Max Size
       */
      max_size?: /* Max Size */ number | null;
      /**
       * Max Count
       */
      max_count?: /* Max Count */ number | null;
    }
    /**
     * FileMeta
     */
    export interface FileMeta {
      [name: string]: any;
      /**
       * Name
       */
      name?: /* Name */ string | null;
      /**
       * Content Type
       */
      content_type?: /* Content Type */ string | null;
      /**
       * Size
       */
      size?: /* Size */ number | null;
    }
    /**
     * FileMetadataResponse
     */
    export interface FileMetadataResponse {
      /**
       * Id
       */
      id: string;
      /**
       * Meta
       */
      meta: {
        [key: string]: any;
      };
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
    }
    /**
     * FileModel
     */
    export interface FileModel {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Hash
       */
      hash?: /* Hash */ string | null;
      /**
       * Filename
       */
      filename: string;
      /**
       * Path
       */
      path?: /* Path */ string | null;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: /* Created At */ number | null;
      /**
       * Updated At
       */
      updated_at: /* Updated At */ number | null;
    }
    /**
     * FileModelResponse
     */
    export interface FileModelResponse {
      [name: string]: any;
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Hash
       */
      hash?: /* Hash */ string | null;
      /**
       * Filename
       */
      filename: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      meta: /* FileMeta */ FileMeta;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
    }
    /**
     * FolderForm
     */
    export interface FolderForm {
      [name: string]: any;
      /**
       * Name
       */
      name: string;
    }
    /**
     * FolderIsExpandedForm
     */
    export interface FolderIsExpandedForm {
      /**
       * Is Expanded
       */
      is_expanded: boolean;
    }
    /**
     * FolderModel
     */
    export interface FolderModel {
      /**
       * Id
       */
      id: string;
      /**
       * Parent Id
       */
      parent_id?: /* Parent Id */ string | null;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Items
       */
      items?: /* Items */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Is Expanded
       */
      is_expanded?: boolean;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
    }
    /**
     * FolderParentIdForm
     */
    export interface FolderParentIdForm {
      /**
       * Parent Id
       */
      parent_id?: /* Parent Id */ string | null;
    }
    /**
     * FunctionForm
     */
    export interface FunctionForm {
      /**
       * Id
       */
      id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Content
       */
      content: string;
      meta: /* FunctionMeta */ FunctionMeta;
    }
    /**
     * FunctionMeta
     */
    export interface FunctionMeta {
      /**
       * Description
       */
      description?: /* Description */ string | null;
      /**
       * Manifest
       */
      manifest?: /* Manifest */ {
        [key: string]: any;
      } | null;
    }
    /**
     * FunctionModel
     */
    export interface FunctionModel {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Type
       */
      type: string;
      /**
       * Content
       */
      content: string;
      meta: /* FunctionMeta */ FunctionMeta;
      /**
       * Is Active
       */
      is_active?: boolean;
      /**
       * Is Global
       */
      is_global?: boolean;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
    }
    /**
     * FunctionResponse
     */
    export interface FunctionResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Type
       */
      type: string;
      /**
       * Name
       */
      name: string;
      meta: /* FunctionMeta */ FunctionMeta;
      /**
       * Is Active
       */
      is_active: boolean;
      /**
       * Is Global
       */
      is_global: boolean;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
    }
    /**
     * GeminiConfigForm
     */
    export interface GeminiConfigForm {
      /**
       * Gemini Api Base Url
       */
      GEMINI_API_BASE_URL: string;
      /**
       * Gemini Api Key
       */
      GEMINI_API_KEY: string;
    }
    /**
     * GenerateCompletionForm
     */
    export interface GenerateCompletionForm {
      /**
       * Model
       */
      model: string;
      /**
       * Prompt
       */
      prompt: string;
      /**
       * Suffix
       */
      suffix?: /* Suffix */ string | null;
      /**
       * Images
       */
      images?: /* Images */ string[] | null;
      /**
       * Format
       */
      format?: /* Format */ string | null;
      /**
       * Options
       */
      options?: /* Options */ {
        [key: string]: any;
      } | null;
      /**
       * System
       */
      system?: /* System */ string | null;
      /**
       * Template
       */
      template?: /* Template */ string | null;
      /**
       * Context
       */
      context?: /* Context */ number[] | null;
      /**
       * Stream
       */
      stream?: /* Stream */ boolean | null;
      /**
       * Raw
       */
      raw?: /* Raw */ boolean | null;
      /**
       * Keep Alive
       */
      keep_alive?: /* Keep Alive */ number | string | null;
    }
    /**
     * GenerateEmbedForm
     */
    export interface GenerateEmbedForm {
      /**
       * Model
       */
      model: string;
      /**
       * Input
       */
      input: /* Input */ string[] | string;
      /**
       * Truncate
       */
      truncate?: /* Truncate */ boolean | null;
      /**
       * Options
       */
      options?: /* Options */ {
        [key: string]: any;
      } | null;
      /**
       * Keep Alive
       */
      keep_alive?: /* Keep Alive */ number | string | null;
    }
    /**
     * GenerateEmbeddingsForm
     */
    export interface GenerateEmbeddingsForm {
      /**
       * Model
       */
      model: string;
      /**
       * Prompt
       */
      prompt: string;
      /**
       * Options
       */
      options?: /* Options */ {
        [key: string]: any;
      } | null;
      /**
       * Keep Alive
       */
      keep_alive?: /* Keep Alive */ number | string | null;
    }
    /**
     * GenerateImageForm
     */
    export interface GenerateImageForm {
      /**
       * Model
       */
      model?: /* Model */ string | null;
      /**
       * Prompt
       */
      prompt: string;
      /**
       * Size
       */
      size?: /* Size */ string | null;
      /**
       * N
       */
      n?: number;
      /**
       * Negative Prompt
       */
      negative_prompt?: /* Negative Prompt */ string | null;
    }
    /**
     * GroupForm
     */
    export interface GroupForm {
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description: string;
      /**
       * Permissions
       */
      permissions?: /* Permissions */ {
        [key: string]: any;
      } | null;
    }
    /**
     * GroupResponse
     */
    export interface GroupResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description: string;
      /**
       * Permissions
       */
      permissions?: /* Permissions */ {
        [key: string]: any;
      } | null;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * User Ids
       */
      user_ids?: string[];
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
    }
    /**
     * GroupUpdateForm
     */
    export interface GroupUpdateForm {
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description: string;
      /**
       * Permissions
       */
      permissions?: /* Permissions */ {
        [key: string]: any;
      } | null;
      /**
       * User Ids
       */
      user_ids?: /* User Ids */ string[] | null;
    }
    /**
     * HTTPValidationError
     */
    export interface HTTPValidationError {
      /**
       * Detail
       */
      detail?: /* ValidationError */ ValidationError[];
    }
    /**
     * ImageConfigForm
     */
    export interface ImageConfigForm {
      /**
       * Model
       */
      MODEL: string;
      /**
       * Image Size
       */
      IMAGE_SIZE: string;
      /**
       * Image Steps
       */
      IMAGE_STEPS: number;
    }
    /**
     * ImportConfigForm
     */
    export interface ImportConfigForm {
      /**
       * Config
       */
      config: {
        [key: string]: any;
      };
    }
    /**
     * KnowledgeFileIdForm
     */
    export interface KnowledgeFileIdForm {
      /**
       * File Id
       */
      file_id: string;
    }
    /**
     * KnowledgeFilesResponse
     */
    export interface KnowledgeFilesResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Files
       */
      files: /* FileModel */ FileModel[];
    }
    /**
     * KnowledgeForm
     */
    export interface KnowledgeForm {
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
    }
    /**
     * KnowledgeResponse
     */
    export interface KnowledgeResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Files
       */
      files?: /* Files */
        | /* FileMetadataResponse */ (
            | FileMetadataResponse
            | {
                [key: string]: any;
              }
          )[]
        | null;
    }
    /**
     * KnowledgeUserResponse
     */
    export interface KnowledgeUserResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Description
       */
      description: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
      user?: /* UserResponse */ OpenWebuiModelsUsersUserResponse | null;
      /**
       * Files
       */
      files?: /* Files */
        | /* FileMetadataResponse */ (
            | FileMetadataResponse
            | {
                [key: string]: any;
              }
          )[]
        | null;
    }
    /**
     * LdapConfigForm
     */
    export interface LdapConfigForm {
      /**
       * Enable Ldap
       */
      enable_ldap?: /* Enable Ldap */ boolean | null;
    }
    /**
     * LdapForm
     */
    export interface LdapForm {
      /**
       * User
       */
      user: string;
      /**
       * Password
       */
      password: string;
    }
    /**
     * LdapServerConfig
     */
    export interface LdapServerConfig {
      /**
       * Label
       */
      label: string;
      /**
       * Host
       */
      host: string;
      /**
       * Port
       */
      port?: /* Port */ number | null;
      /**
       * Attribute For Mail
       */
      attribute_for_mail?: string;
      /**
       * Attribute For Username
       */
      attribute_for_username?: string;
      /**
       * App Dn
       */
      app_dn: string;
      /**
       * App Dn Password
       */
      app_dn_password: string;
      /**
       * Search Base
       */
      search_base: string;
      /**
       * Search Filters
       */
      search_filters?: string;
      /**
       * Use Tls
       */
      use_tls?: boolean;
      /**
       * Certificate Path
       */
      certificate_path?: /* Certificate Path */ string | null;
      /**
       * Ciphers
       */
      ciphers?: /* Ciphers */ string | null;
    }
    /**
     * MarkdownForm
     */
    export interface MarkdownForm {
      /**
       * Md
       */
      md: string;
    }
    /**
     * MemoryModel
     */
    export interface MemoryModel {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Content
       */
      content: string;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
    }
    /**
     * MemoryUpdateModel
     */
    export interface MemoryUpdateModel {
      /**
       * Content
       */
      content?: /* Content */ string | null;
    }
    /**
     * MessageForm
     */
    export interface MessageForm {
      /**
       * Content
       */
      content: string;
      /**
       * Parent Id
       */
      parent_id?: /* Parent Id */ string | null;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
    }
    /**
     * MessageModel
     */
    export interface MessageModel {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Channel Id
       */
      channel_id?: /* Channel Id */ string | null;
      /**
       * Parent Id
       */
      parent_id?: /* Parent Id */ string | null;
      /**
       * Content
       */
      content: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
    }
    /**
     * MessageUserResponse
     */
    export interface MessageUserResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Channel Id
       */
      channel_id?: /* Channel Id */ string | null;
      /**
       * Parent Id
       */
      parent_id?: /* Parent Id */ string | null;
      /**
       * Content
       */
      content: string;
      /**
       * Data
       */
      data?: /* Data */ {
        [key: string]: any;
      } | null;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Latest Reply At
       */
      latest_reply_at: /* Latest Reply At */ number | null;
      /**
       * Reply Count
       */
      reply_count: number;
      /**
       * Reactions
       */
      reactions: /* Reactions */ Reactions[];
      user: /* UserNameResponse */ UserNameResponse;
    }
    /**
     * ModelForm
     */
    export interface ModelForm {
      /**
       * Id
       */
      id: string;
      /**
       * Base Model Id
       */
      base_model_id?: /* Base Model Id */ string | null;
      /**
       * Name
       */
      name: string;
      meta: /* ModelMeta */ ModelMeta;
      params: /* ModelParams */ ModelParams;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Is Active
       */
      is_active?: boolean;
    }
    /**
     * ModelMeta
     */
    export interface ModelMeta {
      [name: string]: any;
      /**
       * Profile Image Url
       */
      profile_image_url?: /* Profile Image Url */ string | null;
      /**
       * Description
       */
      description?: /* Description */ string | null;
      /**
       * Capabilities
       */
      capabilities?: /* Capabilities */ {
        [key: string]: any;
      } | null;
    }
    /**
     * ModelModel
     */
    export interface ModelModel {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Base Model Id
       */
      base_model_id?: /* Base Model Id */ string | null;
      /**
       * Name
       */
      name: string;
      params: /* ModelParams */ ModelParams;
      meta: /* ModelMeta */ ModelMeta;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Is Active
       */
      is_active: boolean;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
    }
    /**
     * ModelNameForm
     */
    export interface ModelNameForm {
      /**
       * Name
       */
      name: string;
    }
    /**
     * ModelParams
     */
    export interface ModelParams {
      [name: string]: any;
    }
    /**
     * ModelResponse
     */
    export interface ModelResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Base Model Id
       */
      base_model_id?: /* Base Model Id */ string | null;
      /**
       * Name
       */
      name: string;
      params: /* ModelParams */ ModelParams;
      meta: /* ModelMeta */ ModelMeta;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Is Active
       */
      is_active: boolean;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
    }
    /**
     * ModelUserResponse
     */
    export interface ModelUserResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Base Model Id
       */
      base_model_id?: /* Base Model Id */ string | null;
      /**
       * Name
       */
      name: string;
      params: /* ModelParams */ ModelParams;
      meta: /* ModelMeta */ ModelMeta;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Is Active
       */
      is_active: boolean;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
      user?: /* UserResponse */ OpenWebuiModelsUsersUserResponse | null;
    }
    /**
     * ModelsConfigForm
     */
    export interface ModelsConfigForm {
      /**
       * Default Models
       */
      DEFAULT_MODELS: /* Default Models */ string | null;
      /**
       * Model Order List
       */
      MODEL_ORDER_LIST: /* Model Order List */ string[] | null;
    }
    /**
     * UserResponse
     */
    export interface OpenWebuiModelsAuthsUserResponse {
      /**
       * Id
       */
      id: string;
      /**
       * Email
       */
      email: string;
      /**
       * Name
       */
      name: string;
      /**
       * Role
       */
      role: string;
      /**
       * Profile Image Url
       */
      profile_image_url: string;
    }
    /**
     * UserResponse
     */
    export interface OpenWebuiModelsUsersUserResponse {
      /**
       * Id
       */
      id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Email
       */
      email: string;
      /**
       * Role
       */
      role: string;
      /**
       * Profile Image Url
       */
      profile_image_url: string;
    }
    /**
     * OpenAIConfigForm
     */
    export interface OpenWebuiRoutersImagesOpenAIConfigForm {
      /**
       * Openai Api Base Url
       */
      OPENAI_API_BASE_URL: string;
      /**
       * Openai Api Key
       */
      OPENAI_API_KEY: string;
    }
    /**
     * ConnectionVerificationForm
     */
    export interface OpenWebuiRoutersOllamaConnectionVerificationForm {
      /**
       * Url
       */
      url: string;
      /**
       * Key
       */
      key?: /* Key */ string | null;
    }
    /**
     * OllamaConfigForm
     */
    export interface OpenWebuiRoutersOllamaOllamaConfigForm {
      /**
       * Enable Ollama Api
       */
      ENABLE_OLLAMA_API?: /* Enable Ollama Api */ boolean | null;
      /**
       * Ollama Base Urls
       */
      OLLAMA_BASE_URLS: string[];
      /**
       * Ollama Api Configs
       */
      OLLAMA_API_CONFIGS: {
        [key: string]: any;
      };
    }
    /**
     * ConnectionVerificationForm
     */
    export interface OpenWebuiRoutersOpenaiConnectionVerificationForm {
      /**
       * Url
       */
      url: string;
      /**
       * Key
       */
      key: string;
    }
    /**
     * OpenAIConfigForm
     */
    export interface OpenWebuiRoutersOpenaiOpenAIConfigForm {
      /**
       * Enable Openai Api
       */
      ENABLE_OPENAI_API?: /* Enable Openai Api */ boolean | null;
      /**
       * Openai Api Base Urls
       */
      OPENAI_API_BASE_URLS: string[];
      /**
       * Openai Api Keys
       */
      OPENAI_API_KEYS: string[];
      /**
       * Openai Api Configs
       */
      OPENAI_API_CONFIGS: {
        [key: string]: any;
      };
    }
    /**
     * OllamaConfigForm
     */
    export interface OpenWebuiRoutersRetrievalOllamaConfigForm {
      /**
       * Url
       */
      url: string;
      /**
       * Key
       */
      key: string;
    }
    /**
     * OpenAIConfigForm
     */
    export interface OpenWebuiRoutersRetrievalOpenAIConfigForm {
      /**
       * Url
       */
      url: string;
      /**
       * Key
       */
      key: string;
    }
    /**
     * UserResponse
     */
    export interface OpenWebuiRoutersUsersUserResponse {
      /**
       * Name
       */
      name: string;
      /**
       * Profile Image Url
       */
      profile_image_url: string;
      /**
       * Active
       */
      active?: /* Active */ boolean | null;
    }
    /**
     * ProcessFileForm
     */
    export interface ProcessFileForm {
      /**
       * File Id
       */
      file_id: string;
      /**
       * Content
       */
      content?: /* Content */ string | null;
      /**
       * Collection Name
       */
      collection_name?: /* Collection Name */ string | null;
    }
    /**
     * ProcessTextForm
     */
    export interface ProcessTextForm {
      /**
       * Name
       */
      name: string;
      /**
       * Content
       */
      content: string;
      /**
       * Collection Name
       */
      collection_name?: /* Collection Name */ string | null;
    }
    /**
     * ProcessUrlForm
     */
    export interface ProcessUrlForm {
      /**
       * Collection Name
       */
      collection_name?: /* Collection Name */ string | null;
      /**
       * Url
       */
      url: string;
    }
    /**
     * PromptForm
     */
    export interface PromptForm {
      /**
       * Command
       */
      command: string;
      /**
       * Title
       */
      title: string;
      /**
       * Content
       */
      content: string;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
    }
    /**
     * PromptModel
     */
    export interface PromptModel {
      /**
       * Command
       */
      command: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Title
       */
      title: string;
      /**
       * Content
       */
      content: string;
      /**
       * Timestamp
       */
      timestamp: number;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
    }
    /**
     * PromptSuggestion
     */
    export interface PromptSuggestion {
      /**
       * Title
       */
      title: string[];
      /**
       * Content
       */
      content: string;
    }
    /**
     * PromptUserResponse
     */
    export interface PromptUserResponse {
      /**
       * Command
       */
      command: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Title
       */
      title: string;
      /**
       * Content
       */
      content: string;
      /**
       * Timestamp
       */
      timestamp: number;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      user?: /* UserResponse */ OpenWebuiModelsUsersUserResponse | null;
    }
    /**
     * PushModelForm
     */
    export interface PushModelForm {
      /**
       * Name
       */
      name: string;
      /**
       * Insecure
       */
      insecure?: /* Insecure */ boolean | null;
      /**
       * Stream
       */
      stream?: /* Stream */ boolean | null;
    }
    /**
     * QueryCollectionsForm
     */
    export interface QueryCollectionsForm {
      /**
       * Collection Names
       */
      collection_names: string[];
      /**
       * Query
       */
      query: string;
      /**
       * K
       */
      k?: /* K */ number | null;
      /**
       * R
       */
      r?: /* R */ number | null;
      /**
       * Hybrid
       */
      hybrid?: /* Hybrid */ boolean | null;
    }
    /**
     * QueryDocForm
     */
    export interface QueryDocForm {
      /**
       * Collection Name
       */
      collection_name: string;
      /**
       * Query
       */
      query: string;
      /**
       * K
       */
      k?: /* K */ number | null;
      /**
       * R
       */
      r?: /* R */ number | null;
      /**
       * Hybrid
       */
      hybrid?: /* Hybrid */ boolean | null;
    }
    /**
     * QueryMemoryForm
     */
    export interface QueryMemoryForm {
      /**
       * Content
       */
      content: string;
      /**
       * K
       */
      k?: /* K */ number | null;
    }
    /**
     * QuerySettingsForm
     */
    export interface QuerySettingsForm {
      /**
       * K
       */
      k?: /* K */ number | null;
      /**
       * R
       */
      r?: /* R */ number | null;
      /**
       * Template
       */
      template?: /* Template */ string | null;
      /**
       * Hybrid
       */
      hybrid?: /* Hybrid */ boolean | null;
    }
    /**
     * RatingData
     */
    export interface RatingData {
      [name: string]: any;
      /**
       * Rating
       */
      rating?: /* Rating */ number | string | null;
      /**
       * Model Id
       */
      model_id?: /* Model Id */ string | null;
      /**
       * Sibling Model Ids
       */
      sibling_model_ids?: /* Sibling Model Ids */ string[] | null;
      /**
       * Reason
       */
      reason?: /* Reason */ string | null;
      /**
       * Comment
       */
      comment?: /* Comment */ string | null;
    }
    /**
     * ReactionForm
     */
    export interface ReactionForm {
      /**
       * Name
       */
      name: string;
    }
    /**
     * Reactions
     */
    export interface Reactions {
      /**
       * Name
       */
      name: string;
      /**
       * User Ids
       */
      user_ids: string[];
      /**
       * Count
       */
      count: number;
    }
    /**
     * RerankingModelUpdateForm
     */
    export interface RerankingModelUpdateForm {
      /**
       * Reranking Model
       */
      reranking_model: string;
    }
    /**
     * STTConfigForm
     */
    export interface STTConfigForm {
      /**
       * Openai Api Base Url
       */
      OPENAI_API_BASE_URL: string;
      /**
       * Openai Api Key
       */
      OPENAI_API_KEY: string;
      /**
       * Engine
       */
      ENGINE: string;
      /**
       * Model
       */
      MODEL: string;
      /**
       * Whisper Model
       */
      WHISPER_MODEL: string;
      /**
       * Deepgram Api Key
       */
      DEEPGRAM_API_KEY: string;
    }
    /**
     * SearchForm
     */
    export interface SearchForm {
      /**
       * Collection Name
       */
      collection_name?: /* Collection Name */ string | null;
      /**
       * Query
       */
      query: string;
    }
    /**
     * SessionUserResponse
     */
    export interface SessionUserResponse {
      /**
       * Id
       */
      id: string;
      /**
       * Email
       */
      email: string;
      /**
       * Name
       */
      name: string;
      /**
       * Role
       */
      role: string;
      /**
       * Profile Image Url
       */
      profile_image_url: string;
      /**
       * Token
       */
      token: string;
      /**
       * Token Type
       */
      token_type: string;
      /**
       * Expires At
       */
      expires_at?: /* Expires At */ number | null;
      /**
       * Permissions
       */
      permissions?: /* Permissions */ {
        [key: string]: any;
      } | null;
    }
    /**
     * SetBannersForm
     */
    export interface SetBannersForm {
      /**
       * Banners
       */
      banners: /* BannerModel */ BannerModel[];
    }
    /**
     * SetDefaultSuggestionsForm
     */
    export interface SetDefaultSuggestionsForm {
      /**
       * Suggestions
       */
      suggestions: /* PromptSuggestion */ PromptSuggestion[];
    }
    /**
     * SigninForm
     */
    export interface SigninForm {
      /**
       * Email
       */
      email: string;
      /**
       * Password
       */
      password: string;
    }
    /**
     * SigninResponse
     */
    export interface SigninResponse {
      /**
       * Id
       */
      id: string;
      /**
       * Email
       */
      email: string;
      /**
       * Name
       */
      name: string;
      /**
       * Role
       */
      role: string;
      /**
       * Profile Image Url
       */
      profile_image_url: string;
      /**
       * Token
       */
      token: string;
      /**
       * Token Type
       */
      token_type: string;
    }
    /**
     * SignupForm
     */
    export interface SignupForm {
      /**
       * Name
       */
      name: string;
      /**
       * Email
       */
      email: string;
      /**
       * Password
       */
      password: string;
      /**
       * Profile Image Url
       */
      profile_image_url?: /* Profile Image Url */ string | null;
    }
    /**
     * SnapshotData
     */
    export interface SnapshotData {
      [name: string]: any;
      /**
       * Chat
       */
      chat?: /* Chat */ {
        [key: string]: any;
      } | null;
    }
    /**
     * TTSConfigForm
     */
    export interface TTSConfigForm {
      /**
       * Openai Api Base Url
       */
      OPENAI_API_BASE_URL: string;
      /**
       * Openai Api Key
       */
      OPENAI_API_KEY: string;
      /**
       * Api Key
       */
      API_KEY: string;
      /**
       * Engine
       */
      ENGINE: string;
      /**
       * Model
       */
      MODEL: string;
      /**
       * Voice
       */
      VOICE: string;
      /**
       * Split On
       */
      SPLIT_ON: string;
      /**
       * Azure Speech Region
       */
      AZURE_SPEECH_REGION: string;
      /**
       * Azure Speech Output Format
       */
      AZURE_SPEECH_OUTPUT_FORMAT: string;
    }
    /**
     * TagFilterForm
     */
    export interface TagFilterForm {
      /**
       * Name
       */
      name: string;
      /**
       * Skip
       */
      skip?: /* Skip */ number | null;
      /**
       * Limit
       */
      limit?: /* Limit */ number | null;
    }
    /**
     * TagForm
     */
    export interface TagForm {
      /**
       * Name
       */
      name: string;
    }
    /**
     * TagModel
     */
    export interface TagModel {
      /**
       * Id
       */
      id: string;
      /**
       * Name
       */
      name: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Meta
       */
      meta?: /* Meta */ {
        [key: string]: any;
      } | null;
    }
    /**
     * TaskConfigForm
     */
    export interface TaskConfigForm {
      /**
       * Task Model
       */
      TASK_MODEL: /* Task Model */ string | null;
      /**
       * Task Model External
       */
      TASK_MODEL_EXTERNAL: /* Task Model External */ string | null;
      /**
       * Enable Title Generation
       */
      ENABLE_TITLE_GENERATION: boolean;
      /**
       * Title Generation Prompt Template
       */
      TITLE_GENERATION_PROMPT_TEMPLATE: string;
      /**
       * Image Prompt Generation Prompt Template
       */
      IMAGE_PROMPT_GENERATION_PROMPT_TEMPLATE: string;
      /**
       * Enable Autocomplete Generation
       */
      ENABLE_AUTOCOMPLETE_GENERATION: boolean;
      /**
       * Autocomplete Generation Input Max Length
       */
      AUTOCOMPLETE_GENERATION_INPUT_MAX_LENGTH: number;
      /**
       * Tags Generation Prompt Template
       */
      TAGS_GENERATION_PROMPT_TEMPLATE: string;
      /**
       * Enable Tags Generation
       */
      ENABLE_TAGS_GENERATION: boolean;
      /**
       * Enable Search Query Generation
       */
      ENABLE_SEARCH_QUERY_GENERATION: boolean;
      /**
       * Enable Retrieval Query Generation
       */
      ENABLE_RETRIEVAL_QUERY_GENERATION: boolean;
      /**
       * Query Generation Prompt Template
       */
      QUERY_GENERATION_PROMPT_TEMPLATE: string;
      /**
       * Tools Function Calling Prompt Template
       */
      TOOLS_FUNCTION_CALLING_PROMPT_TEMPLATE: string;
    }
    /**
     * ToolForm
     */
    export interface ToolForm {
      /**
       * Id
       */
      id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Content
       */
      content: string;
      meta: /* ToolMeta */ ToolMeta;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
    }
    /**
     * ToolMeta
     */
    export interface ToolMeta {
      /**
       * Description
       */
      description?: /* Description */ string | null;
      /**
       * Manifest
       */
      manifest?: /* Manifest */ {
        [key: string]: any;
      } | null;
    }
    /**
     * ToolModel
     */
    export interface ToolModel {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Content
       */
      content: string;
      /**
       * Specs
       */
      specs: {
        [key: string]: any;
      }[];
      meta: /* ToolMeta */ ToolMeta;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
    }
    /**
     * ToolResponse
     */
    export interface ToolResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      meta: /* ToolMeta */ ToolMeta;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
    }
    /**
     * ToolUserResponse
     */
    export interface ToolUserResponse {
      /**
       * Id
       */
      id: string;
      /**
       * User Id
       */
      user_id: string;
      /**
       * Name
       */
      name: string;
      meta: /* ToolMeta */ ToolMeta;
      /**
       * Access Control
       */
      access_control?: /* Access Control */ {
        [key: string]: any;
      } | null;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
      user?: /* UserResponse */ OpenWebuiModelsUsersUserResponse | null;
    }
    /**
     * UpdateConfigForm
     */
    export interface UpdateConfigForm {
      /**
       * Enable Evaluation Arena Models
       */
      ENABLE_EVALUATION_ARENA_MODELS?: /* Enable Evaluation Arena Models */
        | boolean
        | null;
      /**
       * Evaluation Arena Models
       */
      EVALUATION_ARENA_MODELS?: /* Evaluation Arena Models */
        | {
            [key: string]: any;
          }[]
        | null;
    }
    /**
     * UpdatePasswordForm
     */
    export interface UpdatePasswordForm {
      /**
       * Password
       */
      password: string;
      /**
       * New Password
       */
      new_password: string;
    }
    /**
     * UpdateProfileForm
     */
    export interface UpdateProfileForm {
      /**
       * Profile Image Url
       */
      profile_image_url: string;
      /**
       * Name
       */
      name: string;
    }
    /**
     * UrlForm
     */
    export interface UrlForm {
      /**
       * Url
       */
      url: string;
    }
    /**
     * UserModel
     */
    export interface UserModel {
      /**
       * Id
       */
      id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Email
       */
      email: string;
      /**
       * Role
       */
      role?: string;
      /**
       * Profile Image Url
       */
      profile_image_url: string;
      /**
       * Last Active At
       */
      last_active_at: number;
      /**
       * Updated At
       */
      updated_at: number;
      /**
       * Created At
       */
      created_at: number;
      /**
       * Api Key
       */
      api_key?: /* Api Key */ string | null;
      settings?: /* UserSettings */ UserSettings | null;
      /**
       * Info
       */
      info?: /* Info */ {
        [key: string]: any;
      } | null;
      /**
       * Oauth Sub
       */
      oauth_sub?: /* Oauth Sub */ string | null;
    }
    /**
     * UserNameResponse
     */
    export interface UserNameResponse {
      /**
       * Id
       */
      id: string;
      /**
       * Name
       */
      name: string;
      /**
       * Role
       */
      role: string;
      /**
       * Profile Image Url
       */
      profile_image_url: string;
    }
    /**
     * UserPermissions
     */
    export interface UserPermissions {
      workspace: /* WorkspacePermissions */ WorkspacePermissions;
      chat: /* ChatPermissions */ ChatPermissions;
      features: /* FeaturesPermissions */ FeaturesPermissions;
    }
    /**
     * UserRoleUpdateForm
     */
    export interface UserRoleUpdateForm {
      /**
       * Id
       */
      id: string;
      /**
       * Role
       */
      role: string;
    }
    /**
     * UserSettings
     */
    export interface UserSettings {
      [name: string]: any;
      /**
       * Ui
       */
      ui?: /* Ui */ {
        [key: string]: any;
      } | null;
    }
    /**
     * UserUpdateForm
     */
    export interface UserUpdateForm {
      /**
       * Name
       */
      name: string;
      /**
       * Email
       */
      email: string;
      /**
       * Profile Image Url
       */
      profile_image_url: string;
      /**
       * Password
       */
      password?: /* Password */ string | null;
    }
    /**
     * ValidationError
     */
    export interface ValidationError {
      /**
       * Location
       */
      loc: (string | number)[];
      /**
       * Message
       */
      msg: string;
      /**
       * Error Type
       */
      type: string;
    }
    /**
     * WebConfig
     */
    export interface WebConfig {
      search: /* WebSearchConfig */ WebSearchConfig;
      /**
       * Enable Rag Web Loader Ssl Verification
       */
      ENABLE_RAG_WEB_LOADER_SSL_VERIFICATION?: /* Enable Rag Web Loader Ssl Verification */
        | boolean
        | null;
      /**
       * Bypass Web Search Embedding And Retrieval
       */
      BYPASS_WEB_SEARCH_EMBEDDING_AND_RETRIEVAL?: /* Bypass Web Search Embedding And Retrieval */
        | boolean
        | null;
    }
    /**
     * WebSearchConfig
     */
    export interface WebSearchConfig {
      /**
       * Enabled
       */
      enabled: boolean;
      /**
       * Engine
       */
      engine?: /* Engine */ string | null;
      /**
       * Searxng Query Url
       */
      searxng_query_url?: /* Searxng Query Url */ string | null;
      /**
       * Google Pse Api Key
       */
      google_pse_api_key?: /* Google Pse Api Key */ string | null;
      /**
       * Google Pse Engine Id
       */
      google_pse_engine_id?: /* Google Pse Engine Id */ string | null;
      /**
       * Brave Search Api Key
       */
      brave_search_api_key?: /* Brave Search Api Key */ string | null;
      /**
       * Kagi Search Api Key
       */
      kagi_search_api_key?: /* Kagi Search Api Key */ string | null;
      /**
       * Mojeek Search Api Key
       */
      mojeek_search_api_key?: /* Mojeek Search Api Key */ string | null;
      /**
       * Bocha Search Api Key
       */
      bocha_search_api_key?: /* Bocha Search Api Key */ string | null;
      /**
       * Serpstack Api Key
       */
      serpstack_api_key?: /* Serpstack Api Key */ string | null;
      /**
       * Serpstack Https
       */
      serpstack_https?: /* Serpstack Https */ boolean | null;
      /**
       * Serper Api Key
       */
      serper_api_key?: /* Serper Api Key */ string | null;
      /**
       * Serply Api Key
       */
      serply_api_key?: /* Serply Api Key */ string | null;
      /**
       * Tavily Api Key
       */
      tavily_api_key?: /* Tavily Api Key */ string | null;
      /**
       * Searchapi Api Key
       */
      searchapi_api_key?: /* Searchapi Api Key */ string | null;
      /**
       * Searchapi Engine
       */
      searchapi_engine?: /* Searchapi Engine */ string | null;
      /**
       * Serpapi Api Key
       */
      serpapi_api_key?: /* Serpapi Api Key */ string | null;
      /**
       * Serpapi Engine
       */
      serpapi_engine?: /* Serpapi Engine */ string | null;
      /**
       * Jina Api Key
       */
      jina_api_key?: /* Jina Api Key */ string | null;
      /**
       * Bing Search V7 Endpoint
       */
      bing_search_v7_endpoint?: /* Bing Search V7 Endpoint */ string | null;
      /**
       * Bing Search V7 Subscription Key
       */
      bing_search_v7_subscription_key?: /* Bing Search V7 Subscription Key */
        | string
        | null;
      /**
       * Exa Api Key
       */
      exa_api_key?: /* Exa Api Key */ string | null;
      /**
       * Perplexity Api Key
       */
      perplexity_api_key?: /* Perplexity Api Key */ string | null;
      /**
       * Result Count
       */
      result_count?: /* Result Count */ number | null;
      /**
       * Concurrent Requests
       */
      concurrent_requests?: /* Concurrent Requests */ number | null;
      /**
       * Trust Env
       */
      trust_env?: /* Trust Env */ boolean | null;
      /**
       * Domain Filter List
       */
      domain_filter_list?: /* Domain Filter List */ string[] | null;
    }
    /**
     * WorkspacePermissions
     */
    export interface WorkspacePermissions {
      /**
       * Models
       */
      models?: boolean;
      /**
       * Knowledge
       */
      knowledge?: boolean;
      /**
       * Prompts
       */
      prompts?: boolean;
      /**
       * Tools
       */
      tools?: boolean;
    }
    /**
     * YoutubeLoaderConfig
     */
    export interface YoutubeLoaderConfig {
      /**
       * Language
       */
      language: string[];
      /**
       * Translation
       */
      translation?: /* Translation */ string | null;
      /**
       * Proxy Url
       */
      proxy_url?: string;
    }
  }
}
declare namespace Paths {
  namespace AddFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* KnowledgeFileIdForm */ Components.Schemas.KnowledgeFileIdForm;
    namespace Responses {
      /**
       * Response Add File To Knowledge By Id Api V1 Knowledge  Id  File Add Post
       */
      export type $200 =
        /* Response Add File To Knowledge By Id Api V1 Knowledge  Id  File Add Post */ /* KnowledgeFilesResponse */ Components.Schemas.KnowledgeFilesResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace AddFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    /**
     * Form Data
     */
    export type RequestBody =
      /* KnowledgeFileIdForm */ Components.Schemas.KnowledgeFileIdForm[];
    namespace Responses {
      /**
       * Response Add Files To Knowledge Batch Api V1 Knowledge  Id  Files Batch Add Post
       */
      export type $200 =
        /* Response Add Files To Knowledge Batch Api V1 Knowledge  Id  Files Batch Add Post */ /* KnowledgeFilesResponse */ Components.Schemas.KnowledgeFilesResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace AddMemoryApiV1MemoriesAddPost {
    export type RequestBody =
      /* AddMemoryForm */ Components.Schemas.AddMemoryForm;
    namespace Responses {
      /**
       * Response Add Memory Api V1 Memories Add Post
       */
      export type $200 =
        /* Response Add Memory Api V1 Memories Add Post */ /* MemoryModel */ Components.Schemas.MemoryModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace AddPipelineApiV1PipelinesAddPost {
    export type RequestBody =
      /* AddPipelineForm */ Components.Schemas.AddPipelineForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace AddReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
      /**
       * Message Id
       */
      export type MessageId = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
      message_id: /* Message Id */ Parameters.MessageId;
    }
    export type RequestBody =
      /* ReactionForm */ Components.Schemas.ReactionForm;
    namespace Responses {
      /**
       * Response Add Reaction To Message Api V1 Channels  Id  Messages  Message Id  Reactions Add Post
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace AddTagByIdAndTagNameApiV1ChatsIdTagsPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* TagForm */ Components.Schemas.TagForm;
    namespace Responses {
      /**
       * Response Add Tag By Id And Tag Name Api V1 Chats  Id  Tags Post
       */
      export type $200 = /* TagModel */ Components.Schemas.TagModel[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace AddUserApiV1AuthsAddPost {
    export type RequestBody = /* AddUserForm */ Components.Schemas.AddUserForm;
    namespace Responses {
      export type $200 = /* SigninResponse */ Components.Schemas.SigninResponse;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ArchiveAllChatsApiV1ChatsArchiveAllPost {
    namespace Responses {
      /**
       * Response Archive All Chats Api V1 Chats Archive All Post
       */
      export type $200 = boolean;
    }
  }
  namespace ArchiveChatByIdApiV1ChatsIdArchivePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Archive Chat By Id Api V1 Chats  Id  Archive Post
       */
      export type $200 =
        /* Response Archive Chat By Id Api V1 Chats  Id  Archive Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ChatActionApiChatActionsActionIdPost {
    namespace Parameters {
      /**
       * Action Id
       */
      export type ActionId = string;
    }
    export interface PathParameters {
      action_id: /* Action Id */ Parameters.ActionId;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ChatCompletedApiChatCompletedPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ChatCompletionApiChatCompletionsPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CloneChatByIdApiV1ChatsIdClonePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* CloneForm */ Components.Schemas.CloneForm;
    namespace Responses {
      /**
       * Response Clone Chat By Id Api V1 Chats  Id  Clone Post
       */
      export type $200 =
        /* Response Clone Chat By Id Api V1 Chats  Id  Clone Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CloneSharedChatByIdApiV1ChatsIdCloneSharedPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Clone Shared Chat By Id Api V1 Chats  Id  Clone Shared Post
       */
      export type $200 =
        /* Response Clone Shared Chat By Id Api V1 Chats  Id  Clone Shared Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CopyModelOllamaApiCopyPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* CopyModelForm */ Components.Schemas.CopyModelForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CopyModelOllamaApiCopyUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* CopyModelForm */ Components.Schemas.CopyModelForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateFeedbackApiV1EvaluationsFeedbackPost {
    export type RequestBody =
      /* FeedbackForm */ Components.Schemas.FeedbackForm;
    namespace Responses {
      export type $200 = /* FeedbackModel */ Components.Schemas.FeedbackModel;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateFolderApiV1FoldersPost {
    export type RequestBody = /* FolderForm */ Components.Schemas.FolderForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateModelOllamaApiCreatePost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = number;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* CreateModelForm */ Components.Schemas.CreateModelForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateModelOllamaApiCreateUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = number;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* CreateModelForm */ Components.Schemas.CreateModelForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateNewChannelApiV1ChannelsCreatePost {
    export type RequestBody = /* ChannelForm */ Components.Schemas.ChannelForm;
    namespace Responses {
      /**
       * Response Create New Channel Api V1 Channels Create Post
       */
      export type $200 =
        /* Response Create New Channel Api V1 Channels Create Post */ /* ChannelModel */ Components.Schemas.ChannelModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateNewChatApiV1ChatsNewPost {
    export type RequestBody = /* ChatForm */ Components.Schemas.ChatForm;
    namespace Responses {
      /**
       * Response Create New Chat Api V1 Chats New Post
       */
      export type $200 =
        /* Response Create New Chat Api V1 Chats New Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateNewFunctionApiV1FunctionsCreatePost {
    export type RequestBody =
      /* FunctionForm */ Components.Schemas.FunctionForm;
    namespace Responses {
      /**
       * Response Create New Function Api V1 Functions Create Post
       */
      export type $200 =
        /* Response Create New Function Api V1 Functions Create Post */ /* FunctionResponse */ Components.Schemas.FunctionResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateNewGroupApiV1GroupsCreatePost {
    export type RequestBody = /* GroupForm */ Components.Schemas.GroupForm;
    namespace Responses {
      /**
       * Response Create New Group Api V1 Groups Create Post
       */
      export type $200 =
        /* Response Create New Group Api V1 Groups Create Post */ /* GroupResponse */ Components.Schemas.GroupResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateNewKnowledgeApiV1KnowledgeCreatePost {
    export type RequestBody =
      /* KnowledgeForm */ Components.Schemas.KnowledgeForm;
    namespace Responses {
      /**
       * Response Create New Knowledge Api V1 Knowledge Create Post
       */
      export type $200 =
        /* Response Create New Knowledge Api V1 Knowledge Create Post */ /* KnowledgeResponse */ Components.Schemas.KnowledgeResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateNewModelApiV1ModelsCreatePost {
    export type RequestBody = /* ModelForm */ Components.Schemas.ModelForm;
    namespace Responses {
      /**
       * Response Create New Model Api V1 Models Create Post
       */
      export type $200 =
        /* Response Create New Model Api V1 Models Create Post */ /* ModelModel */ Components.Schemas.ModelModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateNewPromptApiV1PromptsCreatePost {
    export type RequestBody = /* PromptForm */ Components.Schemas.PromptForm;
    namespace Responses {
      /**
       * Response Create New Prompt Api V1 Prompts Create Post
       */
      export type $200 =
        /* Response Create New Prompt Api V1 Prompts Create Post */ /* PromptModel */ Components.Schemas.PromptModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace CreateNewToolsApiV1ToolsCreatePost {
    export type RequestBody = /* ToolForm */ Components.Schemas.ToolForm;
    namespace Responses {
      /**
       * Response Create New Tools Api V1 Tools Create Post
       */
      export type $200 =
        /* Response Create New Tools Api V1 Tools Create Post */ /* ToolResponse */ Components.Schemas.ToolResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteAllFeedbacksApiV1EvaluationsFeedbacksAllDelete {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace DeleteAllFilesApiV1FilesAllDelete {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace DeleteAllModelsApiV1ModelsDeleteAllDelete {
    namespace Responses {
      /**
       * Response Delete All Models Api V1 Models Delete All Delete
       */
      export type $200 = boolean;
    }
  }
  namespace DeleteAllTagsByIdApiV1ChatsIdTagsAllDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete All Tags By Id Api V1 Chats  Id  Tags All Delete
       */
      export type $200 =
        /* Response Delete All Tags By Id Api V1 Chats  Id  Tags All Delete */
          | boolean
          | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteAllUserChatsApiV1ChatsDelete {
    namespace Responses {
      /**
       * Response Delete All User Chats Api V1 Chats  Delete
       */
      export type $200 = boolean;
    }
  }
  namespace DeleteApiKeyApiV1AuthsApiKeyDelete {
    namespace Responses {
      /**
       * Response Delete Api Key Api V1 Auths Api Key Delete
       */
      export type $200 = boolean;
    }
  }
  namespace DeleteChannelByIdApiV1ChannelsIdDeleteDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete Channel By Id Api V1 Channels  Id  Delete Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteChatByIdApiV1ChatsIdDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete Chat By Id Api V1 Chats  Id  Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteEntriesFromCollectionApiV1RetrievalDeletePost {
    export type RequestBody = /* DeleteForm */ Components.Schemas.DeleteForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteFeedbacksApiV1EvaluationsFeedbacksDelete {
    namespace Responses {
      /**
       * Response Delete Feedbacks Api V1 Evaluations Feedbacks Delete
       */
      export type $200 = boolean;
    }
  }
  namespace DeleteFileByIdApiV1FilesIdDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteFolderByIdApiV1FoldersIdDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteFunctionByIdApiV1FunctionsIdIdDeleteDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete Function By Id Api V1 Functions Id  Id  Delete Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteGroupByIdApiV1GroupsIdIdDeleteDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete Group By Id Api V1 Groups Id  Id  Delete Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete Knowledge By Id Api V1 Knowledge  Id  Delete Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteMemoryByIdApiV1MemoriesMemoryIdDelete {
    namespace Parameters {
      /**
       * Memory Id
       */
      export type MemoryId = string;
    }
    export interface PathParameters {
      memory_id: /* Memory Id */ Parameters.MemoryId;
    }
    namespace Responses {
      /**
       * Response Delete Memory By Id Api V1 Memories  Memory Id  Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteMemoryByUserIdApiV1MemoriesDeleteUserDelete {
    namespace Responses {
      /**
       * Response Delete Memory By User Id Api V1 Memories Delete User Delete
       */
      export type $200 = boolean;
    }
  }
  namespace DeleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
      /**
       * Message Id
       */
      export type MessageId = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
      message_id: /* Message Id */ Parameters.MessageId;
    }
    namespace Responses {
      /**
       * Response Delete Message By Id Api V1 Channels  Id  Messages  Message Id  Delete Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteModelByIdApiV1ModelsModelDeleteDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface QueryParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete Model By Id Api V1 Models Model Delete Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteModelOllamaApiDeleteDelete {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* ModelNameForm */ Components.Schemas.ModelNameForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteModelOllamaApiDeleteUrlIdxDelete {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* ModelNameForm */ Components.Schemas.ModelNameForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeletePipelineApiV1PipelinesDeleteDelete {
    export type RequestBody =
      /* DeletePipelineForm */ Components.Schemas.DeletePipelineForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeletePromptByCommandApiV1PromptsCommandCommandDeleteDelete {
    namespace Parameters {
      /**
       * Command
       */
      export type Command = string;
    }
    export interface PathParameters {
      command: /* Command */ Parameters.Command;
    }
    namespace Responses {
      /**
       * Response Delete Prompt By Command Api V1 Prompts Command  Command  Delete Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteSharedChatByIdApiV1ChatsIdShareDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete Shared Chat By Id Api V1 Chats  Id  Share Delete
       */
      export type $200 =
        /* Response Delete Shared Chat By Id Api V1 Chats  Id  Share Delete */
          | boolean
          | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteTagByIdAndTagNameApiV1ChatsIdTagsDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* TagForm */ Components.Schemas.TagForm;
    namespace Responses {
      /**
       * Response Delete Tag By Id And Tag Name Api V1 Chats  Id  Tags Delete
       */
      export type $200 = /* TagModel */ Components.Schemas.TagModel[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteToolsByIdApiV1ToolsIdIdDeleteDelete {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Delete Tools By Id Api V1 Tools Id  Id  Delete Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DeleteUserByIdApiV1UsersUserIdDelete {
    namespace Parameters {
      /**
       * User Id
       */
      export type UserId = string;
    }
    export interface PathParameters {
      user_id: /* User Id */ Parameters.UserId;
    }
    namespace Responses {
      /**
       * Response Delete User By Id Api V1 Users  User Id  Delete
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DownloadChatAsPdfApiV1UtilsPdfPost {
    export type RequestBody =
      /* ChatTitleMessagesForm */ Components.Schemas.ChatTitleMessagesForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DownloadDbApiV1UtilsDbDownloadGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace DownloadLitellmConfigYamlApiV1UtilsLitellmConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace DownloadModelOllamaModelsDownloadPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody = /* UrlForm */ Components.Schemas.UrlForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace DownloadModelOllamaModelsDownloadUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody = /* UrlForm */ Components.Schemas.UrlForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace EmbedOllamaApiEmbedPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* GenerateEmbedForm */ Components.Schemas.GenerateEmbedForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace EmbedOllamaApiEmbedUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* GenerateEmbedForm */ Components.Schemas.GenerateEmbedForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace EmbeddingsOllamaApiEmbeddingsPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* GenerateEmbeddingsForm */ Components.Schemas.GenerateEmbeddingsForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace EmbeddingsOllamaApiEmbeddingsUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* GenerateEmbeddingsForm */ Components.Schemas.GenerateEmbeddingsForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ExecuteCodeApiV1UtilsCodeExecutePost {
    export type RequestBody = /* CodeForm */ Components.Schemas.CodeForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ExportConfigApiV1ConfigsExportGet {
    namespace Responses {
      /**
       * Response Export Config Api V1 Configs Export Get
       */
      export interface $200 {}
    }
  }
  namespace ExportToolsApiV1ToolsExportGet {
    namespace Responses {
      /**
       * Response Export Tools Api V1 Tools Export Get
       */
      export type $200 = /* ToolModel */ Components.Schemas.ToolModel[];
    }
  }
  namespace FormatCodeApiV1UtilsCodeFormatPost {
    export type RequestBody = /* CodeForm */ Components.Schemas.CodeForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateApiKeyApiV1AuthsApiKeyPost {
    namespace Responses {
      export type $200 = /* ApiKey */ Components.Schemas.ApiKey;
    }
  }
  namespace GenerateAutocompletionApiV1TasksAutoCompletionsPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateChatCompletionOllamaApiChatPost {
    namespace Parameters {
      /**
       * Bypass Filter
       */
      export type BypassFilter = /* Bypass Filter */ boolean | null;
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
      bypass_filter?: /* Bypass Filter */ Parameters.BypassFilter;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateChatCompletionOllamaApiChatUrlIdxPost {
    namespace Parameters {
      /**
       * Bypass Filter
       */
      export type BypassFilter = /* Bypass Filter */ boolean | null;
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export interface QueryParameters {
      bypass_filter?: /* Bypass Filter */ Parameters.BypassFilter;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateChatCompletionOpenaiChatCompletionsPost {
    namespace Parameters {
      /**
       * Bypass Filter
       */
      export type BypassFilter = /* Bypass Filter */ boolean | null;
    }
    export interface QueryParameters {
      bypass_filter?: /* Bypass Filter */ Parameters.BypassFilter;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateChatTagsApiV1TasksTagsCompletionsPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateCompletionOllamaApiGeneratePost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* GenerateCompletionForm */ Components.Schemas.GenerateCompletionForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateCompletionOllamaApiGenerateUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* GenerateCompletionForm */ Components.Schemas.GenerateCompletionForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateEmojiApiV1TasksEmojiCompletionsPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateImagePromptApiV1TasksImagePromptCompletionsPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateMoaResponseApiV1TasksMoaCompletionsPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateOpenaiChatCompletionOllamaV1ChatCompletionsPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateOpenaiCompletionOllamaV1CompletionsPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateOpenaiCompletionOllamaV1CompletionsUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateQueriesApiV1TasksQueriesCompletionsPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GenerateTitleApiV1TasksTitleCompletionsPost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetAdminConfigApiV1AuthsAdminConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetAdminDetailsApiV1AuthsAdminDetailsGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetAllFeedbacksApiV1EvaluationsFeedbacksAllExportGet {
    namespace Responses {
      /**
       * Response Get All Feedbacks Api V1 Evaluations Feedbacks All Export Get
       */
      export type $200 = /* FeedbackModel */ Components.Schemas.FeedbackModel[];
    }
  }
  namespace GetAllFeedbacksApiV1EvaluationsFeedbacksAllGet {
    namespace Responses {
      /**
       * Response Get All Feedbacks Api V1 Evaluations Feedbacks All Get
       */
      export type $200 =
        /* FeedbackUserResponse */ Components.Schemas.FeedbackUserResponse[];
    }
  }
  namespace GetAllUserChatsInDbApiV1ChatsAllDbGet {
    namespace Responses {
      /**
       * Response Get All User Chats In Db Api V1 Chats All Db Get
       */
      export type $200 = /* ChatResponse */ Components.Schemas.ChatResponse[];
    }
  }
  namespace GetAllUserTagsApiV1ChatsAllTagsGet {
    namespace Responses {
      /**
       * Response Get All User Tags Api V1 Chats All Tags Get
       */
      export type $200 = /* TagModel */ Components.Schemas.TagModel[];
    }
  }
  namespace GetApiKeyApiV1AuthsApiKeyGet {
    namespace Responses {
      export type $200 = /* ApiKey */ Components.Schemas.ApiKey;
    }
  }
  namespace GetAppChangelogApiChangelogGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetAppConfigApiConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetAppLatestReleaseVersionApiVersionUpdatesGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetAppVersionApiVersionGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetArchivedSessionUserChatListApiV1ChatsArchivedGet {
    namespace Parameters {
      /**
       * Limit
       */
      export type Limit = number;
      /**
       * Skip
       */
      export type Skip = number;
    }
    export interface QueryParameters {
      skip?: /* Skip */ Parameters.Skip;
      limit?: /* Limit */ Parameters.Limit;
    }
    namespace Responses {
      /**
       * Response Get Archived Session User Chat List Api V1 Chats Archived Get
       */
      export type $200 =
        /* ChatTitleIdResponse */ Components.Schemas.ChatTitleIdResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetAudioConfigApiV1AudioConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetBannersApiV1ConfigsBannersGet {
    namespace Responses {
      /**
       * Response Get Banners Api V1 Configs Banners Get
       */
      export type $200 = /* BannerModel */ Components.Schemas.BannerModel[];
    }
  }
  namespace GetBaseModelsApiModelsBaseGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetBaseModelsApiV1ModelsBaseGet {
    namespace Responses {
      /**
       * Response Get Base Models Api V1 Models Base Get
       */
      export type $200 = /* ModelResponse */ Components.Schemas.ModelResponse[];
    }
  }
  namespace GetChannelByIdApiV1ChannelsIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Channel By Id Api V1 Channels  Id  Get
       */
      export type $200 =
        /* Response Get Channel By Id Api V1 Channels  Id  Get */ /* ChannelModel */ Components.Schemas.ChannelModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetChannelMessageApiV1ChannelsIdMessagesMessageIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
      /**
       * Message Id
       */
      export type MessageId = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
      message_id: /* Message Id */ Parameters.MessageId;
    }
    namespace Responses {
      /**
       * Response Get Channel Message Api V1 Channels  Id  Messages  Message Id  Get
       */
      export type $200 =
        /* Response Get Channel Message Api V1 Channels  Id  Messages  Message Id  Get */ /* MessageUserResponse */ Components.Schemas.MessageUserResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetChannelMessagesApiV1ChannelsIdMessagesGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
      /**
       * Limit
       */
      export type Limit = number;
      /**
       * Skip
       */
      export type Skip = number;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export interface QueryParameters {
      skip?: /* Skip */ Parameters.Skip;
      limit?: /* Limit */ Parameters.Limit;
    }
    namespace Responses {
      /**
       * Response Get Channel Messages Api V1 Channels  Id  Messages Get
       */
      export type $200 =
        /* MessageUserResponse */ Components.Schemas.MessageUserResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
      /**
       * Limit
       */
      export type Limit = number;
      /**
       * Message Id
       */
      export type MessageId = string;
      /**
       * Skip
       */
      export type Skip = number;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
      message_id: /* Message Id */ Parameters.MessageId;
    }
    export interface QueryParameters {
      skip?: /* Skip */ Parameters.Skip;
      limit?: /* Limit */ Parameters.Limit;
    }
    namespace Responses {
      /**
       * Response Get Channel Thread Messages Api V1 Channels  Id  Messages  Message Id  Thread Get
       */
      export type $200 =
        /* MessageUserResponse */ Components.Schemas.MessageUserResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetChannelsApiV1ChannelsGet {
    namespace Responses {
      /**
       * Response Get Channels Api V1 Channels  Get
       */
      export type $200 = /* ChannelModel */ Components.Schemas.ChannelModel[];
    }
  }
  namespace GetChatByIdApiV1ChatsIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Chat By Id Api V1 Chats  Id  Get
       */
      export type $200 =
        /* Response Get Chat By Id Api V1 Chats  Id  Get */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetChatTagsByIdApiV1ChatsIdTagsGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Chat Tags By Id Api V1 Chats  Id  Tags Get
       */
      export type $200 = /* TagModel */ Components.Schemas.TagModel[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetChatsByFolderIdApiV1ChatsFolderFolderIdGet {
    namespace Parameters {
      /**
       * Folder Id
       */
      export type FolderId = string;
    }
    export interface PathParameters {
      folder_id: /* Folder Id */ Parameters.FolderId;
    }
    namespace Responses {
      /**
       * Response Get Chats By Folder Id Api V1 Chats Folder  Folder Id  Get
       */
      export type $200 = /* ChatResponse */ Components.Schemas.ChatResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetCodeExecutionConfigApiV1ConfigsCodeExecutionGet {
    namespace Responses {
      export type $200 =
        /* CodeInterpreterConfigForm */ Components.Schemas.CodeInterpreterConfigForm;
    }
  }
  namespace GetConfigApiV1EvaluationsConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetConfigApiV1ImagesConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetConfigOllamaConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetConfigOpenaiConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetDirectConnectionsConfigApiV1ConfigsDirectConnectionsGet {
    namespace Responses {
      export type $200 =
        /* DirectConnectionsConfigForm */ Components.Schemas.DirectConnectionsConfigForm;
    }
  }
  namespace GetEmbeddingConfigApiV1RetrievalEmbeddingGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetEmbeddingsApiV1MemoriesEfGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetEmbeddingsApiV1RetrievalEfTextGet {
    namespace Parameters {
      /**
       * Text
       */
      export type Text = /* Text */ string | null;
    }
    export interface PathParameters {
      text: /* Text */ Parameters.Text;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFeedbackByIdApiV1EvaluationsFeedbackIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = /* FeedbackModel */ Components.Schemas.FeedbackModel;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFeedbacksApiV1EvaluationsFeedbacksUserGet {
    namespace Responses {
      /**
       * Response Get Feedbacks Api V1 Evaluations Feedbacks User Get
       */
      export type $200 =
        /* FeedbackUserResponse */ Components.Schemas.FeedbackUserResponse[];
    }
  }
  namespace GetFileByIdApiV1FilesIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get File By Id Api V1 Files  Id  Get
       */
      export type $200 =
        /* Response Get File By Id Api V1 Files  Id  Get */ /* FileModel */ Components.Schemas.FileModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFileContentByIdApiV1FilesIdContentFileNameGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFileContentByIdApiV1FilesIdContentGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFileDataContentByIdApiV1FilesIdDataContentGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFolderByIdApiV1FoldersIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Folder By Id Api V1 Folders  Id  Get
       */
      export type $200 =
        /* Response Get Folder By Id Api V1 Folders  Id  Get */ /* FolderModel */ Components.Schemas.FolderModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFoldersApiV1FoldersGet {
    namespace Responses {
      /**
       * Response Get Folders Api V1 Folders  Get
       */
      export type $200 = /* FolderModel */ Components.Schemas.FolderModel[];
    }
  }
  namespace GetFunctionByIdApiV1FunctionsIdIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Function By Id Api V1 Functions Id  Id  Get
       */
      export type $200 =
        /* Response Get Function By Id Api V1 Functions Id  Id  Get */ /* FunctionModel */ Components.Schemas.FunctionModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Function User Valves By Id Api V1 Functions Id  Id  Valves User Get
       */
      export type $200 =
        /* Response Get Function User Valves By Id Api V1 Functions Id  Id  Valves User Get */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Function User Valves Spec By Id Api V1 Functions Id  Id  Valves User Spec Get
       */
      export type $200 =
        /* Response Get Function User Valves Spec By Id Api V1 Functions Id  Id  Valves User Spec Get */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFunctionValvesByIdApiV1FunctionsIdIdValvesGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Function Valves By Id Api V1 Functions Id  Id  Valves Get
       */
      export type $200 =
        /* Response Get Function Valves By Id Api V1 Functions Id  Id  Valves Get */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Function Valves Spec By Id Api V1 Functions Id  Id  Valves Spec Get
       */
      export type $200 =
        /* Response Get Function Valves Spec By Id Api V1 Functions Id  Id  Valves Spec Get */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetFunctionsApiV1FunctionsExportGet {
    namespace Responses {
      /**
       * Response Get Functions Api V1 Functions Export Get
       */
      export type $200 = /* FunctionModel */ Components.Schemas.FunctionModel[];
    }
  }
  namespace GetFunctionsApiV1FunctionsGet {
    namespace Responses {
      /**
       * Response Get Functions Api V1 Functions  Get
       */
      export type $200 =
        /* FunctionResponse */ Components.Schemas.FunctionResponse[];
    }
  }
  namespace GetGravatarApiV1UtilsGravatarGet {
    namespace Parameters {
      /**
       * Email
       */
      export type Email = string;
    }
    export interface QueryParameters {
      email: /* Email */ Parameters.Email;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetGroupByIdApiV1GroupsIdIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Group By Id Api V1 Groups Id  Id  Get
       */
      export type $200 =
        /* Response Get Group By Id Api V1 Groups Id  Id  Get */ /* GroupResponse */ Components.Schemas.GroupResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetGroupsApiV1GroupsGet {
    namespace Responses {
      /**
       * Response Get Groups Api V1 Groups  Get
       */
      export type $200 = /* GroupResponse */ Components.Schemas.GroupResponse[];
    }
  }
  namespace GetHtmlFileContentByIdApiV1FilesIdContentHtmlGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetHtmlFromMarkdownApiV1UtilsMarkdownPost {
    export type RequestBody =
      /* MarkdownForm */ Components.Schemas.MarkdownForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetImageConfigApiV1ImagesImageConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetKnowledgeApiV1KnowledgeGet {
    namespace Responses {
      /**
       * Response Get Knowledge Api V1 Knowledge  Get
       */
      export type $200 =
        /* KnowledgeUserResponse */ Components.Schemas.KnowledgeUserResponse[];
    }
  }
  namespace GetKnowledgeByIdApiV1KnowledgeIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Knowledge By Id Api V1 Knowledge  Id  Get
       */
      export type $200 =
        /* Response Get Knowledge By Id Api V1 Knowledge  Id  Get */ /* KnowledgeFilesResponse */ Components.Schemas.KnowledgeFilesResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetKnowledgeListApiV1KnowledgeListGet {
    namespace Responses {
      /**
       * Response Get Knowledge List Api V1 Knowledge List Get
       */
      export type $200 =
        /* KnowledgeUserResponse */ Components.Schemas.KnowledgeUserResponse[];
    }
  }
  namespace GetLdapConfigApiV1AuthsAdminConfigLdapGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetLdapServerApiV1AuthsAdminConfigLdapServerGet {
    namespace Responses {
      export type $200 =
        /* LdapServerConfig */ Components.Schemas.LdapServerConfig;
    }
  }
  namespace GetManifestJsonManifestJsonGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetMemoriesApiV1MemoriesGet {
    namespace Responses {
      /**
       * Response Get Memories Api V1 Memories  Get
       */
      export type $200 = /* MemoryModel */ Components.Schemas.MemoryModel[];
    }
  }
  namespace GetModelByIdApiV1ModelsModelGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface QueryParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Model By Id Api V1 Models Model Get
       */
      export type $200 =
        /* Response Get Model By Id Api V1 Models Model Get */ /* ModelResponse */ Components.Schemas.ModelResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetModelsApiModelsGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetModelsApiV1AudioModelsGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetModelsApiV1ImagesModelsGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetModelsApiV1ModelsGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = /* Id */ string | null;
    }
    export interface QueryParameters {
      id?: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Models Api V1 Models  Get
       */
      export type $200 =
        /* ModelUserResponse */ Components.Schemas.ModelUserResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetModelsConfigApiV1ConfigsModelsGet {
    namespace Responses {
      export type $200 =
        /* ModelsConfigForm */ Components.Schemas.ModelsConfigForm;
    }
  }
  namespace GetModelsOpenaiModelsGet {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetModelsOpenaiModelsUrlIdxGet {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetOllamaLoadedModelsOllamaApiPsGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetOllamaTagsOllamaApiTagsGet {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetOllamaTagsOllamaApiTagsUrlIdxGet {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetOllamaVersionsOllamaApiVersionGet {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetOllamaVersionsOllamaApiVersionUrlIdxGet {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetOpenaiModelsOllamaV1ModelsGet {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetOpenaiModelsOllamaV1ModelsUrlIdxGet {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetOpensearchXmlOpensearchXmlGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetPinnedStatusByIdApiV1ChatsIdPinnedGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Pinned Status By Id Api V1 Chats  Id  Pinned Get
       */
      export type $200 =
        /* Response Get Pinned Status By Id Api V1 Chats  Id  Pinned Get */
          | boolean
          | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetPipelineValvesApiV1PipelinesPipelineIdValvesGet {
    namespace Parameters {
      /**
       * Pipeline Id
       */
      export type PipelineId = string;
      /**
       * Urlidx
       */
      export type UrlIdx = /* Urlidx */ number | null;
    }
    export interface PathParameters {
      pipeline_id: /* Pipeline Id */ Parameters.PipelineId;
    }
    export interface QueryParameters {
      urlIdx: /* Urlidx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet {
    namespace Parameters {
      /**
       * Pipeline Id
       */
      export type PipelineId = string;
      /**
       * Urlidx
       */
      export type UrlIdx = /* Urlidx */ number | null;
    }
    export interface PathParameters {
      pipeline_id: /* Pipeline Id */ Parameters.PipelineId;
    }
    export interface QueryParameters {
      urlIdx: /* Urlidx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetPipelinesApiV1PipelinesGet {
    namespace Parameters {
      /**
       * Urlidx
       */
      export type UrlIdx = /* Urlidx */ number | null;
    }
    export interface QueryParameters {
      urlIdx?: /* Urlidx */ Parameters.UrlIdx;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetPipelinesListApiV1PipelinesListGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetPromptByCommandApiV1PromptsCommandCommandGet {
    namespace Parameters {
      /**
       * Command
       */
      export type Command = string;
    }
    export interface PathParameters {
      command: /* Command */ Parameters.Command;
    }
    namespace Responses {
      /**
       * Response Get Prompt By Command Api V1 Prompts Command  Command  Get
       */
      export type $200 =
        /* Response Get Prompt By Command Api V1 Prompts Command  Command  Get */ /* PromptModel */ Components.Schemas.PromptModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetPromptListApiV1PromptsListGet {
    namespace Responses {
      /**
       * Response Get Prompt List Api V1 Prompts List Get
       */
      export type $200 =
        /* PromptUserResponse */ Components.Schemas.PromptUserResponse[];
    }
  }
  namespace GetPromptsApiV1PromptsGet {
    namespace Responses {
      /**
       * Response Get Prompts Api V1 Prompts  Get
       */
      export type $200 = /* PromptModel */ Components.Schemas.PromptModel[];
    }
  }
  namespace GetQuerySettingsApiV1RetrievalQuerySettingsGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetRagConfigApiV1RetrievalConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetRagTemplateApiV1RetrievalTemplateGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetReraankingConfigApiV1RetrievalRerankingGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetSessionUserApiV1AuthsGet {
    namespace Responses {
      export type $200 =
        /* SessionUserResponse */ Components.Schemas.SessionUserResponse;
    }
  }
  namespace GetSessionUserChatListApiV1ChatsGet {
    namespace Parameters {
      /**
       * Page
       */
      export type Page = /* Page */ number | null;
    }
    export interface QueryParameters {
      page?: /* Page */ Parameters.Page;
    }
    namespace Responses {
      /**
       * Response Get Session User Chat List Api V1 Chats  Get
       */
      export type $200 =
        /* ChatTitleIdResponse */ Components.Schemas.ChatTitleIdResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetSessionUserChatListApiV1ChatsListGet {
    namespace Parameters {
      /**
       * Page
       */
      export type Page = /* Page */ number | null;
    }
    export interface QueryParameters {
      page?: /* Page */ Parameters.Page;
    }
    namespace Responses {
      /**
       * Response Get Session User Chat List Api V1 Chats List Get
       */
      export type $200 =
        /* ChatTitleIdResponse */ Components.Schemas.ChatTitleIdResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetSharedChatByIdApiV1ChatsShareShareIdGet {
    namespace Parameters {
      /**
       * Share Id
       */
      export type ShareId = string;
    }
    export interface PathParameters {
      share_id: /* Share Id */ Parameters.ShareId;
    }
    namespace Responses {
      /**
       * Response Get Shared Chat By Id Api V1 Chats Share  Share Id  Get
       */
      export type $200 =
        /* Response Get Shared Chat By Id Api V1 Chats Share  Share Id  Get */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetStatusApiV1RetrievalGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetStatusOllamaGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetStatusOllamaHead {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetTaskConfigApiV1TasksConfigGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetToolListApiV1ToolsListGet {
    namespace Responses {
      /**
       * Response Get Tool List Api V1 Tools List Get
       */
      export type $200 =
        /* ToolUserResponse */ Components.Schemas.ToolUserResponse[];
    }
  }
  namespace GetToolsApiV1ToolsGet {
    namespace Responses {
      /**
       * Response Get Tools Api V1 Tools  Get
       */
      export type $200 =
        /* ToolUserResponse */ Components.Schemas.ToolUserResponse[];
    }
  }
  namespace GetToolsByIdApiV1ToolsIdIdGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Tools By Id Api V1 Tools Id  Id  Get
       */
      export type $200 =
        /* Response Get Tools By Id Api V1 Tools Id  Id  Get */ /* ToolModel */ Components.Schemas.ToolModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Tools User Valves By Id Api V1 Tools Id  Id  Valves User Get
       */
      export type $200 =
        /* Response Get Tools User Valves By Id Api V1 Tools Id  Id  Valves User Get */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Tools User Valves Spec By Id Api V1 Tools Id  Id  Valves User Spec Get
       */
      export type $200 =
        /* Response Get Tools User Valves Spec By Id Api V1 Tools Id  Id  Valves User Spec Get */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetToolsValvesByIdApiV1ToolsIdIdValvesGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Tools Valves By Id Api V1 Tools Id  Id  Valves Get
       */
      export type $200 =
        /* Response Get Tools Valves By Id Api V1 Tools Id  Id  Valves Get */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Get Tools Valves Spec By Id Api V1 Tools Id  Id  Valves Spec Get
       */
      export type $200 =
        /* Response Get Tools Valves Spec By Id Api V1 Tools Id  Id  Valves Spec Get */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetUserArchivedChatsApiV1ChatsAllArchivedGet {
    namespace Responses {
      /**
       * Response Get User Archived Chats Api V1 Chats All Archived Get
       */
      export type $200 = /* ChatResponse */ Components.Schemas.ChatResponse[];
    }
  }
  namespace GetUserByIdApiV1UsersUserIdGet {
    namespace Parameters {
      /**
       * User Id
       */
      export type UserId = string;
    }
    export interface PathParameters {
      user_id: /* User Id */ Parameters.UserId;
    }
    namespace Responses {
      export type $200 =
        /* UserResponse */ Components.Schemas.OpenWebuiRoutersUsersUserResponse;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetUserChatListByTagNameApiV1ChatsTagsPost {
    export type RequestBody =
      /* TagFilterForm */ Components.Schemas.TagFilterForm;
    namespace Responses {
      /**
       * Response Get User Chat List By Tag Name Api V1 Chats Tags Post
       */
      export type $200 =
        /* ChatTitleIdResponse */ Components.Schemas.ChatTitleIdResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetUserChatListByUserIdApiV1ChatsListUserUserIdGet {
    namespace Parameters {
      /**
       * Limit
       */
      export type Limit = number;
      /**
       * Skip
       */
      export type Skip = number;
      /**
       * User Id
       */
      export type UserId = string;
    }
    export interface PathParameters {
      user_id: /* User Id */ Parameters.UserId;
    }
    export interface QueryParameters {
      skip?: /* Skip */ Parameters.Skip;
      limit?: /* Limit */ Parameters.Limit;
    }
    namespace Responses {
      /**
       * Response Get User Chat List By User Id Api V1 Chats List User  User Id  Get
       */
      export type $200 =
        /* ChatTitleIdResponse */ Components.Schemas.ChatTitleIdResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetUserChatsApiV1ChatsAllGet {
    namespace Responses {
      /**
       * Response Get User Chats Api V1 Chats All Get
       */
      export type $200 = /* ChatResponse */ Components.Schemas.ChatResponse[];
    }
  }
  namespace GetUserGroupsApiV1UsersGroupsGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetUserInfoBySessionUserApiV1UsersUserInfoGet {
    namespace Responses {
      /**
       * Response Get User Info By Session User Api V1 Users User Info Get
       */
      export type $200 =
        /* Response Get User Info By Session User Api V1 Users User Info Get */ {
          [key: string]: any;
        } | null;
    }
  }
  namespace GetUserPermissionsApiV1UsersDefaultPermissionsGet {
    namespace Responses {
      export type $200 =
        /* UserPermissions */ Components.Schemas.UserPermissions;
    }
  }
  namespace GetUserPermissisionsApiV1UsersPermissionsGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetUserPinnedChatsApiV1ChatsPinnedGet {
    namespace Responses {
      /**
       * Response Get User Pinned Chats Api V1 Chats Pinned Get
       */
      export type $200 = /* ChatResponse */ Components.Schemas.ChatResponse[];
    }
  }
  namespace GetUserSettingsBySessionUserApiV1UsersUserSettingsGet {
    namespace Responses {
      /**
       * Response Get User Settings By Session User Api V1 Users User Settings Get
       */
      export type $200 =
        /* Response Get User Settings By Session User Api V1 Users User Settings Get */ /* UserSettings */ Components.Schemas.UserSettings | null;
    }
  }
  namespace GetUsersApiV1UsersGet {
    namespace Parameters {
      /**
       * Limit
       */
      export type Limit = /* Limit */ number | null;
      /**
       * Skip
       */
      export type Skip = /* Skip */ number | null;
    }
    export interface QueryParameters {
      skip?: /* Skip */ Parameters.Skip;
      limit?: /* Limit */ Parameters.Limit;
    }
    namespace Responses {
      /**
       * Response Get Users Api V1 Users  Get
       */
      export type $200 = /* UserModel */ Components.Schemas.UserModel[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace GetVoicesApiV1AudioVoicesGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace GetWebhookUrlApiWebhookGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace HealthcheckHealthGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace HealthcheckWithDbHealthDbGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace ImageGenerationsApiV1ImagesGenerationsPost {
    export type RequestBody =
      /* GenerateImageForm */ Components.Schemas.GenerateImageForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ImportChatApiV1ChatsImportPost {
    export type RequestBody =
      /* ChatImportForm */ Components.Schemas.ChatImportForm;
    namespace Responses {
      /**
       * Response Import Chat Api V1 Chats Import Post
       */
      export type $200 =
        /* Response Import Chat Api V1 Chats Import Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ImportConfigApiV1ConfigsImportPost {
    export type RequestBody =
      /* ImportConfigForm */ Components.Schemas.ImportConfigForm;
    namespace Responses {
      /**
       * Response Import Config Api V1 Configs Import Post
       */
      export interface $200 {}
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace LdapAuthApiV1AuthsLdapPost {
    export type RequestBody = /* LdapForm */ Components.Schemas.LdapForm;
    namespace Responses {
      export type $200 =
        /* SessionUserResponse */ Components.Schemas.SessionUserResponse;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ListFilesApiV1FilesGet {
    namespace Responses {
      /**
       * Response List Files Api V1 Files  Get
       */
      export type $200 =
        /* FileModelResponse */ Components.Schemas.FileModelResponse[];
    }
  }
  namespace ListTasksEndpointApiTasksGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace OauthCallbackOauthProviderCallbackGet {
    namespace Parameters {
      /**
       * Provider
       */
      export type Provider = string;
    }
    export interface PathParameters {
      provider: /* Provider */ Parameters.Provider;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace OauthLoginOauthProviderLoginGet {
    namespace Parameters {
      /**
       * Provider
       */
      export type Provider = string;
    }
    export interface PathParameters {
      provider: /* Provider */ Parameters.Provider;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace PinChatByIdApiV1ChatsIdPinPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Pin Chat By Id Api V1 Chats  Id  Pin Post
       */
      export type $200 =
        /* Response Pin Chat By Id Api V1 Chats  Id  Pin Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace PostNewMessageApiV1ChannelsIdMessagesPostPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* MessageForm */ Components.Schemas.MessageForm;
    namespace Responses {
      /**
       * Response Post New Message Api V1 Channels  Id  Messages Post Post
       */
      export type $200 =
        /* Response Post New Message Api V1 Channels  Id  Messages Post Post */ /* MessageModel */ Components.Schemas.MessageModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ProcessFileApiV1RetrievalProcessFilePost {
    export type RequestBody =
      /* ProcessFileForm */ Components.Schemas.ProcessFileForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ProcessFilesBatchApiV1RetrievalProcessFilesBatchPost {
    export type RequestBody =
      /* BatchProcessFilesForm */ Components.Schemas.BatchProcessFilesForm;
    namespace Responses {
      export type $200 =
        /* BatchProcessFilesResponse */ Components.Schemas.BatchProcessFilesResponse;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ProcessTextApiV1RetrievalProcessTextPost {
    export type RequestBody =
      /* ProcessTextForm */ Components.Schemas.ProcessTextForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ProcessWebApiV1RetrievalProcessWebPost {
    export type RequestBody =
      /* ProcessUrlForm */ Components.Schemas.ProcessUrlForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ProcessWebSearchApiV1RetrievalProcessWebSearchPost {
    export type RequestBody = /* SearchForm */ Components.Schemas.SearchForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ProcessYoutubeVideoApiV1RetrievalProcessYoutubePost {
    export type RequestBody =
      /* ProcessUrlForm */ Components.Schemas.ProcessUrlForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ProxyOpenaiPathPost {
    namespace Parameters {
      /**
       * Path
       */
      export type Path = string;
    }
    export interface PathParameters {
      path: /* Path */ Parameters.Path;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace PullModelOllamaApiPullPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = number;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* ModelNameForm */ Components.Schemas.ModelNameForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace PullModelOllamaApiPullUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = number;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* ModelNameForm */ Components.Schemas.ModelNameForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace PushModelOllamaApiPushDelete {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* PushModelForm */ Components.Schemas.PushModelForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace PushModelOllamaApiPushUrlIdxDelete {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* PushModelForm */ Components.Schemas.PushModelForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace QueryCollectionHandlerApiV1RetrievalQueryCollectionPost {
    export type RequestBody =
      /* QueryCollectionsForm */ Components.Schemas.QueryCollectionsForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace QueryDocHandlerApiV1RetrievalQueryDocPost {
    export type RequestBody =
      /* QueryDocForm */ Components.Schemas.QueryDocForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace QueryMemoryApiV1MemoriesQueryPost {
    export type RequestBody =
      /* QueryMemoryForm */ Components.Schemas.QueryMemoryForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace RemoveFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* KnowledgeFileIdForm */ Components.Schemas.KnowledgeFileIdForm;
    namespace Responses {
      /**
       * Response Remove File From Knowledge By Id Api V1 Knowledge  Id  File Remove Post
       */
      export type $200 =
        /* Response Remove File From Knowledge By Id Api V1 Knowledge  Id  File Remove Post */ /* KnowledgeFilesResponse */ Components.Schemas.KnowledgeFilesResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace RemoveReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
      /**
       * Message Id
       */
      export type MessageId = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
      message_id: /* Message Id */ Parameters.MessageId;
    }
    export type RequestBody =
      /* ReactionForm */ Components.Schemas.ReactionForm;
    namespace Responses {
      /**
       * Response Remove Reaction By Id And User Id And Name Api V1 Channels  Id  Messages  Message Id  Reactions Remove Post
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ResetKnowledgeByIdApiV1KnowledgeIdResetPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Reset Knowledge By Id Api V1 Knowledge  Id  Reset Post
       */
      export type $200 =
        /* Response Reset Knowledge By Id Api V1 Knowledge  Id  Reset Post */ /* KnowledgeResponse */ Components.Schemas.KnowledgeResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ResetMemoryFromVectorDbApiV1MemoriesResetPost {
    namespace Responses {
      /**
       * Response Reset Memory From Vector Db Api V1 Memories Reset Post
       */
      export type $200 = boolean;
    }
  }
  namespace ResetUploadDirApiV1RetrievalResetUploadsPost {
    namespace Responses {
      /**
       * Response Reset Upload Dir Api V1 Retrieval Reset Uploads Post
       */
      export type $200 = boolean;
    }
  }
  namespace ResetVectorDbApiV1RetrievalResetDbPost {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace SearchUserChatsApiV1ChatsSearchGet {
    namespace Parameters {
      /**
       * Page
       */
      export type Page = /* Page */ number | null;
      /**
       * Text
       */
      export type Text = string;
    }
    export interface QueryParameters {
      text: /* Text */ Parameters.Text;
      page?: /* Page */ Parameters.Page;
    }
    namespace Responses {
      /**
       * Response Search User Chats Api V1 Chats Search Get
       */
      export type $200 =
        /* ChatTitleIdResponse */ Components.Schemas.ChatTitleIdResponse[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace SetBannersApiV1ConfigsBannersPost {
    export type RequestBody =
      /* SetBannersForm */ Components.Schemas.SetBannersForm;
    namespace Responses {
      /**
       * Response Set Banners Api V1 Configs Banners Post
       */
      export type $200 = /* BannerModel */ Components.Schemas.BannerModel[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace SetCodeExecutionConfigApiV1ConfigsCodeExecutionPost {
    export type RequestBody =
      /* CodeInterpreterConfigForm */ Components.Schemas.CodeInterpreterConfigForm;
    namespace Responses {
      export type $200 =
        /* CodeInterpreterConfigForm */ Components.Schemas.CodeInterpreterConfigForm;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace SetDefaultSuggestionsApiV1ConfigsSuggestionsPost {
    export type RequestBody =
      /* SetDefaultSuggestionsForm */ Components.Schemas.SetDefaultSuggestionsForm;
    namespace Responses {
      /**
       * Response Set Default Suggestions Api V1 Configs Suggestions Post
       */
      export type $200 =
        /* PromptSuggestion */ Components.Schemas.PromptSuggestion[];
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace SetDirectConnectionsConfigApiV1ConfigsDirectConnectionsPost {
    export type RequestBody =
      /* DirectConnectionsConfigForm */ Components.Schemas.DirectConnectionsConfigForm;
    namespace Responses {
      export type $200 =
        /* DirectConnectionsConfigForm */ Components.Schemas.DirectConnectionsConfigForm;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace SetModelsConfigApiV1ConfigsModelsPost {
    export type RequestBody =
      /* ModelsConfigForm */ Components.Schemas.ModelsConfigForm;
    namespace Responses {
      export type $200 =
        /* ModelsConfigForm */ Components.Schemas.ModelsConfigForm;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ShareChatByIdApiV1ChatsIdSharePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Share Chat By Id Api V1 Chats  Id  Share Post
       */
      export type $200 =
        /* Response Share Chat By Id Api V1 Chats  Id  Share Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ShowModelInfoOllamaApiShowPost {
    export type RequestBody =
      /* ModelNameForm */ Components.Schemas.ModelNameForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace SigninApiV1AuthsSigninPost {
    export type RequestBody = /* SigninForm */ Components.Schemas.SigninForm;
    namespace Responses {
      export type $200 =
        /* SessionUserResponse */ Components.Schemas.SessionUserResponse;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace SignoutApiV1AuthsSignoutGet {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace SignupApiV1AuthsSignupPost {
    export type RequestBody = /* SignupForm */ Components.Schemas.SignupForm;
    namespace Responses {
      export type $200 =
        /* SessionUserResponse */ Components.Schemas.SessionUserResponse;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace SpeechApiV1AudioSpeechPost {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace SpeechOpenaiAudioSpeechPost {
    namespace Responses {
      export type $200 = any;
    }
  }
  namespace StopTaskEndpointApiTasksStopTaskIdPost {
    namespace Parameters {
      /**
       * Task Id
       */
      export type TaskId = string;
    }
    export interface PathParameters {
      task_id: /* Task Id */ Parameters.TaskId;
    }
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ToggleFunctionByIdApiV1FunctionsIdIdTogglePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Toggle Function By Id Api V1 Functions Id  Id  Toggle Post
       */
      export type $200 =
        /* Response Toggle Function By Id Api V1 Functions Id  Id  Toggle Post */ /* FunctionModel */ Components.Schemas.FunctionModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ToggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Toggle Global By Id Api V1 Functions Id  Id  Toggle Global Post
       */
      export type $200 =
        /* Response Toggle Global By Id Api V1 Functions Id  Id  Toggle Global Post */ /* FunctionModel */ Components.Schemas.FunctionModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace ToggleModelByIdApiV1ModelsModelTogglePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface QueryParameters {
      id: /* Id */ Parameters.Id;
    }
    namespace Responses {
      /**
       * Response Toggle Model By Id Api V1 Models Model Toggle Post
       */
      export type $200 =
        /* Response Toggle Model By Id Api V1 Models Model Toggle Post */ /* ModelResponse */ Components.Schemas.ModelResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace TranscriptionApiV1AudioTranscriptionsPost {
    export type RequestBody =
      /* Body_transcription_api_v1_audio_transcriptions_post */ Components.Schemas.BodyTranscriptionApiV1AudioTranscriptionsPost;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateAdminConfigApiV1AuthsAdminConfigPost {
    export type RequestBody = /* AdminConfig */ Components.Schemas.AdminConfig;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateAudioConfigApiV1AudioConfigUpdatePost {
    export type RequestBody =
      /* AudioConfigUpdateForm */ Components.Schemas.AudioConfigUpdateForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateChannelByIdApiV1ChannelsIdUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* ChannelForm */ Components.Schemas.ChannelForm;
    namespace Responses {
      /**
       * Response Update Channel By Id Api V1 Channels  Id  Update Post
       */
      export type $200 =
        /* Response Update Channel By Id Api V1 Channels  Id  Update Post */ /* ChannelModel */ Components.Schemas.ChannelModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateChatByIdApiV1ChatsIdPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* ChatForm */ Components.Schemas.ChatForm;
    namespace Responses {
      /**
       * Response Update Chat By Id Api V1 Chats  Id  Post
       */
      export type $200 =
        /* Response Update Chat By Id Api V1 Chats  Id  Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateChatFolderIdByIdApiV1ChatsIdFolderPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* ChatFolderIdForm */ Components.Schemas.ChatFolderIdForm;
    namespace Responses {
      /**
       * Response Update Chat Folder Id By Id Api V1 Chats  Id  Folder Post
       */
      export type $200 =
        /* Response Update Chat Folder Id By Id Api V1 Chats  Id  Folder Post */ /* ChatResponse */ Components.Schemas.ChatResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateConfigApiV1EvaluationsConfigPost {
    export type RequestBody =
      /* UpdateConfigForm */ Components.Schemas.UpdateConfigForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateConfigApiV1ImagesConfigUpdatePost {
    export type RequestBody = /* ConfigForm */ Components.Schemas.ConfigForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateConfigOllamaConfigUpdatePost {
    export type RequestBody =
      /* OllamaConfigForm */ Components.Schemas.OpenWebuiRoutersOllamaOllamaConfigForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateConfigOpenaiConfigUpdatePost {
    export type RequestBody =
      /* OpenAIConfigForm */ Components.Schemas.OpenWebuiRoutersOpenaiOpenAIConfigForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost {
    export type RequestBody =
      /* EmbeddingModelUpdateForm */ Components.Schemas.EmbeddingModelUpdateForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFeedbackByIdApiV1EvaluationsFeedbackIdPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* FeedbackForm */ Components.Schemas.FeedbackForm;
    namespace Responses {
      export type $200 = /* FeedbackModel */ Components.Schemas.FeedbackModel;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFileDataContentByIdApiV1FilesIdDataContentUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* ContentForm */ Components.Schemas.ContentForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* KnowledgeFileIdForm */ Components.Schemas.KnowledgeFileIdForm;
    namespace Responses {
      /**
       * Response Update File From Knowledge By Id Api V1 Knowledge  Id  File Update Post
       */
      export type $200 =
        /* Response Update File From Knowledge By Id Api V1 Knowledge  Id  File Update Post */ /* KnowledgeFilesResponse */ Components.Schemas.KnowledgeFilesResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* FolderIsExpandedForm */ Components.Schemas.FolderIsExpandedForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFolderNameByIdApiV1FoldersIdUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* FolderForm */ Components.Schemas.FolderForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFolderParentIdByIdApiV1FoldersIdUpdateParentPost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* FolderParentIdForm */ Components.Schemas.FolderParentIdForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFunctionByIdApiV1FunctionsIdIdUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* FunctionForm */ Components.Schemas.FunctionForm;
    namespace Responses {
      /**
       * Response Update Function By Id Api V1 Functions Id  Id  Update Post
       */
      export type $200 =
        /* Response Update Function By Id Api V1 Functions Id  Id  Update Post */ /* FunctionModel */ Components.Schemas.FunctionModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      /**
       * Response Update Function User Valves By Id Api V1 Functions Id  Id  Valves User Update Post
       */
      export type $200 =
        /* Response Update Function User Valves By Id Api V1 Functions Id  Id  Valves User Update Post */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      /**
       * Response Update Function Valves By Id Api V1 Functions Id  Id  Valves Update Post
       */
      export type $200 =
        /* Response Update Function Valves By Id Api V1 Functions Id  Id  Valves Update Post */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateGroupByIdApiV1GroupsIdIdUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* GroupUpdateForm */ Components.Schemas.GroupUpdateForm;
    namespace Responses {
      /**
       * Response Update Group By Id Api V1 Groups Id  Id  Update Post
       */
      export type $200 =
        /* Response Update Group By Id Api V1 Groups Id  Id  Update Post */ /* GroupResponse */ Components.Schemas.GroupResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateImageConfigApiV1ImagesImageConfigUpdatePost {
    export type RequestBody =
      /* ImageConfigForm */ Components.Schemas.ImageConfigForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateKnowledgeByIdApiV1KnowledgeIdUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody =
      /* KnowledgeForm */ Components.Schemas.KnowledgeForm;
    namespace Responses {
      /**
       * Response Update Knowledge By Id Api V1 Knowledge  Id  Update Post
       */
      export type $200 =
        /* Response Update Knowledge By Id Api V1 Knowledge  Id  Update Post */ /* KnowledgeFilesResponse */ Components.Schemas.KnowledgeFilesResponse | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateLdapConfigApiV1AuthsAdminConfigLdapPost {
    export type RequestBody =
      /* LdapConfigForm */ Components.Schemas.LdapConfigForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateLdapServerApiV1AuthsAdminConfigLdapServerPost {
    export type RequestBody =
      /* LdapServerConfig */ Components.Schemas.LdapServerConfig;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateMemoryByIdApiV1MemoriesMemoryIdUpdatePost {
    namespace Parameters {
      /**
       * Memory Id
       */
      export type MemoryId = string;
    }
    export interface PathParameters {
      memory_id: /* Memory Id */ Parameters.MemoryId;
    }
    export type RequestBody =
      /* MemoryUpdateModel */ Components.Schemas.MemoryUpdateModel;
    namespace Responses {
      /**
       * Response Update Memory By Id Api V1 Memories  Memory Id  Update Post
       */
      export type $200 =
        /* Response Update Memory By Id Api V1 Memories  Memory Id  Update Post */ /* MemoryModel */ Components.Schemas.MemoryModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
      /**
       * Message Id
       */
      export type MessageId = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
      message_id: /* Message Id */ Parameters.MessageId;
    }
    export type RequestBody = /* MessageForm */ Components.Schemas.MessageForm;
    namespace Responses {
      /**
       * Response Update Message By Id Api V1 Channels  Id  Messages  Message Id  Update Post
       */
      export type $200 =
        /* Response Update Message By Id Api V1 Channels  Id  Messages  Message Id  Update Post */ /* MessageModel */ Components.Schemas.MessageModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateModelByIdApiV1ModelsModelUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface QueryParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* ModelForm */ Components.Schemas.ModelForm;
    namespace Responses {
      /**
       * Response Update Model By Id Api V1 Models Model Update Post
       */
      export type $200 =
        /* Response Update Model By Id Api V1 Models Model Update Post */ /* ModelModel */ Components.Schemas.ModelModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdatePasswordApiV1AuthsUpdatePasswordPost {
    export type RequestBody =
      /* UpdatePasswordForm */ Components.Schemas.UpdatePasswordForm;
    namespace Responses {
      /**
       * Response Update Password Api V1 Auths Update Password Post
       */
      export type $200 = boolean;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost {
    namespace Parameters {
      /**
       * Pipeline Id
       */
      export type PipelineId = string;
      /**
       * Urlidx
       */
      export type UrlIdx = /* Urlidx */ number | null;
    }
    export interface PathParameters {
      pipeline_id: /* Pipeline Id */ Parameters.PipelineId;
    }
    export interface QueryParameters {
      urlIdx: /* Urlidx */ Parameters.UrlIdx;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateProfileApiV1AuthsUpdateProfilePost {
    export type RequestBody =
      /* UpdateProfileForm */ Components.Schemas.UpdateProfileForm;
    namespace Responses {
      export type $200 =
        /* UserResponse */ Components.Schemas.OpenWebuiModelsAuthsUserResponse;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdatePromptByCommandApiV1PromptsCommandCommandUpdatePost {
    namespace Parameters {
      /**
       * Command
       */
      export type Command = string;
    }
    export interface PathParameters {
      command: /* Command */ Parameters.Command;
    }
    export type RequestBody = /* PromptForm */ Components.Schemas.PromptForm;
    namespace Responses {
      /**
       * Response Update Prompt By Command Api V1 Prompts Command  Command  Update Post
       */
      export type $200 =
        /* Response Update Prompt By Command Api V1 Prompts Command  Command  Update Post */ /* PromptModel */ Components.Schemas.PromptModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateQuerySettingsApiV1RetrievalQuerySettingsUpdatePost {
    export type RequestBody =
      /* QuerySettingsForm */ Components.Schemas.QuerySettingsForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateRagConfigApiV1RetrievalConfigUpdatePost {
    export type RequestBody =
      /* ConfigUpdateForm */ Components.Schemas.ConfigUpdateForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateRerankingConfigApiV1RetrievalRerankingUpdatePost {
    export type RequestBody =
      /* RerankingModelUpdateForm */ Components.Schemas.RerankingModelUpdateForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateTaskConfigApiV1TasksConfigUpdatePost {
    export type RequestBody =
      /* TaskConfigForm */ Components.Schemas.TaskConfigForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateToolsByIdApiV1ToolsIdIdUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    export type RequestBody = /* ToolForm */ Components.Schemas.ToolForm;
    namespace Responses {
      /**
       * Response Update Tools By Id Api V1 Tools Id  Id  Update Post
       */
      export type $200 =
        /* Response Update Tools By Id Api V1 Tools Id  Id  Update Post */ /* ToolModel */ Components.Schemas.ToolModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      /**
       * Response Update Tools User Valves By Id Api V1 Tools Id  Id  Valves User Update Post
       */
      export type $200 =
        /* Response Update Tools User Valves By Id Api V1 Tools Id  Id  Valves User Update Post */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost {
    namespace Parameters {
      /**
       * Id
       */
      export type Id = string;
    }
    export interface PathParameters {
      id: /* Id */ Parameters.Id;
    }
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      /**
       * Response Update Tools Valves By Id Api V1 Tools Id  Id  Valves Update Post
       */
      export type $200 =
        /* Response Update Tools Valves By Id Api V1 Tools Id  Id  Valves Update Post */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateUserByIdApiV1UsersUserIdUpdatePost {
    namespace Parameters {
      /**
       * User Id
       */
      export type UserId = string;
    }
    export interface PathParameters {
      user_id: /* User Id */ Parameters.UserId;
    }
    export type RequestBody =
      /* UserUpdateForm */ Components.Schemas.UserUpdateForm;
    namespace Responses {
      /**
       * Response Update User By Id Api V1 Users  User Id  Update Post
       */
      export type $200 =
        /* Response Update User By Id Api V1 Users  User Id  Update Post */ /* UserModel */ Components.Schemas.UserModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost {
    /**
     * Form Data
     */
    export interface RequestBody {}
    namespace Responses {
      /**
       * Response Update User Info By Session User Api V1 Users User Info Update Post
       */
      export type $200 =
        /* Response Update User Info By Session User Api V1 Users User Info Update Post */ {
          [key: string]: any;
        } | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateUserPermissionsApiV1UsersDefaultPermissionsPost {
    export type RequestBody =
      /* UserPermissions */ Components.Schemas.UserPermissions;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateUserRoleApiV1UsersUpdateRolePost {
    export type RequestBody =
      /* UserRoleUpdateForm */ Components.Schemas.UserRoleUpdateForm;
    namespace Responses {
      /**
       * Response Update User Role Api V1 Users Update Role Post
       */
      export type $200 =
        /* Response Update User Role Api V1 Users Update Role Post */ /* UserModel */ Components.Schemas.UserModel | null;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost {
    export type RequestBody =
      /* UserSettings */ Components.Schemas.UserSettings;
    namespace Responses {
      export type $200 = /* UserSettings */ Components.Schemas.UserSettings;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UpdateWebhookUrlApiWebhookPost {
    export type RequestBody = /* UrlForm */ Components.Schemas.UrlForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UploadFileApiV1FilesPost {
    export type RequestBody =
      /* Body_upload_file_api_v1_files__post */ Components.Schemas.BodyUploadFileApiV1FilesPost;
    namespace Responses {
      export type $200 =
        /* FileModelResponse */ Components.Schemas.FileModelResponse;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UploadModelOllamaModelsUploadPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface QueryParameters {
      url_idx?: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* Body_upload_model_ollama_models_upload_post */ Components.Schemas.BodyUploadModelOllamaModelsUploadPost;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UploadModelOllamaModelsUploadUrlIdxPost {
    namespace Parameters {
      /**
       * Url Idx
       */
      export type UrlIdx = /* Url Idx */ number | null;
    }
    export interface PathParameters {
      url_idx: /* Url Idx */ Parameters.UrlIdx;
    }
    export type RequestBody =
      /* Body_upload_model_ollama_models_upload__url_idx__post */ Components.Schemas.BodyUploadModelOllamaModelsUploadUrlIdxPost;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace UploadPipelineApiV1PipelinesUploadPost {
    export type RequestBody =
      /* Body_upload_pipeline_api_v1_pipelines_upload_post */ Components.Schemas.BodyUploadPipelineApiV1PipelinesUploadPost;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace VerifyConnectionOllamaVerifyPost {
    export type RequestBody =
      /* ConnectionVerificationForm */ Components.Schemas.OpenWebuiRoutersOllamaConnectionVerificationForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace VerifyConnectionOpenaiVerifyPost {
    export type RequestBody =
      /* ConnectionVerificationForm */ Components.Schemas.OpenWebuiRoutersOpenaiConnectionVerificationForm;
    namespace Responses {
      export type $200 = any;
      export type $422 =
        /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
    }
  }
  namespace VerifyUrlApiV1ImagesConfigUrlVerifyGet {
    namespace Responses {
      export type $200 = any;
    }
  }
}

export interface OperationMethods {
  /**
   * get_status_ollama__get - Get Status
   */
  "get_status_ollama__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetStatusOllamaGet.Responses.$200>;
  /**
   * get_status_ollama__head - Get Status
   */
  "get_status_ollama__head"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetStatusOllamaHead.Responses.$200>;
  /**
   * verify_connection_ollama_verify_post - Verify Connection
   */
  "verify_connection_ollama_verify_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.VerifyConnectionOllamaVerifyPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.VerifyConnectionOllamaVerifyPost.Responses.$200>;
  /**
   * get_config_ollama_config_get - Get Config
   */
  "get_config_ollama_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetConfigOllamaConfigGet.Responses.$200>;
  /**
   * update_config_ollama_config_update_post - Update Config
   */
  "update_config_ollama_config_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateConfigOllamaConfigUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateConfigOllamaConfigUpdatePost.Responses.$200>;
  /**
   * get_ollama_tags_ollama_api_tags__url_idx__get - Get Ollama Tags
   */
  "get_ollama_tags_ollama_api_tags__url_idx__get"(
    parameters?: Parameters<Paths.GetOllamaTagsOllamaApiTagsUrlIdxGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOllamaTagsOllamaApiTagsUrlIdxGet.Responses.$200>;
  /**
   * get_ollama_tags_ollama_api_tags_get - Get Ollama Tags
   */
  "get_ollama_tags_ollama_api_tags_get"(
    parameters?: Parameters<Paths.GetOllamaTagsOllamaApiTagsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOllamaTagsOllamaApiTagsGet.Responses.$200>;
  /**
   * get_ollama_versions_ollama_api_version__url_idx__get - Get Ollama Versions
   */
  "get_ollama_versions_ollama_api_version__url_idx__get"(
    parameters?: Parameters<Paths.GetOllamaVersionsOllamaApiVersionUrlIdxGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOllamaVersionsOllamaApiVersionUrlIdxGet.Responses.$200>;
  /**
   * get_ollama_versions_ollama_api_version_get - Get Ollama Versions
   */
  "get_ollama_versions_ollama_api_version_get"(
    parameters?: Parameters<Paths.GetOllamaVersionsOllamaApiVersionGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOllamaVersionsOllamaApiVersionGet.Responses.$200>;
  /**
   * get_ollama_loaded_models_ollama_api_ps_get - Get Ollama Loaded Models
   *
   * List models that are currently loaded into Ollama memory, and which node they are loaded on.
   */
  "get_ollama_loaded_models_ollama_api_ps_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOllamaLoadedModelsOllamaApiPsGet.Responses.$200>;
  /**
   * pull_model_ollama_api_pull__url_idx__post - Pull Model
   */
  "pull_model_ollama_api_pull__url_idx__post"(
    parameters?: Parameters<Paths.PullModelOllamaApiPullUrlIdxPost.PathParameters> | null,
    data?: Paths.PullModelOllamaApiPullUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PullModelOllamaApiPullUrlIdxPost.Responses.$200>;
  /**
   * pull_model_ollama_api_pull_post - Pull Model
   */
  "pull_model_ollama_api_pull_post"(
    parameters?: Parameters<Paths.PullModelOllamaApiPullPost.QueryParameters> | null,
    data?: Paths.PullModelOllamaApiPullPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PullModelOllamaApiPullPost.Responses.$200>;
  /**
   * push_model_ollama_api_push__url_idx__delete - Push Model
   */
  "push_model_ollama_api_push__url_idx__delete"(
    parameters?: Parameters<Paths.PushModelOllamaApiPushUrlIdxDelete.PathParameters> | null,
    data?: Paths.PushModelOllamaApiPushUrlIdxDelete.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PushModelOllamaApiPushUrlIdxDelete.Responses.$200>;
  /**
   * push_model_ollama_api_push_delete - Push Model
   */
  "push_model_ollama_api_push_delete"(
    parameters?: Parameters<Paths.PushModelOllamaApiPushDelete.QueryParameters> | null,
    data?: Paths.PushModelOllamaApiPushDelete.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PushModelOllamaApiPushDelete.Responses.$200>;
  /**
   * create_model_ollama_api_create__url_idx__post - Create Model
   */
  "create_model_ollama_api_create__url_idx__post"(
    parameters?: Parameters<Paths.CreateModelOllamaApiCreateUrlIdxPost.PathParameters> | null,
    data?: Paths.CreateModelOllamaApiCreateUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateModelOllamaApiCreateUrlIdxPost.Responses.$200>;
  /**
   * create_model_ollama_api_create_post - Create Model
   */
  "create_model_ollama_api_create_post"(
    parameters?: Parameters<Paths.CreateModelOllamaApiCreatePost.QueryParameters> | null,
    data?: Paths.CreateModelOllamaApiCreatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateModelOllamaApiCreatePost.Responses.$200>;
  /**
   * copy_model_ollama_api_copy__url_idx__post - Copy Model
   */
  "copy_model_ollama_api_copy__url_idx__post"(
    parameters?: Parameters<Paths.CopyModelOllamaApiCopyUrlIdxPost.PathParameters> | null,
    data?: Paths.CopyModelOllamaApiCopyUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CopyModelOllamaApiCopyUrlIdxPost.Responses.$200>;
  /**
   * copy_model_ollama_api_copy_post - Copy Model
   */
  "copy_model_ollama_api_copy_post"(
    parameters?: Parameters<Paths.CopyModelOllamaApiCopyPost.QueryParameters> | null,
    data?: Paths.CopyModelOllamaApiCopyPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CopyModelOllamaApiCopyPost.Responses.$200>;
  /**
   * delete_model_ollama_api_delete__url_idx__delete - Delete Model
   */
  "delete_model_ollama_api_delete__url_idx__delete"(
    parameters?: Parameters<Paths.DeleteModelOllamaApiDeleteUrlIdxDelete.PathParameters> | null,
    data?: Paths.DeleteModelOllamaApiDeleteUrlIdxDelete.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteModelOllamaApiDeleteUrlIdxDelete.Responses.$200>;
  /**
   * delete_model_ollama_api_delete_delete - Delete Model
   */
  "delete_model_ollama_api_delete_delete"(
    parameters?: Parameters<Paths.DeleteModelOllamaApiDeleteDelete.QueryParameters> | null,
    data?: Paths.DeleteModelOllamaApiDeleteDelete.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteModelOllamaApiDeleteDelete.Responses.$200>;
  /**
   * show_model_info_ollama_api_show_post - Show Model Info
   */
  "show_model_info_ollama_api_show_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ShowModelInfoOllamaApiShowPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ShowModelInfoOllamaApiShowPost.Responses.$200>;
  /**
   * embed_ollama_api_embed__url_idx__post - Embed
   */
  "embed_ollama_api_embed__url_idx__post"(
    parameters?: Parameters<Paths.EmbedOllamaApiEmbedUrlIdxPost.PathParameters> | null,
    data?: Paths.EmbedOllamaApiEmbedUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EmbedOllamaApiEmbedUrlIdxPost.Responses.$200>;
  /**
   * embed_ollama_api_embed_post - Embed
   */
  "embed_ollama_api_embed_post"(
    parameters?: Parameters<Paths.EmbedOllamaApiEmbedPost.QueryParameters> | null,
    data?: Paths.EmbedOllamaApiEmbedPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EmbedOllamaApiEmbedPost.Responses.$200>;
  /**
   * embeddings_ollama_api_embeddings__url_idx__post - Embeddings
   */
  "embeddings_ollama_api_embeddings__url_idx__post"(
    parameters?: Parameters<Paths.EmbeddingsOllamaApiEmbeddingsUrlIdxPost.PathParameters> | null,
    data?: Paths.EmbeddingsOllamaApiEmbeddingsUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EmbeddingsOllamaApiEmbeddingsUrlIdxPost.Responses.$200>;
  /**
   * embeddings_ollama_api_embeddings_post - Embeddings
   */
  "embeddings_ollama_api_embeddings_post"(
    parameters?: Parameters<Paths.EmbeddingsOllamaApiEmbeddingsPost.QueryParameters> | null,
    data?: Paths.EmbeddingsOllamaApiEmbeddingsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.EmbeddingsOllamaApiEmbeddingsPost.Responses.$200>;
  /**
   * generate_completion_ollama_api_generate__url_idx__post - Generate Completion
   */
  "generate_completion_ollama_api_generate__url_idx__post"(
    parameters?: Parameters<Paths.GenerateCompletionOllamaApiGenerateUrlIdxPost.PathParameters> | null,
    data?: Paths.GenerateCompletionOllamaApiGenerateUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateCompletionOllamaApiGenerateUrlIdxPost.Responses.$200>;
  /**
   * generate_completion_ollama_api_generate_post - Generate Completion
   */
  "generate_completion_ollama_api_generate_post"(
    parameters?: Parameters<Paths.GenerateCompletionOllamaApiGeneratePost.QueryParameters> | null,
    data?: Paths.GenerateCompletionOllamaApiGeneratePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateCompletionOllamaApiGeneratePost.Responses.$200>;
  /**
   * generate_chat_completion_ollama_api_chat__url_idx__post - Generate Chat Completion
   */
  "generate_chat_completion_ollama_api_chat__url_idx__post"(
    parameters?: Parameters<
      Paths.GenerateChatCompletionOllamaApiChatUrlIdxPost.QueryParameters &
        Paths.GenerateChatCompletionOllamaApiChatUrlIdxPost.PathParameters
    > | null,
    data?: Paths.GenerateChatCompletionOllamaApiChatUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateChatCompletionOllamaApiChatUrlIdxPost.Responses.$200>;
  /**
   * generate_chat_completion_ollama_api_chat_post - Generate Chat Completion
   */
  "generate_chat_completion_ollama_api_chat_post"(
    parameters?: Parameters<Paths.GenerateChatCompletionOllamaApiChatPost.QueryParameters> | null,
    data?: Paths.GenerateChatCompletionOllamaApiChatPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateChatCompletionOllamaApiChatPost.Responses.$200>;
  /**
   * generate_openai_completion_ollama_v1_completions__url_idx__post - Generate Openai Completion
   */
  "generate_openai_completion_ollama_v1_completions__url_idx__post"(
    parameters?: Parameters<Paths.GenerateOpenaiCompletionOllamaV1CompletionsUrlIdxPost.PathParameters> | null,
    data?: Paths.GenerateOpenaiCompletionOllamaV1CompletionsUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateOpenaiCompletionOllamaV1CompletionsUrlIdxPost.Responses.$200>;
  /**
   * generate_openai_completion_ollama_v1_completions_post - Generate Openai Completion
   */
  "generate_openai_completion_ollama_v1_completions_post"(
    parameters?: Parameters<Paths.GenerateOpenaiCompletionOllamaV1CompletionsPost.QueryParameters> | null,
    data?: Paths.GenerateOpenaiCompletionOllamaV1CompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateOpenaiCompletionOllamaV1CompletionsPost.Responses.$200>;
  /**
   * generate_openai_chat_completion_ollama_v1_chat_completions__url_idx__post - Generate Openai Chat Completion
   */
  "generate_openai_chat_completion_ollama_v1_chat_completions__url_idx__post"(
    parameters?: Parameters<Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost.PathParameters> | null,
    data?: Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost.Responses.$200>;
  /**
   * generate_openai_chat_completion_ollama_v1_chat_completions_post - Generate Openai Chat Completion
   */
  "generate_openai_chat_completion_ollama_v1_chat_completions_post"(
    parameters?: Parameters<Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsPost.QueryParameters> | null,
    data?: Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsPost.Responses.$200>;
  /**
   * get_openai_models_ollama_v1_models__url_idx__get - Get Openai Models
   */
  "get_openai_models_ollama_v1_models__url_idx__get"(
    parameters?: Parameters<Paths.GetOpenaiModelsOllamaV1ModelsUrlIdxGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOpenaiModelsOllamaV1ModelsUrlIdxGet.Responses.$200>;
  /**
   * get_openai_models_ollama_v1_models_get - Get Openai Models
   */
  "get_openai_models_ollama_v1_models_get"(
    parameters?: Parameters<Paths.GetOpenaiModelsOllamaV1ModelsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOpenaiModelsOllamaV1ModelsGet.Responses.$200>;
  /**
   * download_model_ollama_models_download__url_idx__post - Download Model
   */
  "download_model_ollama_models_download__url_idx__post"(
    parameters?: Parameters<Paths.DownloadModelOllamaModelsDownloadUrlIdxPost.PathParameters> | null,
    data?: Paths.DownloadModelOllamaModelsDownloadUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DownloadModelOllamaModelsDownloadUrlIdxPost.Responses.$200>;
  /**
   * download_model_ollama_models_download_post - Download Model
   */
  "download_model_ollama_models_download_post"(
    parameters?: Parameters<Paths.DownloadModelOllamaModelsDownloadPost.QueryParameters> | null,
    data?: Paths.DownloadModelOllamaModelsDownloadPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DownloadModelOllamaModelsDownloadPost.Responses.$200>;
  /**
   * upload_model_ollama_models_upload__url_idx__post - Upload Model
   */
  "upload_model_ollama_models_upload__url_idx__post"(
    parameters?: Parameters<Paths.UploadModelOllamaModelsUploadUrlIdxPost.PathParameters> | null,
    data?: Paths.UploadModelOllamaModelsUploadUrlIdxPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UploadModelOllamaModelsUploadUrlIdxPost.Responses.$200>;
  /**
   * upload_model_ollama_models_upload_post - Upload Model
   */
  "upload_model_ollama_models_upload_post"(
    parameters?: Parameters<Paths.UploadModelOllamaModelsUploadPost.QueryParameters> | null,
    data?: Paths.UploadModelOllamaModelsUploadPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UploadModelOllamaModelsUploadPost.Responses.$200>;
  /**
   * get_config_openai_config_get - Get Config
   */
  "get_config_openai_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetConfigOpenaiConfigGet.Responses.$200>;
  /**
   * update_config_openai_config_update_post - Update Config
   */
  "update_config_openai_config_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateConfigOpenaiConfigUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateConfigOpenaiConfigUpdatePost.Responses.$200>;
  /**
   * speech_openai_audio_speech_post - Speech
   */
  "speech_openai_audio_speech_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SpeechOpenaiAudioSpeechPost.Responses.$200>;
  /**
   * get_models_openai_models__url_idx__get - Get Models
   */
  "get_models_openai_models__url_idx__get"(
    parameters?: Parameters<Paths.GetModelsOpenaiModelsUrlIdxGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetModelsOpenaiModelsUrlIdxGet.Responses.$200>;
  /**
   * get_models_openai_models_get - Get Models
   */
  "get_models_openai_models_get"(
    parameters?: Parameters<Paths.GetModelsOpenaiModelsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetModelsOpenaiModelsGet.Responses.$200>;
  /**
   * verify_connection_openai_verify_post - Verify Connection
   */
  "verify_connection_openai_verify_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.VerifyConnectionOpenaiVerifyPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.VerifyConnectionOpenaiVerifyPost.Responses.$200>;
  /**
   * generate_chat_completion_openai_chat_completions_post - Generate Chat Completion
   */
  "generate_chat_completion_openai_chat_completions_post"(
    parameters?: Parameters<Paths.GenerateChatCompletionOpenaiChatCompletionsPost.QueryParameters> | null,
    data?: Paths.GenerateChatCompletionOpenaiChatCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateChatCompletionOpenaiChatCompletionsPost.Responses.$200>;
  /**
   * proxy_openai__path__post - Proxy
   *
   * Deprecated: proxy all requests to OpenAI API
   */
  "proxy_openai__path__post"(
    parameters?: Parameters<Paths.ProxyOpenaiPathPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProxyOpenaiPathPost.Responses.$200>;
  /**
   * proxy_openai__path__post - Proxy
   *
   * Deprecated: proxy all requests to OpenAI API
   */
  "proxy_openai__path__post"(
    parameters?: Parameters<Paths.ProxyOpenaiPathPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProxyOpenaiPathPost.Responses.$200>;
  /**
   * proxy_openai__path__post - Proxy
   *
   * Deprecated: proxy all requests to OpenAI API
   */
  "proxy_openai__path__post"(
    parameters?: Parameters<Paths.ProxyOpenaiPathPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProxyOpenaiPathPost.Responses.$200>;
  /**
   * proxy_openai__path__post - Proxy
   *
   * Deprecated: proxy all requests to OpenAI API
   */
  "proxy_openai__path__post"(
    parameters?: Parameters<Paths.ProxyOpenaiPathPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProxyOpenaiPathPost.Responses.$200>;
  /**
   * get_pipelines_list_api_v1_pipelines_list_get - Get Pipelines List
   */
  "get_pipelines_list_api_v1_pipelines_list_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPipelinesListApiV1PipelinesListGet.Responses.$200>;
  /**
   * upload_pipeline_api_v1_pipelines_upload_post - Upload Pipeline
   */
  "upload_pipeline_api_v1_pipelines_upload_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UploadPipelineApiV1PipelinesUploadPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UploadPipelineApiV1PipelinesUploadPost.Responses.$200>;
  /**
   * add_pipeline_api_v1_pipelines_add_post - Add Pipeline
   */
  "add_pipeline_api_v1_pipelines_add_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AddPipelineApiV1PipelinesAddPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.AddPipelineApiV1PipelinesAddPost.Responses.$200>;
  /**
   * delete_pipeline_api_v1_pipelines_delete_delete - Delete Pipeline
   */
  "delete_pipeline_api_v1_pipelines_delete_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.DeletePipelineApiV1PipelinesDeleteDelete.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeletePipelineApiV1PipelinesDeleteDelete.Responses.$200>;
  /**
   * get_pipelines_api_v1_pipelines__get - Get Pipelines
   */
  "get_pipelines_api_v1_pipelines__get"(
    parameters?: Parameters<Paths.GetPipelinesApiV1PipelinesGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPipelinesApiV1PipelinesGet.Responses.$200>;
  /**
   * get_pipeline_valves_api_v1_pipelines__pipeline_id__valves_get - Get Pipeline Valves
   */
  "get_pipeline_valves_api_v1_pipelines__pipeline_id__valves_get"(
    parameters?: Parameters<
      Paths.GetPipelineValvesApiV1PipelinesPipelineIdValvesGet.QueryParameters &
        Paths.GetPipelineValvesApiV1PipelinesPipelineIdValvesGet.PathParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPipelineValvesApiV1PipelinesPipelineIdValvesGet.Responses.$200>;
  /**
   * get_pipeline_valves_spec_api_v1_pipelines__pipeline_id__valves_spec_get - Get Pipeline Valves Spec
   */
  "get_pipeline_valves_spec_api_v1_pipelines__pipeline_id__valves_spec_get"(
    parameters?: Parameters<
      Paths.GetPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet.QueryParameters &
        Paths.GetPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet.PathParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet.Responses.$200>;
  /**
   * update_pipeline_valves_api_v1_pipelines__pipeline_id__valves_update_post - Update Pipeline Valves
   */
  "update_pipeline_valves_api_v1_pipelines__pipeline_id__valves_update_post"(
    parameters?: Parameters<
      Paths.UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost.QueryParameters &
        Paths.UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost.PathParameters
    > | null,
    data?: Paths.UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost.Responses.$200>;
  /**
   * get_task_config_api_v1_tasks_config_get - Get Task Config
   */
  "get_task_config_api_v1_tasks_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetTaskConfigApiV1TasksConfigGet.Responses.$200>;
  /**
   * update_task_config_api_v1_tasks_config_update_post - Update Task Config
   */
  "update_task_config_api_v1_tasks_config_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateTaskConfigApiV1TasksConfigUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateTaskConfigApiV1TasksConfigUpdatePost.Responses.$200>;
  /**
   * generate_title_api_v1_tasks_title_completions_post - Generate Title
   */
  "generate_title_api_v1_tasks_title_completions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GenerateTitleApiV1TasksTitleCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateTitleApiV1TasksTitleCompletionsPost.Responses.$200>;
  /**
   * generate_chat_tags_api_v1_tasks_tags_completions_post - Generate Chat Tags
   */
  "generate_chat_tags_api_v1_tasks_tags_completions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GenerateChatTagsApiV1TasksTagsCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateChatTagsApiV1TasksTagsCompletionsPost.Responses.$200>;
  /**
   * generate_image_prompt_api_v1_tasks_image_prompt_completions_post - Generate Image Prompt
   */
  "generate_image_prompt_api_v1_tasks_image_prompt_completions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GenerateImagePromptApiV1TasksImagePromptCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateImagePromptApiV1TasksImagePromptCompletionsPost.Responses.$200>;
  /**
   * generate_queries_api_v1_tasks_queries_completions_post - Generate Queries
   */
  "generate_queries_api_v1_tasks_queries_completions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GenerateQueriesApiV1TasksQueriesCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateQueriesApiV1TasksQueriesCompletionsPost.Responses.$200>;
  /**
   * generate_autocompletion_api_v1_tasks_auto_completions_post - Generate Autocompletion
   */
  "generate_autocompletion_api_v1_tasks_auto_completions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GenerateAutocompletionApiV1TasksAutoCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateAutocompletionApiV1TasksAutoCompletionsPost.Responses.$200>;
  /**
   * generate_emoji_api_v1_tasks_emoji_completions_post - Generate Emoji
   */
  "generate_emoji_api_v1_tasks_emoji_completions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GenerateEmojiApiV1TasksEmojiCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateEmojiApiV1TasksEmojiCompletionsPost.Responses.$200>;
  /**
   * generate_moa_response_api_v1_tasks_moa_completions_post - Generate Moa Response
   */
  "generate_moa_response_api_v1_tasks_moa_completions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GenerateMoaResponseApiV1TasksMoaCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateMoaResponseApiV1TasksMoaCompletionsPost.Responses.$200>;
  /**
   * get_config_api_v1_images_config_get - Get Config
   */
  "get_config_api_v1_images_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetConfigApiV1ImagesConfigGet.Responses.$200>;
  /**
   * update_config_api_v1_images_config_update_post - Update Config
   */
  "update_config_api_v1_images_config_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateConfigApiV1ImagesConfigUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateConfigApiV1ImagesConfigUpdatePost.Responses.$200>;
  /**
   * verify_url_api_v1_images_config_url_verify_get - Verify Url
   */
  "verify_url_api_v1_images_config_url_verify_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.VerifyUrlApiV1ImagesConfigUrlVerifyGet.Responses.$200>;
  /**
   * get_image_config_api_v1_images_image_config_get - Get Image Config
   */
  "get_image_config_api_v1_images_image_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetImageConfigApiV1ImagesImageConfigGet.Responses.$200>;
  /**
   * update_image_config_api_v1_images_image_config_update_post - Update Image Config
   */
  "update_image_config_api_v1_images_image_config_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateImageConfigApiV1ImagesImageConfigUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateImageConfigApiV1ImagesImageConfigUpdatePost.Responses.$200>;
  /**
   * get_models_api_v1_images_models_get - Get Models
   */
  "get_models_api_v1_images_models_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetModelsApiV1ImagesModelsGet.Responses.$200>;
  /**
   * image_generations_api_v1_images_generations_post - Image Generations
   */
  "image_generations_api_v1_images_generations_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ImageGenerationsApiV1ImagesGenerationsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ImageGenerationsApiV1ImagesGenerationsPost.Responses.$200>;
  /**
   * get_audio_config_api_v1_audio_config_get - Get Audio Config
   */
  "get_audio_config_api_v1_audio_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAudioConfigApiV1AudioConfigGet.Responses.$200>;
  /**
   * update_audio_config_api_v1_audio_config_update_post - Update Audio Config
   */
  "update_audio_config_api_v1_audio_config_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateAudioConfigApiV1AudioConfigUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateAudioConfigApiV1AudioConfigUpdatePost.Responses.$200>;
  /**
   * speech_api_v1_audio_speech_post - Speech
   */
  "speech_api_v1_audio_speech_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SpeechApiV1AudioSpeechPost.Responses.$200>;
  /**
   * transcription_api_v1_audio_transcriptions_post - Transcription
   */
  "transcription_api_v1_audio_transcriptions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.TranscriptionApiV1AudioTranscriptionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.TranscriptionApiV1AudioTranscriptionsPost.Responses.$200>;
  /**
   * get_models_api_v1_audio_models_get - Get Models
   */
  "get_models_api_v1_audio_models_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetModelsApiV1AudioModelsGet.Responses.$200>;
  /**
   * get_voices_api_v1_audio_voices_get - Get Voices
   */
  "get_voices_api_v1_audio_voices_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetVoicesApiV1AudioVoicesGet.Responses.$200>;
  /**
   * get_status_api_v1_retrieval__get - Get Status
   */
  "get_status_api_v1_retrieval__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetStatusApiV1RetrievalGet.Responses.$200>;
  /**
   * get_embedding_config_api_v1_retrieval_embedding_get - Get Embedding Config
   */
  "get_embedding_config_api_v1_retrieval_embedding_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetEmbeddingConfigApiV1RetrievalEmbeddingGet.Responses.$200>;
  /**
   * get_reraanking_config_api_v1_retrieval_reranking_get - Get Reraanking Config
   */
  "get_reraanking_config_api_v1_retrieval_reranking_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetReraankingConfigApiV1RetrievalRerankingGet.Responses.$200>;
  /**
   * update_embedding_config_api_v1_retrieval_embedding_update_post - Update Embedding Config
   */
  "update_embedding_config_api_v1_retrieval_embedding_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost.Responses.$200>;
  /**
   * update_reranking_config_api_v1_retrieval_reranking_update_post - Update Reranking Config
   */
  "update_reranking_config_api_v1_retrieval_reranking_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateRerankingConfigApiV1RetrievalRerankingUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateRerankingConfigApiV1RetrievalRerankingUpdatePost.Responses.$200>;
  /**
   * get_rag_config_api_v1_retrieval_config_get - Get Rag Config
   */
  "get_rag_config_api_v1_retrieval_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetRagConfigApiV1RetrievalConfigGet.Responses.$200>;
  /**
   * update_rag_config_api_v1_retrieval_config_update_post - Update Rag Config
   */
  "update_rag_config_api_v1_retrieval_config_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateRagConfigApiV1RetrievalConfigUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateRagConfigApiV1RetrievalConfigUpdatePost.Responses.$200>;
  /**
   * get_rag_template_api_v1_retrieval_template_get - Get Rag Template
   */
  "get_rag_template_api_v1_retrieval_template_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetRagTemplateApiV1RetrievalTemplateGet.Responses.$200>;
  /**
   * get_query_settings_api_v1_retrieval_query_settings_get - Get Query Settings
   */
  "get_query_settings_api_v1_retrieval_query_settings_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetQuerySettingsApiV1RetrievalQuerySettingsGet.Responses.$200>;
  /**
   * update_query_settings_api_v1_retrieval_query_settings_update_post - Update Query Settings
   */
  "update_query_settings_api_v1_retrieval_query_settings_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateQuerySettingsApiV1RetrievalQuerySettingsUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateQuerySettingsApiV1RetrievalQuerySettingsUpdatePost.Responses.$200>;
  /**
   * process_file_api_v1_retrieval_process_file_post - Process File
   */
  "process_file_api_v1_retrieval_process_file_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ProcessFileApiV1RetrievalProcessFilePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProcessFileApiV1RetrievalProcessFilePost.Responses.$200>;
  /**
   * process_text_api_v1_retrieval_process_text_post - Process Text
   */
  "process_text_api_v1_retrieval_process_text_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ProcessTextApiV1RetrievalProcessTextPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProcessTextApiV1RetrievalProcessTextPost.Responses.$200>;
  /**
   * process_youtube_video_api_v1_retrieval_process_youtube_post - Process Youtube Video
   */
  "process_youtube_video_api_v1_retrieval_process_youtube_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ProcessYoutubeVideoApiV1RetrievalProcessYoutubePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProcessYoutubeVideoApiV1RetrievalProcessYoutubePost.Responses.$200>;
  /**
   * process_web_api_v1_retrieval_process_web_post - Process Web
   */
  "process_web_api_v1_retrieval_process_web_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ProcessWebApiV1RetrievalProcessWebPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProcessWebApiV1RetrievalProcessWebPost.Responses.$200>;
  /**
   * process_web_search_api_v1_retrieval_process_web_search_post - Process Web Search
   */
  "process_web_search_api_v1_retrieval_process_web_search_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ProcessWebSearchApiV1RetrievalProcessWebSearchPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProcessWebSearchApiV1RetrievalProcessWebSearchPost.Responses.$200>;
  /**
   * query_doc_handler_api_v1_retrieval_query_doc_post - Query Doc Handler
   */
  "query_doc_handler_api_v1_retrieval_query_doc_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.QueryDocHandlerApiV1RetrievalQueryDocPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.QueryDocHandlerApiV1RetrievalQueryDocPost.Responses.$200>;
  /**
   * query_collection_handler_api_v1_retrieval_query_collection_post - Query Collection Handler
   */
  "query_collection_handler_api_v1_retrieval_query_collection_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.QueryCollectionHandlerApiV1RetrievalQueryCollectionPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.QueryCollectionHandlerApiV1RetrievalQueryCollectionPost.Responses.$200>;
  /**
   * delete_entries_from_collection_api_v1_retrieval_delete_post - Delete Entries From Collection
   */
  "delete_entries_from_collection_api_v1_retrieval_delete_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.DeleteEntriesFromCollectionApiV1RetrievalDeletePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteEntriesFromCollectionApiV1RetrievalDeletePost.Responses.$200>;
  /**
   * reset_vector_db_api_v1_retrieval_reset_db_post - Reset Vector Db
   */
  "reset_vector_db_api_v1_retrieval_reset_db_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ResetVectorDbApiV1RetrievalResetDbPost.Responses.$200>;
  /**
   * reset_upload_dir_api_v1_retrieval_reset_uploads_post - Reset Upload Dir
   */
  "reset_upload_dir_api_v1_retrieval_reset_uploads_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ResetUploadDirApiV1RetrievalResetUploadsPost.Responses.$200>;
  /**
   * get_embeddings_api_v1_retrieval_ef__text__get - Get Embeddings
   */
  "get_embeddings_api_v1_retrieval_ef__text__get"(
    parameters?: Parameters<Paths.GetEmbeddingsApiV1RetrievalEfTextGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetEmbeddingsApiV1RetrievalEfTextGet.Responses.$200>;
  /**
   * process_files_batch_api_v1_retrieval_process_files_batch_post - Process Files Batch
   *
   * Process a batch of files and save them to the vector database.
   */
  "process_files_batch_api_v1_retrieval_process_files_batch_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ProcessFilesBatchApiV1RetrievalProcessFilesBatchPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ProcessFilesBatchApiV1RetrievalProcessFilesBatchPost.Responses.$200>;
  /**
   * import_config_api_v1_configs_import_post - Import Config
   */
  "import_config_api_v1_configs_import_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ImportConfigApiV1ConfigsImportPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ImportConfigApiV1ConfigsImportPost.Responses.$200>;
  /**
   * export_config_api_v1_configs_export_get - Export Config
   */
  "export_config_api_v1_configs_export_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ExportConfigApiV1ConfigsExportGet.Responses.$200>;
  /**
   * get_direct_connections_config_api_v1_configs_direct_connections_get - Get Direct Connections Config
   */
  "get_direct_connections_config_api_v1_configs_direct_connections_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetDirectConnectionsConfigApiV1ConfigsDirectConnectionsGet.Responses.$200>;
  /**
   * set_direct_connections_config_api_v1_configs_direct_connections_post - Set Direct Connections Config
   */
  "set_direct_connections_config_api_v1_configs_direct_connections_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SetDirectConnectionsConfigApiV1ConfigsDirectConnectionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SetDirectConnectionsConfigApiV1ConfigsDirectConnectionsPost.Responses.$200>;
  /**
   * get_code_execution_config_api_v1_configs_code_execution_get - Get Code Execution Config
   */
  "get_code_execution_config_api_v1_configs_code_execution_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetCodeExecutionConfigApiV1ConfigsCodeExecutionGet.Responses.$200>;
  /**
   * set_code_execution_config_api_v1_configs_code_execution_post - Set Code Execution Config
   */
  "set_code_execution_config_api_v1_configs_code_execution_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SetCodeExecutionConfigApiV1ConfigsCodeExecutionPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SetCodeExecutionConfigApiV1ConfigsCodeExecutionPost.Responses.$200>;
  /**
   * get_models_config_api_v1_configs_models_get - Get Models Config
   */
  "get_models_config_api_v1_configs_models_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetModelsConfigApiV1ConfigsModelsGet.Responses.$200>;
  /**
   * set_models_config_api_v1_configs_models_post - Set Models Config
   */
  "set_models_config_api_v1_configs_models_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SetModelsConfigApiV1ConfigsModelsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SetModelsConfigApiV1ConfigsModelsPost.Responses.$200>;
  /**
   * set_default_suggestions_api_v1_configs_suggestions_post - Set Default Suggestions
   */
  "set_default_suggestions_api_v1_configs_suggestions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SetDefaultSuggestionsApiV1ConfigsSuggestionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SetDefaultSuggestionsApiV1ConfigsSuggestionsPost.Responses.$200>;
  /**
   * get_banners_api_v1_configs_banners_get - Get Banners
   */
  "get_banners_api_v1_configs_banners_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetBannersApiV1ConfigsBannersGet.Responses.$200>;
  /**
   * set_banners_api_v1_configs_banners_post - Set Banners
   */
  "set_banners_api_v1_configs_banners_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SetBannersApiV1ConfigsBannersPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SetBannersApiV1ConfigsBannersPost.Responses.$200>;
  /**
   * get_session_user_api_v1_auths__get - Get Session User
   */
  "get_session_user_api_v1_auths__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetSessionUserApiV1AuthsGet.Responses.$200>;
  /**
   * update_profile_api_v1_auths_update_profile_post - Update Profile
   */
  "update_profile_api_v1_auths_update_profile_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateProfileApiV1AuthsUpdateProfilePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateProfileApiV1AuthsUpdateProfilePost.Responses.$200>;
  /**
   * update_password_api_v1_auths_update_password_post - Update Password
   */
  "update_password_api_v1_auths_update_password_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdatePasswordApiV1AuthsUpdatePasswordPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdatePasswordApiV1AuthsUpdatePasswordPost.Responses.$200>;
  /**
   * ldap_auth_api_v1_auths_ldap_post - Ldap Auth
   */
  "ldap_auth_api_v1_auths_ldap_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.LdapAuthApiV1AuthsLdapPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.LdapAuthApiV1AuthsLdapPost.Responses.$200>;
  /**
   * signin_api_v1_auths_signin_post - Signin
   */
  "signin_api_v1_auths_signin_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SigninApiV1AuthsSigninPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SigninApiV1AuthsSigninPost.Responses.$200>;
  /**
   * signup_api_v1_auths_signup_post - Signup
   */
  "signup_api_v1_auths_signup_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SignupApiV1AuthsSignupPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SignupApiV1AuthsSignupPost.Responses.$200>;
  /**
   * signout_api_v1_auths_signout_get - Signout
   */
  "signout_api_v1_auths_signout_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SignoutApiV1AuthsSignoutGet.Responses.$200>;
  /**
   * add_user_api_v1_auths_add_post - Add User
   */
  "add_user_api_v1_auths_add_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AddUserApiV1AuthsAddPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.AddUserApiV1AuthsAddPost.Responses.$200>;
  /**
   * get_admin_details_api_v1_auths_admin_details_get - Get Admin Details
   */
  "get_admin_details_api_v1_auths_admin_details_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAdminDetailsApiV1AuthsAdminDetailsGet.Responses.$200>;
  /**
   * get_admin_config_api_v1_auths_admin_config_get - Get Admin Config
   */
  "get_admin_config_api_v1_auths_admin_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAdminConfigApiV1AuthsAdminConfigGet.Responses.$200>;
  /**
   * update_admin_config_api_v1_auths_admin_config_post - Update Admin Config
   */
  "update_admin_config_api_v1_auths_admin_config_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateAdminConfigApiV1AuthsAdminConfigPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateAdminConfigApiV1AuthsAdminConfigPost.Responses.$200>;
  /**
   * get_ldap_server_api_v1_auths_admin_config_ldap_server_get - Get Ldap Server
   */
  "get_ldap_server_api_v1_auths_admin_config_ldap_server_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetLdapServerApiV1AuthsAdminConfigLdapServerGet.Responses.$200>;
  /**
   * update_ldap_server_api_v1_auths_admin_config_ldap_server_post - Update Ldap Server
   */
  "update_ldap_server_api_v1_auths_admin_config_ldap_server_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateLdapServerApiV1AuthsAdminConfigLdapServerPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateLdapServerApiV1AuthsAdminConfigLdapServerPost.Responses.$200>;
  /**
   * get_ldap_config_api_v1_auths_admin_config_ldap_get - Get Ldap Config
   */
  "get_ldap_config_api_v1_auths_admin_config_ldap_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetLdapConfigApiV1AuthsAdminConfigLdapGet.Responses.$200>;
  /**
   * update_ldap_config_api_v1_auths_admin_config_ldap_post - Update Ldap Config
   */
  "update_ldap_config_api_v1_auths_admin_config_ldap_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateLdapConfigApiV1AuthsAdminConfigLdapPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateLdapConfigApiV1AuthsAdminConfigLdapPost.Responses.$200>;
  /**
   * get_api_key_api_v1_auths_api_key_get - Get Api Key
   */
  "get_api_key_api_v1_auths_api_key_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetApiKeyApiV1AuthsApiKeyGet.Responses.$200>;
  /**
   * generate_api_key_api_v1_auths_api_key_post - Generate Api Key
   */
  "generate_api_key_api_v1_auths_api_key_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GenerateApiKeyApiV1AuthsApiKeyPost.Responses.$200>;
  /**
   * delete_api_key_api_v1_auths_api_key_delete - Delete Api Key
   */
  "delete_api_key_api_v1_auths_api_key_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteApiKeyApiV1AuthsApiKeyDelete.Responses.$200>;
  /**
   * get_users_api_v1_users__get - Get Users
   */
  "get_users_api_v1_users__get"(
    parameters?: Parameters<Paths.GetUsersApiV1UsersGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUsersApiV1UsersGet.Responses.$200>;
  /**
   * get_user_groups_api_v1_users_groups_get - Get User Groups
   */
  "get_user_groups_api_v1_users_groups_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserGroupsApiV1UsersGroupsGet.Responses.$200>;
  /**
   * get_user_permissisions_api_v1_users_permissions_get - Get User Permissisions
   */
  "get_user_permissisions_api_v1_users_permissions_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserPermissisionsApiV1UsersPermissionsGet.Responses.$200>;
  /**
   * get_user_permissions_api_v1_users_default_permissions_get - Get User Permissions
   */
  "get_user_permissions_api_v1_users_default_permissions_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserPermissionsApiV1UsersDefaultPermissionsGet.Responses.$200>;
  /**
   * update_user_permissions_api_v1_users_default_permissions_post - Update User Permissions
   */
  "update_user_permissions_api_v1_users_default_permissions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateUserPermissionsApiV1UsersDefaultPermissionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateUserPermissionsApiV1UsersDefaultPermissionsPost.Responses.$200>;
  /**
   * update_user_role_api_v1_users_update_role_post - Update User Role
   */
  "update_user_role_api_v1_users_update_role_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateUserRoleApiV1UsersUpdateRolePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateUserRoleApiV1UsersUpdateRolePost.Responses.$200>;
  /**
   * get_user_settings_by_session_user_api_v1_users_user_settings_get - Get User Settings By Session User
   */
  "get_user_settings_by_session_user_api_v1_users_user_settings_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserSettingsBySessionUserApiV1UsersUserSettingsGet.Responses.$200>;
  /**
   * update_user_settings_by_session_user_api_v1_users_user_settings_update_post - Update User Settings By Session User
   */
  "update_user_settings_by_session_user_api_v1_users_user_settings_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost.Responses.$200>;
  /**
   * get_user_info_by_session_user_api_v1_users_user_info_get - Get User Info By Session User
   */
  "get_user_info_by_session_user_api_v1_users_user_info_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserInfoBySessionUserApiV1UsersUserInfoGet.Responses.$200>;
  /**
   * update_user_info_by_session_user_api_v1_users_user_info_update_post - Update User Info By Session User
   */
  "update_user_info_by_session_user_api_v1_users_user_info_update_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost.Responses.$200>;
  /**
   * get_user_by_id_api_v1_users__user_id__get - Get User By Id
   */
  "get_user_by_id_api_v1_users__user_id__get"(
    parameters?: Parameters<Paths.GetUserByIdApiV1UsersUserIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserByIdApiV1UsersUserIdGet.Responses.$200>;
  /**
   * delete_user_by_id_api_v1_users__user_id__delete - Delete User By Id
   */
  "delete_user_by_id_api_v1_users__user_id__delete"(
    parameters?: Parameters<Paths.DeleteUserByIdApiV1UsersUserIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteUserByIdApiV1UsersUserIdDelete.Responses.$200>;
  /**
   * update_user_by_id_api_v1_users__user_id__update_post - Update User By Id
   */
  "update_user_by_id_api_v1_users__user_id__update_post"(
    parameters?: Parameters<Paths.UpdateUserByIdApiV1UsersUserIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateUserByIdApiV1UsersUserIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateUserByIdApiV1UsersUserIdUpdatePost.Responses.$200>;
  /**
   * get_channels_api_v1_channels__get - Get Channels
   */
  "get_channels_api_v1_channels__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetChannelsApiV1ChannelsGet.Responses.$200>;
  /**
   * create_new_channel_api_v1_channels_create_post - Create New Channel
   */
  "create_new_channel_api_v1_channels_create_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewChannelApiV1ChannelsCreatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateNewChannelApiV1ChannelsCreatePost.Responses.$200>;
  /**
   * get_channel_by_id_api_v1_channels__id__get - Get Channel By Id
   */
  "get_channel_by_id_api_v1_channels__id__get"(
    parameters?: Parameters<Paths.GetChannelByIdApiV1ChannelsIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetChannelByIdApiV1ChannelsIdGet.Responses.$200>;
  /**
   * update_channel_by_id_api_v1_channels__id__update_post - Update Channel By Id
   */
  "update_channel_by_id_api_v1_channels__id__update_post"(
    parameters?: Parameters<Paths.UpdateChannelByIdApiV1ChannelsIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateChannelByIdApiV1ChannelsIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateChannelByIdApiV1ChannelsIdUpdatePost.Responses.$200>;
  /**
   * delete_channel_by_id_api_v1_channels__id__delete_delete - Delete Channel By Id
   */
  "delete_channel_by_id_api_v1_channels__id__delete_delete"(
    parameters?: Parameters<Paths.DeleteChannelByIdApiV1ChannelsIdDeleteDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteChannelByIdApiV1ChannelsIdDeleteDelete.Responses.$200>;
  /**
   * get_channel_messages_api_v1_channels__id__messages_get - Get Channel Messages
   */
  "get_channel_messages_api_v1_channels__id__messages_get"(
    parameters?: Parameters<
      Paths.GetChannelMessagesApiV1ChannelsIdMessagesGet.QueryParameters &
        Paths.GetChannelMessagesApiV1ChannelsIdMessagesGet.PathParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetChannelMessagesApiV1ChannelsIdMessagesGet.Responses.$200>;
  /**
   * post_new_message_api_v1_channels__id__messages_post_post - Post New Message
   */
  "post_new_message_api_v1_channels__id__messages_post_post"(
    parameters?: Parameters<Paths.PostNewMessageApiV1ChannelsIdMessagesPostPost.PathParameters> | null,
    data?: Paths.PostNewMessageApiV1ChannelsIdMessagesPostPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PostNewMessageApiV1ChannelsIdMessagesPostPost.Responses.$200>;
  /**
   * get_channel_message_api_v1_channels__id__messages__message_id__get - Get Channel Message
   */
  "get_channel_message_api_v1_channels__id__messages__message_id__get"(
    parameters?: Parameters<Paths.GetChannelMessageApiV1ChannelsIdMessagesMessageIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetChannelMessageApiV1ChannelsIdMessagesMessageIdGet.Responses.$200>;
  /**
   * get_channel_thread_messages_api_v1_channels__id__messages__message_id__thread_get - Get Channel Thread Messages
   */
  "get_channel_thread_messages_api_v1_channels__id__messages__message_id__thread_get"(
    parameters?: Parameters<
      Paths.GetChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet.QueryParameters &
        Paths.GetChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet.PathParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet.Responses.$200>;
  /**
   * update_message_by_id_api_v1_channels__id__messages__message_id__update_post - Update Message By Id
   */
  "update_message_by_id_api_v1_channels__id__messages__message_id__update_post"(
    parameters?: Parameters<Paths.UpdateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost.Responses.$200>;
  /**
   * add_reaction_to_message_api_v1_channels__id__messages__message_id__reactions_add_post - Add Reaction To Message
   */
  "add_reaction_to_message_api_v1_channels__id__messages__message_id__reactions_add_post"(
    parameters?: Parameters<Paths.AddReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost.PathParameters> | null,
    data?: Paths.AddReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.AddReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost.Responses.$200>;
  /**
   * remove_reaction_by_id_and_user_id_and_name_api_v1_channels__id__messages__message_id__reactions_remove_post - Remove Reaction By Id And User Id And Name
   */
  "remove_reaction_by_id_and_user_id_and_name_api_v1_channels__id__messages__message_id__reactions_remove_post"(
    parameters?: Parameters<Paths.RemoveReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost.PathParameters> | null,
    data?: Paths.RemoveReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.RemoveReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost.Responses.$200>;
  /**
   * delete_message_by_id_api_v1_channels__id__messages__message_id__delete_delete - Delete Message By Id
   */
  "delete_message_by_id_api_v1_channels__id__messages__message_id__delete_delete"(
    parameters?: Parameters<Paths.DeleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete.Responses.$200>;
  /**
   * get_session_user_chat_list_api_v1_chats_list_get - Get Session User Chat List
   */
  "get_session_user_chat_list_api_v1_chats_list_get"(
    parameters?: Parameters<Paths.GetSessionUserChatListApiV1ChatsListGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetSessionUserChatListApiV1ChatsListGet.Responses.$200>;
  /**
   * get_session_user_chat_list_api_v1_chats__get - Get Session User Chat List
   */
  "get_session_user_chat_list_api_v1_chats__get"(
    parameters?: Parameters<Paths.GetSessionUserChatListApiV1ChatsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetSessionUserChatListApiV1ChatsGet.Responses.$200>;
  /**
   * delete_all_user_chats_api_v1_chats__delete - Delete All User Chats
   */
  "delete_all_user_chats_api_v1_chats__delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteAllUserChatsApiV1ChatsDelete.Responses.$200>;
  /**
   * get_user_chat_list_by_user_id_api_v1_chats_list_user__user_id__get - Get User Chat List By User Id
   */
  "get_user_chat_list_by_user_id_api_v1_chats_list_user__user_id__get"(
    parameters?: Parameters<
      Paths.GetUserChatListByUserIdApiV1ChatsListUserUserIdGet.QueryParameters &
        Paths.GetUserChatListByUserIdApiV1ChatsListUserUserIdGet.PathParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserChatListByUserIdApiV1ChatsListUserUserIdGet.Responses.$200>;
  /**
   * create_new_chat_api_v1_chats_new_post - Create New Chat
   */
  "create_new_chat_api_v1_chats_new_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewChatApiV1ChatsNewPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateNewChatApiV1ChatsNewPost.Responses.$200>;
  /**
   * import_chat_api_v1_chats_import_post - Import Chat
   */
  "import_chat_api_v1_chats_import_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ImportChatApiV1ChatsImportPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ImportChatApiV1ChatsImportPost.Responses.$200>;
  /**
   * search_user_chats_api_v1_chats_search_get - Search User Chats
   */
  "search_user_chats_api_v1_chats_search_get"(
    parameters?: Parameters<Paths.SearchUserChatsApiV1ChatsSearchGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.SearchUserChatsApiV1ChatsSearchGet.Responses.$200>;
  /**
   * get_chats_by_folder_id_api_v1_chats_folder__folder_id__get - Get Chats By Folder Id
   */
  "get_chats_by_folder_id_api_v1_chats_folder__folder_id__get"(
    parameters?: Parameters<Paths.GetChatsByFolderIdApiV1ChatsFolderFolderIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetChatsByFolderIdApiV1ChatsFolderFolderIdGet.Responses.$200>;
  /**
   * get_user_pinned_chats_api_v1_chats_pinned_get - Get User Pinned Chats
   */
  "get_user_pinned_chats_api_v1_chats_pinned_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserPinnedChatsApiV1ChatsPinnedGet.Responses.$200>;
  /**
   * get_user_chats_api_v1_chats_all_get - Get User Chats
   */
  "get_user_chats_api_v1_chats_all_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserChatsApiV1ChatsAllGet.Responses.$200>;
  /**
   * get_user_archived_chats_api_v1_chats_all_archived_get - Get User Archived Chats
   */
  "get_user_archived_chats_api_v1_chats_all_archived_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserArchivedChatsApiV1ChatsAllArchivedGet.Responses.$200>;
  /**
   * get_all_user_tags_api_v1_chats_all_tags_get - Get All User Tags
   */
  "get_all_user_tags_api_v1_chats_all_tags_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAllUserTagsApiV1ChatsAllTagsGet.Responses.$200>;
  /**
   * get_all_user_chats_in_db_api_v1_chats_all_db_get - Get All User Chats In Db
   */
  "get_all_user_chats_in_db_api_v1_chats_all_db_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAllUserChatsInDbApiV1ChatsAllDbGet.Responses.$200>;
  /**
   * get_archived_session_user_chat_list_api_v1_chats_archived_get - Get Archived Session User Chat List
   */
  "get_archived_session_user_chat_list_api_v1_chats_archived_get"(
    parameters?: Parameters<Paths.GetArchivedSessionUserChatListApiV1ChatsArchivedGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetArchivedSessionUserChatListApiV1ChatsArchivedGet.Responses.$200>;
  /**
   * archive_all_chats_api_v1_chats_archive_all_post - Archive All Chats
   */
  "archive_all_chats_api_v1_chats_archive_all_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ArchiveAllChatsApiV1ChatsArchiveAllPost.Responses.$200>;
  /**
   * get_shared_chat_by_id_api_v1_chats_share__share_id__get - Get Shared Chat By Id
   */
  "get_shared_chat_by_id_api_v1_chats_share__share_id__get"(
    parameters?: Parameters<Paths.GetSharedChatByIdApiV1ChatsShareShareIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetSharedChatByIdApiV1ChatsShareShareIdGet.Responses.$200>;
  /**
   * get_user_chat_list_by_tag_name_api_v1_chats_tags_post - Get User Chat List By Tag Name
   */
  "get_user_chat_list_by_tag_name_api_v1_chats_tags_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GetUserChatListByTagNameApiV1ChatsTagsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserChatListByTagNameApiV1ChatsTagsPost.Responses.$200>;
  /**
   * get_chat_by_id_api_v1_chats__id__get - Get Chat By Id
   */
  "get_chat_by_id_api_v1_chats__id__get"(
    parameters?: Parameters<Paths.GetChatByIdApiV1ChatsIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetChatByIdApiV1ChatsIdGet.Responses.$200>;
  /**
   * update_chat_by_id_api_v1_chats__id__post - Update Chat By Id
   */
  "update_chat_by_id_api_v1_chats__id__post"(
    parameters?: Parameters<Paths.UpdateChatByIdApiV1ChatsIdPost.PathParameters> | null,
    data?: Paths.UpdateChatByIdApiV1ChatsIdPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateChatByIdApiV1ChatsIdPost.Responses.$200>;
  /**
   * delete_chat_by_id_api_v1_chats__id__delete - Delete Chat By Id
   */
  "delete_chat_by_id_api_v1_chats__id__delete"(
    parameters?: Parameters<Paths.DeleteChatByIdApiV1ChatsIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteChatByIdApiV1ChatsIdDelete.Responses.$200>;
  /**
   * get_pinned_status_by_id_api_v1_chats__id__pinned_get - Get Pinned Status By Id
   */
  "get_pinned_status_by_id_api_v1_chats__id__pinned_get"(
    parameters?: Parameters<Paths.GetPinnedStatusByIdApiV1ChatsIdPinnedGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPinnedStatusByIdApiV1ChatsIdPinnedGet.Responses.$200>;
  /**
   * pin_chat_by_id_api_v1_chats__id__pin_post - Pin Chat By Id
   */
  "pin_chat_by_id_api_v1_chats__id__pin_post"(
    parameters?: Parameters<Paths.PinChatByIdApiV1ChatsIdPinPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PinChatByIdApiV1ChatsIdPinPost.Responses.$200>;
  /**
   * clone_chat_by_id_api_v1_chats__id__clone_post - Clone Chat By Id
   */
  "clone_chat_by_id_api_v1_chats__id__clone_post"(
    parameters?: Parameters<Paths.CloneChatByIdApiV1ChatsIdClonePost.PathParameters> | null,
    data?: Paths.CloneChatByIdApiV1ChatsIdClonePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CloneChatByIdApiV1ChatsIdClonePost.Responses.$200>;
  /**
   * clone_shared_chat_by_id_api_v1_chats__id__clone_shared_post - Clone Shared Chat By Id
   */
  "clone_shared_chat_by_id_api_v1_chats__id__clone_shared_post"(
    parameters?: Parameters<Paths.CloneSharedChatByIdApiV1ChatsIdCloneSharedPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CloneSharedChatByIdApiV1ChatsIdCloneSharedPost.Responses.$200>;
  /**
   * archive_chat_by_id_api_v1_chats__id__archive_post - Archive Chat By Id
   */
  "archive_chat_by_id_api_v1_chats__id__archive_post"(
    parameters?: Parameters<Paths.ArchiveChatByIdApiV1ChatsIdArchivePost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ArchiveChatByIdApiV1ChatsIdArchivePost.Responses.$200>;
  /**
   * share_chat_by_id_api_v1_chats__id__share_post - Share Chat By Id
   */
  "share_chat_by_id_api_v1_chats__id__share_post"(
    parameters?: Parameters<Paths.ShareChatByIdApiV1ChatsIdSharePost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ShareChatByIdApiV1ChatsIdSharePost.Responses.$200>;
  /**
   * delete_shared_chat_by_id_api_v1_chats__id__share_delete - Delete Shared Chat By Id
   */
  "delete_shared_chat_by_id_api_v1_chats__id__share_delete"(
    parameters?: Parameters<Paths.DeleteSharedChatByIdApiV1ChatsIdShareDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteSharedChatByIdApiV1ChatsIdShareDelete.Responses.$200>;
  /**
   * update_chat_folder_id_by_id_api_v1_chats__id__folder_post - Update Chat Folder Id By Id
   */
  "update_chat_folder_id_by_id_api_v1_chats__id__folder_post"(
    parameters?: Parameters<Paths.UpdateChatFolderIdByIdApiV1ChatsIdFolderPost.PathParameters> | null,
    data?: Paths.UpdateChatFolderIdByIdApiV1ChatsIdFolderPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateChatFolderIdByIdApiV1ChatsIdFolderPost.Responses.$200>;
  /**
   * get_chat_tags_by_id_api_v1_chats__id__tags_get - Get Chat Tags By Id
   */
  "get_chat_tags_by_id_api_v1_chats__id__tags_get"(
    parameters?: Parameters<Paths.GetChatTagsByIdApiV1ChatsIdTagsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetChatTagsByIdApiV1ChatsIdTagsGet.Responses.$200>;
  /**
   * add_tag_by_id_and_tag_name_api_v1_chats__id__tags_post - Add Tag By Id And Tag Name
   */
  "add_tag_by_id_and_tag_name_api_v1_chats__id__tags_post"(
    parameters?: Parameters<Paths.AddTagByIdAndTagNameApiV1ChatsIdTagsPost.PathParameters> | null,
    data?: Paths.AddTagByIdAndTagNameApiV1ChatsIdTagsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.AddTagByIdAndTagNameApiV1ChatsIdTagsPost.Responses.$200>;
  /**
   * delete_tag_by_id_and_tag_name_api_v1_chats__id__tags_delete - Delete Tag By Id And Tag Name
   */
  "delete_tag_by_id_and_tag_name_api_v1_chats__id__tags_delete"(
    parameters?: Parameters<Paths.DeleteTagByIdAndTagNameApiV1ChatsIdTagsDelete.PathParameters> | null,
    data?: Paths.DeleteTagByIdAndTagNameApiV1ChatsIdTagsDelete.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteTagByIdAndTagNameApiV1ChatsIdTagsDelete.Responses.$200>;
  /**
   * delete_all_tags_by_id_api_v1_chats__id__tags_all_delete - Delete All Tags By Id
   */
  "delete_all_tags_by_id_api_v1_chats__id__tags_all_delete"(
    parameters?: Parameters<Paths.DeleteAllTagsByIdApiV1ChatsIdTagsAllDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteAllTagsByIdApiV1ChatsIdTagsAllDelete.Responses.$200>;
  /**
   * get_models_api_v1_models__get - Get Models
   */
  "get_models_api_v1_models__get"(
    parameters?: Parameters<Paths.GetModelsApiV1ModelsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetModelsApiV1ModelsGet.Responses.$200>;
  /**
   * get_base_models_api_v1_models_base_get - Get Base Models
   */
  "get_base_models_api_v1_models_base_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetBaseModelsApiV1ModelsBaseGet.Responses.$200>;
  /**
   * create_new_model_api_v1_models_create_post - Create New Model
   */
  "create_new_model_api_v1_models_create_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewModelApiV1ModelsCreatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateNewModelApiV1ModelsCreatePost.Responses.$200>;
  /**
   * get_model_by_id_api_v1_models_model_get - Get Model By Id
   */
  "get_model_by_id_api_v1_models_model_get"(
    parameters?: Parameters<Paths.GetModelByIdApiV1ModelsModelGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetModelByIdApiV1ModelsModelGet.Responses.$200>;
  /**
   * toggle_model_by_id_api_v1_models_model_toggle_post - Toggle Model By Id
   */
  "toggle_model_by_id_api_v1_models_model_toggle_post"(
    parameters?: Parameters<Paths.ToggleModelByIdApiV1ModelsModelTogglePost.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ToggleModelByIdApiV1ModelsModelTogglePost.Responses.$200>;
  /**
   * update_model_by_id_api_v1_models_model_update_post - Update Model By Id
   */
  "update_model_by_id_api_v1_models_model_update_post"(
    parameters?: Parameters<Paths.UpdateModelByIdApiV1ModelsModelUpdatePost.QueryParameters> | null,
    data?: Paths.UpdateModelByIdApiV1ModelsModelUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateModelByIdApiV1ModelsModelUpdatePost.Responses.$200>;
  /**
   * delete_model_by_id_api_v1_models_model_delete_delete - Delete Model By Id
   */
  "delete_model_by_id_api_v1_models_model_delete_delete"(
    parameters?: Parameters<Paths.DeleteModelByIdApiV1ModelsModelDeleteDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteModelByIdApiV1ModelsModelDeleteDelete.Responses.$200>;
  /**
   * delete_all_models_api_v1_models_delete_all_delete - Delete All Models
   */
  "delete_all_models_api_v1_models_delete_all_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteAllModelsApiV1ModelsDeleteAllDelete.Responses.$200>;
  /**
   * get_knowledge_api_v1_knowledge__get - Get Knowledge
   */
  "get_knowledge_api_v1_knowledge__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetKnowledgeApiV1KnowledgeGet.Responses.$200>;
  /**
   * get_knowledge_list_api_v1_knowledge_list_get - Get Knowledge List
   */
  "get_knowledge_list_api_v1_knowledge_list_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetKnowledgeListApiV1KnowledgeListGet.Responses.$200>;
  /**
   * create_new_knowledge_api_v1_knowledge_create_post - Create New Knowledge
   */
  "create_new_knowledge_api_v1_knowledge_create_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewKnowledgeApiV1KnowledgeCreatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateNewKnowledgeApiV1KnowledgeCreatePost.Responses.$200>;
  /**
   * get_knowledge_by_id_api_v1_knowledge__id__get - Get Knowledge By Id
   */
  "get_knowledge_by_id_api_v1_knowledge__id__get"(
    parameters?: Parameters<Paths.GetKnowledgeByIdApiV1KnowledgeIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetKnowledgeByIdApiV1KnowledgeIdGet.Responses.$200>;
  /**
   * update_knowledge_by_id_api_v1_knowledge__id__update_post - Update Knowledge By Id
   */
  "update_knowledge_by_id_api_v1_knowledge__id__update_post"(
    parameters?: Parameters<Paths.UpdateKnowledgeByIdApiV1KnowledgeIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateKnowledgeByIdApiV1KnowledgeIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateKnowledgeByIdApiV1KnowledgeIdUpdatePost.Responses.$200>;
  /**
   * add_file_to_knowledge_by_id_api_v1_knowledge__id__file_add_post - Add File To Knowledge By Id
   */
  "add_file_to_knowledge_by_id_api_v1_knowledge__id__file_add_post"(
    parameters?: Parameters<Paths.AddFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost.PathParameters> | null,
    data?: Paths.AddFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.AddFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost.Responses.$200>;
  /**
   * update_file_from_knowledge_by_id_api_v1_knowledge__id__file_update_post - Update File From Knowledge By Id
   */
  "update_file_from_knowledge_by_id_api_v1_knowledge__id__file_update_post"(
    parameters?: Parameters<Paths.UpdateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost.PathParameters> | null,
    data?: Paths.UpdateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost.Responses.$200>;
  /**
   * remove_file_from_knowledge_by_id_api_v1_knowledge__id__file_remove_post - Remove File From Knowledge By Id
   */
  "remove_file_from_knowledge_by_id_api_v1_knowledge__id__file_remove_post"(
    parameters?: Parameters<Paths.RemoveFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost.PathParameters> | null,
    data?: Paths.RemoveFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.RemoveFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost.Responses.$200>;
  /**
   * delete_knowledge_by_id_api_v1_knowledge__id__delete_delete - Delete Knowledge By Id
   */
  "delete_knowledge_by_id_api_v1_knowledge__id__delete_delete"(
    parameters?: Parameters<Paths.DeleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete.Responses.$200>;
  /**
   * reset_knowledge_by_id_api_v1_knowledge__id__reset_post - Reset Knowledge By Id
   */
  "reset_knowledge_by_id_api_v1_knowledge__id__reset_post"(
    parameters?: Parameters<Paths.ResetKnowledgeByIdApiV1KnowledgeIdResetPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ResetKnowledgeByIdApiV1KnowledgeIdResetPost.Responses.$200>;
  /**
   * add_files_to_knowledge_batch_api_v1_knowledge__id__files_batch_add_post - Add Files To Knowledge Batch
   *
   * Add multiple files to a knowledge base
   */
  "add_files_to_knowledge_batch_api_v1_knowledge__id__files_batch_add_post"(
    parameters?: Parameters<Paths.AddFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost.PathParameters> | null,
    data?: Paths.AddFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.AddFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost.Responses.$200>;
  /**
   * get_prompts_api_v1_prompts__get - Get Prompts
   */
  "get_prompts_api_v1_prompts__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPromptsApiV1PromptsGet.Responses.$200>;
  /**
   * get_prompt_list_api_v1_prompts_list_get - Get Prompt List
   */
  "get_prompt_list_api_v1_prompts_list_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPromptListApiV1PromptsListGet.Responses.$200>;
  /**
   * create_new_prompt_api_v1_prompts_create_post - Create New Prompt
   */
  "create_new_prompt_api_v1_prompts_create_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewPromptApiV1PromptsCreatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateNewPromptApiV1PromptsCreatePost.Responses.$200>;
  /**
   * get_prompt_by_command_api_v1_prompts_command__command__get - Get Prompt By Command
   */
  "get_prompt_by_command_api_v1_prompts_command__command__get"(
    parameters?: Parameters<Paths.GetPromptByCommandApiV1PromptsCommandCommandGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPromptByCommandApiV1PromptsCommandCommandGet.Responses.$200>;
  /**
   * update_prompt_by_command_api_v1_prompts_command__command__update_post - Update Prompt By Command
   */
  "update_prompt_by_command_api_v1_prompts_command__command__update_post"(
    parameters?: Parameters<Paths.UpdatePromptByCommandApiV1PromptsCommandCommandUpdatePost.PathParameters> | null,
    data?: Paths.UpdatePromptByCommandApiV1PromptsCommandCommandUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdatePromptByCommandApiV1PromptsCommandCommandUpdatePost.Responses.$200>;
  /**
   * delete_prompt_by_command_api_v1_prompts_command__command__delete_delete - Delete Prompt By Command
   */
  "delete_prompt_by_command_api_v1_prompts_command__command__delete_delete"(
    parameters?: Parameters<Paths.DeletePromptByCommandApiV1PromptsCommandCommandDeleteDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeletePromptByCommandApiV1PromptsCommandCommandDeleteDelete.Responses.$200>;
  /**
   * get_tools_api_v1_tools__get - Get Tools
   */
  "get_tools_api_v1_tools__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetToolsApiV1ToolsGet.Responses.$200>;
  /**
   * get_tool_list_api_v1_tools_list_get - Get Tool List
   */
  "get_tool_list_api_v1_tools_list_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetToolListApiV1ToolsListGet.Responses.$200>;
  /**
   * export_tools_api_v1_tools_export_get - Export Tools
   */
  "export_tools_api_v1_tools_export_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ExportToolsApiV1ToolsExportGet.Responses.$200>;
  /**
   * create_new_tools_api_v1_tools_create_post - Create New Tools
   */
  "create_new_tools_api_v1_tools_create_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewToolsApiV1ToolsCreatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateNewToolsApiV1ToolsCreatePost.Responses.$200>;
  /**
   * get_tools_by_id_api_v1_tools_id__id__get - Get Tools By Id
   */
  "get_tools_by_id_api_v1_tools_id__id__get"(
    parameters?: Parameters<Paths.GetToolsByIdApiV1ToolsIdIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetToolsByIdApiV1ToolsIdIdGet.Responses.$200>;
  /**
   * update_tools_by_id_api_v1_tools_id__id__update_post - Update Tools By Id
   */
  "update_tools_by_id_api_v1_tools_id__id__update_post"(
    parameters?: Parameters<Paths.UpdateToolsByIdApiV1ToolsIdIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateToolsByIdApiV1ToolsIdIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateToolsByIdApiV1ToolsIdIdUpdatePost.Responses.$200>;
  /**
   * delete_tools_by_id_api_v1_tools_id__id__delete_delete - Delete Tools By Id
   */
  "delete_tools_by_id_api_v1_tools_id__id__delete_delete"(
    parameters?: Parameters<Paths.DeleteToolsByIdApiV1ToolsIdIdDeleteDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteToolsByIdApiV1ToolsIdIdDeleteDelete.Responses.$200>;
  /**
   * get_tools_valves_by_id_api_v1_tools_id__id__valves_get - Get Tools Valves By Id
   */
  "get_tools_valves_by_id_api_v1_tools_id__id__valves_get"(
    parameters?: Parameters<Paths.GetToolsValvesByIdApiV1ToolsIdIdValvesGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetToolsValvesByIdApiV1ToolsIdIdValvesGet.Responses.$200>;
  /**
   * get_tools_valves_spec_by_id_api_v1_tools_id__id__valves_spec_get - Get Tools Valves Spec By Id
   */
  "get_tools_valves_spec_by_id_api_v1_tools_id__id__valves_spec_get"(
    parameters?: Parameters<Paths.GetToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet.Responses.$200>;
  /**
   * update_tools_valves_by_id_api_v1_tools_id__id__valves_update_post - Update Tools Valves By Id
   */
  "update_tools_valves_by_id_api_v1_tools_id__id__valves_update_post"(
    parameters?: Parameters<Paths.UpdateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost.PathParameters> | null,
    data?: Paths.UpdateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost.Responses.$200>;
  /**
   * get_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_get - Get Tools User Valves By Id
   */
  "get_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_get"(
    parameters?: Parameters<Paths.GetToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet.Responses.$200>;
  /**
   * get_tools_user_valves_spec_by_id_api_v1_tools_id__id__valves_user_spec_get - Get Tools User Valves Spec By Id
   */
  "get_tools_user_valves_spec_by_id_api_v1_tools_id__id__valves_user_spec_get"(
    parameters?: Parameters<Paths.GetToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet.Responses.$200>;
  /**
   * update_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_update_post - Update Tools User Valves By Id
   */
  "update_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_update_post"(
    parameters?: Parameters<Paths.UpdateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost.PathParameters> | null,
    data?: Paths.UpdateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost.Responses.$200>;
  /**
   * get_embeddings_api_v1_memories_ef_get - Get Embeddings
   */
  "get_embeddings_api_v1_memories_ef_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetEmbeddingsApiV1MemoriesEfGet.Responses.$200>;
  /**
   * get_memories_api_v1_memories__get - Get Memories
   */
  "get_memories_api_v1_memories__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetMemoriesApiV1MemoriesGet.Responses.$200>;
  /**
   * add_memory_api_v1_memories_add_post - Add Memory
   */
  "add_memory_api_v1_memories_add_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AddMemoryApiV1MemoriesAddPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.AddMemoryApiV1MemoriesAddPost.Responses.$200>;
  /**
   * query_memory_api_v1_memories_query_post - Query Memory
   */
  "query_memory_api_v1_memories_query_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.QueryMemoryApiV1MemoriesQueryPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.QueryMemoryApiV1MemoriesQueryPost.Responses.$200>;
  /**
   * reset_memory_from_vector_db_api_v1_memories_reset_post - Reset Memory From Vector Db
   */
  "reset_memory_from_vector_db_api_v1_memories_reset_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ResetMemoryFromVectorDbApiV1MemoriesResetPost.Responses.$200>;
  /**
   * delete_memory_by_user_id_api_v1_memories_delete_user_delete - Delete Memory By User Id
   */
  "delete_memory_by_user_id_api_v1_memories_delete_user_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteMemoryByUserIdApiV1MemoriesDeleteUserDelete.Responses.$200>;
  /**
   * update_memory_by_id_api_v1_memories__memory_id__update_post - Update Memory By Id
   */
  "update_memory_by_id_api_v1_memories__memory_id__update_post"(
    parameters?: Parameters<Paths.UpdateMemoryByIdApiV1MemoriesMemoryIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateMemoryByIdApiV1MemoriesMemoryIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateMemoryByIdApiV1MemoriesMemoryIdUpdatePost.Responses.$200>;
  /**
   * delete_memory_by_id_api_v1_memories__memory_id__delete - Delete Memory By Id
   */
  "delete_memory_by_id_api_v1_memories__memory_id__delete"(
    parameters?: Parameters<Paths.DeleteMemoryByIdApiV1MemoriesMemoryIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteMemoryByIdApiV1MemoriesMemoryIdDelete.Responses.$200>;
  /**
   * get_folders_api_v1_folders__get - Get Folders
   */
  "get_folders_api_v1_folders__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFoldersApiV1FoldersGet.Responses.$200>;
  /**
   * create_folder_api_v1_folders__post - Create Folder
   */
  "create_folder_api_v1_folders__post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateFolderApiV1FoldersPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateFolderApiV1FoldersPost.Responses.$200>;
  /**
   * get_folder_by_id_api_v1_folders__id__get - Get Folder By Id
   */
  "get_folder_by_id_api_v1_folders__id__get"(
    parameters?: Parameters<Paths.GetFolderByIdApiV1FoldersIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFolderByIdApiV1FoldersIdGet.Responses.$200>;
  /**
   * delete_folder_by_id_api_v1_folders__id__delete - Delete Folder By Id
   */
  "delete_folder_by_id_api_v1_folders__id__delete"(
    parameters?: Parameters<Paths.DeleteFolderByIdApiV1FoldersIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteFolderByIdApiV1FoldersIdDelete.Responses.$200>;
  /**
   * update_folder_name_by_id_api_v1_folders__id__update_post - Update Folder Name By Id
   */
  "update_folder_name_by_id_api_v1_folders__id__update_post"(
    parameters?: Parameters<Paths.UpdateFolderNameByIdApiV1FoldersIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateFolderNameByIdApiV1FoldersIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFolderNameByIdApiV1FoldersIdUpdatePost.Responses.$200>;
  /**
   * update_folder_parent_id_by_id_api_v1_folders__id__update_parent_post - Update Folder Parent Id By Id
   */
  "update_folder_parent_id_by_id_api_v1_folders__id__update_parent_post"(
    parameters?: Parameters<Paths.UpdateFolderParentIdByIdApiV1FoldersIdUpdateParentPost.PathParameters> | null,
    data?: Paths.UpdateFolderParentIdByIdApiV1FoldersIdUpdateParentPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFolderParentIdByIdApiV1FoldersIdUpdateParentPost.Responses.$200>;
  /**
   * update_folder_is_expanded_by_id_api_v1_folders__id__update_expanded_post - Update Folder Is Expanded By Id
   */
  "update_folder_is_expanded_by_id_api_v1_folders__id__update_expanded_post"(
    parameters?: Parameters<Paths.UpdateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost.PathParameters> | null,
    data?: Paths.UpdateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost.Responses.$200>;
  /**
   * get_groups_api_v1_groups__get - Get Groups
   */
  "get_groups_api_v1_groups__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetGroupsApiV1GroupsGet.Responses.$200>;
  /**
   * create_new_group_api_v1_groups_create_post - Create New Group
   */
  "create_new_group_api_v1_groups_create_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewGroupApiV1GroupsCreatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateNewGroupApiV1GroupsCreatePost.Responses.$200>;
  /**
   * get_group_by_id_api_v1_groups_id__id__get - Get Group By Id
   */
  "get_group_by_id_api_v1_groups_id__id__get"(
    parameters?: Parameters<Paths.GetGroupByIdApiV1GroupsIdIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetGroupByIdApiV1GroupsIdIdGet.Responses.$200>;
  /**
   * update_group_by_id_api_v1_groups_id__id__update_post - Update Group By Id
   */
  "update_group_by_id_api_v1_groups_id__id__update_post"(
    parameters?: Parameters<Paths.UpdateGroupByIdApiV1GroupsIdIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateGroupByIdApiV1GroupsIdIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateGroupByIdApiV1GroupsIdIdUpdatePost.Responses.$200>;
  /**
   * delete_group_by_id_api_v1_groups_id__id__delete_delete - Delete Group By Id
   */
  "delete_group_by_id_api_v1_groups_id__id__delete_delete"(
    parameters?: Parameters<Paths.DeleteGroupByIdApiV1GroupsIdIdDeleteDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteGroupByIdApiV1GroupsIdIdDeleteDelete.Responses.$200>;
  /**
   * list_files_api_v1_files__get - List Files
   */
  "list_files_api_v1_files__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ListFilesApiV1FilesGet.Responses.$200>;
  /**
   * upload_file_api_v1_files__post - Upload File
   */
  "upload_file_api_v1_files__post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UploadFileApiV1FilesPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UploadFileApiV1FilesPost.Responses.$200>;
  /**
   * delete_all_files_api_v1_files_all_delete - Delete All Files
   */
  "delete_all_files_api_v1_files_all_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteAllFilesApiV1FilesAllDelete.Responses.$200>;
  /**
   * get_file_by_id_api_v1_files__id__get - Get File By Id
   */
  "get_file_by_id_api_v1_files__id__get"(
    parameters?: Parameters<Paths.GetFileByIdApiV1FilesIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFileByIdApiV1FilesIdGet.Responses.$200>;
  /**
   * delete_file_by_id_api_v1_files__id__delete - Delete File By Id
   */
  "delete_file_by_id_api_v1_files__id__delete"(
    parameters?: Parameters<Paths.DeleteFileByIdApiV1FilesIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteFileByIdApiV1FilesIdDelete.Responses.$200>;
  /**
   * get_file_data_content_by_id_api_v1_files__id__data_content_get - Get File Data Content By Id
   */
  "get_file_data_content_by_id_api_v1_files__id__data_content_get"(
    parameters?: Parameters<Paths.GetFileDataContentByIdApiV1FilesIdDataContentGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFileDataContentByIdApiV1FilesIdDataContentGet.Responses.$200>;
  /**
   * update_file_data_content_by_id_api_v1_files__id__data_content_update_post - Update File Data Content By Id
   */
  "update_file_data_content_by_id_api_v1_files__id__data_content_update_post"(
    parameters?: Parameters<Paths.UpdateFileDataContentByIdApiV1FilesIdDataContentUpdatePost.PathParameters> | null,
    data?: Paths.UpdateFileDataContentByIdApiV1FilesIdDataContentUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFileDataContentByIdApiV1FilesIdDataContentUpdatePost.Responses.$200>;
  /**
   * get_file_content_by_id_api_v1_files__id__content_get - Get File Content By Id
   */
  "get_file_content_by_id_api_v1_files__id__content_get"(
    parameters?: Parameters<Paths.GetFileContentByIdApiV1FilesIdContentGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFileContentByIdApiV1FilesIdContentGet.Responses.$200>;
  /**
   * get_html_file_content_by_id_api_v1_files__id__content_html_get - Get Html File Content By Id
   */
  "get_html_file_content_by_id_api_v1_files__id__content_html_get"(
    parameters?: Parameters<Paths.GetHtmlFileContentByIdApiV1FilesIdContentHtmlGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetHtmlFileContentByIdApiV1FilesIdContentHtmlGet.Responses.$200>;
  /**
   * get_file_content_by_id_api_v1_files__id__content__file_name__get - Get File Content By Id
   */
  "get_file_content_by_id_api_v1_files__id__content__file_name__get"(
    parameters?: Parameters<Paths.GetFileContentByIdApiV1FilesIdContentFileNameGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFileContentByIdApiV1FilesIdContentFileNameGet.Responses.$200>;
  /**
   * get_functions_api_v1_functions__get - Get Functions
   */
  "get_functions_api_v1_functions__get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFunctionsApiV1FunctionsGet.Responses.$200>;
  /**
   * get_functions_api_v1_functions_export_get - Get Functions
   */
  "get_functions_api_v1_functions_export_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFunctionsApiV1FunctionsExportGet.Responses.$200>;
  /**
   * create_new_function_api_v1_functions_create_post - Create New Function
   */
  "create_new_function_api_v1_functions_create_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewFunctionApiV1FunctionsCreatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateNewFunctionApiV1FunctionsCreatePost.Responses.$200>;
  /**
   * get_function_by_id_api_v1_functions_id__id__get - Get Function By Id
   */
  "get_function_by_id_api_v1_functions_id__id__get"(
    parameters?: Parameters<Paths.GetFunctionByIdApiV1FunctionsIdIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFunctionByIdApiV1FunctionsIdIdGet.Responses.$200>;
  /**
   * toggle_function_by_id_api_v1_functions_id__id__toggle_post - Toggle Function By Id
   */
  "toggle_function_by_id_api_v1_functions_id__id__toggle_post"(
    parameters?: Parameters<Paths.ToggleFunctionByIdApiV1FunctionsIdIdTogglePost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ToggleFunctionByIdApiV1FunctionsIdIdTogglePost.Responses.$200>;
  /**
   * toggle_global_by_id_api_v1_functions_id__id__toggle_global_post - Toggle Global By Id
   */
  "toggle_global_by_id_api_v1_functions_id__id__toggle_global_post"(
    parameters?: Parameters<Paths.ToggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ToggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost.Responses.$200>;
  /**
   * update_function_by_id_api_v1_functions_id__id__update_post - Update Function By Id
   */
  "update_function_by_id_api_v1_functions_id__id__update_post"(
    parameters?: Parameters<Paths.UpdateFunctionByIdApiV1FunctionsIdIdUpdatePost.PathParameters> | null,
    data?: Paths.UpdateFunctionByIdApiV1FunctionsIdIdUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFunctionByIdApiV1FunctionsIdIdUpdatePost.Responses.$200>;
  /**
   * delete_function_by_id_api_v1_functions_id__id__delete_delete - Delete Function By Id
   */
  "delete_function_by_id_api_v1_functions_id__id__delete_delete"(
    parameters?: Parameters<Paths.DeleteFunctionByIdApiV1FunctionsIdIdDeleteDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteFunctionByIdApiV1FunctionsIdIdDeleteDelete.Responses.$200>;
  /**
   * get_function_valves_by_id_api_v1_functions_id__id__valves_get - Get Function Valves By Id
   */
  "get_function_valves_by_id_api_v1_functions_id__id__valves_get"(
    parameters?: Parameters<Paths.GetFunctionValvesByIdApiV1FunctionsIdIdValvesGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFunctionValvesByIdApiV1FunctionsIdIdValvesGet.Responses.$200>;
  /**
   * get_function_valves_spec_by_id_api_v1_functions_id__id__valves_spec_get - Get Function Valves Spec By Id
   */
  "get_function_valves_spec_by_id_api_v1_functions_id__id__valves_spec_get"(
    parameters?: Parameters<Paths.GetFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet.Responses.$200>;
  /**
   * update_function_valves_by_id_api_v1_functions_id__id__valves_update_post - Update Function Valves By Id
   */
  "update_function_valves_by_id_api_v1_functions_id__id__valves_update_post"(
    parameters?: Parameters<Paths.UpdateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost.PathParameters> | null,
    data?: Paths.UpdateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost.Responses.$200>;
  /**
   * get_function_user_valves_by_id_api_v1_functions_id__id__valves_user_get - Get Function User Valves By Id
   */
  "get_function_user_valves_by_id_api_v1_functions_id__id__valves_user_get"(
    parameters?: Parameters<Paths.GetFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet.Responses.$200>;
  /**
   * get_function_user_valves_spec_by_id_api_v1_functions_id__id__valves_user_spec_get - Get Function User Valves Spec By Id
   */
  "get_function_user_valves_spec_by_id_api_v1_functions_id__id__valves_user_spec_get"(
    parameters?: Parameters<Paths.GetFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet.Responses.$200>;
  /**
   * update_function_user_valves_by_id_api_v1_functions_id__id__valves_user_update_post - Update Function User Valves By Id
   */
  "update_function_user_valves_by_id_api_v1_functions_id__id__valves_user_update_post"(
    parameters?: Parameters<Paths.UpdateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost.PathParameters> | null,
    data?: Paths.UpdateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost.Responses.$200>;
  /**
   * get_config_api_v1_evaluations_config_get - Get Config
   */
  "get_config_api_v1_evaluations_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetConfigApiV1EvaluationsConfigGet.Responses.$200>;
  /**
   * update_config_api_v1_evaluations_config_post - Update Config
   */
  "update_config_api_v1_evaluations_config_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateConfigApiV1EvaluationsConfigPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateConfigApiV1EvaluationsConfigPost.Responses.$200>;
  /**
   * get_all_feedbacks_api_v1_evaluations_feedbacks_all_get - Get All Feedbacks
   */
  "get_all_feedbacks_api_v1_evaluations_feedbacks_all_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAllFeedbacksApiV1EvaluationsFeedbacksAllGet.Responses.$200>;
  /**
   * delete_all_feedbacks_api_v1_evaluations_feedbacks_all_delete - Delete All Feedbacks
   */
  "delete_all_feedbacks_api_v1_evaluations_feedbacks_all_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteAllFeedbacksApiV1EvaluationsFeedbacksAllDelete.Responses.$200>;
  /**
   * get_all_feedbacks_api_v1_evaluations_feedbacks_all_export_get - Get All Feedbacks
   */
  "get_all_feedbacks_api_v1_evaluations_feedbacks_all_export_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAllFeedbacksApiV1EvaluationsFeedbacksAllExportGet.Responses.$200>;
  /**
   * get_feedbacks_api_v1_evaluations_feedbacks_user_get - Get Feedbacks
   */
  "get_feedbacks_api_v1_evaluations_feedbacks_user_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFeedbacksApiV1EvaluationsFeedbacksUserGet.Responses.$200>;
  /**
   * delete_feedbacks_api_v1_evaluations_feedbacks_delete - Delete Feedbacks
   */
  "delete_feedbacks_api_v1_evaluations_feedbacks_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteFeedbacksApiV1EvaluationsFeedbacksDelete.Responses.$200>;
  /**
   * create_feedback_api_v1_evaluations_feedback_post - Create Feedback
   */
  "create_feedback_api_v1_evaluations_feedback_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateFeedbackApiV1EvaluationsFeedbackPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateFeedbackApiV1EvaluationsFeedbackPost.Responses.$200>;
  /**
   * get_feedback_by_id_api_v1_evaluations_feedback__id__get - Get Feedback By Id
   */
  "get_feedback_by_id_api_v1_evaluations_feedback__id__get"(
    parameters?: Parameters<Paths.GetFeedbackByIdApiV1EvaluationsFeedbackIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetFeedbackByIdApiV1EvaluationsFeedbackIdGet.Responses.$200>;
  /**
   * update_feedback_by_id_api_v1_evaluations_feedback__id__post - Update Feedback By Id
   */
  "update_feedback_by_id_api_v1_evaluations_feedback__id__post"(
    parameters?: Parameters<Paths.UpdateFeedbackByIdApiV1EvaluationsFeedbackIdPost.PathParameters> | null,
    data?: Paths.UpdateFeedbackByIdApiV1EvaluationsFeedbackIdPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateFeedbackByIdApiV1EvaluationsFeedbackIdPost.Responses.$200>;
  /**
   * delete_feedback_by_id_api_v1_evaluations_feedback__id__delete - Delete Feedback By Id
   */
  "delete_feedback_by_id_api_v1_evaluations_feedback__id__delete"(
    parameters?: Parameters<Paths.DeleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DeleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete.Responses.$200>;
  /**
   * get_gravatar_api_v1_utils_gravatar_get - Get Gravatar
   */
  "get_gravatar_api_v1_utils_gravatar_get"(
    parameters?: Parameters<Paths.GetGravatarApiV1UtilsGravatarGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetGravatarApiV1UtilsGravatarGet.Responses.$200>;
  /**
   * format_code_api_v1_utils_code_format_post - Format Code
   */
  "format_code_api_v1_utils_code_format_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.FormatCodeApiV1UtilsCodeFormatPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.FormatCodeApiV1UtilsCodeFormatPost.Responses.$200>;
  /**
   * execute_code_api_v1_utils_code_execute_post - Execute Code
   */
  "execute_code_api_v1_utils_code_execute_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ExecuteCodeApiV1UtilsCodeExecutePost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ExecuteCodeApiV1UtilsCodeExecutePost.Responses.$200>;
  /**
   * get_html_from_markdown_api_v1_utils_markdown_post - Get Html From Markdown
   */
  "get_html_from_markdown_api_v1_utils_markdown_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GetHtmlFromMarkdownApiV1UtilsMarkdownPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetHtmlFromMarkdownApiV1UtilsMarkdownPost.Responses.$200>;
  /**
   * download_chat_as_pdf_api_v1_utils_pdf_post - Download Chat As Pdf
   */
  "download_chat_as_pdf_api_v1_utils_pdf_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.DownloadChatAsPdfApiV1UtilsPdfPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DownloadChatAsPdfApiV1UtilsPdfPost.Responses.$200>;
  /**
   * download_db_api_v1_utils_db_download_get - Download Db
   */
  "download_db_api_v1_utils_db_download_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DownloadDbApiV1UtilsDbDownloadGet.Responses.$200>;
  /**
   * download_litellm_config_yaml_api_v1_utils_litellm_config_get - Download Litellm Config Yaml
   */
  "download_litellm_config_yaml_api_v1_utils_litellm_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.DownloadLitellmConfigYamlApiV1UtilsLitellmConfigGet.Responses.$200>;
  /**
   * get_models_api_models_get - Get Models
   */
  "get_models_api_models_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetModelsApiModelsGet.Responses.$200>;
  /**
   * get_base_models_api_models_base_get - Get Base Models
   */
  "get_base_models_api_models_base_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetBaseModelsApiModelsBaseGet.Responses.$200>;
  /**
   * chat_completion_api_chat_completions_post - Chat Completion
   */
  "chat_completion_api_chat_completions_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ChatCompletionApiChatCompletionsPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ChatCompletionApiChatCompletionsPost.Responses.$200>;
  /**
   * chat_completed_api_chat_completed_post - Chat Completed
   */
  "chat_completed_api_chat_completed_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ChatCompletedApiChatCompletedPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ChatCompletedApiChatCompletedPost.Responses.$200>;
  /**
   * chat_action_api_chat_actions__action_id__post - Chat Action
   */
  "chat_action_api_chat_actions__action_id__post"(
    parameters?: Parameters<Paths.ChatActionApiChatActionsActionIdPost.PathParameters> | null,
    data?: Paths.ChatActionApiChatActionsActionIdPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ChatActionApiChatActionsActionIdPost.Responses.$200>;
  /**
   * stop_task_endpoint_api_tasks_stop__task_id__post - Stop Task Endpoint
   */
  "stop_task_endpoint_api_tasks_stop__task_id__post"(
    parameters?: Parameters<Paths.StopTaskEndpointApiTasksStopTaskIdPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.StopTaskEndpointApiTasksStopTaskIdPost.Responses.$200>;
  /**
   * list_tasks_endpoint_api_tasks_get - List Tasks Endpoint
   */
  "list_tasks_endpoint_api_tasks_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ListTasksEndpointApiTasksGet.Responses.$200>;
  /**
   * get_app_config_api_config_get - Get App Config
   */
  "get_app_config_api_config_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAppConfigApiConfigGet.Responses.$200>;
  /**
   * get_webhook_url_api_webhook_get - Get Webhook Url
   */
  "get_webhook_url_api_webhook_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetWebhookUrlApiWebhookGet.Responses.$200>;
  /**
   * update_webhook_url_api_webhook_post - Update Webhook Url
   */
  "update_webhook_url_api_webhook_post"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateWebhookUrlApiWebhookPost.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdateWebhookUrlApiWebhookPost.Responses.$200>;
  /**
   * get_app_version_api_version_get - Get App Version
   */
  "get_app_version_api_version_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAppVersionApiVersionGet.Responses.$200>;
  /**
   * get_app_latest_release_version_api_version_updates_get - Get App Latest Release Version
   */
  "get_app_latest_release_version_api_version_updates_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAppLatestReleaseVersionApiVersionUpdatesGet.Responses.$200>;
  /**
   * get_app_changelog_api_changelog_get - Get App Changelog
   */
  "get_app_changelog_api_changelog_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetAppChangelogApiChangelogGet.Responses.$200>;
  /**
   * oauth_login_oauth__provider__login_get - Oauth Login
   */
  "oauth_login_oauth__provider__login_get"(
    parameters?: Parameters<Paths.OauthLoginOauthProviderLoginGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.OauthLoginOauthProviderLoginGet.Responses.$200>;
  /**
   * oauth_callback_oauth__provider__callback_get - Oauth Callback
   */
  "oauth_callback_oauth__provider__callback_get"(
    parameters?: Parameters<Paths.OauthCallbackOauthProviderCallbackGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.OauthCallbackOauthProviderCallbackGet.Responses.$200>;
  /**
   * get_manifest_json_manifest_json_get - Get Manifest Json
   */
  "get_manifest_json_manifest_json_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetManifestJsonManifestJsonGet.Responses.$200>;
  /**
   * get_opensearch_xml_opensearch_xml_get - Get Opensearch Xml
   */
  "get_opensearch_xml_opensearch_xml_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOpensearchXmlOpensearchXmlGet.Responses.$200>;
  /**
   * healthcheck_health_get - Healthcheck
   */
  "healthcheck_health_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.HealthcheckHealthGet.Responses.$200>;
  /**
   * healthcheck_with_db_health_db_get - Healthcheck With Db
   */
  "healthcheck_with_db_health_db_get"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.HealthcheckWithDbHealthDbGet.Responses.$200>;
}

export interface PathsDictionary {
  ["/ollama/"]: {
    /**
     * get_status_ollama__get - Get Status
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetStatusOllamaGet.Responses.$200>;
    /**
     * get_status_ollama__head - Get Status
     */
    "head"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetStatusOllamaHead.Responses.$200>;
  };
  ["/ollama/verify"]: {
    /**
     * verify_connection_ollama_verify_post - Verify Connection
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.VerifyConnectionOllamaVerifyPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.VerifyConnectionOllamaVerifyPost.Responses.$200>;
  };
  ["/ollama/config"]: {
    /**
     * get_config_ollama_config_get - Get Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetConfigOllamaConfigGet.Responses.$200>;
  };
  ["/ollama/config/update"]: {
    /**
     * update_config_ollama_config_update_post - Update Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateConfigOllamaConfigUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateConfigOllamaConfigUpdatePost.Responses.$200>;
  };
  ["/ollama/api/tags/{url_idx}"]: {
    /**
     * get_ollama_tags_ollama_api_tags__url_idx__get - Get Ollama Tags
     */
    "get"(
      parameters?: Parameters<Paths.GetOllamaTagsOllamaApiTagsUrlIdxGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOllamaTagsOllamaApiTagsUrlIdxGet.Responses.$200>;
  };
  ["/ollama/api/tags"]: {
    /**
     * get_ollama_tags_ollama_api_tags_get - Get Ollama Tags
     */
    "get"(
      parameters?: Parameters<Paths.GetOllamaTagsOllamaApiTagsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOllamaTagsOllamaApiTagsGet.Responses.$200>;
  };
  ["/ollama/api/version/{url_idx}"]: {
    /**
     * get_ollama_versions_ollama_api_version__url_idx__get - Get Ollama Versions
     */
    "get"(
      parameters?: Parameters<Paths.GetOllamaVersionsOllamaApiVersionUrlIdxGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOllamaVersionsOllamaApiVersionUrlIdxGet.Responses.$200>;
  };
  ["/ollama/api/version"]: {
    /**
     * get_ollama_versions_ollama_api_version_get - Get Ollama Versions
     */
    "get"(
      parameters?: Parameters<Paths.GetOllamaVersionsOllamaApiVersionGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOllamaVersionsOllamaApiVersionGet.Responses.$200>;
  };
  ["/ollama/api/ps"]: {
    /**
     * get_ollama_loaded_models_ollama_api_ps_get - Get Ollama Loaded Models
     *
     * List models that are currently loaded into Ollama memory, and which node they are loaded on.
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOllamaLoadedModelsOllamaApiPsGet.Responses.$200>;
  };
  ["/ollama/api/pull/{url_idx}"]: {
    /**
     * pull_model_ollama_api_pull__url_idx__post - Pull Model
     */
    "post"(
      parameters?: Parameters<Paths.PullModelOllamaApiPullUrlIdxPost.PathParameters> | null,
      data?: Paths.PullModelOllamaApiPullUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PullModelOllamaApiPullUrlIdxPost.Responses.$200>;
  };
  ["/ollama/api/pull"]: {
    /**
     * pull_model_ollama_api_pull_post - Pull Model
     */
    "post"(
      parameters?: Parameters<Paths.PullModelOllamaApiPullPost.QueryParameters> | null,
      data?: Paths.PullModelOllamaApiPullPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PullModelOllamaApiPullPost.Responses.$200>;
  };
  ["/ollama/api/push/{url_idx}"]: {
    /**
     * push_model_ollama_api_push__url_idx__delete - Push Model
     */
    "delete"(
      parameters?: Parameters<Paths.PushModelOllamaApiPushUrlIdxDelete.PathParameters> | null,
      data?: Paths.PushModelOllamaApiPushUrlIdxDelete.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PushModelOllamaApiPushUrlIdxDelete.Responses.$200>;
  };
  ["/ollama/api/push"]: {
    /**
     * push_model_ollama_api_push_delete - Push Model
     */
    "delete"(
      parameters?: Parameters<Paths.PushModelOllamaApiPushDelete.QueryParameters> | null,
      data?: Paths.PushModelOllamaApiPushDelete.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PushModelOllamaApiPushDelete.Responses.$200>;
  };
  ["/ollama/api/create/{url_idx}"]: {
    /**
     * create_model_ollama_api_create__url_idx__post - Create Model
     */
    "post"(
      parameters?: Parameters<Paths.CreateModelOllamaApiCreateUrlIdxPost.PathParameters> | null,
      data?: Paths.CreateModelOllamaApiCreateUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateModelOllamaApiCreateUrlIdxPost.Responses.$200>;
  };
  ["/ollama/api/create"]: {
    /**
     * create_model_ollama_api_create_post - Create Model
     */
    "post"(
      parameters?: Parameters<Paths.CreateModelOllamaApiCreatePost.QueryParameters> | null,
      data?: Paths.CreateModelOllamaApiCreatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateModelOllamaApiCreatePost.Responses.$200>;
  };
  ["/ollama/api/copy/{url_idx}"]: {
    /**
     * copy_model_ollama_api_copy__url_idx__post - Copy Model
     */
    "post"(
      parameters?: Parameters<Paths.CopyModelOllamaApiCopyUrlIdxPost.PathParameters> | null,
      data?: Paths.CopyModelOllamaApiCopyUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CopyModelOllamaApiCopyUrlIdxPost.Responses.$200>;
  };
  ["/ollama/api/copy"]: {
    /**
     * copy_model_ollama_api_copy_post - Copy Model
     */
    "post"(
      parameters?: Parameters<Paths.CopyModelOllamaApiCopyPost.QueryParameters> | null,
      data?: Paths.CopyModelOllamaApiCopyPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CopyModelOllamaApiCopyPost.Responses.$200>;
  };
  ["/ollama/api/delete/{url_idx}"]: {
    /**
     * delete_model_ollama_api_delete__url_idx__delete - Delete Model
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteModelOllamaApiDeleteUrlIdxDelete.PathParameters> | null,
      data?: Paths.DeleteModelOllamaApiDeleteUrlIdxDelete.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteModelOllamaApiDeleteUrlIdxDelete.Responses.$200>;
  };
  ["/ollama/api/delete"]: {
    /**
     * delete_model_ollama_api_delete_delete - Delete Model
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteModelOllamaApiDeleteDelete.QueryParameters> | null,
      data?: Paths.DeleteModelOllamaApiDeleteDelete.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteModelOllamaApiDeleteDelete.Responses.$200>;
  };
  ["/ollama/api/show"]: {
    /**
     * show_model_info_ollama_api_show_post - Show Model Info
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ShowModelInfoOllamaApiShowPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ShowModelInfoOllamaApiShowPost.Responses.$200>;
  };
  ["/ollama/api/embed/{url_idx}"]: {
    /**
     * embed_ollama_api_embed__url_idx__post - Embed
     */
    "post"(
      parameters?: Parameters<Paths.EmbedOllamaApiEmbedUrlIdxPost.PathParameters> | null,
      data?: Paths.EmbedOllamaApiEmbedUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EmbedOllamaApiEmbedUrlIdxPost.Responses.$200>;
  };
  ["/ollama/api/embed"]: {
    /**
     * embed_ollama_api_embed_post - Embed
     */
    "post"(
      parameters?: Parameters<Paths.EmbedOllamaApiEmbedPost.QueryParameters> | null,
      data?: Paths.EmbedOllamaApiEmbedPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EmbedOllamaApiEmbedPost.Responses.$200>;
  };
  ["/ollama/api/embeddings/{url_idx}"]: {
    /**
     * embeddings_ollama_api_embeddings__url_idx__post - Embeddings
     */
    "post"(
      parameters?: Parameters<Paths.EmbeddingsOllamaApiEmbeddingsUrlIdxPost.PathParameters> | null,
      data?: Paths.EmbeddingsOllamaApiEmbeddingsUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EmbeddingsOllamaApiEmbeddingsUrlIdxPost.Responses.$200>;
  };
  ["/ollama/api/embeddings"]: {
    /**
     * embeddings_ollama_api_embeddings_post - Embeddings
     */
    "post"(
      parameters?: Parameters<Paths.EmbeddingsOllamaApiEmbeddingsPost.QueryParameters> | null,
      data?: Paths.EmbeddingsOllamaApiEmbeddingsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.EmbeddingsOllamaApiEmbeddingsPost.Responses.$200>;
  };
  ["/ollama/api/generate/{url_idx}"]: {
    /**
     * generate_completion_ollama_api_generate__url_idx__post - Generate Completion
     */
    "post"(
      parameters?: Parameters<Paths.GenerateCompletionOllamaApiGenerateUrlIdxPost.PathParameters> | null,
      data?: Paths.GenerateCompletionOllamaApiGenerateUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateCompletionOllamaApiGenerateUrlIdxPost.Responses.$200>;
  };
  ["/ollama/api/generate"]: {
    /**
     * generate_completion_ollama_api_generate_post - Generate Completion
     */
    "post"(
      parameters?: Parameters<Paths.GenerateCompletionOllamaApiGeneratePost.QueryParameters> | null,
      data?: Paths.GenerateCompletionOllamaApiGeneratePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateCompletionOllamaApiGeneratePost.Responses.$200>;
  };
  ["/ollama/api/chat/{url_idx}"]: {
    /**
     * generate_chat_completion_ollama_api_chat__url_idx__post - Generate Chat Completion
     */
    "post"(
      parameters?: Parameters<
        Paths.GenerateChatCompletionOllamaApiChatUrlIdxPost.QueryParameters &
          Paths.GenerateChatCompletionOllamaApiChatUrlIdxPost.PathParameters
      > | null,
      data?: Paths.GenerateChatCompletionOllamaApiChatUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateChatCompletionOllamaApiChatUrlIdxPost.Responses.$200>;
  };
  ["/ollama/api/chat"]: {
    /**
     * generate_chat_completion_ollama_api_chat_post - Generate Chat Completion
     */
    "post"(
      parameters?: Parameters<Paths.GenerateChatCompletionOllamaApiChatPost.QueryParameters> | null,
      data?: Paths.GenerateChatCompletionOllamaApiChatPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateChatCompletionOllamaApiChatPost.Responses.$200>;
  };
  ["/ollama/v1/completions/{url_idx}"]: {
    /**
     * generate_openai_completion_ollama_v1_completions__url_idx__post - Generate Openai Completion
     */
    "post"(
      parameters?: Parameters<Paths.GenerateOpenaiCompletionOllamaV1CompletionsUrlIdxPost.PathParameters> | null,
      data?: Paths.GenerateOpenaiCompletionOllamaV1CompletionsUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateOpenaiCompletionOllamaV1CompletionsUrlIdxPost.Responses.$200>;
  };
  ["/ollama/v1/completions"]: {
    /**
     * generate_openai_completion_ollama_v1_completions_post - Generate Openai Completion
     */
    "post"(
      parameters?: Parameters<Paths.GenerateOpenaiCompletionOllamaV1CompletionsPost.QueryParameters> | null,
      data?: Paths.GenerateOpenaiCompletionOllamaV1CompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateOpenaiCompletionOllamaV1CompletionsPost.Responses.$200>;
  };
  ["/ollama/v1/chat/completions/{url_idx}"]: {
    /**
     * generate_openai_chat_completion_ollama_v1_chat_completions__url_idx__post - Generate Openai Chat Completion
     */
    "post"(
      parameters?: Parameters<Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost.PathParameters> | null,
      data?: Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsUrlIdxPost.Responses.$200>;
  };
  ["/ollama/v1/chat/completions"]: {
    /**
     * generate_openai_chat_completion_ollama_v1_chat_completions_post - Generate Openai Chat Completion
     */
    "post"(
      parameters?: Parameters<Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsPost.QueryParameters> | null,
      data?: Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateOpenaiChatCompletionOllamaV1ChatCompletionsPost.Responses.$200>;
  };
  ["/ollama/v1/models/{url_idx}"]: {
    /**
     * get_openai_models_ollama_v1_models__url_idx__get - Get Openai Models
     */
    "get"(
      parameters?: Parameters<Paths.GetOpenaiModelsOllamaV1ModelsUrlIdxGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOpenaiModelsOllamaV1ModelsUrlIdxGet.Responses.$200>;
  };
  ["/ollama/v1/models"]: {
    /**
     * get_openai_models_ollama_v1_models_get - Get Openai Models
     */
    "get"(
      parameters?: Parameters<Paths.GetOpenaiModelsOllamaV1ModelsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOpenaiModelsOllamaV1ModelsGet.Responses.$200>;
  };
  ["/ollama/models/download/{url_idx}"]: {
    /**
     * download_model_ollama_models_download__url_idx__post - Download Model
     */
    "post"(
      parameters?: Parameters<Paths.DownloadModelOllamaModelsDownloadUrlIdxPost.PathParameters> | null,
      data?: Paths.DownloadModelOllamaModelsDownloadUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DownloadModelOllamaModelsDownloadUrlIdxPost.Responses.$200>;
  };
  ["/ollama/models/download"]: {
    /**
     * download_model_ollama_models_download_post - Download Model
     */
    "post"(
      parameters?: Parameters<Paths.DownloadModelOllamaModelsDownloadPost.QueryParameters> | null,
      data?: Paths.DownloadModelOllamaModelsDownloadPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DownloadModelOllamaModelsDownloadPost.Responses.$200>;
  };
  ["/ollama/models/upload/{url_idx}"]: {
    /**
     * upload_model_ollama_models_upload__url_idx__post - Upload Model
     */
    "post"(
      parameters?: Parameters<Paths.UploadModelOllamaModelsUploadUrlIdxPost.PathParameters> | null,
      data?: Paths.UploadModelOllamaModelsUploadUrlIdxPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UploadModelOllamaModelsUploadUrlIdxPost.Responses.$200>;
  };
  ["/ollama/models/upload"]: {
    /**
     * upload_model_ollama_models_upload_post - Upload Model
     */
    "post"(
      parameters?: Parameters<Paths.UploadModelOllamaModelsUploadPost.QueryParameters> | null,
      data?: Paths.UploadModelOllamaModelsUploadPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UploadModelOllamaModelsUploadPost.Responses.$200>;
  };
  ["/openai/config"]: {
    /**
     * get_config_openai_config_get - Get Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetConfigOpenaiConfigGet.Responses.$200>;
  };
  ["/openai/config/update"]: {
    /**
     * update_config_openai_config_update_post - Update Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateConfigOpenaiConfigUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateConfigOpenaiConfigUpdatePost.Responses.$200>;
  };
  ["/openai/audio/speech"]: {
    /**
     * speech_openai_audio_speech_post - Speech
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SpeechOpenaiAudioSpeechPost.Responses.$200>;
  };
  ["/openai/models/{url_idx}"]: {
    /**
     * get_models_openai_models__url_idx__get - Get Models
     */
    "get"(
      parameters?: Parameters<Paths.GetModelsOpenaiModelsUrlIdxGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetModelsOpenaiModelsUrlIdxGet.Responses.$200>;
  };
  ["/openai/models"]: {
    /**
     * get_models_openai_models_get - Get Models
     */
    "get"(
      parameters?: Parameters<Paths.GetModelsOpenaiModelsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetModelsOpenaiModelsGet.Responses.$200>;
  };
  ["/openai/verify"]: {
    /**
     * verify_connection_openai_verify_post - Verify Connection
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.VerifyConnectionOpenaiVerifyPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.VerifyConnectionOpenaiVerifyPost.Responses.$200>;
  };
  ["/openai/chat/completions"]: {
    /**
     * generate_chat_completion_openai_chat_completions_post - Generate Chat Completion
     */
    "post"(
      parameters?: Parameters<Paths.GenerateChatCompletionOpenaiChatCompletionsPost.QueryParameters> | null,
      data?: Paths.GenerateChatCompletionOpenaiChatCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateChatCompletionOpenaiChatCompletionsPost.Responses.$200>;
  };
  ["/openai/{path}"]: {
    /**
     * proxy_openai__path__post - Proxy
     *
     * Deprecated: proxy all requests to OpenAI API
     */
    "post"(
      parameters?: Parameters<Paths.ProxyOpenaiPathPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProxyOpenaiPathPost.Responses.$200>;
    /**
     * proxy_openai__path__post - Proxy
     *
     * Deprecated: proxy all requests to OpenAI API
     */
    "delete"(
      parameters?: Parameters<Paths.ProxyOpenaiPathPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProxyOpenaiPathPost.Responses.$200>;
    /**
     * proxy_openai__path__post - Proxy
     *
     * Deprecated: proxy all requests to OpenAI API
     */
    "get"(
      parameters?: Parameters<Paths.ProxyOpenaiPathPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProxyOpenaiPathPost.Responses.$200>;
    /**
     * proxy_openai__path__post - Proxy
     *
     * Deprecated: proxy all requests to OpenAI API
     */
    "put"(
      parameters?: Parameters<Paths.ProxyOpenaiPathPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProxyOpenaiPathPost.Responses.$200>;
  };
  ["/api/v1/pipelines/list"]: {
    /**
     * get_pipelines_list_api_v1_pipelines_list_get - Get Pipelines List
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPipelinesListApiV1PipelinesListGet.Responses.$200>;
  };
  ["/api/v1/pipelines/upload"]: {
    /**
     * upload_pipeline_api_v1_pipelines_upload_post - Upload Pipeline
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UploadPipelineApiV1PipelinesUploadPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UploadPipelineApiV1PipelinesUploadPost.Responses.$200>;
  };
  ["/api/v1/pipelines/add"]: {
    /**
     * add_pipeline_api_v1_pipelines_add_post - Add Pipeline
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddPipelineApiV1PipelinesAddPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.AddPipelineApiV1PipelinesAddPost.Responses.$200>;
  };
  ["/api/v1/pipelines/delete"]: {
    /**
     * delete_pipeline_api_v1_pipelines_delete_delete - Delete Pipeline
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.DeletePipelineApiV1PipelinesDeleteDelete.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeletePipelineApiV1PipelinesDeleteDelete.Responses.$200>;
  };
  ["/api/v1/pipelines/"]: {
    /**
     * get_pipelines_api_v1_pipelines__get - Get Pipelines
     */
    "get"(
      parameters?: Parameters<Paths.GetPipelinesApiV1PipelinesGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPipelinesApiV1PipelinesGet.Responses.$200>;
  };
  ["/api/v1/pipelines/{pipeline_id}/valves"]: {
    /**
     * get_pipeline_valves_api_v1_pipelines__pipeline_id__valves_get - Get Pipeline Valves
     */
    "get"(
      parameters?: Parameters<
        Paths.GetPipelineValvesApiV1PipelinesPipelineIdValvesGet.QueryParameters &
          Paths.GetPipelineValvesApiV1PipelinesPipelineIdValvesGet.PathParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPipelineValvesApiV1PipelinesPipelineIdValvesGet.Responses.$200>;
  };
  ["/api/v1/pipelines/{pipeline_id}/valves/spec"]: {
    /**
     * get_pipeline_valves_spec_api_v1_pipelines__pipeline_id__valves_spec_get - Get Pipeline Valves Spec
     */
    "get"(
      parameters?: Parameters<
        Paths.GetPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet.QueryParameters &
          Paths.GetPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet.PathParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet.Responses.$200>;
  };
  ["/api/v1/pipelines/{pipeline_id}/valves/update"]: {
    /**
     * update_pipeline_valves_api_v1_pipelines__pipeline_id__valves_update_post - Update Pipeline Valves
     */
    "post"(
      parameters?: Parameters<
        Paths.UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost.QueryParameters &
          Paths.UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost.PathParameters
      > | null,
      data?: Paths.UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost.Responses.$200>;
  };
  ["/api/v1/tasks/config"]: {
    /**
     * get_task_config_api_v1_tasks_config_get - Get Task Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetTaskConfigApiV1TasksConfigGet.Responses.$200>;
  };
  ["/api/v1/tasks/config/update"]: {
    /**
     * update_task_config_api_v1_tasks_config_update_post - Update Task Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateTaskConfigApiV1TasksConfigUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateTaskConfigApiV1TasksConfigUpdatePost.Responses.$200>;
  };
  ["/api/v1/tasks/title/completions"]: {
    /**
     * generate_title_api_v1_tasks_title_completions_post - Generate Title
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GenerateTitleApiV1TasksTitleCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateTitleApiV1TasksTitleCompletionsPost.Responses.$200>;
  };
  ["/api/v1/tasks/tags/completions"]: {
    /**
     * generate_chat_tags_api_v1_tasks_tags_completions_post - Generate Chat Tags
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GenerateChatTagsApiV1TasksTagsCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateChatTagsApiV1TasksTagsCompletionsPost.Responses.$200>;
  };
  ["/api/v1/tasks/image_prompt/completions"]: {
    /**
     * generate_image_prompt_api_v1_tasks_image_prompt_completions_post - Generate Image Prompt
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GenerateImagePromptApiV1TasksImagePromptCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateImagePromptApiV1TasksImagePromptCompletionsPost.Responses.$200>;
  };
  ["/api/v1/tasks/queries/completions"]: {
    /**
     * generate_queries_api_v1_tasks_queries_completions_post - Generate Queries
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GenerateQueriesApiV1TasksQueriesCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateQueriesApiV1TasksQueriesCompletionsPost.Responses.$200>;
  };
  ["/api/v1/tasks/auto/completions"]: {
    /**
     * generate_autocompletion_api_v1_tasks_auto_completions_post - Generate Autocompletion
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GenerateAutocompletionApiV1TasksAutoCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateAutocompletionApiV1TasksAutoCompletionsPost.Responses.$200>;
  };
  ["/api/v1/tasks/emoji/completions"]: {
    /**
     * generate_emoji_api_v1_tasks_emoji_completions_post - Generate Emoji
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GenerateEmojiApiV1TasksEmojiCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateEmojiApiV1TasksEmojiCompletionsPost.Responses.$200>;
  };
  ["/api/v1/tasks/moa/completions"]: {
    /**
     * generate_moa_response_api_v1_tasks_moa_completions_post - Generate Moa Response
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GenerateMoaResponseApiV1TasksMoaCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateMoaResponseApiV1TasksMoaCompletionsPost.Responses.$200>;
  };
  ["/api/v1/images/config"]: {
    /**
     * get_config_api_v1_images_config_get - Get Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetConfigApiV1ImagesConfigGet.Responses.$200>;
  };
  ["/api/v1/images/config/update"]: {
    /**
     * update_config_api_v1_images_config_update_post - Update Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateConfigApiV1ImagesConfigUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateConfigApiV1ImagesConfigUpdatePost.Responses.$200>;
  };
  ["/api/v1/images/config/url/verify"]: {
    /**
     * verify_url_api_v1_images_config_url_verify_get - Verify Url
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.VerifyUrlApiV1ImagesConfigUrlVerifyGet.Responses.$200>;
  };
  ["/api/v1/images/image/config"]: {
    /**
     * get_image_config_api_v1_images_image_config_get - Get Image Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetImageConfigApiV1ImagesImageConfigGet.Responses.$200>;
  };
  ["/api/v1/images/image/config/update"]: {
    /**
     * update_image_config_api_v1_images_image_config_update_post - Update Image Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateImageConfigApiV1ImagesImageConfigUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateImageConfigApiV1ImagesImageConfigUpdatePost.Responses.$200>;
  };
  ["/api/v1/images/models"]: {
    /**
     * get_models_api_v1_images_models_get - Get Models
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetModelsApiV1ImagesModelsGet.Responses.$200>;
  };
  ["/api/v1/images/generations"]: {
    /**
     * image_generations_api_v1_images_generations_post - Image Generations
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ImageGenerationsApiV1ImagesGenerationsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ImageGenerationsApiV1ImagesGenerationsPost.Responses.$200>;
  };
  ["/api/v1/audio/config"]: {
    /**
     * get_audio_config_api_v1_audio_config_get - Get Audio Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAudioConfigApiV1AudioConfigGet.Responses.$200>;
  };
  ["/api/v1/audio/config/update"]: {
    /**
     * update_audio_config_api_v1_audio_config_update_post - Update Audio Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateAudioConfigApiV1AudioConfigUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateAudioConfigApiV1AudioConfigUpdatePost.Responses.$200>;
  };
  ["/api/v1/audio/speech"]: {
    /**
     * speech_api_v1_audio_speech_post - Speech
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SpeechApiV1AudioSpeechPost.Responses.$200>;
  };
  ["/api/v1/audio/transcriptions"]: {
    /**
     * transcription_api_v1_audio_transcriptions_post - Transcription
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.TranscriptionApiV1AudioTranscriptionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.TranscriptionApiV1AudioTranscriptionsPost.Responses.$200>;
  };
  ["/api/v1/audio/models"]: {
    /**
     * get_models_api_v1_audio_models_get - Get Models
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetModelsApiV1AudioModelsGet.Responses.$200>;
  };
  ["/api/v1/audio/voices"]: {
    /**
     * get_voices_api_v1_audio_voices_get - Get Voices
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetVoicesApiV1AudioVoicesGet.Responses.$200>;
  };
  ["/api/v1/retrieval/"]: {
    /**
     * get_status_api_v1_retrieval__get - Get Status
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetStatusApiV1RetrievalGet.Responses.$200>;
  };
  ["/api/v1/retrieval/embedding"]: {
    /**
     * get_embedding_config_api_v1_retrieval_embedding_get - Get Embedding Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetEmbeddingConfigApiV1RetrievalEmbeddingGet.Responses.$200>;
  };
  ["/api/v1/retrieval/reranking"]: {
    /**
     * get_reraanking_config_api_v1_retrieval_reranking_get - Get Reraanking Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetReraankingConfigApiV1RetrievalRerankingGet.Responses.$200>;
  };
  ["/api/v1/retrieval/embedding/update"]: {
    /**
     * update_embedding_config_api_v1_retrieval_embedding_update_post - Update Embedding Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost.Responses.$200>;
  };
  ["/api/v1/retrieval/reranking/update"]: {
    /**
     * update_reranking_config_api_v1_retrieval_reranking_update_post - Update Reranking Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateRerankingConfigApiV1RetrievalRerankingUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateRerankingConfigApiV1RetrievalRerankingUpdatePost.Responses.$200>;
  };
  ["/api/v1/retrieval/config"]: {
    /**
     * get_rag_config_api_v1_retrieval_config_get - Get Rag Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetRagConfigApiV1RetrievalConfigGet.Responses.$200>;
  };
  ["/api/v1/retrieval/config/update"]: {
    /**
     * update_rag_config_api_v1_retrieval_config_update_post - Update Rag Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateRagConfigApiV1RetrievalConfigUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateRagConfigApiV1RetrievalConfigUpdatePost.Responses.$200>;
  };
  ["/api/v1/retrieval/template"]: {
    /**
     * get_rag_template_api_v1_retrieval_template_get - Get Rag Template
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetRagTemplateApiV1RetrievalTemplateGet.Responses.$200>;
  };
  ["/api/v1/retrieval/query/settings"]: {
    /**
     * get_query_settings_api_v1_retrieval_query_settings_get - Get Query Settings
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetQuerySettingsApiV1RetrievalQuerySettingsGet.Responses.$200>;
  };
  ["/api/v1/retrieval/query/settings/update"]: {
    /**
     * update_query_settings_api_v1_retrieval_query_settings_update_post - Update Query Settings
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateQuerySettingsApiV1RetrievalQuerySettingsUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateQuerySettingsApiV1RetrievalQuerySettingsUpdatePost.Responses.$200>;
  };
  ["/api/v1/retrieval/process/file"]: {
    /**
     * process_file_api_v1_retrieval_process_file_post - Process File
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ProcessFileApiV1RetrievalProcessFilePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProcessFileApiV1RetrievalProcessFilePost.Responses.$200>;
  };
  ["/api/v1/retrieval/process/text"]: {
    /**
     * process_text_api_v1_retrieval_process_text_post - Process Text
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ProcessTextApiV1RetrievalProcessTextPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProcessTextApiV1RetrievalProcessTextPost.Responses.$200>;
  };
  ["/api/v1/retrieval/process/youtube"]: {
    /**
     * process_youtube_video_api_v1_retrieval_process_youtube_post - Process Youtube Video
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ProcessYoutubeVideoApiV1RetrievalProcessYoutubePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProcessYoutubeVideoApiV1RetrievalProcessYoutubePost.Responses.$200>;
  };
  ["/api/v1/retrieval/process/web"]: {
    /**
     * process_web_api_v1_retrieval_process_web_post - Process Web
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ProcessWebApiV1RetrievalProcessWebPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProcessWebApiV1RetrievalProcessWebPost.Responses.$200>;
  };
  ["/api/v1/retrieval/process/web/search"]: {
    /**
     * process_web_search_api_v1_retrieval_process_web_search_post - Process Web Search
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ProcessWebSearchApiV1RetrievalProcessWebSearchPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProcessWebSearchApiV1RetrievalProcessWebSearchPost.Responses.$200>;
  };
  ["/api/v1/retrieval/query/doc"]: {
    /**
     * query_doc_handler_api_v1_retrieval_query_doc_post - Query Doc Handler
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.QueryDocHandlerApiV1RetrievalQueryDocPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.QueryDocHandlerApiV1RetrievalQueryDocPost.Responses.$200>;
  };
  ["/api/v1/retrieval/query/collection"]: {
    /**
     * query_collection_handler_api_v1_retrieval_query_collection_post - Query Collection Handler
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.QueryCollectionHandlerApiV1RetrievalQueryCollectionPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.QueryCollectionHandlerApiV1RetrievalQueryCollectionPost.Responses.$200>;
  };
  ["/api/v1/retrieval/delete"]: {
    /**
     * delete_entries_from_collection_api_v1_retrieval_delete_post - Delete Entries From Collection
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.DeleteEntriesFromCollectionApiV1RetrievalDeletePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteEntriesFromCollectionApiV1RetrievalDeletePost.Responses.$200>;
  };
  ["/api/v1/retrieval/reset/db"]: {
    /**
     * reset_vector_db_api_v1_retrieval_reset_db_post - Reset Vector Db
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ResetVectorDbApiV1RetrievalResetDbPost.Responses.$200>;
  };
  ["/api/v1/retrieval/reset/uploads"]: {
    /**
     * reset_upload_dir_api_v1_retrieval_reset_uploads_post - Reset Upload Dir
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ResetUploadDirApiV1RetrievalResetUploadsPost.Responses.$200>;
  };
  ["/api/v1/retrieval/ef/{text}"]: {
    /**
     * get_embeddings_api_v1_retrieval_ef__text__get - Get Embeddings
     */
    "get"(
      parameters?: Parameters<Paths.GetEmbeddingsApiV1RetrievalEfTextGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetEmbeddingsApiV1RetrievalEfTextGet.Responses.$200>;
  };
  ["/api/v1/retrieval/process/files/batch"]: {
    /**
     * process_files_batch_api_v1_retrieval_process_files_batch_post - Process Files Batch
     *
     * Process a batch of files and save them to the vector database.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ProcessFilesBatchApiV1RetrievalProcessFilesBatchPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ProcessFilesBatchApiV1RetrievalProcessFilesBatchPost.Responses.$200>;
  };
  ["/api/v1/configs/import"]: {
    /**
     * import_config_api_v1_configs_import_post - Import Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ImportConfigApiV1ConfigsImportPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ImportConfigApiV1ConfigsImportPost.Responses.$200>;
  };
  ["/api/v1/configs/export"]: {
    /**
     * export_config_api_v1_configs_export_get - Export Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ExportConfigApiV1ConfigsExportGet.Responses.$200>;
  };
  ["/api/v1/configs/direct_connections"]: {
    /**
     * get_direct_connections_config_api_v1_configs_direct_connections_get - Get Direct Connections Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetDirectConnectionsConfigApiV1ConfigsDirectConnectionsGet.Responses.$200>;
    /**
     * set_direct_connections_config_api_v1_configs_direct_connections_post - Set Direct Connections Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SetDirectConnectionsConfigApiV1ConfigsDirectConnectionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SetDirectConnectionsConfigApiV1ConfigsDirectConnectionsPost.Responses.$200>;
  };
  ["/api/v1/configs/code_execution"]: {
    /**
     * get_code_execution_config_api_v1_configs_code_execution_get - Get Code Execution Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetCodeExecutionConfigApiV1ConfigsCodeExecutionGet.Responses.$200>;
    /**
     * set_code_execution_config_api_v1_configs_code_execution_post - Set Code Execution Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SetCodeExecutionConfigApiV1ConfigsCodeExecutionPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SetCodeExecutionConfigApiV1ConfigsCodeExecutionPost.Responses.$200>;
  };
  ["/api/v1/configs/models"]: {
    /**
     * get_models_config_api_v1_configs_models_get - Get Models Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetModelsConfigApiV1ConfigsModelsGet.Responses.$200>;
    /**
     * set_models_config_api_v1_configs_models_post - Set Models Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SetModelsConfigApiV1ConfigsModelsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SetModelsConfigApiV1ConfigsModelsPost.Responses.$200>;
  };
  ["/api/v1/configs/suggestions"]: {
    /**
     * set_default_suggestions_api_v1_configs_suggestions_post - Set Default Suggestions
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SetDefaultSuggestionsApiV1ConfigsSuggestionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SetDefaultSuggestionsApiV1ConfigsSuggestionsPost.Responses.$200>;
  };
  ["/api/v1/configs/banners"]: {
    /**
     * get_banners_api_v1_configs_banners_get - Get Banners
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetBannersApiV1ConfigsBannersGet.Responses.$200>;
    /**
     * set_banners_api_v1_configs_banners_post - Set Banners
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SetBannersApiV1ConfigsBannersPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SetBannersApiV1ConfigsBannersPost.Responses.$200>;
  };
  ["/api/v1/auths/"]: {
    /**
     * get_session_user_api_v1_auths__get - Get Session User
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetSessionUserApiV1AuthsGet.Responses.$200>;
  };
  ["/api/v1/auths/update/profile"]: {
    /**
     * update_profile_api_v1_auths_update_profile_post - Update Profile
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateProfileApiV1AuthsUpdateProfilePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateProfileApiV1AuthsUpdateProfilePost.Responses.$200>;
  };
  ["/api/v1/auths/update/password"]: {
    /**
     * update_password_api_v1_auths_update_password_post - Update Password
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdatePasswordApiV1AuthsUpdatePasswordPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdatePasswordApiV1AuthsUpdatePasswordPost.Responses.$200>;
  };
  ["/api/v1/auths/ldap"]: {
    /**
     * ldap_auth_api_v1_auths_ldap_post - Ldap Auth
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.LdapAuthApiV1AuthsLdapPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.LdapAuthApiV1AuthsLdapPost.Responses.$200>;
  };
  ["/api/v1/auths/signin"]: {
    /**
     * signin_api_v1_auths_signin_post - Signin
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SigninApiV1AuthsSigninPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SigninApiV1AuthsSigninPost.Responses.$200>;
  };
  ["/api/v1/auths/signup"]: {
    /**
     * signup_api_v1_auths_signup_post - Signup
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SignupApiV1AuthsSignupPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SignupApiV1AuthsSignupPost.Responses.$200>;
  };
  ["/api/v1/auths/signout"]: {
    /**
     * signout_api_v1_auths_signout_get - Signout
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SignoutApiV1AuthsSignoutGet.Responses.$200>;
  };
  ["/api/v1/auths/add"]: {
    /**
     * add_user_api_v1_auths_add_post - Add User
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddUserApiV1AuthsAddPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.AddUserApiV1AuthsAddPost.Responses.$200>;
  };
  ["/api/v1/auths/admin/details"]: {
    /**
     * get_admin_details_api_v1_auths_admin_details_get - Get Admin Details
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAdminDetailsApiV1AuthsAdminDetailsGet.Responses.$200>;
  };
  ["/api/v1/auths/admin/config"]: {
    /**
     * get_admin_config_api_v1_auths_admin_config_get - Get Admin Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAdminConfigApiV1AuthsAdminConfigGet.Responses.$200>;
    /**
     * update_admin_config_api_v1_auths_admin_config_post - Update Admin Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateAdminConfigApiV1AuthsAdminConfigPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateAdminConfigApiV1AuthsAdminConfigPost.Responses.$200>;
  };
  ["/api/v1/auths/admin/config/ldap/server"]: {
    /**
     * get_ldap_server_api_v1_auths_admin_config_ldap_server_get - Get Ldap Server
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetLdapServerApiV1AuthsAdminConfigLdapServerGet.Responses.$200>;
    /**
     * update_ldap_server_api_v1_auths_admin_config_ldap_server_post - Update Ldap Server
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateLdapServerApiV1AuthsAdminConfigLdapServerPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateLdapServerApiV1AuthsAdminConfigLdapServerPost.Responses.$200>;
  };
  ["/api/v1/auths/admin/config/ldap"]: {
    /**
     * get_ldap_config_api_v1_auths_admin_config_ldap_get - Get Ldap Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetLdapConfigApiV1AuthsAdminConfigLdapGet.Responses.$200>;
    /**
     * update_ldap_config_api_v1_auths_admin_config_ldap_post - Update Ldap Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateLdapConfigApiV1AuthsAdminConfigLdapPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateLdapConfigApiV1AuthsAdminConfigLdapPost.Responses.$200>;
  };
  ["/api/v1/auths/api_key"]: {
    /**
     * get_api_key_api_v1_auths_api_key_get - Get Api Key
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetApiKeyApiV1AuthsApiKeyGet.Responses.$200>;
    /**
     * generate_api_key_api_v1_auths_api_key_post - Generate Api Key
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GenerateApiKeyApiV1AuthsApiKeyPost.Responses.$200>;
    /**
     * delete_api_key_api_v1_auths_api_key_delete - Delete Api Key
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteApiKeyApiV1AuthsApiKeyDelete.Responses.$200>;
  };
  ["/api/v1/users/"]: {
    /**
     * get_users_api_v1_users__get - Get Users
     */
    "get"(
      parameters?: Parameters<Paths.GetUsersApiV1UsersGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUsersApiV1UsersGet.Responses.$200>;
  };
  ["/api/v1/users/groups"]: {
    /**
     * get_user_groups_api_v1_users_groups_get - Get User Groups
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserGroupsApiV1UsersGroupsGet.Responses.$200>;
  };
  ["/api/v1/users/permissions"]: {
    /**
     * get_user_permissisions_api_v1_users_permissions_get - Get User Permissisions
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserPermissisionsApiV1UsersPermissionsGet.Responses.$200>;
  };
  ["/api/v1/users/default/permissions"]: {
    /**
     * get_user_permissions_api_v1_users_default_permissions_get - Get User Permissions
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserPermissionsApiV1UsersDefaultPermissionsGet.Responses.$200>;
    /**
     * update_user_permissions_api_v1_users_default_permissions_post - Update User Permissions
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateUserPermissionsApiV1UsersDefaultPermissionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateUserPermissionsApiV1UsersDefaultPermissionsPost.Responses.$200>;
  };
  ["/api/v1/users/update/role"]: {
    /**
     * update_user_role_api_v1_users_update_role_post - Update User Role
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateUserRoleApiV1UsersUpdateRolePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateUserRoleApiV1UsersUpdateRolePost.Responses.$200>;
  };
  ["/api/v1/users/user/settings"]: {
    /**
     * get_user_settings_by_session_user_api_v1_users_user_settings_get - Get User Settings By Session User
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserSettingsBySessionUserApiV1UsersUserSettingsGet.Responses.$200>;
  };
  ["/api/v1/users/user/settings/update"]: {
    /**
     * update_user_settings_by_session_user_api_v1_users_user_settings_update_post - Update User Settings By Session User
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost.Responses.$200>;
  };
  ["/api/v1/users/user/info"]: {
    /**
     * get_user_info_by_session_user_api_v1_users_user_info_get - Get User Info By Session User
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserInfoBySessionUserApiV1UsersUserInfoGet.Responses.$200>;
  };
  ["/api/v1/users/user/info/update"]: {
    /**
     * update_user_info_by_session_user_api_v1_users_user_info_update_post - Update User Info By Session User
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost.Responses.$200>;
  };
  ["/api/v1/users/{user_id}"]: {
    /**
     * get_user_by_id_api_v1_users__user_id__get - Get User By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetUserByIdApiV1UsersUserIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserByIdApiV1UsersUserIdGet.Responses.$200>;
    /**
     * delete_user_by_id_api_v1_users__user_id__delete - Delete User By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteUserByIdApiV1UsersUserIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteUserByIdApiV1UsersUserIdDelete.Responses.$200>;
  };
  ["/api/v1/users/{user_id}/update"]: {
    /**
     * update_user_by_id_api_v1_users__user_id__update_post - Update User By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateUserByIdApiV1UsersUserIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateUserByIdApiV1UsersUserIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateUserByIdApiV1UsersUserIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/channels/"]: {
    /**
     * get_channels_api_v1_channels__get - Get Channels
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetChannelsApiV1ChannelsGet.Responses.$200>;
  };
  ["/api/v1/channels/create"]: {
    /**
     * create_new_channel_api_v1_channels_create_post - Create New Channel
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewChannelApiV1ChannelsCreatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateNewChannelApiV1ChannelsCreatePost.Responses.$200>;
  };
  ["/api/v1/channels/{id}"]: {
    /**
     * get_channel_by_id_api_v1_channels__id__get - Get Channel By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetChannelByIdApiV1ChannelsIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetChannelByIdApiV1ChannelsIdGet.Responses.$200>;
  };
  ["/api/v1/channels/{id}/update"]: {
    /**
     * update_channel_by_id_api_v1_channels__id__update_post - Update Channel By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateChannelByIdApiV1ChannelsIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateChannelByIdApiV1ChannelsIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateChannelByIdApiV1ChannelsIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/channels/{id}/delete"]: {
    /**
     * delete_channel_by_id_api_v1_channels__id__delete_delete - Delete Channel By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteChannelByIdApiV1ChannelsIdDeleteDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteChannelByIdApiV1ChannelsIdDeleteDelete.Responses.$200>;
  };
  ["/api/v1/channels/{id}/messages"]: {
    /**
     * get_channel_messages_api_v1_channels__id__messages_get - Get Channel Messages
     */
    "get"(
      parameters?: Parameters<
        Paths.GetChannelMessagesApiV1ChannelsIdMessagesGet.QueryParameters &
          Paths.GetChannelMessagesApiV1ChannelsIdMessagesGet.PathParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetChannelMessagesApiV1ChannelsIdMessagesGet.Responses.$200>;
  };
  ["/api/v1/channels/{id}/messages/post"]: {
    /**
     * post_new_message_api_v1_channels__id__messages_post_post - Post New Message
     */
    "post"(
      parameters?: Parameters<Paths.PostNewMessageApiV1ChannelsIdMessagesPostPost.PathParameters> | null,
      data?: Paths.PostNewMessageApiV1ChannelsIdMessagesPostPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PostNewMessageApiV1ChannelsIdMessagesPostPost.Responses.$200>;
  };
  ["/api/v1/channels/{id}/messages/{message_id}"]: {
    /**
     * get_channel_message_api_v1_channels__id__messages__message_id__get - Get Channel Message
     */
    "get"(
      parameters?: Parameters<Paths.GetChannelMessageApiV1ChannelsIdMessagesMessageIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetChannelMessageApiV1ChannelsIdMessagesMessageIdGet.Responses.$200>;
  };
  ["/api/v1/channels/{id}/messages/{message_id}/thread"]: {
    /**
     * get_channel_thread_messages_api_v1_channels__id__messages__message_id__thread_get - Get Channel Thread Messages
     */
    "get"(
      parameters?: Parameters<
        Paths.GetChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet.QueryParameters &
          Paths.GetChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet.PathParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet.Responses.$200>;
  };
  ["/api/v1/channels/{id}/messages/{message_id}/update"]: {
    /**
     * update_message_by_id_api_v1_channels__id__messages__message_id__update_post - Update Message By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/channels/{id}/messages/{message_id}/reactions/add"]: {
    /**
     * add_reaction_to_message_api_v1_channels__id__messages__message_id__reactions_add_post - Add Reaction To Message
     */
    "post"(
      parameters?: Parameters<Paths.AddReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost.PathParameters> | null,
      data?: Paths.AddReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.AddReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost.Responses.$200>;
  };
  ["/api/v1/channels/{id}/messages/{message_id}/reactions/remove"]: {
    /**
     * remove_reaction_by_id_and_user_id_and_name_api_v1_channels__id__messages__message_id__reactions_remove_post - Remove Reaction By Id And User Id And Name
     */
    "post"(
      parameters?: Parameters<Paths.RemoveReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost.PathParameters> | null,
      data?: Paths.RemoveReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.RemoveReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost.Responses.$200>;
  };
  ["/api/v1/channels/{id}/messages/{message_id}/delete"]: {
    /**
     * delete_message_by_id_api_v1_channels__id__messages__message_id__delete_delete - Delete Message By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete.Responses.$200>;
  };
  ["/api/v1/chats/list"]: {
    /**
     * get_session_user_chat_list_api_v1_chats_list_get - Get Session User Chat List
     */
    "get"(
      parameters?: Parameters<Paths.GetSessionUserChatListApiV1ChatsListGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetSessionUserChatListApiV1ChatsListGet.Responses.$200>;
  };
  ["/api/v1/chats/"]: {
    /**
     * get_session_user_chat_list_api_v1_chats__get - Get Session User Chat List
     */
    "get"(
      parameters?: Parameters<Paths.GetSessionUserChatListApiV1ChatsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetSessionUserChatListApiV1ChatsGet.Responses.$200>;
    /**
     * delete_all_user_chats_api_v1_chats__delete - Delete All User Chats
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteAllUserChatsApiV1ChatsDelete.Responses.$200>;
  };
  ["/api/v1/chats/list/user/{user_id}"]: {
    /**
     * get_user_chat_list_by_user_id_api_v1_chats_list_user__user_id__get - Get User Chat List By User Id
     */
    "get"(
      parameters?: Parameters<
        Paths.GetUserChatListByUserIdApiV1ChatsListUserUserIdGet.QueryParameters &
          Paths.GetUserChatListByUserIdApiV1ChatsListUserUserIdGet.PathParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserChatListByUserIdApiV1ChatsListUserUserIdGet.Responses.$200>;
  };
  ["/api/v1/chats/new"]: {
    /**
     * create_new_chat_api_v1_chats_new_post - Create New Chat
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewChatApiV1ChatsNewPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateNewChatApiV1ChatsNewPost.Responses.$200>;
  };
  ["/api/v1/chats/import"]: {
    /**
     * import_chat_api_v1_chats_import_post - Import Chat
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ImportChatApiV1ChatsImportPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ImportChatApiV1ChatsImportPost.Responses.$200>;
  };
  ["/api/v1/chats/search"]: {
    /**
     * search_user_chats_api_v1_chats_search_get - Search User Chats
     */
    "get"(
      parameters?: Parameters<Paths.SearchUserChatsApiV1ChatsSearchGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.SearchUserChatsApiV1ChatsSearchGet.Responses.$200>;
  };
  ["/api/v1/chats/folder/{folder_id}"]: {
    /**
     * get_chats_by_folder_id_api_v1_chats_folder__folder_id__get - Get Chats By Folder Id
     */
    "get"(
      parameters?: Parameters<Paths.GetChatsByFolderIdApiV1ChatsFolderFolderIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetChatsByFolderIdApiV1ChatsFolderFolderIdGet.Responses.$200>;
  };
  ["/api/v1/chats/pinned"]: {
    /**
     * get_user_pinned_chats_api_v1_chats_pinned_get - Get User Pinned Chats
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserPinnedChatsApiV1ChatsPinnedGet.Responses.$200>;
  };
  ["/api/v1/chats/all"]: {
    /**
     * get_user_chats_api_v1_chats_all_get - Get User Chats
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserChatsApiV1ChatsAllGet.Responses.$200>;
  };
  ["/api/v1/chats/all/archived"]: {
    /**
     * get_user_archived_chats_api_v1_chats_all_archived_get - Get User Archived Chats
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserArchivedChatsApiV1ChatsAllArchivedGet.Responses.$200>;
  };
  ["/api/v1/chats/all/tags"]: {
    /**
     * get_all_user_tags_api_v1_chats_all_tags_get - Get All User Tags
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAllUserTagsApiV1ChatsAllTagsGet.Responses.$200>;
  };
  ["/api/v1/chats/all/db"]: {
    /**
     * get_all_user_chats_in_db_api_v1_chats_all_db_get - Get All User Chats In Db
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAllUserChatsInDbApiV1ChatsAllDbGet.Responses.$200>;
  };
  ["/api/v1/chats/archived"]: {
    /**
     * get_archived_session_user_chat_list_api_v1_chats_archived_get - Get Archived Session User Chat List
     */
    "get"(
      parameters?: Parameters<Paths.GetArchivedSessionUserChatListApiV1ChatsArchivedGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetArchivedSessionUserChatListApiV1ChatsArchivedGet.Responses.$200>;
  };
  ["/api/v1/chats/archive/all"]: {
    /**
     * archive_all_chats_api_v1_chats_archive_all_post - Archive All Chats
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ArchiveAllChatsApiV1ChatsArchiveAllPost.Responses.$200>;
  };
  ["/api/v1/chats/share/{share_id}"]: {
    /**
     * get_shared_chat_by_id_api_v1_chats_share__share_id__get - Get Shared Chat By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetSharedChatByIdApiV1ChatsShareShareIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetSharedChatByIdApiV1ChatsShareShareIdGet.Responses.$200>;
  };
  ["/api/v1/chats/tags"]: {
    /**
     * get_user_chat_list_by_tag_name_api_v1_chats_tags_post - Get User Chat List By Tag Name
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GetUserChatListByTagNameApiV1ChatsTagsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserChatListByTagNameApiV1ChatsTagsPost.Responses.$200>;
  };
  ["/api/v1/chats/{id}"]: {
    /**
     * get_chat_by_id_api_v1_chats__id__get - Get Chat By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetChatByIdApiV1ChatsIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetChatByIdApiV1ChatsIdGet.Responses.$200>;
    /**
     * update_chat_by_id_api_v1_chats__id__post - Update Chat By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateChatByIdApiV1ChatsIdPost.PathParameters> | null,
      data?: Paths.UpdateChatByIdApiV1ChatsIdPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateChatByIdApiV1ChatsIdPost.Responses.$200>;
    /**
     * delete_chat_by_id_api_v1_chats__id__delete - Delete Chat By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteChatByIdApiV1ChatsIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteChatByIdApiV1ChatsIdDelete.Responses.$200>;
  };
  ["/api/v1/chats/{id}/pinned"]: {
    /**
     * get_pinned_status_by_id_api_v1_chats__id__pinned_get - Get Pinned Status By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetPinnedStatusByIdApiV1ChatsIdPinnedGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPinnedStatusByIdApiV1ChatsIdPinnedGet.Responses.$200>;
  };
  ["/api/v1/chats/{id}/pin"]: {
    /**
     * pin_chat_by_id_api_v1_chats__id__pin_post - Pin Chat By Id
     */
    "post"(
      parameters?: Parameters<Paths.PinChatByIdApiV1ChatsIdPinPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PinChatByIdApiV1ChatsIdPinPost.Responses.$200>;
  };
  ["/api/v1/chats/{id}/clone"]: {
    /**
     * clone_chat_by_id_api_v1_chats__id__clone_post - Clone Chat By Id
     */
    "post"(
      parameters?: Parameters<Paths.CloneChatByIdApiV1ChatsIdClonePost.PathParameters> | null,
      data?: Paths.CloneChatByIdApiV1ChatsIdClonePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CloneChatByIdApiV1ChatsIdClonePost.Responses.$200>;
  };
  ["/api/v1/chats/{id}/clone/shared"]: {
    /**
     * clone_shared_chat_by_id_api_v1_chats__id__clone_shared_post - Clone Shared Chat By Id
     */
    "post"(
      parameters?: Parameters<Paths.CloneSharedChatByIdApiV1ChatsIdCloneSharedPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CloneSharedChatByIdApiV1ChatsIdCloneSharedPost.Responses.$200>;
  };
  ["/api/v1/chats/{id}/archive"]: {
    /**
     * archive_chat_by_id_api_v1_chats__id__archive_post - Archive Chat By Id
     */
    "post"(
      parameters?: Parameters<Paths.ArchiveChatByIdApiV1ChatsIdArchivePost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ArchiveChatByIdApiV1ChatsIdArchivePost.Responses.$200>;
  };
  ["/api/v1/chats/{id}/share"]: {
    /**
     * share_chat_by_id_api_v1_chats__id__share_post - Share Chat By Id
     */
    "post"(
      parameters?: Parameters<Paths.ShareChatByIdApiV1ChatsIdSharePost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ShareChatByIdApiV1ChatsIdSharePost.Responses.$200>;
    /**
     * delete_shared_chat_by_id_api_v1_chats__id__share_delete - Delete Shared Chat By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteSharedChatByIdApiV1ChatsIdShareDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteSharedChatByIdApiV1ChatsIdShareDelete.Responses.$200>;
  };
  ["/api/v1/chats/{id}/folder"]: {
    /**
     * update_chat_folder_id_by_id_api_v1_chats__id__folder_post - Update Chat Folder Id By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateChatFolderIdByIdApiV1ChatsIdFolderPost.PathParameters> | null,
      data?: Paths.UpdateChatFolderIdByIdApiV1ChatsIdFolderPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateChatFolderIdByIdApiV1ChatsIdFolderPost.Responses.$200>;
  };
  ["/api/v1/chats/{id}/tags"]: {
    /**
     * get_chat_tags_by_id_api_v1_chats__id__tags_get - Get Chat Tags By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetChatTagsByIdApiV1ChatsIdTagsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetChatTagsByIdApiV1ChatsIdTagsGet.Responses.$200>;
    /**
     * add_tag_by_id_and_tag_name_api_v1_chats__id__tags_post - Add Tag By Id And Tag Name
     */
    "post"(
      parameters?: Parameters<Paths.AddTagByIdAndTagNameApiV1ChatsIdTagsPost.PathParameters> | null,
      data?: Paths.AddTagByIdAndTagNameApiV1ChatsIdTagsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.AddTagByIdAndTagNameApiV1ChatsIdTagsPost.Responses.$200>;
    /**
     * delete_tag_by_id_and_tag_name_api_v1_chats__id__tags_delete - Delete Tag By Id And Tag Name
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteTagByIdAndTagNameApiV1ChatsIdTagsDelete.PathParameters> | null,
      data?: Paths.DeleteTagByIdAndTagNameApiV1ChatsIdTagsDelete.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteTagByIdAndTagNameApiV1ChatsIdTagsDelete.Responses.$200>;
  };
  ["/api/v1/chats/{id}/tags/all"]: {
    /**
     * delete_all_tags_by_id_api_v1_chats__id__tags_all_delete - Delete All Tags By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteAllTagsByIdApiV1ChatsIdTagsAllDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteAllTagsByIdApiV1ChatsIdTagsAllDelete.Responses.$200>;
  };
  ["/api/v1/models/"]: {
    /**
     * get_models_api_v1_models__get - Get Models
     */
    "get"(
      parameters?: Parameters<Paths.GetModelsApiV1ModelsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetModelsApiV1ModelsGet.Responses.$200>;
  };
  ["/api/v1/models/base"]: {
    /**
     * get_base_models_api_v1_models_base_get - Get Base Models
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetBaseModelsApiV1ModelsBaseGet.Responses.$200>;
  };
  ["/api/v1/models/create"]: {
    /**
     * create_new_model_api_v1_models_create_post - Create New Model
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewModelApiV1ModelsCreatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateNewModelApiV1ModelsCreatePost.Responses.$200>;
  };
  ["/api/v1/models/model"]: {
    /**
     * get_model_by_id_api_v1_models_model_get - Get Model By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetModelByIdApiV1ModelsModelGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetModelByIdApiV1ModelsModelGet.Responses.$200>;
  };
  ["/api/v1/models/model/toggle"]: {
    /**
     * toggle_model_by_id_api_v1_models_model_toggle_post - Toggle Model By Id
     */
    "post"(
      parameters?: Parameters<Paths.ToggleModelByIdApiV1ModelsModelTogglePost.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ToggleModelByIdApiV1ModelsModelTogglePost.Responses.$200>;
  };
  ["/api/v1/models/model/update"]: {
    /**
     * update_model_by_id_api_v1_models_model_update_post - Update Model By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateModelByIdApiV1ModelsModelUpdatePost.QueryParameters> | null,
      data?: Paths.UpdateModelByIdApiV1ModelsModelUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateModelByIdApiV1ModelsModelUpdatePost.Responses.$200>;
  };
  ["/api/v1/models/model/delete"]: {
    /**
     * delete_model_by_id_api_v1_models_model_delete_delete - Delete Model By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteModelByIdApiV1ModelsModelDeleteDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteModelByIdApiV1ModelsModelDeleteDelete.Responses.$200>;
  };
  ["/api/v1/models/delete/all"]: {
    /**
     * delete_all_models_api_v1_models_delete_all_delete - Delete All Models
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteAllModelsApiV1ModelsDeleteAllDelete.Responses.$200>;
  };
  ["/api/v1/knowledge/"]: {
    /**
     * get_knowledge_api_v1_knowledge__get - Get Knowledge
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetKnowledgeApiV1KnowledgeGet.Responses.$200>;
  };
  ["/api/v1/knowledge/list"]: {
    /**
     * get_knowledge_list_api_v1_knowledge_list_get - Get Knowledge List
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetKnowledgeListApiV1KnowledgeListGet.Responses.$200>;
  };
  ["/api/v1/knowledge/create"]: {
    /**
     * create_new_knowledge_api_v1_knowledge_create_post - Create New Knowledge
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewKnowledgeApiV1KnowledgeCreatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateNewKnowledgeApiV1KnowledgeCreatePost.Responses.$200>;
  };
  ["/api/v1/knowledge/{id}"]: {
    /**
     * get_knowledge_by_id_api_v1_knowledge__id__get - Get Knowledge By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetKnowledgeByIdApiV1KnowledgeIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetKnowledgeByIdApiV1KnowledgeIdGet.Responses.$200>;
  };
  ["/api/v1/knowledge/{id}/update"]: {
    /**
     * update_knowledge_by_id_api_v1_knowledge__id__update_post - Update Knowledge By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateKnowledgeByIdApiV1KnowledgeIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateKnowledgeByIdApiV1KnowledgeIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateKnowledgeByIdApiV1KnowledgeIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/knowledge/{id}/file/add"]: {
    /**
     * add_file_to_knowledge_by_id_api_v1_knowledge__id__file_add_post - Add File To Knowledge By Id
     */
    "post"(
      parameters?: Parameters<Paths.AddFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost.PathParameters> | null,
      data?: Paths.AddFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.AddFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost.Responses.$200>;
  };
  ["/api/v1/knowledge/{id}/file/update"]: {
    /**
     * update_file_from_knowledge_by_id_api_v1_knowledge__id__file_update_post - Update File From Knowledge By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost.PathParameters> | null,
      data?: Paths.UpdateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost.Responses.$200>;
  };
  ["/api/v1/knowledge/{id}/file/remove"]: {
    /**
     * remove_file_from_knowledge_by_id_api_v1_knowledge__id__file_remove_post - Remove File From Knowledge By Id
     */
    "post"(
      parameters?: Parameters<Paths.RemoveFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost.PathParameters> | null,
      data?: Paths.RemoveFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.RemoveFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost.Responses.$200>;
  };
  ["/api/v1/knowledge/{id}/delete"]: {
    /**
     * delete_knowledge_by_id_api_v1_knowledge__id__delete_delete - Delete Knowledge By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete.Responses.$200>;
  };
  ["/api/v1/knowledge/{id}/reset"]: {
    /**
     * reset_knowledge_by_id_api_v1_knowledge__id__reset_post - Reset Knowledge By Id
     */
    "post"(
      parameters?: Parameters<Paths.ResetKnowledgeByIdApiV1KnowledgeIdResetPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ResetKnowledgeByIdApiV1KnowledgeIdResetPost.Responses.$200>;
  };
  ["/api/v1/knowledge/{id}/files/batch/add"]: {
    /**
     * add_files_to_knowledge_batch_api_v1_knowledge__id__files_batch_add_post - Add Files To Knowledge Batch
     *
     * Add multiple files to a knowledge base
     */
    "post"(
      parameters?: Parameters<Paths.AddFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost.PathParameters> | null,
      data?: Paths.AddFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.AddFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost.Responses.$200>;
  };
  ["/api/v1/prompts/"]: {
    /**
     * get_prompts_api_v1_prompts__get - Get Prompts
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPromptsApiV1PromptsGet.Responses.$200>;
  };
  ["/api/v1/prompts/list"]: {
    /**
     * get_prompt_list_api_v1_prompts_list_get - Get Prompt List
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPromptListApiV1PromptsListGet.Responses.$200>;
  };
  ["/api/v1/prompts/create"]: {
    /**
     * create_new_prompt_api_v1_prompts_create_post - Create New Prompt
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewPromptApiV1PromptsCreatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateNewPromptApiV1PromptsCreatePost.Responses.$200>;
  };
  ["/api/v1/prompts/command/{command}"]: {
    /**
     * get_prompt_by_command_api_v1_prompts_command__command__get - Get Prompt By Command
     */
    "get"(
      parameters?: Parameters<Paths.GetPromptByCommandApiV1PromptsCommandCommandGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPromptByCommandApiV1PromptsCommandCommandGet.Responses.$200>;
  };
  ["/api/v1/prompts/command/{command}/update"]: {
    /**
     * update_prompt_by_command_api_v1_prompts_command__command__update_post - Update Prompt By Command
     */
    "post"(
      parameters?: Parameters<Paths.UpdatePromptByCommandApiV1PromptsCommandCommandUpdatePost.PathParameters> | null,
      data?: Paths.UpdatePromptByCommandApiV1PromptsCommandCommandUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdatePromptByCommandApiV1PromptsCommandCommandUpdatePost.Responses.$200>;
  };
  ["/api/v1/prompts/command/{command}/delete"]: {
    /**
     * delete_prompt_by_command_api_v1_prompts_command__command__delete_delete - Delete Prompt By Command
     */
    "delete"(
      parameters?: Parameters<Paths.DeletePromptByCommandApiV1PromptsCommandCommandDeleteDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeletePromptByCommandApiV1PromptsCommandCommandDeleteDelete.Responses.$200>;
  };
  ["/api/v1/tools/"]: {
    /**
     * get_tools_api_v1_tools__get - Get Tools
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetToolsApiV1ToolsGet.Responses.$200>;
  };
  ["/api/v1/tools/list"]: {
    /**
     * get_tool_list_api_v1_tools_list_get - Get Tool List
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetToolListApiV1ToolsListGet.Responses.$200>;
  };
  ["/api/v1/tools/export"]: {
    /**
     * export_tools_api_v1_tools_export_get - Export Tools
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ExportToolsApiV1ToolsExportGet.Responses.$200>;
  };
  ["/api/v1/tools/create"]: {
    /**
     * create_new_tools_api_v1_tools_create_post - Create New Tools
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewToolsApiV1ToolsCreatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateNewToolsApiV1ToolsCreatePost.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}"]: {
    /**
     * get_tools_by_id_api_v1_tools_id__id__get - Get Tools By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetToolsByIdApiV1ToolsIdIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetToolsByIdApiV1ToolsIdIdGet.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}/update"]: {
    /**
     * update_tools_by_id_api_v1_tools_id__id__update_post - Update Tools By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateToolsByIdApiV1ToolsIdIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateToolsByIdApiV1ToolsIdIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateToolsByIdApiV1ToolsIdIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}/delete"]: {
    /**
     * delete_tools_by_id_api_v1_tools_id__id__delete_delete - Delete Tools By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteToolsByIdApiV1ToolsIdIdDeleteDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteToolsByIdApiV1ToolsIdIdDeleteDelete.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}/valves"]: {
    /**
     * get_tools_valves_by_id_api_v1_tools_id__id__valves_get - Get Tools Valves By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetToolsValvesByIdApiV1ToolsIdIdValvesGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetToolsValvesByIdApiV1ToolsIdIdValvesGet.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}/valves/spec"]: {
    /**
     * get_tools_valves_spec_by_id_api_v1_tools_id__id__valves_spec_get - Get Tools Valves Spec By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetToolsValvesSpecByIdApiV1ToolsIdIdValvesSpecGet.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}/valves/update"]: {
    /**
     * update_tools_valves_by_id_api_v1_tools_id__id__valves_update_post - Update Tools Valves By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost.PathParameters> | null,
      data?: Paths.UpdateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateToolsValvesByIdApiV1ToolsIdIdValvesUpdatePost.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}/valves/user"]: {
    /**
     * get_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_get - Get Tools User Valves By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetToolsUserValvesByIdApiV1ToolsIdIdValvesUserGet.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}/valves/user/spec"]: {
    /**
     * get_tools_user_valves_spec_by_id_api_v1_tools_id__id__valves_user_spec_get - Get Tools User Valves Spec By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetToolsUserValvesSpecByIdApiV1ToolsIdIdValvesUserSpecGet.Responses.$200>;
  };
  ["/api/v1/tools/id/{id}/valves/user/update"]: {
    /**
     * update_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_update_post - Update Tools User Valves By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost.PathParameters> | null,
      data?: Paths.UpdateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateToolsUserValvesByIdApiV1ToolsIdIdValvesUserUpdatePost.Responses.$200>;
  };
  ["/api/v1/memories/ef"]: {
    /**
     * get_embeddings_api_v1_memories_ef_get - Get Embeddings
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetEmbeddingsApiV1MemoriesEfGet.Responses.$200>;
  };
  ["/api/v1/memories/"]: {
    /**
     * get_memories_api_v1_memories__get - Get Memories
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetMemoriesApiV1MemoriesGet.Responses.$200>;
  };
  ["/api/v1/memories/add"]: {
    /**
     * add_memory_api_v1_memories_add_post - Add Memory
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddMemoryApiV1MemoriesAddPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.AddMemoryApiV1MemoriesAddPost.Responses.$200>;
  };
  ["/api/v1/memories/query"]: {
    /**
     * query_memory_api_v1_memories_query_post - Query Memory
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.QueryMemoryApiV1MemoriesQueryPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.QueryMemoryApiV1MemoriesQueryPost.Responses.$200>;
  };
  ["/api/v1/memories/reset"]: {
    /**
     * reset_memory_from_vector_db_api_v1_memories_reset_post - Reset Memory From Vector Db
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ResetMemoryFromVectorDbApiV1MemoriesResetPost.Responses.$200>;
  };
  ["/api/v1/memories/delete/user"]: {
    /**
     * delete_memory_by_user_id_api_v1_memories_delete_user_delete - Delete Memory By User Id
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteMemoryByUserIdApiV1MemoriesDeleteUserDelete.Responses.$200>;
  };
  ["/api/v1/memories/{memory_id}/update"]: {
    /**
     * update_memory_by_id_api_v1_memories__memory_id__update_post - Update Memory By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateMemoryByIdApiV1MemoriesMemoryIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateMemoryByIdApiV1MemoriesMemoryIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateMemoryByIdApiV1MemoriesMemoryIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/memories/{memory_id}"]: {
    /**
     * delete_memory_by_id_api_v1_memories__memory_id__delete - Delete Memory By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteMemoryByIdApiV1MemoriesMemoryIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteMemoryByIdApiV1MemoriesMemoryIdDelete.Responses.$200>;
  };
  ["/api/v1/folders/"]: {
    /**
     * get_folders_api_v1_folders__get - Get Folders
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFoldersApiV1FoldersGet.Responses.$200>;
    /**
     * create_folder_api_v1_folders__post - Create Folder
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateFolderApiV1FoldersPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateFolderApiV1FoldersPost.Responses.$200>;
  };
  ["/api/v1/folders/{id}"]: {
    /**
     * get_folder_by_id_api_v1_folders__id__get - Get Folder By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFolderByIdApiV1FoldersIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFolderByIdApiV1FoldersIdGet.Responses.$200>;
    /**
     * delete_folder_by_id_api_v1_folders__id__delete - Delete Folder By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteFolderByIdApiV1FoldersIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteFolderByIdApiV1FoldersIdDelete.Responses.$200>;
  };
  ["/api/v1/folders/{id}/update"]: {
    /**
     * update_folder_name_by_id_api_v1_folders__id__update_post - Update Folder Name By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFolderNameByIdApiV1FoldersIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateFolderNameByIdApiV1FoldersIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFolderNameByIdApiV1FoldersIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/folders/{id}/update/parent"]: {
    /**
     * update_folder_parent_id_by_id_api_v1_folders__id__update_parent_post - Update Folder Parent Id By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFolderParentIdByIdApiV1FoldersIdUpdateParentPost.PathParameters> | null,
      data?: Paths.UpdateFolderParentIdByIdApiV1FoldersIdUpdateParentPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFolderParentIdByIdApiV1FoldersIdUpdateParentPost.Responses.$200>;
  };
  ["/api/v1/folders/{id}/update/expanded"]: {
    /**
     * update_folder_is_expanded_by_id_api_v1_folders__id__update_expanded_post - Update Folder Is Expanded By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost.PathParameters> | null,
      data?: Paths.UpdateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFolderIsExpandedByIdApiV1FoldersIdUpdateExpandedPost.Responses.$200>;
  };
  ["/api/v1/groups/"]: {
    /**
     * get_groups_api_v1_groups__get - Get Groups
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetGroupsApiV1GroupsGet.Responses.$200>;
  };
  ["/api/v1/groups/create"]: {
    /**
     * create_new_group_api_v1_groups_create_post - Create New Group
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewGroupApiV1GroupsCreatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateNewGroupApiV1GroupsCreatePost.Responses.$200>;
  };
  ["/api/v1/groups/id/{id}"]: {
    /**
     * get_group_by_id_api_v1_groups_id__id__get - Get Group By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetGroupByIdApiV1GroupsIdIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetGroupByIdApiV1GroupsIdIdGet.Responses.$200>;
  };
  ["/api/v1/groups/id/{id}/update"]: {
    /**
     * update_group_by_id_api_v1_groups_id__id__update_post - Update Group By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateGroupByIdApiV1GroupsIdIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateGroupByIdApiV1GroupsIdIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateGroupByIdApiV1GroupsIdIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/groups/id/{id}/delete"]: {
    /**
     * delete_group_by_id_api_v1_groups_id__id__delete_delete - Delete Group By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteGroupByIdApiV1GroupsIdIdDeleteDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteGroupByIdApiV1GroupsIdIdDeleteDelete.Responses.$200>;
  };
  ["/api/v1/files/"]: {
    /**
     * list_files_api_v1_files__get - List Files
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ListFilesApiV1FilesGet.Responses.$200>;
    /**
     * upload_file_api_v1_files__post - Upload File
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UploadFileApiV1FilesPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UploadFileApiV1FilesPost.Responses.$200>;
  };
  ["/api/v1/files/all"]: {
    /**
     * delete_all_files_api_v1_files_all_delete - Delete All Files
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteAllFilesApiV1FilesAllDelete.Responses.$200>;
  };
  ["/api/v1/files/{id}"]: {
    /**
     * get_file_by_id_api_v1_files__id__get - Get File By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFileByIdApiV1FilesIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFileByIdApiV1FilesIdGet.Responses.$200>;
    /**
     * delete_file_by_id_api_v1_files__id__delete - Delete File By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteFileByIdApiV1FilesIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteFileByIdApiV1FilesIdDelete.Responses.$200>;
  };
  ["/api/v1/files/{id}/data/content"]: {
    /**
     * get_file_data_content_by_id_api_v1_files__id__data_content_get - Get File Data Content By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFileDataContentByIdApiV1FilesIdDataContentGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFileDataContentByIdApiV1FilesIdDataContentGet.Responses.$200>;
  };
  ["/api/v1/files/{id}/data/content/update"]: {
    /**
     * update_file_data_content_by_id_api_v1_files__id__data_content_update_post - Update File Data Content By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFileDataContentByIdApiV1FilesIdDataContentUpdatePost.PathParameters> | null,
      data?: Paths.UpdateFileDataContentByIdApiV1FilesIdDataContentUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFileDataContentByIdApiV1FilesIdDataContentUpdatePost.Responses.$200>;
  };
  ["/api/v1/files/{id}/content"]: {
    /**
     * get_file_content_by_id_api_v1_files__id__content_get - Get File Content By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFileContentByIdApiV1FilesIdContentGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFileContentByIdApiV1FilesIdContentGet.Responses.$200>;
  };
  ["/api/v1/files/{id}/content/html"]: {
    /**
     * get_html_file_content_by_id_api_v1_files__id__content_html_get - Get Html File Content By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetHtmlFileContentByIdApiV1FilesIdContentHtmlGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetHtmlFileContentByIdApiV1FilesIdContentHtmlGet.Responses.$200>;
  };
  ["/api/v1/files/{id}/content/{file_name}"]: {
    /**
     * get_file_content_by_id_api_v1_files__id__content__file_name__get - Get File Content By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFileContentByIdApiV1FilesIdContentFileNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFileContentByIdApiV1FilesIdContentFileNameGet.Responses.$200>;
  };
  ["/api/v1/functions/"]: {
    /**
     * get_functions_api_v1_functions__get - Get Functions
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFunctionsApiV1FunctionsGet.Responses.$200>;
  };
  ["/api/v1/functions/export"]: {
    /**
     * get_functions_api_v1_functions_export_get - Get Functions
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFunctionsApiV1FunctionsExportGet.Responses.$200>;
  };
  ["/api/v1/functions/create"]: {
    /**
     * create_new_function_api_v1_functions_create_post - Create New Function
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewFunctionApiV1FunctionsCreatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateNewFunctionApiV1FunctionsCreatePost.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}"]: {
    /**
     * get_function_by_id_api_v1_functions_id__id__get - Get Function By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFunctionByIdApiV1FunctionsIdIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFunctionByIdApiV1FunctionsIdIdGet.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/toggle"]: {
    /**
     * toggle_function_by_id_api_v1_functions_id__id__toggle_post - Toggle Function By Id
     */
    "post"(
      parameters?: Parameters<Paths.ToggleFunctionByIdApiV1FunctionsIdIdTogglePost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ToggleFunctionByIdApiV1FunctionsIdIdTogglePost.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/toggle/global"]: {
    /**
     * toggle_global_by_id_api_v1_functions_id__id__toggle_global_post - Toggle Global By Id
     */
    "post"(
      parameters?: Parameters<Paths.ToggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ToggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/update"]: {
    /**
     * update_function_by_id_api_v1_functions_id__id__update_post - Update Function By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFunctionByIdApiV1FunctionsIdIdUpdatePost.PathParameters> | null,
      data?: Paths.UpdateFunctionByIdApiV1FunctionsIdIdUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFunctionByIdApiV1FunctionsIdIdUpdatePost.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/delete"]: {
    /**
     * delete_function_by_id_api_v1_functions_id__id__delete_delete - Delete Function By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteFunctionByIdApiV1FunctionsIdIdDeleteDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteFunctionByIdApiV1FunctionsIdIdDeleteDelete.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/valves"]: {
    /**
     * get_function_valves_by_id_api_v1_functions_id__id__valves_get - Get Function Valves By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFunctionValvesByIdApiV1FunctionsIdIdValvesGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFunctionValvesByIdApiV1FunctionsIdIdValvesGet.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/valves/spec"]: {
    /**
     * get_function_valves_spec_by_id_api_v1_functions_id__id__valves_spec_get - Get Function Valves Spec By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/valves/update"]: {
    /**
     * update_function_valves_by_id_api_v1_functions_id__id__valves_update_post - Update Function Valves By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost.PathParameters> | null,
      data?: Paths.UpdateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/valves/user"]: {
    /**
     * get_function_user_valves_by_id_api_v1_functions_id__id__valves_user_get - Get Function User Valves By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/valves/user/spec"]: {
    /**
     * get_function_user_valves_spec_by_id_api_v1_functions_id__id__valves_user_spec_get - Get Function User Valves Spec By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet.Responses.$200>;
  };
  ["/api/v1/functions/id/{id}/valves/user/update"]: {
    /**
     * update_function_user_valves_by_id_api_v1_functions_id__id__valves_user_update_post - Update Function User Valves By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost.PathParameters> | null,
      data?: Paths.UpdateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost.Responses.$200>;
  };
  ["/api/v1/evaluations/config"]: {
    /**
     * get_config_api_v1_evaluations_config_get - Get Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetConfigApiV1EvaluationsConfigGet.Responses.$200>;
    /**
     * update_config_api_v1_evaluations_config_post - Update Config
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateConfigApiV1EvaluationsConfigPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateConfigApiV1EvaluationsConfigPost.Responses.$200>;
  };
  ["/api/v1/evaluations/feedbacks/all"]: {
    /**
     * get_all_feedbacks_api_v1_evaluations_feedbacks_all_get - Get All Feedbacks
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAllFeedbacksApiV1EvaluationsFeedbacksAllGet.Responses.$200>;
    /**
     * delete_all_feedbacks_api_v1_evaluations_feedbacks_all_delete - Delete All Feedbacks
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteAllFeedbacksApiV1EvaluationsFeedbacksAllDelete.Responses.$200>;
  };
  ["/api/v1/evaluations/feedbacks/all/export"]: {
    /**
     * get_all_feedbacks_api_v1_evaluations_feedbacks_all_export_get - Get All Feedbacks
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAllFeedbacksApiV1EvaluationsFeedbacksAllExportGet.Responses.$200>;
  };
  ["/api/v1/evaluations/feedbacks/user"]: {
    /**
     * get_feedbacks_api_v1_evaluations_feedbacks_user_get - Get Feedbacks
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFeedbacksApiV1EvaluationsFeedbacksUserGet.Responses.$200>;
  };
  ["/api/v1/evaluations/feedbacks"]: {
    /**
     * delete_feedbacks_api_v1_evaluations_feedbacks_delete - Delete Feedbacks
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteFeedbacksApiV1EvaluationsFeedbacksDelete.Responses.$200>;
  };
  ["/api/v1/evaluations/feedback"]: {
    /**
     * create_feedback_api_v1_evaluations_feedback_post - Create Feedback
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateFeedbackApiV1EvaluationsFeedbackPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateFeedbackApiV1EvaluationsFeedbackPost.Responses.$200>;
  };
  ["/api/v1/evaluations/feedback/{id}"]: {
    /**
     * get_feedback_by_id_api_v1_evaluations_feedback__id__get - Get Feedback By Id
     */
    "get"(
      parameters?: Parameters<Paths.GetFeedbackByIdApiV1EvaluationsFeedbackIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetFeedbackByIdApiV1EvaluationsFeedbackIdGet.Responses.$200>;
    /**
     * update_feedback_by_id_api_v1_evaluations_feedback__id__post - Update Feedback By Id
     */
    "post"(
      parameters?: Parameters<Paths.UpdateFeedbackByIdApiV1EvaluationsFeedbackIdPost.PathParameters> | null,
      data?: Paths.UpdateFeedbackByIdApiV1EvaluationsFeedbackIdPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateFeedbackByIdApiV1EvaluationsFeedbackIdPost.Responses.$200>;
    /**
     * delete_feedback_by_id_api_v1_evaluations_feedback__id__delete - Delete Feedback By Id
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DeleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete.Responses.$200>;
  };
  ["/api/v1/utils/gravatar"]: {
    /**
     * get_gravatar_api_v1_utils_gravatar_get - Get Gravatar
     */
    "get"(
      parameters?: Parameters<Paths.GetGravatarApiV1UtilsGravatarGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetGravatarApiV1UtilsGravatarGet.Responses.$200>;
  };
  ["/api/v1/utils/code/format"]: {
    /**
     * format_code_api_v1_utils_code_format_post - Format Code
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.FormatCodeApiV1UtilsCodeFormatPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.FormatCodeApiV1UtilsCodeFormatPost.Responses.$200>;
  };
  ["/api/v1/utils/code/execute"]: {
    /**
     * execute_code_api_v1_utils_code_execute_post - Execute Code
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ExecuteCodeApiV1UtilsCodeExecutePost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ExecuteCodeApiV1UtilsCodeExecutePost.Responses.$200>;
  };
  ["/api/v1/utils/markdown"]: {
    /**
     * get_html_from_markdown_api_v1_utils_markdown_post - Get Html From Markdown
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GetHtmlFromMarkdownApiV1UtilsMarkdownPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetHtmlFromMarkdownApiV1UtilsMarkdownPost.Responses.$200>;
  };
  ["/api/v1/utils/pdf"]: {
    /**
     * download_chat_as_pdf_api_v1_utils_pdf_post - Download Chat As Pdf
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.DownloadChatAsPdfApiV1UtilsPdfPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DownloadChatAsPdfApiV1UtilsPdfPost.Responses.$200>;
  };
  ["/api/v1/utils/db/download"]: {
    /**
     * download_db_api_v1_utils_db_download_get - Download Db
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DownloadDbApiV1UtilsDbDownloadGet.Responses.$200>;
  };
  ["/api/v1/utils/litellm/config"]: {
    /**
     * download_litellm_config_yaml_api_v1_utils_litellm_config_get - Download Litellm Config Yaml
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.DownloadLitellmConfigYamlApiV1UtilsLitellmConfigGet.Responses.$200>;
  };
  ["/api/models"]: {
    /**
     * get_models_api_models_get - Get Models
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetModelsApiModelsGet.Responses.$200>;
  };
  ["/api/models/base"]: {
    /**
     * get_base_models_api_models_base_get - Get Base Models
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetBaseModelsApiModelsBaseGet.Responses.$200>;
  };
  ["/api/chat/completions"]: {
    /**
     * chat_completion_api_chat_completions_post - Chat Completion
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ChatCompletionApiChatCompletionsPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ChatCompletionApiChatCompletionsPost.Responses.$200>;
  };
  ["/api/chat/completed"]: {
    /**
     * chat_completed_api_chat_completed_post - Chat Completed
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ChatCompletedApiChatCompletedPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ChatCompletedApiChatCompletedPost.Responses.$200>;
  };
  ["/api/chat/actions/{action_id}"]: {
    /**
     * chat_action_api_chat_actions__action_id__post - Chat Action
     */
    "post"(
      parameters?: Parameters<Paths.ChatActionApiChatActionsActionIdPost.PathParameters> | null,
      data?: Paths.ChatActionApiChatActionsActionIdPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ChatActionApiChatActionsActionIdPost.Responses.$200>;
  };
  ["/api/tasks/stop/{task_id}"]: {
    /**
     * stop_task_endpoint_api_tasks_stop__task_id__post - Stop Task Endpoint
     */
    "post"(
      parameters?: Parameters<Paths.StopTaskEndpointApiTasksStopTaskIdPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.StopTaskEndpointApiTasksStopTaskIdPost.Responses.$200>;
  };
  ["/api/tasks"]: {
    /**
     * list_tasks_endpoint_api_tasks_get - List Tasks Endpoint
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ListTasksEndpointApiTasksGet.Responses.$200>;
  };
  ["/api/config"]: {
    /**
     * get_app_config_api_config_get - Get App Config
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAppConfigApiConfigGet.Responses.$200>;
  };
  ["/api/webhook"]: {
    /**
     * get_webhook_url_api_webhook_get - Get Webhook Url
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetWebhookUrlApiWebhookGet.Responses.$200>;
    /**
     * update_webhook_url_api_webhook_post - Update Webhook Url
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateWebhookUrlApiWebhookPost.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdateWebhookUrlApiWebhookPost.Responses.$200>;
  };
  ["/api/version"]: {
    /**
     * get_app_version_api_version_get - Get App Version
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAppVersionApiVersionGet.Responses.$200>;
  };
  ["/api/version/updates"]: {
    /**
     * get_app_latest_release_version_api_version_updates_get - Get App Latest Release Version
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAppLatestReleaseVersionApiVersionUpdatesGet.Responses.$200>;
  };
  ["/api/changelog"]: {
    /**
     * get_app_changelog_api_changelog_get - Get App Changelog
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetAppChangelogApiChangelogGet.Responses.$200>;
  };
  ["/oauth/{provider}/login"]: {
    /**
     * oauth_login_oauth__provider__login_get - Oauth Login
     */
    "get"(
      parameters?: Parameters<Paths.OauthLoginOauthProviderLoginGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.OauthLoginOauthProviderLoginGet.Responses.$200>;
  };
  ["/oauth/{provider}/callback"]: {
    /**
     * oauth_callback_oauth__provider__callback_get - Oauth Callback
     */
    "get"(
      parameters?: Parameters<Paths.OauthCallbackOauthProviderCallbackGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.OauthCallbackOauthProviderCallbackGet.Responses.$200>;
  };
  ["/manifest.json"]: {
    /**
     * get_manifest_json_manifest_json_get - Get Manifest Json
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetManifestJsonManifestJsonGet.Responses.$200>;
  };
  ["/opensearch.xml"]: {
    /**
     * get_opensearch_xml_opensearch_xml_get - Get Opensearch Xml
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOpensearchXmlOpensearchXmlGet.Responses.$200>;
  };
  ["/health"]: {
    /**
     * healthcheck_health_get - Healthcheck
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.HealthcheckHealthGet.Responses.$200>;
  };
  ["/health/db"]: {
    /**
     * healthcheck_with_db_health_db_get - Healthcheck With Db
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.HealthcheckWithDbHealthDbGet.Responses.$200>;
  };
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;

export type AddMemoryForm = Components.Schemas.AddMemoryForm;
export type AddPipelineForm = Components.Schemas.AddPipelineForm;
export type AddUserForm = Components.Schemas.AddUserForm;
export type AdminConfig = Components.Schemas.AdminConfig;
export type ApiKey = Components.Schemas.ApiKey;
export type AudioConfigUpdateForm = Components.Schemas.AudioConfigUpdateForm;
export type Automatic1111ConfigForm =
  Components.Schemas.Automatic1111ConfigForm;
export type BannerModel = Components.Schemas.BannerModel;
export type BatchProcessFilesForm = Components.Schemas.BatchProcessFilesForm;
export type BatchProcessFilesResponse =
  Components.Schemas.BatchProcessFilesResponse;
export type BatchProcessFilesResult =
  Components.Schemas.BatchProcessFilesResult;
export type Body_transcription_api_v1_audio_transcriptions_post =
  Components.Schemas.BodyTranscriptionApiV1AudioTranscriptionsPost;
export type Body_upload_file_api_v1_files__post =
  Components.Schemas.BodyUploadFileApiV1FilesPost;
export type Body_upload_model_ollama_models_upload_post =
  Components.Schemas.BodyUploadModelOllamaModelsUploadPost;
export type Body_upload_model_ollama_models_upload__url_idx__post =
  Components.Schemas.BodyUploadModelOllamaModelsUploadUrlIdxPost;
export type Body_upload_pipeline_api_v1_pipelines_upload_post =
  Components.Schemas.BodyUploadPipelineApiV1PipelinesUploadPost;
export type ChannelForm = Components.Schemas.ChannelForm;
export type ChannelModel = Components.Schemas.ChannelModel;
export type ChatFolderIdForm = Components.Schemas.ChatFolderIdForm;
export type ChatForm = Components.Schemas.ChatForm;
export type ChatImportForm = Components.Schemas.ChatImportForm;
export type ChatPermissions = Components.Schemas.ChatPermissions;
export type ChatResponse = Components.Schemas.ChatResponse;
export type ChatTitleIdResponse = Components.Schemas.ChatTitleIdResponse;
export type ChatTitleMessagesForm = Components.Schemas.ChatTitleMessagesForm;
export type ChunkParamUpdateForm = Components.Schemas.ChunkParamUpdateForm;
export type CloneForm = Components.Schemas.CloneForm;
export type CodeForm = Components.Schemas.CodeForm;
export type CodeInterpreterConfigForm =
  Components.Schemas.CodeInterpreterConfigForm;
export type ComfyUIConfigForm = Components.Schemas.ComfyUIConfigForm;
export type ConfigForm = Components.Schemas.ConfigForm;
export type ConfigUpdateForm = Components.Schemas.ConfigUpdateForm;
export type ContentExtractionConfig =
  Components.Schemas.ContentExtractionConfig;
export type ContentForm = Components.Schemas.ContentForm;
export type CopyModelForm = Components.Schemas.CopyModelForm;
export type CreateModelForm = Components.Schemas.CreateModelForm;
export type DeleteForm = Components.Schemas.DeleteForm;
export type DeletePipelineForm = Components.Schemas.DeletePipelineForm;
export type DirectConnectionsConfigForm =
  Components.Schemas.DirectConnectionsConfigForm;
export type DocumentIntelligenceConfigForm =
  Components.Schemas.DocumentIntelligenceConfigForm;
export type EmbeddingModelUpdateForm =
  Components.Schemas.EmbeddingModelUpdateForm;
export type FeaturesPermissions = Components.Schemas.FeaturesPermissions;
export type FeedbackForm = Components.Schemas.FeedbackForm;
export type FeedbackModel = Components.Schemas.FeedbackModel;
export type FeedbackUserResponse = Components.Schemas.FeedbackUserResponse;
export type FileConfig = Components.Schemas.FileConfig;
export type FileMeta = Components.Schemas.FileMeta;
export type FileMetadataResponse = Components.Schemas.FileMetadataResponse;
export type FileModel = Components.Schemas.FileModel;
export type FileModelResponse = Components.Schemas.FileModelResponse;
export type FolderForm = Components.Schemas.FolderForm;
export type FolderIsExpandedForm = Components.Schemas.FolderIsExpandedForm;
export type FolderModel = Components.Schemas.FolderModel;
export type FolderParentIdForm = Components.Schemas.FolderParentIdForm;
export type FunctionForm = Components.Schemas.FunctionForm;
export type FunctionMeta = Components.Schemas.FunctionMeta;
export type FunctionModel = Components.Schemas.FunctionModel;
export type FunctionResponse = Components.Schemas.FunctionResponse;
export type GeminiConfigForm = Components.Schemas.GeminiConfigForm;
export type GenerateCompletionForm = Components.Schemas.GenerateCompletionForm;
export type GenerateEmbedForm = Components.Schemas.GenerateEmbedForm;
export type GenerateEmbeddingsForm = Components.Schemas.GenerateEmbeddingsForm;
export type GenerateImageForm = Components.Schemas.GenerateImageForm;
export type GroupForm = Components.Schemas.GroupForm;
export type GroupResponse = Components.Schemas.GroupResponse;
export type GroupUpdateForm = Components.Schemas.GroupUpdateForm;
export type HTTPValidationError = Components.Schemas.HTTPValidationError;
export type ImageConfigForm = Components.Schemas.ImageConfigForm;
export type ImportConfigForm = Components.Schemas.ImportConfigForm;
export type KnowledgeFileIdForm = Components.Schemas.KnowledgeFileIdForm;
export type KnowledgeFilesResponse = Components.Schemas.KnowledgeFilesResponse;
export type KnowledgeForm = Components.Schemas.KnowledgeForm;
export type KnowledgeResponse = Components.Schemas.KnowledgeResponse;
export type KnowledgeUserResponse = Components.Schemas.KnowledgeUserResponse;
export type LdapConfigForm = Components.Schemas.LdapConfigForm;
export type LdapForm = Components.Schemas.LdapForm;
export type LdapServerConfig = Components.Schemas.LdapServerConfig;
export type MarkdownForm = Components.Schemas.MarkdownForm;
export type MemoryModel = Components.Schemas.MemoryModel;
export type MemoryUpdateModel = Components.Schemas.MemoryUpdateModel;
export type MessageForm = Components.Schemas.MessageForm;
export type MessageModel = Components.Schemas.MessageModel;
export type MessageUserResponse = Components.Schemas.MessageUserResponse;
export type ModelForm = Components.Schemas.ModelForm;
export type ModelMeta = Components.Schemas.ModelMeta;
export type ModelModel = Components.Schemas.ModelModel;
export type ModelNameForm = Components.Schemas.ModelNameForm;
export type ModelParams = Components.Schemas.ModelParams;
export type ModelResponse = Components.Schemas.ModelResponse;
export type ModelUserResponse = Components.Schemas.ModelUserResponse;
export type ModelsConfigForm = Components.Schemas.ModelsConfigForm;
export type open_webui__models__auths__UserResponse =
  Components.Schemas.OpenWebuiModelsAuthsUserResponse;
export type open_webui__models__users__UserResponse =
  Components.Schemas.OpenWebuiModelsUsersUserResponse;
export type open_webui__routers__images__OpenAIConfigForm =
  Components.Schemas.OpenWebuiRoutersImagesOpenAIConfigForm;
export type open_webui__routers__ollama__ConnectionVerificationForm =
  Components.Schemas.OpenWebuiRoutersOllamaConnectionVerificationForm;
export type open_webui__routers__ollama__OllamaConfigForm =
  Components.Schemas.OpenWebuiRoutersOllamaOllamaConfigForm;
export type open_webui__routers__openai__ConnectionVerificationForm =
  Components.Schemas.OpenWebuiRoutersOpenaiConnectionVerificationForm;
export type open_webui__routers__openai__OpenAIConfigForm =
  Components.Schemas.OpenWebuiRoutersOpenaiOpenAIConfigForm;
export type open_webui__routers__retrieval__OllamaConfigForm =
  Components.Schemas.OpenWebuiRoutersRetrievalOllamaConfigForm;
export type open_webui__routers__retrieval__OpenAIConfigForm =
  Components.Schemas.OpenWebuiRoutersRetrievalOpenAIConfigForm;
export type open_webui__routers__users__UserResponse =
  Components.Schemas.OpenWebuiRoutersUsersUserResponse;
export type ProcessFileForm = Components.Schemas.ProcessFileForm;
export type ProcessTextForm = Components.Schemas.ProcessTextForm;
export type ProcessUrlForm = Components.Schemas.ProcessUrlForm;
export type PromptForm = Components.Schemas.PromptForm;
export type PromptModel = Components.Schemas.PromptModel;
export type PromptSuggestion = Components.Schemas.PromptSuggestion;
export type PromptUserResponse = Components.Schemas.PromptUserResponse;
export type PushModelForm = Components.Schemas.PushModelForm;
export type QueryCollectionsForm = Components.Schemas.QueryCollectionsForm;
export type QueryDocForm = Components.Schemas.QueryDocForm;
export type QueryMemoryForm = Components.Schemas.QueryMemoryForm;
export type QuerySettingsForm = Components.Schemas.QuerySettingsForm;
export type RatingData = Components.Schemas.RatingData;
export type ReactionForm = Components.Schemas.ReactionForm;
export type Reactions = Components.Schemas.Reactions;
export type RerankingModelUpdateForm =
  Components.Schemas.RerankingModelUpdateForm;
export type STTConfigForm = Components.Schemas.STTConfigForm;
export type SearchForm = Components.Schemas.SearchForm;
export type SessionUserResponse = Components.Schemas.SessionUserResponse;
export type SetBannersForm = Components.Schemas.SetBannersForm;
export type SetDefaultSuggestionsForm =
  Components.Schemas.SetDefaultSuggestionsForm;
export type SigninForm = Components.Schemas.SigninForm;
export type SigninResponse = Components.Schemas.SigninResponse;
export type SignupForm = Components.Schemas.SignupForm;
export type SnapshotData = Components.Schemas.SnapshotData;
export type TTSConfigForm = Components.Schemas.TTSConfigForm;
export type TagFilterForm = Components.Schemas.TagFilterForm;
export type TagForm = Components.Schemas.TagForm;
export type TagModel = Components.Schemas.TagModel;
export type TaskConfigForm = Components.Schemas.TaskConfigForm;
export type ToolForm = Components.Schemas.ToolForm;
export type ToolMeta = Components.Schemas.ToolMeta;
export type ToolModel = Components.Schemas.ToolModel;
export type ToolResponse = Components.Schemas.ToolResponse;
export type ToolUserResponse = Components.Schemas.ToolUserResponse;
export type UpdateConfigForm = Components.Schemas.UpdateConfigForm;
export type UpdatePasswordForm = Components.Schemas.UpdatePasswordForm;
export type UpdateProfileForm = Components.Schemas.UpdateProfileForm;
export type UrlForm = Components.Schemas.UrlForm;
export type UserModel = Components.Schemas.UserModel;
export type UserNameResponse = Components.Schemas.UserNameResponse;
export type UserPermissions = Components.Schemas.UserPermissions;
export type UserRoleUpdateForm = Components.Schemas.UserRoleUpdateForm;
export type UserSettings = Components.Schemas.UserSettings;
export type UserUpdateForm = Components.Schemas.UserUpdateForm;
export type ValidationError = Components.Schemas.ValidationError;
export type WebConfig = Components.Schemas.WebConfig;
export type WebSearchConfig = Components.Schemas.WebSearchConfig;
export type WorkspacePermissions = Components.Schemas.WorkspacePermissions;
export type YoutubeLoaderConfig = Components.Schemas.YoutubeLoaderConfig;
