### AppConfig

opensumi 全量配置项

| 字段名                                  | 说明                                                                                                                                                                                                        | 类型                                                | 是否必填 | 默认值                                       |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------- | -------------------------------------------- |
| appName                                 | APP 的名称                                                                                                                                                                                                  | string                                              | 否       | _OPENSUMI_                                   |
| appHost                                 | 应用程序的托管位置                                                                                                                                                                                          | string                                              | 否       | 默认桌面端下为 `desktop`, Web 下为 `web`     |
| uriScheme                               | 默认内部的 uriScheme，用于桌面版 app 的唤起                                                                                                                                                                 | string                                              | 否       | _sumi_                                       |
| workspaceDir                            | 打开的工作区路径                                                                                                                                                                                            | string                                              | 是       |                                              |
| extensionDir                            | 插件目录路径                                                                                                                                                                                                | string                                              | 否       | --                                           |
| storageDirName                          | 设置全局存储的文件夹名称                                                                                                                                                                                    | string                                              | 否       | _.sumi_                                      |
| preferenceDirName                       | 设置工作区配置文件的文件夹名称                                                                                                                                                                              | string                                              | 否       | _.sumi_                                      |
| workspacePreferenceDirName              | 更精细的项目工作区配置存储位置<br />即当 preferenceDirName = '.sumi' ， workspacePreferenceDirName = '.o2'时，对应全局配置为 ~/.sumi/settings.json , 工作区配置为 {workspaceDir}/.o2/settings.json          | string                                              | 否       | --                                           |
| userPreferenceDirName                   | 更精细的项目用户配置存储位置\_<br />即当 preferenceDirName = '.sumi' ， userPreferenceDirName = '.o2'时，对应全局配置为 ~/.sumi/settings.json , 工作区配置为 {userDir}/.o2/settings.json                    | string                                              | 否       | --                                           |
| extensionStorageDirName                 | 全局插件数据存储目录名称                                                                                                                                                                                    | string                                              | 否       | _.sumi_                                      |
| defaultPreferences                      | 默认配置                                                                                                                                                                                                    | IPreferences                                        | 否       | --                                           |
| injector                                | 初始化的 DI 实例，一般可在外部进行 DI 初始化之后传入，便于提前进行一些依赖的初始化                                                                                                                          | Injector                                            | 是       |                                              |
| wsPath                                  | 定义 WebScoket 通信路径                                                                                                                                                                                     | string                                              | 是       | --                                           |
| layoutConfig                            | 定义 IDE 各个布局区块默认加载的模块，可针对性对模块进行增删改                                                                                                                                               | LayoutConfig                                        | 是       | 默认值参考`packages\main-layout\src\browser` |
| layoutComponent                         | 定义 IDE 的整体布局，可以通过传入自定义布局的方式定义各个区块的默认大小及缩放选项等                                                                                                                         | React.FC                                            | 否       | --                                           |
| panelSizes                              | 可基于 `layoutComponent` 配置的基础上                                                                                                                                                                       | { [*slotLocation*: string]: number }                | 否       | --                                           |
| defaultPanels                           | 定义各个区块的默认面板<br />如：{ [SlotLocation.bottom]: '@opensumi/ide-terminal-next' }<br />定义了底部区块默认使用 `@opensumi/ide-terminal-next` 模块进行初始化                                           | { [*slotLocation*: string]: string }                | 否       | --                                           |
| webviewEndpoint                         | 用于挂载 webview 的 iframe 地址                                                                                                                                                                             | string                                              | 否       | http://${deviceIp}:${port}/webview           |
| extWorkerHost                           | Worker 插件的默认启动路径                                                                                                                                                                                   | string                                              | 否       | --                                           |
| extensionCandidate                      | 额外指定的插件路径，一般用于内置插件                                                                                                                                                                        | ExtensionCandidate[]                                | 否       | []                                           |
| staticServicePath                       | 定义静态资源的加载路径                                                                                                                                                                                      | string                                              | 否       | http://0.0.0.0:8000/assets/${path}           |
| extensionDevelopmentHost                | 定义是否以插件开发模式启动                                                                                                                                                                                  | boolean                                             | 否       |                                              |
| editorBackgroundImage                   | 定义编辑器默认背景图片                                                                                                                                                                                      | string                                              | 否       | --                                           |
| useExperimentalShadowDom                | 用于插件 UI 部分开启实验性 ShadowDOM                                                                                                                                                                        | boolean                                             | 否       |                                              |
| useIframeWrapWorkerHost                 | 加载 workerHost 时使用 iframe 包装\_,对于跨域的场景，加载 workerHost 时会使用 base64 编码后通过 importScripts 引入(importScripts 不受跨域限制)<br />但这会导致 workerHost 的 origin 为 null，使某些请求失败 | boolean                                             | 否       |                                              |
| clientId                                | 自定义客户端 id，是 websocket 服务的唯一标识。也是传给声明了 backServices 的后端 Service 的唯一标识.**注意保持这个 id 的唯一性**                                                                            | string                                              | 否       |                                              |
| noExtHost                               | 是否禁用插件进程                                                                                                                                                                                            | boolean                                             | 否       |                                              |
| extraContextProvider                    | 额外的 `ConfigProvider`。可以让 IDE-framework 内部的 ReactDOM.render 调用时，都被其包裹一层，以达到额外的 context 传递效果                                                                                  | `React.ComponentType<React.PropsWithChildren<any>>` | 否       | --                                           |
| allowSetDocumentTitleFollowWorkspaceDir | 允许按照工作区路径去动态设置 document#title                                                                                                                                                                 | boolean                                             | 否       | true                                         |
| remoteHostname                          | 远程访问地址，可以通过该地址访问当容器服务                                                                                                                                                                  | string                                              | 否       | `window.location.hostname`                   |
| enableDebugExtensionHost                | 开启插件进程的调试能力                                                                                                                                                                                      | boolean                                             | 否       | False                                        |
| extensionFetchCredentials               | 加载插件前端资源时的 fetch credentials 选项                                                                                                                                                                 | RequestCredentials                                  | 否       |                                              |
| extensionConnectOption                  | 插件进程连接时候一些配置选项                                                                                                                                                                                | ExtensionConnectOption                              | 否       |                                              |
| didRendered                             | 当 DOM 首次渲染完成后调用，此时表示 IDE 界面已经完成渲染并可以操作                                                                                                                                          | () => void                                          | 否       |                                              |
| onigWasmUri                             | vscode-oniguruma-wasm 资源 Uri 地址                                                                                                                                                                         | string                                              | 否       |                                              |
| workspaceSuffixName                     | 工作区文件后缀                                                                                                                                                                                              | string                                              | 否       | _sumi-workspace_                             |
| componentCDNType                        | 视图组件内默认的组件样式资源 CDN 来源                                                                                                                                                                       | 'unpkg' \| 'jsdelivr' \| 'alipay'                   | 否       | `'alipay'`                                   |
| isElectronRenderer                      | 指定前端是否为 Electron 环境 (Electron Renderer)                                                                                                                                                            | boolean                                             | 否       | False                                        |
| isRemote                                | 指定当前是否通过 remote 模式连接到远程的 Server 端，这将影响 Terminal 与 Extension 模块与子进程的连接方式                                                                                                   | boolean                                             | 否       | False                                        |

