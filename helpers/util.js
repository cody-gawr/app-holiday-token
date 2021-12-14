export default {

  isEmpty(obj) {
    return obj && Object.keys(obj).length == 0 && obj.constructor === Object;
  },

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
  },

  /**
   *
   * @param {String} address
   */
  getShortenedAddress(address) {
    return address.substring(0, 4) + '...' + address.substring(address.length - 5, address.length - 1);
  }
}
