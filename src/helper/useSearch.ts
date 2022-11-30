import useSwr from "swr";
import { get } from "helper/api";

export default function useSearch<T>(URL: string) {
  const { data, error } = useSwr(`api/${URL}`, get<T>);

  return {
    data,
    isLoading: !data && !error,
    error,
  };
}
