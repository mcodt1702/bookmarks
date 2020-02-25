import events from './events-bookmarks.js'

const bookmarksDatum = {
  bookmarks: [],
  adding: false,
  error: null, 
  filter: 0
};



const addItem = function (newBookmark) {
  Object.assign(newBookmark, {expanded: false});
  bookmarksDatum.bookmarks.push(newBookmark);
};



const validateName = function (name) {
  if (!name) throw new TypeError('Name must not be blank');
};

const create = function (name) {
  return {
    id: cuid(),
    name,
    checked: false
  };
};

const setError = function(error) {
  this.bookmarksDatum.error = error;
};


const toggleAddingBookmark = function() {
  this.bookmarksDatum.adding = !this.bookmarksDatum.adding;
};


export default {
  validateName,
  toggleAddingBookmark,
  addItem,
  create,
  setError
};