```ts
interface IPreferences {
  [key: string]: any;
}

declare class Injector {
  id: string;
  creatorMap: Map<Token, InstanceCreator>;
  depth: number;
  tag?: string;
  hookStore: IHookStore;
  parent?: Injector;
  private tagMatrix;
  private domainMap;
  private opts;
  constructor(providers?: Provider[], opts?: InjectorOpts, parent?: Injector);
  createChild(providers?: Provider[], opts?: InjectorOpts): Injector;
  get<T extends ConstructorOf<any>>(
    token: T,
    args?: ConstructorParameters<T>,
    opts?: InstanceOpts
  ): TokenResult<T>;
  get<T extends Token>(token: T, opts?: InstanceOpts): TokenResult<T>;
  getFromDomain(...domains: Domain[]): any[];
  hasInstance(instance: any): boolean;
  addProviders(...providers: Provider[]): void;
  overrideProviders(...providers: Provider[]): void;
  parseDependencies(...targets: Token[]): void;
  exchangeToken(token: Token, tag: Tag): Token;
  createHooks(hooks: IValidAspectHook[]): import("./declare").IDisposable;
  createHook<ThisType, Args extends any[], Result>(
    hook: IValidAspectHook<ThisType, Args, Result>
  ): import("./declare").IDisposable;
  disposeOne(token: Token, key?: string): void;
  disposeAll(key?: string): void;
  protected getTagToken(token: Token, tag: Tag): Token | undefined | null;
  private setProviders;
  private addToDomain;
  private getCreator;
  private createInstance;
  private createInstanceFromClassCreator;
  private getParameters;
  private createInstanceWithInjector;
}

interface LayoutConfig {
  [area: string]: {
    modules: Array<string>;
    // @deprecated
    size?: number;
  };
}

class ExtensionCandidate {
  path: string;
  isBuiltin: boolean;
  isDevelopment: boolean;
}

type RequestCredentials = "include" | "omit" | "same-origin";

interface ExtensionConnectOption {
  // 两种连接模式参考 nodejs net 模块
  mode: ExtensionConnectModeOption;
  // 如果 mode 为 TCP，字段表示套接字应连接到的主机地址，不传默认为'localhost'
  host?: string;
}
```
