import React, { Fragment, useState } from 'react';

import { Card } from 'qirui-digitization-ui';

import styles from './styles.module.less';

const ZLContentList = () => {
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
    {
      id: 7,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 8,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 9,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 10,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 11,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 12,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
  ]);

  // redux hooks

  // other hooks

  // handles
  const handleStatus = (status: number) => {
    switch (status) {
      case 0:
        return 'default';
        break;
      case 1:
        return 'success';
        break;
      case 2:
        return 'error';
        break;
      case 3:
        return 'warning';
      default:
        return undefined;
    }
  };
  const headerStyle = { color: 'var(--design-neutral-color-1)' };
  const bodyStyle = {
    color: 'var(--design-neutral-color-2)',
  };

  return (
    <div className={styles.zlOrderListWrapper}>
      {state.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <Card
              title={item.title}
              status={handleStatus(item.status)}
              width={302}
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.info}>
                <div className={styles.infoTop}>
                  <span>D</span>
                  <span>制造HPV</span>
                  <span>系统触发</span>
                </div>
                <div className={styles.originator}>
                  发起人：{item.originator}
                </div>
                <div className={styles.dateTime}>{item.dateTime}</div>
              </div>
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ZLContentList;
