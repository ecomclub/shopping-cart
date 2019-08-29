import emitter from './../lib/emitter'

export default (self, itemId, save = true) => {
  // find respective item on list by ID
  const { data } = self
  for (let i = 0; i < data.items.length; i++) {
    const item = data.items[i]
    if (item._id === itemId) {
      // item found
      // remove from items array
      data.items.splice(i, 1)
      data.save()
      emitter.emit('removeItemQnt', { data, item })
      return item
    }
  }
  return null
}

/**
 * @method
 * @name EcomCart#removeItem
 * @description Remove specific item from cart by ID.
 *
 * @param {string} itemId - The unique object ID of item
 * @param {boolean} [save=true] - Save cart data
 *
 * @returns {object|null} Returns the removed item object or null
 * when item not found.
 *
 * @example

cart.removeItem('12300000000000000000000f')

 */