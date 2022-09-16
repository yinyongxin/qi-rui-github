import React from 'react';

import { Card, Page } from 'qirui-digitization-ui';

import styles from './styles.module.less';

const ZLManagerSeven = () => {
  // state & props

  // handles
  const headerStyle = {
    height: '48px',
    color: 'var(--design-neutral-color-1)',
  };
  const renderTemplate = () => {
    return (
      <div className={styles.types}>
        <h2 className={styles.title}>报表</h2>
        <div className={styles.fen}>
          <span>日期选择</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.zlManagerSevenWrapper}>
      <Page
        pageHeader={{
          descriptions: renderTemplate(),
          breadcrumb: {
            list: [
              {
                title: '首页',
                path: '/manager',
              },
              {
                title: '净资产收益率',
                path: '/manager/list/two',
              },
              {
                title: '产品线指标概况',
                path: '/manager/list/three',
              },
              {
                title: '总资产净利率',
                path: '/manager/list/four',
              },
              {
                title: '主营业务净利润',
                path: '/manager/list/five',
              },
              {
                title: '成本总额',
                path: '/manager/list/six',
              },
              {
                title: '报表',
                path: '/manager/list/seven',
              },
            ],
          },
        }}
      >
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
      </Page>
    </div>
  );
};

export default ZLManagerSeven;
