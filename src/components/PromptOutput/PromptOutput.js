import { usePrompt } from "../../context/promptContext";
import { useEffect, useState } from "react";

const PromptOutput = () => {
  const {
    colors,
    user,
    host,
    path,
    branch,
    userColor,
    hostColor,
    pathColor,
    branchColor,
  } = usePrompt();

  const [userPrompt, setUserPrompt] = useState(null);
  const [hostPrompt, setHostPrompt] = useState(null);
  const [pathPrompt, setPathPrompt] = useState(null);
  const [branchPrompt, setBranchPrompt] = useState(null);

  useEffect(() => {
    let userPromptInfo = user === 1 ? "\\u" : "";
    if (userPromptInfo !== "") {
      setUserPrompt(colors[userColor] + userPromptInfo);
    } else {
      setUserPrompt(userPromptInfo);
    }
  }, [user, userColor, colors]);

  useEffect(() => {
    let hostPromptInfo = host === 1 ? "@\\H" : "";
    if (hostPromptInfo !== "") {
      setHostPrompt(colors[hostColor] + hostPromptInfo);
    } else {
      setHostPrompt(hostPromptInfo);
    }
  }, [host, colors, hostColor]);

  useEffect(() => {
    let pathPromptInfo = path === "full" ? "\\w " : "~/\\W ";
    setPathPrompt(colors[pathColor] + pathPromptInfo);
  }, [path, pathColor, colors]);

  useEffect(() => {
    let branchPromptInfo = branch === 1 ? "\\$(parse_git_branch)" : "";
    if (branchPromptInfo !== "") {
      setBranchPrompt(colors[branchColor] + branchPromptInfo);
    } else {
      setBranchPrompt(branchPromptInfo);
    }
  }, [branch, colors, branchColor]);

  return (
    <div>
      {branch === 1 && (
        <pre>
          <code>
            {`function parse_git_branch {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/'
}`}
          </code>
        </pre>
      )}
      <p>{`export PS1="${userPrompt}${hostPrompt} ${pathPrompt} ${branchPrompt}"`}</p>
    </div>
  );
};

export default PromptOutput;
