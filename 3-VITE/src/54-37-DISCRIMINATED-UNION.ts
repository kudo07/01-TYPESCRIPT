type SuccessResponse = {
  status: 'Success';
  //   the status work on the literals not the stirng like primitive
  data: { id: string; name: string };
  //   not optinal
};
type ErrorResponse = {
  status: 'Error';
  errorMessage: string;
  //   not optinal
};
// now one of the above scenarios
// working
// combination of those two
type UserApiResponse = SuccessResponse | ErrorResponse;
function handleResponse(res: UserApiResponse) {
  if (res.status === 'Success') {
    console.log(res.data.name);
  } else {
    console.log(res.errorMessage.length);
  }
}
