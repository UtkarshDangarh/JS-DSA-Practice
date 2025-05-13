//Basic Async Function

async function getData() {
  let respose = await fetch("API");
  let data = await respose.json();
  console.log(data);
}
