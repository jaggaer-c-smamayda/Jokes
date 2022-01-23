// Attached an event handler to the button
document.getElementById( 'jokeBtn' ).addEventListener('click', ()=>{
    // Fetching the API.
    fetch( 'https://api.icndb.com/jokes/random/4' )
      // Grabbing the information from the JSON file.
    .then( res => res.json() )
      // Fetching the joke from value in JSON.
    .then( json => {
        if( json.type==='success' ){
          json.value.forEach( ( obj, i )=>{
            let node=document.getElementById( 'j' + ( i + 1 ) );
            if( node )node.innerHTML=obj.joke;
          })
        }
      })
  })

  // Adding Drag and Drop in our boxes
function slist (
    target){
    // Get list + Attach css class
    target=document.getElementById(target);
    target.classList.add("column");

    // Make the items(BOXES) draggable + Sortable   (MAP) use how to declare fun Cons and
    let items=target.getElementsByTagName(slist), current=null;
    for (let i of items) {
        // Attache draggable
        i.draggable=true
        //Drag start
        i.addEventListener("dragstart", function(ev){
            current=this;
            for (let it of items){
                if (it!==current) {
                    it.classList.add("hint");
                }
            }
        });
        // Drag enter
        i.addEventListener("dragenter", function(ev){
            if(this !==current){
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
            evt.preventDefault();
        });
        // On drop
        i.addEventListener("drop",function(evt) {
            evt.preventDefault();
            if(this !==current){
                let currentpos =0, droppedpos=0;
                    for (let it=0; it<items.length; it++ ){
                        if(current===items[it]){ currentpos=it;}
                        if(this===items[it]){droppedpos=it;}
                    }
                    if (currentpos< droppedpos){
                        this.parentNode.insertBefore(current, this.nextSibling);
                    }else{
                        this.parentNode.insertBefore(current, this);
                    }

            }


        });

    }
}