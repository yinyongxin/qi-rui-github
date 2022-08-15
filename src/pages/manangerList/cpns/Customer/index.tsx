import React from 'react';

import { Title, Table } from 'qirui-digitization-ui';

import styles from './styles.module.less';

const ZLManagerCustomer = () => {
  // state & props

  // redux hooks

  // other hooks
  const customerData = [
    {
      indexName: '利润总额',
      actualTarget: '1829万',
      tongBi: '+12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '边际贡献',
      actualTarget: '1829万',
      tongBi: '+12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '净资产收益率',
      actualTarget: '1829万',
      tongBi: '+12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '净收入',
      actualTarget: '1829万',
      tongBi: '+12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '毛利率',
      actualTarget: '1829万',
      tongBi: '+12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '存贷资金',
      actualTarget: '1829万',
      tongBi: '+12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
  ];

  // handles
  return (
    <div className={styles.zlCustomerWrapper}>
      <Title title="客户" type="tooltip"></Title>
      <div className={styles.content}>
        <Table<{
          indexName: string;
          actualTarget: string;
          tongBi: string;
          huanBi: string;
          targetComplete: string;
        }>
          columns={[
            {
              title: '指标名称',
              dataKey: 'indexName',
            },
            {
              title: '实际目标',
              dataKey: 'actualTarget',
            },
            {
              title: '同比',
              dataKey: 'tongBi',
            },
            {
              title: '环比',
              dataKey: 'huanBi',
            },
            {
              title: '目标达成率',
              dataKey: 'targetComplete',
            },
          ]}
          data={customerData}
        />
      </div>
    </div>
  );
};

export default ZLManagerCustomer;
