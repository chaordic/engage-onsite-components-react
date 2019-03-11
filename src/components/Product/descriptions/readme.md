# Product Card: Default

## Example

### Default render

```jsx
<Product data={product}></Product>
```

### Custom render

```jsx
<Product data={product}>
  <div className="product">
    <img src={product.images.default}/>
    <div className="detail">
      {product.name} - {product.priceFormat} {product.price}
    </div>
  </div>
</Product>
```

## Parameters

| propName            | propType | defaultValue | required | description |
| ------------------- | -------- | ------------ | -------- | ----------- |
| data                | Object   | -            | -        |             |
| data.url            | String   | -            | -        |             |
| data.name           | String   | -            | -        |             |
| data.images         | Object   | -            | -        |             |
| data.images.default | String   | -            | -        |             |
| data.oldPrice       | String   | -            | -        |             |
| data.priceFormat    | String   | -            | -        |             |
| data.price          | String   | -            | -        |             |
| className           | String   | ''           | -        |             |

### Product

```javascript
const product = {
  url: 'www.product.com',
  name: 'Product',
  images: {
    default: 'www.product.com',
  },
  oldPrice: 2000.00,
  price: 1.99,
  priceFormat: 'R$',
};
```
