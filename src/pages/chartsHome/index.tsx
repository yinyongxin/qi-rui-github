import React from 'react';
import ZLChartsContent from './cpns/ChartsContent';
import ZLChartsList from './cpns/ChartsList';

import styles from './styles.module.less';

const ZLChartsHome: React.FC = () => {
  // state & props

  // handle

  return (
    <div className={styles.zlChartsHomeWrapper}>
      <ZLChartsContent />
      <ZLChartsList />
    </div>
  );
};

export default ZLChartsHome;
