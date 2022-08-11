import { Outlet } from 'react-router-dom';
import { Icon, Tabs } from 'qirui-digitization-ui';
import './styles.less';
const Content = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default Content;
