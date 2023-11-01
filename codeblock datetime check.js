//gets all input items
const items = $input.all();

//compairs date to currentDate
const filteredItems = items.filter(
  (item) => item?.json?.date === item?.json?.currentDate,
);

//only returned the items that passed the filter 
return filteredItems;
