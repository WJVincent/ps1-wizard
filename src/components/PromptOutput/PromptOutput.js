import { usePrompt } from "../../context/promptContext";
import { useEffect, useState } from "react";

const PromptOutput = () => {
  const { user, host, path, branch } = usePrompt();

  const [userPrompt, setUserPrompt] = useState(null);
  const [hostPrompt, setHostPrompt] = useState(null);
  const [pathPrompt, setPathPrompt] = useState(null);
  const [branchPrompt, setBranchPrompt] = useState(null);

  useEffect(() => {
    let userPromptInfo = user === 1 ? "\\u" : "";
    setUserPrompt(userPromptInfo);
  }, [user]);

  useEffect(() => {
    let hostPromptInfo = host === 1 ? "@\\H" : "";
    setHostPrompt(hostPromptInfo);
  }, [host]);

  useEffect(()=> {
    let pathPromptInfo = path === "full" ? "\\w " : "~/\\W ";
    setPathPrompt(pathPromptInfo);
  }, [path]);

  useEffect(() => {
    let branchPromptInfo = branch === 1 ? "\\$(parse_git_branch)" : "";
    setBranchPrompt(branchPromptInfo);
  }, [branch])

  return (
    <div>
      {branch === 1 && (
          <pre>
            <code>
{`function parse_git_branch {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/'
}`
}
            </code>
          </pre>
      )}
      <p>{`export PS1="${userPrompt}${hostPrompt} ${pathPrompt} ${branchPrompt}"`}</p>
    </div>
  );
};

export default PromptOutput;
