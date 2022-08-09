import React, { FC } from 'react';

import { ImagePropsInterface } from './types';

import styles from './styles.module.less';

const ImageComponent: FC<ImagePropsInterface> = ({ src }) => {
  return (
    <img src={src ? src : './images/logo.png'} alt="" className={styles.img} />
  );
};

export default ImageComponent;
