let notes = [];

function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        alert('Please enter a note.');
        return;
    }

    const note = {
        text: noteText,
        id: Date.now()
    };
    notes.push(note);

    renderNotes();

    noteInput.value = '';
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);

    renderNotes();
}

function renderNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';

    notes.forEach(note => {
        const li = document.createElement('li');
        li.className = 'noteItem';
        li.textContent = note.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteNote(note.id));

        li.appendChild(deleteButton);

        noteList.appendChild(li);
    });
}