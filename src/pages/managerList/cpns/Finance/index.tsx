import React from 'react';

import { Title, Table } from 'qirui-digitization-ui';
import { formatTableData } from '@/utils/tools/formatData';

import styles from './styles.module.less';
import { useNavigate } from 'react-router-dom';

interface IData {
  indexName: string;
  actualTarget: string;
  tongBi: string;
  huanBi: string;
  targetComplete: string;
}

const ZLManagerFinance = () => {
  // state & props

  // redux hooks

  // other hooks
  const navigate = useNavigate();
  // handles
  const financeData = [
    {
      indexName: '利润总额',
      actualTarget: '1829万',
      tongBi: '12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '边际贡献',
      actualTarget: '1829万',
      tongBi: '12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '净资产收益率',
      actualTarget: '1829万',
      tongBi: '12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '净收入',
      actualTarget: '1829万',
      tongBi: '12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '毛利率',
      actualTarget: '1829万',
      tongBi: '12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
    {
      indexName: '存贷资金',
      actualTarget: '1829万',
      tongBi: '12.35%',
      huanBi: '-4.35%',
      targetComplete: '98.2%',
    },
  ];

  const handleDataColor = (data: IData[]) => {
    data.forEach((item, index) => {
      item.tongBi = formatTableData(item.tongBi);
      if (item.tongBi.includes('+')) {
      } else {
      }
    });
    return data;
  };

  return (
    <div className={styles.zlFinanceWrapper}>
      <Title title="财务" type="tooltip"></Title>
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
          onRow={(record) => {
            return {
              onClick: () => {
                navigate('/manager/list/two');
              },
            };
          }}
          data={handleDataColor(financeData)}
        />
      </div>
    </div>
  );
};

export default ZLManagerFinance;
