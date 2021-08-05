# da.systems official website
[简体中文](./README-CN.md)
## DAS eco-integration
If your product is already part of the DAS Eco, you can showcase your brand on the [DAS official website](http://da.systems/#integration) eco-integration module by submitting a PR.

### Submission content
1. Product name in English and Chinese.
2. URL of the product website.
3. Brand Logo URL.

### Logo Requirements
1. Size: 160 * 160px.
2. Format: png, jpeg, svg.
3. Logo type: Please provide an iconic brand logo as shown below (no rounded corners for the icon).
   ![example](./static/images/wallet-imtoken.png)
4. Modify the image file name (e.g.`wallet-example.png`) and place the image under`./static/images/`below.

### Modify`./static/custom/partners.js`with the list variable
Add your product data to the `list` variable, e.g.
```javascript
const list = [
  ... , {
  englishName: 'example',
  chineseName: 'example',
  logo: 'wallet-example.png',
  website: 'https://example.com/'
}]
```
