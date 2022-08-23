import { Outlet } from 'react-router-dom';
import './styles.less';
const Content = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default Content;
