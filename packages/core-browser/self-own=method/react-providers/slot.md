### 定义

| export            | 说明                                     |
| ----------------- | ---------------------------------------- |
| SlotLocation      | `export type SlotLocation = string;`     |
| SlotLocation      | 插槽位置定义                             |
| TabbarContextKeys | 枚举值                                   |
| allSlot           | 全局变量，给所有 slot 加 resize 事件监听 |

```ts
export const SlotLocation = {
  top: "top",
  left: "left",
  right: "right",
  main: "main",
  statusBar: "statusBar",
  bottom: "bottom",
  extra: "extra",
  float: "float",
  action: "action",
  // @deprecated ->
  bottomBar: "bottomBar",
  bottomPanel: "bottomPanel",
  leftBar: "leftBar",
  leftPanel: "leftPanel",
  rightBar: "rightBar",
  rightPanel: "rightPanel",
  // <- @deprecated
};

export enum TabbarContextKeys {
  activeViewlet = "activeViewlet",
  activePanel = "activePanel",
  activeExtendViewlet = "activeExtendViewlet",
}

export const allSlot: { slot: string; dom: HTMLElement }[] = [];
```

### 函数

#### `getSlotLocation(module: string, layoutConfig: LayoutConfig)`

根据注册位置的 module 获取当前 module 的插槽位置

| 参数                       | 描述                               |
| -------------------------- | ---------------------------------- |
| module: string             | 将 module 注册到插槽时的模块标识符 |
| layoutConfig: LayoutConfig | 插槽注册配置                       |
|                            |                                    |
| **出参**                   | **描述**                           |
| string                     | SlotLocation 中定义的插槽位置      |

```ts
interface LayoutConfig {
  [area: string]: {
    modules: Array<string>;
    // @deprecated
    size?: number;
  };
}

// usage：插槽注册
const layoutConfig: LayoutConfig = {
  [SlotLocation.top]: {
    modules: [],
  },
  [SlotLocation.action]: {
    modules: [""],
  },
  [SlotLocation.left]: {
    modules: ["mr-explorer"],
  },
  [SlotLocation.right]: {
    modules: [],
  },
  [SlotLocation.main]: {
    modules: ["@ali/ide-editor"], // module: string
  },
  [SlotLocation.bottom]: {
    modules: [],
  },
  [SlotLocation.statusBar]: {
    modules: ["@ali/ide-status-bar"],
  },
  [SlotLocation.extra]: {
    modules: [],
  },
};
```

#### `getTabbarCtxKey(*location*: string)`

```ts
export function getTabbarCtxKey(location: string): TabbarContextKeys {
  const standardTabbarCtxKeys = {
    [SlotLocation.left]: TabbarContextKeys.activeViewlet,
    [SlotLocation.right]: TabbarContextKeys.activeExtendViewlet,
    [SlotLocation.bottom]: TabbarContextKeys.activePanel,
  };

  return standardTabbarCtxKeys[location] || "activeExtendViewlet";
}
```

### 组件

#### ErrorBoundary

**Props：**--

**用法**：子组件出错时，错误组件将被展示

```react
<ErrorBoundary>
  <RightWidget></RightWidget>
</ErrorBoundary>
```

#### SlotDecorator

**Props：**`{ slot: string; color?: string }`

**用法**：给插槽内的组件装饰一层 div， 可以获取插槽的 ref + 装饰`resize-wrapper`的样式
