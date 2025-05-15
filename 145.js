//Async-Await with Loop: Write an async function fetchItems that loops through an array of item IDs, fetches each
//item with a 1-second delay, and logs the items after all have been fetched.

//Creating a delay
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//fetchItem takes id and retirn Id and name using it, delay using wait
async function fetchItem(id) {
  await wait(100); // simulate small network delay
  return { id, name: `Item ${id}` };
}

//takes an array of itemIds and loop on it and push each item new array (item will be from fetchItem function)
async function fetchItems(itemIds) {
  const fetchedItems = [];

  for (const id of itemIds) {
    await wait(1000); // 1-second delay before each fetch
    const item = await fetchItem(id);
    fetchedItems.push(item);
  }

  console.log("All items fetched:", fetchedItems);
}

const itemIds = [1, 2, 3, 4];

fetchItems(itemIds).then((items) => {});
