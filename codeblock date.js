// creates object with date and time
const currentDate = new Date();

//splits the date and time at the t letter
const date = currentDate.toISOString().split("T")[0];

//returns the date part of the date and time
return { date};
