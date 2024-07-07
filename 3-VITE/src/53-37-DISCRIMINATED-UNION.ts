type UserApiResponsew = {
  status: 'Error' | 'Success';
  data?: { id: string; name: string };
  error?: string;
};

function handleResponsew(res: UserApiResponsew) {
  if (res.status === 'Success') {
    console.log(res.data.name);
    // errro could be undefined
  } else {
    console.log(res.errorMessage.length);
    // should be there but not discrimited of union
  }
}
