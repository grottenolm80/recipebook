function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1xo62-aVtayUxD49BKWsx6MWIJXsAEFM9W48PT_Ee6gs/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
