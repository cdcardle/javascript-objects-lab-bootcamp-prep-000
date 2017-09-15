var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newobj = Object.assign({}, obj, key[value])
  return newobj
}
