import reducer from '../reducer';
type stateType = {
  num: number;
};

const NumState = {
  state: {
    num: 10,
  },
  action: {
    add(newState: stateType) {
      newState.num++;
    },
    addAny(newState: stateType, action) {
      newState.num += action.value;
    },
  },
};

const Fun = reducer<stateType>(NumState);
export default Fun;
