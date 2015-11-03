var token = "1e7cd6953d79d015aabc40bde1b91a8dcaabc288";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
