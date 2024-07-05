const afr: number[] = [1, 2, 3];
const erwgf: Array<number> = [1, 2, 3];

type APIResponseee<TData> = {
  data: TData;
  isError: boolean;
};

// const fewrfer: APIResponseee<Array<number>> = {
// both are same
// generics can be any type in ts req pass the info and tells what the type suppospes to be
const fewrfer: APIResponseee<number[]> = {
  data: [1, 2, 3],
  isError: false,
};
