// Add your functions and code here
var kitten = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten (array, name = 'Ralph') {
  kitten.push(name)
  return kitten
}
