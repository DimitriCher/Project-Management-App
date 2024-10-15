export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <buton>Cancel</buton>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Title" />
      </div>
    </div>
  );
}
