export default function <T>(NumState: { state: T; action: any }) {
  return function (
    state = NumState.state,
    action: { type: string; value: number },
  ): T {
    const newState = JSON.parse(JSON.stringify(state));

    const key = Object.keys(NumState.action).find(
      (item) => item === action.type,
    );
    key && NumState.action[key](newState, action);

    return newState;
  };
}
