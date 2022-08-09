import {
  incrementAsync,
  incrementIfOdd,
  exempleActions,
} from '@/store/exempleSlice';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { Button } from 'qirui-digitization-ui';
const reduxExemple = () => {
  const dispatch = useAppDispatch();
  const { value, status } = useAppSelector((state) => state.exemple);
  const syncOperation = (type: 'add' | 'sub') => {
    if (type === 'sub') {
      dispatch(exempleActions.decremented());
    }
    if (type === 'add') {
      dispatch(exempleActions.incremented());
    }
  };

  return (
    <div>
      <h1>reduxExemple</h1>
      <h2>{value}</h2>
      <div className="flex gap10">
        <Button status="error" onClick={() => syncOperation('sub')}>
          同步减
        </Button>
        <Button status="success" onClick={() => syncOperation('add')}>
          同步加
        </Button>
        <Button
          status="warning"
          onClick={() => {
            dispatch(incrementIfOdd(1));
          }}
        >
          同步操作前校验(如果为奇数则增加)
        </Button>
      </div>
      <div style={{ height: 20 }}></div>
      <div className="flex gap10">
        <Button
          disabled={status === 'loading'}
          onClick={() => {
            dispatch(incrementAsync(1));
          }}
        >
          异步加 {status}
        </Button>
      </div>
    </div>
  );
};
export default reduxExemple;
