import React, { Fragment, useState } from 'react';

import { Card, Title } from 'qirui-digitization-ui';
import ZLCard from '../Card';
import { ManagerCustomerCard } from '@/config/constants';

import styles from './styles.module.less';

const ZLManagerCustomer = () => {
  // state & props
  const [customer, setCustomer] = useState([
    {
      id: 1,
      title: '销量',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 2,
      title: '发车量',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 3,
      title: '市占率',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 4,
      title: '销售额',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 5,
      title: 'OTD-经销商',
      targetValue: 3624,
      tongBi: '+8.12%',
      huanBi: '-1.25%',
      targetRate: '99%',
    },
    {
      id: 6,
      title: 'OTD-客户',
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
    const dragCard = customer[dragIndex];
    let cloneCards = [...customer];
    cloneCards.splice(dragIndex, 1);
    cloneCards.splice(hoverIndex, 0, dragCard);
    setCustomer(cloneCards);
  };

  return (
    <div className={styles.zlCustomerWrapper}>
      <Title title="客户" tooltip="tooltip"></Title>
      <div className={styles.content}>
        {customer.map((item, index) => {
          return (
            <Fragment key={item.id}>
              <ZLCard
                id={item.id}
                index={index}
                moveCard={moveCard}
                info={item}
                type={ManagerCustomerCard}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ZLManagerCustomer;
