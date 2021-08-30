/**
 * @module Arr
 * @description Operations on arrays
 */


/**
 * Delete item from array
 * @param item - item for deletion from array
 * @returns {array}
 */
export const deleteItem = function(item){
    if(this.indexOf(item) !== -1) {
        this.splice(this.indexOf(item), 1)
        return this
    }
    else console.warn(`jsHelpers: "${item}" not found in`, this)
}


/**
 * Delete items from array
 * @param items - items for deletion from array
 */
export const deleteItems = function(items){
    items.forEach(item => this.deleteItem(item))
    return this
}