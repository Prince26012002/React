const FetchData = () => {
  const fetchDataFromExternalUrl = () => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  fetchDataFromExternalUrl();
};
