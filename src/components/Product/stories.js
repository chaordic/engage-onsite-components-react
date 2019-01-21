import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import { withKnobs, text } from '@storybook/addon-knobs';

import Product from './index';
import descriptiontDefault from './descriptions/default.md';
import descriptionREADME from './descriptions/readme.md';

storiesOf('Product card', module)
  .addDecorator(withReadme(descriptionREADME))
  .addDecorator(withKnobs)
  .add(
    'Default',
    withDocs(descriptiontDefault, () => {
      const product = { images: {} };
      product.url = text('product.url', 'www.google.com');
      product.name = text('product.name', 'Lorem ipsum dolor sit amet');
      product.images.default = text('product.default', 'https://dummyimage.com/150x200');
      product.oldPrice = text('product.oldPrice', '2000.00');
      product.price = text('product.price', '2.99');
      product.priceFormat = text('product.priceFormat', 'R$');

      return (<Product data={product} />);
    }),
  );
