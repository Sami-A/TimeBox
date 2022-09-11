type cbArgs = (value: any, index: number, array: any[]) => any;

const useSafeMap = function useSafeMap(data: any, cb: cbArgs) {
  return data instanceof Array && data.length > 0 && data.map(cb);
};

export default useSafeMap;
