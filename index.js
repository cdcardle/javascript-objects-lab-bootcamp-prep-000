var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value
}

function deleteFromObjectByKey(object, key) {
  var newObj = delete object.key
  return newObj
}
