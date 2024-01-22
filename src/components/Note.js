import notesStore from "../stores/notesStore";
import styles from "../static/style.css";

export default function Note({ note }) {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

  return (
    <div key={note._id}>
      <h6>Name: {note.item + " "}</h6>
      <h6>Description: {note.descript + " "}</h6>  
      <h6>Quantity: {note.quantity + " "}</h6>
      
      <h3>
      <button onClick={() => store.deleteNote(note._id)}>Delete item</button>
      </h3>
      <h3>
      <button onClick={() => store.toggleUpdate(note)}>Update item</button>
      </h3>
    </div>
  );
}