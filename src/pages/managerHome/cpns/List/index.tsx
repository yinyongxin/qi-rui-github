import React, { Fragment, useState } from 'react';
import { Card } from 'qirui-digitization-ui';

import BaseTitle from '@/components/BaseTitle';
import ZLCardHeader from '../CardHeader';

import styles from './styles.module.less';

const ZLManagerList = () => {
  // state & props
  const [financeData, setFinanceData] = useState([
    {
      id: 1,
      title: '利润总额',
      price: 36240000,
      tongBi: '+8.22%',
      huanBi: '-1.25%',
      target: '99.14%',
    },
    {
      id: 2,
      title: '利润总额',
      price: 36240000,
      tongBi: '+8.22%',
      huanBi: '-1.25%',
      target: '99.14%',
    },
    {
      id: 3,
      title: '利润总额',
      price: 36240000,
      tongBi: '+8.22%',
      huanBi: '-1.25%',
      target: '99.14%',
    },
    {
      id: 4,
      title: '利润总额',
      price: 36240000,
      tongBi: '+8.22%',
      huanBi: '-1.25%',
      target: '99.14%',
    },
    {
      id: 5,
      title: '利润总额',
      price: 36240000,
      tongBi: '+8.22%',
      huanBi: '-1.25%',
      target: '99.14%',
    },
    {
      id: 6,
      title: '利润总额',
      price: 36240000,
      tongBi: '+8.22%',
      huanBi: '-1.25%',
      target: '99.14%',
    },
  ]);

  // handles
  const headerStyle = { color: 'var(--design-neutral-color-1)' };
  const bodyStyle = {
    color: 'var(--design-neutral-color-2)',
  };

  return (
    <div className={styles.managerList}>
      <div className={styles.finance}>
        <BaseTitle title="财务" />
        <div className={styles.content}>
          {financeData &&
            financeData.map((item, index) => {
              return (
                <Fragment key={item.id}>
                  <Card
                    title={item.title}
                    width={251}
                    headerStyle={headerStyle}
                    bodyStyle={bodyStyle}
                  >
                    <div className={styles.info}></div>
                  </Card>
                </Fragment>
              );
            })}
        </div>
      </div>
      <div className={styles.market}>
        <BaseTitle title="市场" />
        <div className={styles.content}>
          {financeData &&
            financeData.map((item, index) => {
              return (
                <Fragment key={item.id}>
                  <Card
                    title={item.title}
                    width={251}
                    headerStyle={headerStyle}
                    bodyStyle={bodyStyle}
                  >
                    <div className={styles.info}></div>
                  </Card>
                </Fragment>
              );
            })}
        </div>
      </div>
      <div className={styles.efficiency}>
        <BaseTitle title="效率" />
        <div className={styles.content}>
          {financeData &&
            financeData.map((item, index) => {
              return (
                <Fragment key={item.id}>
                  <Card
                    title={item.title}
                    width={251}
                    headerStyle={headerStyle}
                    bodyStyle={bodyStyle}
                  >
                    <div className={styles.info}></div>
                  </Card>
                </Fragment>
              );
            })}
        </div>
      </div>
      <div className={styles.customer}>
        <BaseTitle title="客户" />
        <div className={styles.content}>
          {financeData &&
            financeData.map((item, index) => {
              return (
                <Fragment key={item.id}>
                  <Card
                    title={item.title}
                    width={251}
                    headerStyle={headerStyle}
                    bodyStyle={bodyStyle}
                  >
                    <div className={styles.info}></div>
                  </Card>
                </Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ZLManagerList;
