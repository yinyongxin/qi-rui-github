import React, { useState } from 'react';

import { Title, Table } from 'qirui-digitization-ui';
import { changeColor } from '@/utils/tools/formatColor';

import styles from './styles.module.less';

interface IData {
  indexName: string;
  actualTarget: string;
  tongBi: string;
  huanBi: string;
  targetComplete: string;
}

const ZLManagerCustomer = () => {
  // state & props
  const [customer, setCustomer] = useState([
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
  ]);

  // redux hooks

  // other hooks

  // handles
  return (
    <div className={styles.zlCustomerWrapper}>
      <Title title="客户" tooltip="tooltip"></Title>
      <div className={styles.content}>
        <Table<IData>
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
              bodyCellRender(column, record, index) {
                console.log(column, record, index);
                let color = changeColor(record.tongBi);
                return <span style={{ color }}>{record.tongBi}</span>;
              },
            },
            {
              title: '环比',
              dataKey: 'huanBi',
              bodyCellRender(column, record, index) {
                console.log(column, record, index);
                let color = changeColor(record.huanBi);
                return <span style={{ color }}>{record.huanBi}</span>;
              },
            },
            {
              title: '目标达成率',
              dataKey: 'targetComplete',
            },
          ]}
          data={customer}
        />
      </div>
    </div>
  );
};

export default ZLManagerCustomer;
