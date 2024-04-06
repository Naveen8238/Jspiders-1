function print() {
  let url = "https://api.minebrat.com/api/v1/states";
  fetch(url)
    .then((data) => {
      return data.text();
    })
    .then((item) => {
      console.log(item);
    });
}
print();
