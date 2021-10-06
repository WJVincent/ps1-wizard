import { usePrompt } from "../../../context/promptContext";

const SectionsForm = () => {
  const { user, setUser, host, setHost, path, setPath } = usePrompt();

  const toggle = (state, stateSetter) => {
    state === 1 ? stateSetter(-1) : stateSetter(1);
  };

  return (
    <div>
      <p>Sections Form</p>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="checkbox"
          name="username"
          checked={user === 1}
          onChange={() => toggle(user, setUser)}
        />
      </div>
      <div>
        <label htmlFor="hostname">Hostname:</label>
        <input
          type="checkbox"
          name="hostname"
          checked={host === 1}
          onChange={() => toggle(host, setHost)}
        />
      </div>
      <div>
        <p>Full or partial path</p>

        <label htmlFor="full">Full:</label>
        <input
          type="radio"
          value="full"
          name="path"
          checked={path === "full"}
          onChange={(e) => setPath(e.target.value)}
        />

        <label htmlFor="partial">Partial:</label>
        <input
          type="radio"
          value="partial"
          name="path"
          checked={path === "partial"}
          onChange={(e) => setPath(e.target.value)}
        />
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default SectionsForm;
