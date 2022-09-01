import React from 'react';

import { Breadcrumb, Card, Image, Button } from 'qirui-digitization-ui';

import Luoxiaohei from '@/assets/images/luoxiaohei.jpg';
import styles from './styles.module.less';

const ZLOrderInfoOne = () => {
  const headerStyle = {
    backgroundColor: '#000000',
  };
  const headerStyle2 = {
    color: 'var(--design-base-color)',
  };
  const bodyStyle = {
    backgroundColor: '#000000',
  };
  const footerStyle = {
    backgroundColor: '#000000',
    color: 'var( --design-neutral-color-3)',
    border: '0',
  };
  const footerStyle2 = {
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const renderFooter = () => {
    return <div>2022-03-24 18:56:05</div>;
  };
  const renderFooter2 = () => {
    return (
      <div className="flex gap10">
        <Button level="secondary">忽略</Button>
        <Button level="main">处理工单</Button>
      </div>
    );
  };

  return (
    <div className={styles.zlOrderInfoOneWrapper}>
      <div className={styles.header}>
        <div className={styles.breadCrumb}>
          <Breadcrumb
            list={[
              {
                title: '我的工单',
                path: '/myOrder',
              },
              {
                title: '工单详情',
                path: '/myOrder/info',
              },
            ]}
          />
        </div>
        <div className={styles.title}>
          <span>左前门槛返修痕</span>
        </div>
        <div className={styles.type}>
          <div className={styles.left}>
            <div className={styles.desc}>
              <span>工单描述：</span>
              <span>
                为消除故障和故障隐患，恢复汽车总成规定的技术状况或工作能力，对损伤的零部件和总成进行修复或更换的作业总称。目的是补偿和恢复有形磨损，延长汽车的使用寿命。汽车修理包括故障诊断、拆卸、清洗、鉴定、修理、更换、装配、磨合、调试、涂装等基本作业，并严格执行有关汽车修理工艺规范、汽车修理质量检查评定等国家和行业标准。
              </span>
            </div>
            <div className={styles.user}>
              <span>发起人：张长弓</span>
              <span>2022-03-24 18:56:58</span>
            </div>
          </div>
          <div className={styles.right}>
            <dl>
              <dt>D</dt>
              <dd>所属类别</dd>
            </dl>
            <dl>
              <dt>整车ADUIT</dt>
              <dd>所属指标</dd>
            </dl>
            <dl>
              <dt>32</dt>
              <dd>历史异常次数统计</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.order}>
          <Card
            title="车间流水技术问题"
            width={312}
            headerStyle={headerStyle}
            bodyStyle={bodyStyle}
            footerStyle={footerStyle}
            footer={renderFooter()}
          >
            <div className={styles.info}>
              <div className={styles.item}>
                <Image src={Luoxiaohei} preview />
              </div>
              <div className={styles.item}>
                <Image src={Luoxiaohei} preview />
              </div>
              <div className={styles.item}>
                <Image src={Luoxiaohei} preview />
              </div>
              <div className={styles.item}>
                <Image src={Luoxiaohei} preview />
              </div>
              <div className={styles.item}>
                <Image src={Luoxiaohei} preview />
              </div>
              <div className={styles.item}>
                <Image src={Luoxiaohei} preview />
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.orderReason}>
          <Card
            title="左前门槛返修痕"
            width={312}
            headerStyle={headerStyle2}
            bodyStyle={bodyStyle}
            footerStyle={footerStyle2}
            footer={renderFooter2()}
          >
            <div className={styles.info}>故障原因一</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ZLOrderInfoOne;
