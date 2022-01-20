// Attached an event handler to the button
document.getElementById( 'jokeBtn' ).addEventListener('click', ()=>{
    // Fetching the API.
    fetch( 'https://api.icndb.com/jokes/random/3' )
      // Grabbing the information from the JSON file.
    .then( res => res.json() )
      // Fetching the joke from value in JSON.
    .then( json => {
        if( json.type=='success' ){
          json.value.forEach( ( obj, i )=>{
            let node=document.getElementById( 'j' + ( i + 1 ) );
            if( node )node.innerHTML=obj.joke;
          })
        }
      })
  })

  // Adding Drag and Drop in our boxes
function slist (target){
    // Get list + Attach css class
    target=document.getElementsById(target);
    target.classList.add("slist");

    // Make the items(BOXES) draggable + Sortable   (MAP) use how to declear fun Cons and 
    var items=target.getElementByTagName(column), current=null;
    for (let i of items) {
        // Attache dragable
        i.draggable=true
        //Drag start
        i.addEventListener("dragstart", function(ev){
            current=this;
            for (let it of items){
                if (it!=current) {
                    it.classList.add("hint");
                }
            }
        });
        // Drag enter
        i.addEventListener("dragenter", function(ev){
            if(this !=current){
                this.classList.add("active");
            }
        });
        // Drag released
        i.addEventListener("dragleave", function() { 
            this.classList.remove("active");
        });
        // Drag Ending
        i.addEventListener("dragend", function(){
            for (let it of items){
                it.classList.remove("hint");
                it.classList.remove("active");
            }
        } );
        // Drag over and prevent the default to happen
        i.addEventListener("drop", function (evt) {
            evt.prevent
        })

    }
}