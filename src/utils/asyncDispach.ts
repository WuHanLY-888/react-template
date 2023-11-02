export function asyncDis(
  data: { type: string; value: any },
  delay: number,
): Function {
  return function (dispach: Function) {
    setTimeout(() => {
      dispach(data);
    }, delay);
  };
}
