# da.systems official website

## DAS 生态集成
如果您的产品已经加入了 DAS 生态，您可以通过提交 PR 在 [DAS 官网](http://da.systems/#integration) 生态集成模块展示您的品牌。

### 提交内容
1. 中英文版本产品名称。
2. 产品官网 URL。
3. 品牌 Logo URL。

### Logo 要求
1. 尺寸：160 * 160px。
2. 格式：png，jpeg，svg。
3. 标志类型：请提供图标类品牌标志，如下图所示（图标无需圆角）：

   ![示例](./static/images/wallet-imtoken.png)
4. 修改好图片文件名称（例如：`wallet-example.png`），把图片放入`./static/images/`下面。

### 修改 ./static/custom/partners.js 中的 list 变量
把您的产品数据添加到`list`变量后面，例如：
```javascript
const list = [
  ..., {
  englishName: 'example',
  chineseName: 'example',
  logo: 'wallet-example.png',
  website: 'https://example.com/'
}]
```
