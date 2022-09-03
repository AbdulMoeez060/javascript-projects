var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//form submission

form.addEventListener('submit',addItem);

//delete item event
itemList.addEventListener('click',removeItem);

// filter event

filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    
    // create new li

    var li = document.createElement('li');

    li.className = 'list-group-item';

    // add text

    li.appendChild(document.createTextNode(newItem));
    //create del button

    var btn = document.createElement('button');

    btn.className = 'btn btn-danger btn-sm float-right delete';

    btn.appendChild(document.createTextNode('X'));

    li.appendChild(btn);

    itemList.appendChild(li);
}

function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if (confirm("Are You Sure?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(item=>{
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text)!=-1) {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';

        }
    })
}