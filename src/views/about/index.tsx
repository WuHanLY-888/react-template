import { useSelector, useDispatch } from 'react-redux';
// import store from '@/store';
import { Button } from 'antd';
import { asyncDis } from '@/utils/asyncDispach';
// type RootState = ReturnType<typeof store.getState>;

const View = () => {
  const { num } = useSelector((state: RootState) => ({
    num: state.NumStateReducer.num,
  }));
  console.log(num);

  const dispatch = useDispatch();
  const changeNum = () => {
    // dispatch({ type: 'addAny', value: 10 });
    dispatch(asyncDis({ type: 'addAny', value: 10 }, 500) as any);
    // dispatch((dis) => {
    //   setTimeout(() => {
    //     dis({ type: 'addAny', value: 10 });
    //   }, 1000);
    // });
  };

  return (
    <div>
      <p>about</p>
      <p>{num}</p>
      <Button type="primary" onClick={changeNum}>
        按钮
      </Button>
    </div>
  );
};

export default View;
