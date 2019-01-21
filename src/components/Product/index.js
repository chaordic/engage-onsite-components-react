import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './index.scss';

import { formatUrl } from '../../helpers/formatUrl';

class Product extends Component {
  static propTypes = {
    data: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
      images: PropTypes.shape({ default: PropTypes.string }),
      oldPrice: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      priceFormat: PropTypes.string,
    }).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      data,
      children,
      className,
    } = this.props;

    return (
      <div
        styleName="onsite-product"
        className={
          classNames(
            className,
            {
              [className]: !!className,
            },
          )
        }
      >
        {
          children
            || (
              <Fragment>
                <div styleName="img-wrapper">
                  <a href={formatUrl(data.url)}>
                    <img src={formatUrl(data.images.default)} alt={data.name} />
                  </a>
                </div>
                <div styleName="product-detail">
                  <a href={formatUrl(data.url)}>
                    {data.name}
                  </a>
                  <div styleName="price-list">
                    {data.oldPrice && (
                      <div styleName="price-old">
                        {data.priceFormat}
                        &nbsp;
                        {data.oldPrice}
                      </div>
                    )}
                    <div>
                      {data.priceFormat}
                      &nbsp;
                      {data.price}
                    </div>
                  </div>
                </div>
              </Fragment>
            )
        }
      </div>
    );
  }
}

export default CSSModules(Product, styles, { allowMultiple: true });
