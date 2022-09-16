import React, { Fragment, useState } from 'react';

import { Title } from 'qirui-digitization-ui';
import ZLCard from '../Card';
import { ManagerFinanceCard } from '@/config/constants';

import styles from './styles.module.less';

const ZLManagerFinance = () => {
  // state & props
  const [finance, setFinance] = useState([
    {
      id: 1,
      title: '利润总额',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 2,
      title: '边际贡献',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 3,
      title: '净资产收益率',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 4,
      title: '净收入',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 5,
      title: '毛利率',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 6,
      title: '存贷资金',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
  ]);

  // redux hooks

  // other hooks

  // handles
  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragCard = finance[dragIndex];
    let cloneCards = [...finance];
    cloneCards.splice(dragIndex, 1);
    cloneCards.splice(hoverIndex, 0, dragCard);
    setFinance(cloneCards);
  };

  return (
    <div className={styles.zlFinanceWrapper}>
      <Title title="财务" tooltip="tooltip"></Title>
      <div className={styles.content}>
        {finance.map((item, index) => {
          return (
            <Fragment key={item.id}>
              <ZLCard
                id={item.id}
                index={index}
                moveCard={moveCard}
                info={item}
                type={ManagerFinanceCard}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ZLManagerFinance;
