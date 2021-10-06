import { usePrompt } from "../../../context/promptContext";

const SectionsForm = () => {
  const {
    colors,
    user,
    setUser,
    host,
    setHost,
    path,
    setPath,
    branch,
    setBranch,
    userColor,
    setUserColor,
    hostColor,
    setHostColor,
    pathColor,
    setPathColor,
    branchColor,
    setBranchColor,
  } = usePrompt();

  const colorKeys = Object.keys(colors);

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
        {user === 1 && (
          <select
            onChange={(e) => setUserColor(e.target.value)}
            value={userColor}
          >
            {colorKeys.map((color) => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label htmlFor="hostname">Hostname:</label>
        <input
          type="checkbox"
          name="hostname"
          checked={host === 1}
          onChange={() => toggle(host, setHost)}
        />
        {host === 1 && (
          <select
            onChange={(e) => setHostColor(e.target.value)}
            value={hostColor}
          >
            {colorKeys.map((color) => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label htmlFor="git-branch">Display Git Branch</label>
        <input
          type="checkbox"
          name="git-branch"
          checked={branch === 1}
          onChange={() => toggle(branch, setBranch)}
        />
        {branch === 1 && (
          <select
            onChange={(e) => setBranchColor(e.target.value)}
            value={branchColor}
          >
            {colorKeys.map((color) => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        )}
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
        <select
          onChange={(e) => setPathColor(e.target.value)}
          value={pathColor}
        >
          {colorKeys.map((color) => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default SectionsForm;
