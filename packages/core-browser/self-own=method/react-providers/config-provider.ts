// appConfig

import { ClientApp, IClientAppOpts } from "@opensumi/ide-core-browser";

const appConfig: IClientAppOpts = {
  modules: [],
  workspaceDir: "XXXXX", // 定义工作区根路径
};

const app = new ClientApp(appConfig);
console.log("app: ", app);

// ConfigContext
// usage1: React.useContext(ConfigContext)
import React from "react";
import { ConfigContext, AppConfig } from "@opensumi/ide-core-browser";
const appConfigFromConfigContext = React.useContext(ConfigContext);
console.log("appConfigFromConfigContext: ", appConfigFromConfigContext);

// usage2: component
const configContextExample = (
  props: React.PropsWithChildren<{ value: AppConfig }>
) => {
  const { extraContextProvider, ...restPropsValue } = props.value;

  // const app = (
  //   <ConfigContext.Provider value={restPropsValue}>
  //     <ConfigContext.Consumer>
  //       {(value) => (restPropsValue === value ? props.children : null)}
  //     </ConfigContext.Consumer>
  //   </ConfigContext.Provider>
  // );
};
