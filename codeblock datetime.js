// Get all input items
const items = $input.all();

// Create a new array called item
const updatedItems = items.map((item) => {
  // Extract the 'dateTime' property from the 'item'
  const dateTime = item?.json?.start?.dateTime;

  // Split the 'dateTime' into date and time parts
  const date = dateTime?.split("T")[0]; 
  const time = dateTime?.split("T")[1]; 

  // Update 'item' with the extracted date and time
  item.json.date = date;
  item.json.time = time;

  // Add the current date to 'item'
  // by creating a new Date object and seperating the date and time
  item.json.currentDate = new Date().toISOString().split("T")[0];

  // Return the 'item' to the 'updatedItems' array
  return item;
});

// Return the array of updated items
return updatedItems;
