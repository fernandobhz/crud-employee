/* eslint-disable */

module.exports = {
  _id: '_design/type',
  views: {
    type: {
      map: function(doc) {
        if (doc.type)
          emit(doc.type, doc._id);
      }.toString()
    }
  }
}
