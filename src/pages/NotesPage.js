import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import notesStore from "../stores/notesStore";
import styles from "../static/style.css";

export default function NotesPage() {
    const store = notesStore();

    // Use effect
    useEffect(() => {
      store.fetchNotes();
    }, []);
    
    return (
        <div>
            <Notes />
            <UpdateForm />
            <CreateForm />
        </div>
    );
};