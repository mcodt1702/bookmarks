'use strict';
import api from './api-bookmarks.js'
import datum from './data-bookmarks.js'


function addItemPage(){
    let html = `
            <div class = 'screen'>
    <h1>MY BOOKMARK LIST</h1>
        <div class='control'>
            <div class = "botones">
            <div class="addDiv">
                <button class='add'>Add New BookMark</button>
            </div>
            <div filterdiv>
                <button class='filter'>Filtr Your Bookmarks</button>
            </div>
    </div>
    <form id="submitBookmarks">
            <fieldset class="bookmarkDetails">
            
                <Legend>Adding New Bookmark</Legend>
                <div>
                        <label for="bookmark-title-input" class="inputAndTitle">Title :</label>
                        <input type = "text" class="bookmark-title-input" name="bookmark-title-input" placeholder="Enter  title here" required/>
                </div>
                <div>
                        <label for=""bookmark-url" class="inputAndTitle">URL :</label>
                        <input type = "url" class="bookmark-url" name="bookmark-url" placeholder="https://www.google.com/" required/>
                </div>
                
                <div>
                <label for= "AddFilterByRating">Rating(s):</label>
                <select class= "AddFilterByRating" name="AddFilterByRating" required>
                <option selected disabled>Select Ratings</option>
                <option value=5>★★★★★</option>
                <option value=4>★★★★☆</option> 
                <option value=3>★★★☆☆</> 
                <option value=2>★★☆☆☆</option> 
                <option value=1>★☆☆☆☆</option> 
                </select>       
            </div> 
                <div class="AddBookmarkdesc">
                <label class="desc-label" for="addBookmarkDescription">Description</label>
                <textarea class="addBookmarkDescription" name = "addBookmarkDescription" rows = 5 ></textarea>
                
                </div>
                <div class = "clicktoadd">
                <button type="submit" id="addtodata">Create</button>
                <button type="reset" class="btn bookmark-btn-cancel" >Clear form</button>
                </div>
            </fieldset>
    </form>
    
    `
    $('main').html(html);
    
    };

function addingBookmark(){
$("main").on("submit", "#submitBookmarks", event => {
event.preventDefault();
console.log("estas tratando de crear un bookmark")

const newTitle = $('.bookmark-title-input').val();
console.log(newTitle);
const newUrl = $('.bookmark-url').val();
console.log(newUrl)
const newRating = parseInt($('.AddFilterByRating').val());
console.log(newRating);
let newDesc = $('.addBookmarkDescription').val();

$('.bookmark-title-input').val('');
$('.bookmark-url').val('');
$('.addBookmarkDescription').val('');

const newBookmark = { title: newTitle, url: newUrl, rating: newRating, desc: newDesc};
console.log(newBookmark);
api.createBookmarks(newBookmark)
        .then( newItem => {
        datum.addItem(newItem);
        //datum.toggleAddingBookmark();
        render(); 
        })
        //.catch(error => {
        //datum.setError(error.message);
        //render();
        }

);
}
    
    function renderStartPage(){
    return`
    <div class = 'screen'>
    <h1>MY BOOKMARK LIST</h1>
        <div class='control'>
            <div class = "botones">
            <div class="addDiv">
                <button class='add'>Add New BookMark</button>
            </div>
            <div filterdiv>
                <button class='filter'>Filtr Your Bookmarks</button>
            </div>
    </div>
    
    <h6>Made in NYC by Coronado Developments</h6>
    
    </form>
    
    </div>`
    
    
    
    };
    
    function render(){
            let html = '';
            $('main').html(renderStartPage());
            return;
            };
    
    function addBookmarkHandler(){
            $("main").on("click", ".add", function(event){
            event.preventDefault();    
            console.log("me vuelvo loco por que no te veo");
            addItemPage();

        })};

        
        // function filterClickHandler(){
        //     $("main").on("click",".filter", function(event){
        //     event.preventDefault();
        //     console.log("I see you want to filter your bookmarks");
        //     })
        //     };
        
        
        
        
        
        //addclick.addEventListener("click", )
// function handleBookmarkAdd() {
        


        

        


export default{
    
    addItemPage,
    renderStartPage,
    render,
    addingBookmark,
    addBookmarkHandler,
};