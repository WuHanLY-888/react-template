const defaultState = {
  num: 12,
};

export default function (
  state = defaultState,
  action: { type: string; value: number },
) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'add':
      newState.num++;
      break;
    case 'addAny':
      newState.num += action.value;
      break;
  }

  return newState;
}
