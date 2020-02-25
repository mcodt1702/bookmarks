'use strict';

import api from "./api-bookmarks.js"
import events from "./events-bookmarks.js"
import data from "./data-bookmarks.js"













function handleBookmarks(){
events.render()
events.addBookmarkHandler();
events.addingBookmark();
//events.filterClickHandler();

}
 
$(handleBookmarks);