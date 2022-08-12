import React, { Fragment, useState } from 'react';

import { Card, Title } from 'qirui-digitization-ui';
import ZLCardHeader from '../CardHeader';

import styles from './styles.module.less';

const ZLManagerEfficiency = () => {
  // state & props
  const [state, setState] = useState([
    {
      id: 1,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 2,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 3,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 4,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 5,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 6,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
  ]);

  // redux hooks

  // other hooks

  // handles
  const headerStyle = {
    color: 'var(--design-neutral-color-1)',
    paddingTop: '12px',
    paddingBottom: '16px',
  };
  const bodyStyle = {
    color: 'var(--design-neutral-color-2)',
    padding: '16px',
  };
  return (
    <div className={styles.zlEfficiencyWrapper}>
      <Title title="效率" type="tooltip"></Title>
      <div className={styles.content}>
        {state.map((item, index) => {
          return (
            <Fragment key={item.id}>
              <Card
                title={<ZLCardHeader title="利润总额" price={3624} />}
                width={251}
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
              >
                <ul className={styles.info}>
                  <li className={styles.year}>
                    <span>同比</span>
                    <span className={styles.colorGreen}>+8.22%</span>
                  </li>
                  <li className={styles.ring}>
                    <span>环比</span>
                    <span className={styles.colorRed}>-1.25%</span>
                  </li>
                  <li className={styles.target}>
                    <span>目标达成率</span>
                    <span>99%</span>
                  </li>
                </ul>
              </Card>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ZLManagerEfficiency;
