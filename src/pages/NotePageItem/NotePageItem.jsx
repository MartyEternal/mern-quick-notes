export default function NotePageItem({ note }) {
    const postDate = new Date(note.createdAt).toLocaleDateString();

    return (
        <div className="note-each">
            <p>{note.text}</p>
            <span>{postDate}</span>
        </div>

    )
}