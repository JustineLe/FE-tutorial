function onAddTemporaryNotes() {
    let input_item = document.getElementById('input-note');
    let temporary_note_val = sessionStorage.getItem('temp_notes')

    if (temporary_note_val !== null && temporary_note_val.length !== 0) {
        let temp_notes_arr = temporary_note_val.split(',');
        temp_notes_arr.push(input_item.value);

        // save the array temporary notes to the session storage
        sessionStorage.setItem('temp_notes', temp_notes_arr);
        displayNotes();
    } else {
        // save the array temporary notes to the session storage
        sessionStorage.setItem('temp_notes', input_item.value);
        displayNotes();
    }

    // clear the input
    input_item.value = '';
};


function onAddPermanentNotes() {
    let input_item = document.getElementById('input-note');
    let perma_note_val = localStorage.getItem('perma_notes')

    if (perma_note_val !== null && perma_note_val.length !== 0) {
        let perma_notes_arr = perma_note_val.split(',');
        perma_notes_arr.push(input_item.value);

        // save the array temporary notes to the session storage
        localStorage.setItem('perma_notes', perma_notes_arr);
        displayNotes();
    } else {
        // save the array temporary notes to the session storage
        localStorage.setItem('perma_notes', input_item.value);
        displayNotes();
    }

    // clear the input
    input_item.value = '';
};


function displayNotes() {
    // load list notes from session storage
    let temporary_note_val = sessionStorage.getItem('temp_notes');
    let list_temporary = document.getElementById('list-temporary');

    if (temporary_note_val !== null && temporary_note_val.length !== 0) {
        list_temporary.innerHTML = "";

        let temporary_note_arr = temporary_note_val.split(',');

        temporary_note_arr.forEach((ele) => {
            list_temporary.innerHTML += '<li>' + ele + '</li>';
        });

        // remove the hidden attribute to show the list
        let container_temp = document.getElementById('container-temporary');

        if (container_temp.hasAttribute('hidden')) {
            container_temp.removeAttribute('hidden');
        };
    };

    // load list notes from local storage
    let permanent_note_val = localStorage.getItem('perma_notes');
    let list_permanent = document.getElementById('list-permanent');

    if (permanent_note_val !== null && permanent_note_val.length !== 0) {
        list_permanent.innerHTML = "";

        let permanent_note_arr = permanent_note_val.split(',');

        permanent_note_arr.forEach((ele) => {
            list_permanent.innerHTML += '<li>' + ele + '</li>';
        });

        // remove the hidden attribute to show the list
        let container_perma = document.getElementById('container-permanent');

        if (container_perma.hasAttribute('hidden')) {
            container_perma.removeAttribute('hidden');
        };
    };
};

function removePermanentNotes(ele) {
    ele.addEventListener("click", function() {
        let permanent_note_val = localStorage.getItem('perma_notes');
        let permanent_arr_val = permanent_note_val.split(',');

        var index = permanent_arr_val.indexOf(ele.innerHTML);
        if (index !== -1) {
            permanent_arr_val.splice(index, 1);

            // rewrite the perma notes in local storage
            localStorage.setItem('perma_notes', permanent_arr_val);
            displayNotes();
        }
    });
}


window.addEventListener("load", function () {
    // function runs when all the resources (css, js, img, ...) are loaded
    displayNotes();
});


window.addEventListener("change", function() {
    // add event listener to remove notes
    let list_temporary = document.getElementById('list-permanent');
    let list_items = list_temporary.querySelectorAll('li');

    list_items.forEach(removePermanentNotes);
})
