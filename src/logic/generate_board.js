const generate = (n) => {
  let i;
  let result = [];
  for(i = 0; i < n; i++){
      result.push(i);
      result.push(i);
  }
  return shuffle(result);
}

// Fisher-Yates shuffle, https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export default generate;