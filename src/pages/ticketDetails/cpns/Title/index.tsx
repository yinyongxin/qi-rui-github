
import React from 'react';
import styles from './index.module.less';
import { Page, Title } from 'qirui-digitization-ui';
const Descriptions = () => {
  return <div>
    <div className={styles.descriptionsTop}>
      <div className={styles.descriptionsLeft}>
        <div>工单描述：</div>
        <div>
          为消除故障和故障隐患，恢复汽车总成规定的技术状况或工作能力，对损伤的零部件和总成进行修复或更换的作业总称。目的是补偿和恢复有形磨损，延长汽车的使用寿命。汽车修理包括故障诊断、拆卸、清洗、鉴定、修理、更换、装配、磨合、调试、涂装等基本作业，并严格执行有关汽车修理工艺规范、汽车修理质量检查评定等国家和行业标准。
        </div>
        <div className={styles.descriptionsInfo}>
          <div>发起人：张常功</div>
          <div>2022-03-24 18:56:58</div>
        </div>
      </div>
      <div className={styles.descriptionsRight}>
        <div className={styles.rightTitle}>
          <div className={styles.rightTitleTop}>D</div>
          <div className={styles.rightTitleBottom}>所属类别</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.rightTitle}>
          <div className={styles.rightTitleTop}>整车ADUIT</div>
          <div className={styles.rightTitleBottom}>所属指标</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.rightTitle}>
          <div className={styles.rightTitleTop}>32</div>
          <div className={styles.rightTitleBottom}>历史异常次数统计</div>
        </div>
      </div>
    </div>
  </div>
}
const TitleNav = () => {

  return (
    <Page
      sticky={false}
      pageHeader={{
        title: '左前门槛返修痕',
        descriptions: (<Descriptions />),
        breadcrumb: {
          list: [
            {
              title: '我的工单',
              path: '/myOrder'
            },
            {
              title: '工单详情',
              path: '/ticketDetails'
            }
          ]
        }
      }}
    >
    </Page>
  );
};

export default TitleNav;