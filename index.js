var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  newobj = Object.assign({}, obj, [key], value)
  return newobj
}
