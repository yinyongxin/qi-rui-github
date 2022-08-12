import React, { useEffect, useRef, useState } from 'react';

import _ from 'lodash';
import echarts from '../config/echarts.config';
import { EChartsType } from 'echarts/core';
import { BasePropsInterface } from '../types';

const BaseChart: React.FC<BasePropsInterface> = (props) => {
  // state & props
  const { width, height, option } = props;

  // redux hooks

  // other hooks
  const cRef = useRef<HTMLDivElement>(null);
  const cInstance = useRef<EChartsType>();

  useEffect(() => {
    if (cRef.current) {
      cInstance.current = echarts.getInstanceByDom(cRef.current);
      // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
      if (!cInstance.current) {
        cInstance.current = echarts.init(cRef.current, undefined, {
          renderer: 'svg',
        });
      }
      // 设置配置项
      if (option) cInstance.current?.setOption(option);
    }
  }, [cRef, option]);

  // 监听窗口大小变化重绘
  useEffect(() => {
    window.addEventListener('resize', _.throttle(resize, 100));
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [option]);

  // 展示加载中
  /*  useEffect(() => {
    if (loading) cInstance.current?.showLoading();
    else cInstance.current?.hideLoading();
  }, [loading]); */

  // handles
  // 重新适配大小
  const resize = () => {
    cInstance.current?.resize();
  };

  return <div ref={cRef} style={{ width, height }}></div>;
};

export default BaseChart;
