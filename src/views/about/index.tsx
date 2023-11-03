import { useSelector } from 'react-redux';

const View = () => {
  const { num } = useSelector((state) => ({
    num: state.num,
  }));
  console.log(num);

  return (
    <div>
      <p>{num}</p>
      <p>about</p>
    </div>
  );
};

export default View;
