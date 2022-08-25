import React from 'react';

import { Card } from 'qirui-digitization-ui';

import styles from './styles.module.less';

const ZLManagerSeven = () => {
  // state & props

  // handles
  const headerStyle = {
    height: '48px',
    color: 'var(--design-neutral-color-1)',
  };

  return (
    <div className={styles.zlManagerSevenWrapper}>
      <div className={styles.header}>
        <div className={styles.breadCrumb}>面包屑</div>
        <div className={styles.type}>
          <span className={styles.title}>报表</span>
          <div className={styles.fen}>分类</div>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.left}>
          <Card title="营业费用报表" headerStyle={headerStyle}>
            <div className={styles.in}>
              <div className={styles.desc}>
                <span>分析营业费用构成发现当月营业外支出大幅增加</span>
              </div>
              <div className={styles.file}>文件预览</div>
            </div>
          </Card>
        </div>
        <div className={styles.center}>
          <Card title="总账科目分析" headerStyle={headerStyle}>
            <div className={styles.in}>
              <div className={styles.desc}>
                <span>分析营业费用构成发现当月营业外支出大幅增加</span>
              </div>
              <div className={styles.file}>文件预览</div>
            </div>
          </Card>
        </div>
        <div className={styles.right}>
          <Card title="财务凭证细表分析" headerStyle={headerStyle}>
            <div className={styles.in}>
              <div className={styles.desc}>
                <span>分析营业费用构成发现当月营业外支出大幅增加</span>
              </div>
              <div className={styles.file}>文件预览</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ZLManagerSeven;
