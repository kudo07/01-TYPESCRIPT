// idk the really to what response comes from the api menas type
type APIResponse<TData> = {
  data: TData;
  isError: boolean;
};
type UserResponse = APIResponse<{ name: string; age: number }>;
type BlogResponse = APIResponse<{ title: string }>;
const acwedf: UserResponse = {
  data: {
    name: 'sf',
    age: 324,
  },
  isError: false,
};
const blog: BlogResponse = {
  data: {
    title: 'ferw',
  },
  isError: false,
};
