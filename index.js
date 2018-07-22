// Add your functions and code here
var kitten = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten (name) {
  name = 'Ralph'
  kitten = kitten.push(name)
  return kitten
}
