console.log("hello")
d3.json("samples.json").then(function(data){
  console.log(data);
});



// // weekly wash frequency
// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person => person.wfreq);
//   console.log(wfreq);
// });


// // sort in descending order
// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//   console.log(wfreq);
// });

// // filter null values

// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//   filteredWfreq = wfreq.filter(element => element !=
// null);
//   console.log(filteredWfreq);
// });


researcher1 = [['name', 'Roza'], ['age', 34], ['hobby', 'Hiking']];
researcher1.forEach(([first, second]) => console.log(first
  + ": " + second));


d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});