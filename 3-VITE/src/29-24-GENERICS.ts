// idk the really to what response comes from the api menas type
type APIResponsee<TData> = {
  // can be any tye in extends means only be in object
  //   contrinat be only be onbject or be string or anrray
  // by defualt it has a property
  data: TData;
  isError: boolean;
};
// object in some form
// const fewr: APIResponsee<{ name: string }> = {
// to work for status:number
const fewr: APIResponsee<{ status: number }> = {
  data: {
    // name: 'frewr',
    status: 3,
  },
  isError: false,
};
