// idk the really to what response comes from the api menas type
type APIResponse<TData = { status: number }> = {
  // by defualt it has a property
  data: TData;
  isError: boolean;
};

const afrewf: APIResponse = {
  data: {
    status: 200,
  },
  isError: false,
};

const fgrf: APIResponse<{ name: string }> = {
  data: {
    // status: 200,
    // now override the stauts property
    name: 'fwerf',
  },
  isError: false,
};
// the object is always going to be object
// obviously this works
const fgrfwedcfed: APIResponse<string> = {
  data: 'ferwfr',
  isError: false,
};
