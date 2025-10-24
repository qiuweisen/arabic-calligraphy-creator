## Adsterra 广告位集成说明

项目已经内置 `AdsterraSlot` 组件（`components/ads/adsterra-slot.tsx`），可以在任意客户端组件中通过如下方式加载广告：

```tsx
import { AdsterraSlot } from "@/components/ads/adsterra-slot"

export function Example() {
  return (
    <>
      {/* 728x90 桌面横幅 */}
      <AdsterraSlot placement="leaderboard" className="hidden md:flex mb-8" />

      {/* 320x50 移动横幅 */}
      <AdsterraSlot placement="mobileBanner" className="md:hidden mb-6" />

      {/* 300x250 通用矩形 */}
      <AdsterraSlot placement="mediumRectangle" className="mt-10" />
    </>
  )
}
```

当前可用的 `placement`：

- `leaderboard`：728×90，桌面端横幅。
- `mobileBanner`：320×50，移动端横幅。
- `mediumRectangle`：300×250，内容区矩形。
- `stickyContainer`：通过 `container-940c0b50ddec7eac4393a3bf8b8b50a0` 容器渲染的脚本（默认不在页面中启用，如需使用可在底部或固定位置挂载）。

> 如果需要直接使用原始脚本或为新广告位建组件，可参考以下官方代码片段：

```html
<script type="text/javascript">
  atOptions = {
    'key' : 'aeeee826f7a4a8dfe9a62024343a4d4d',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/aeeee826f7a4a8dfe9a62024343a4d4d/invoke.js"></script>

<script type="text/javascript">
  atOptions = {
    'key' : '714a16aa986587748be15fa275a3d2e1',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/714a16aa986587748be15fa275a3d2e1/invoke.js"></script>

<script type="text/javascript">
  atOptions = {
    'key' : '562c9f0f4e987ffd83c60aae1c7f79f1',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/562c9f0f4e987ffd83c60aae1c7f79f1/invoke.js"></script>

<script async="async" data-cfasync="false" src="//pl27914488.effectivegatecpm.com/940c0b50ddec7eac4393a3bf8b8b50a0/invoke.js"></script>
<div id="container-940c0b50ddec7eac4393a3bf8b8b50a0"></div>
```
