import { usePrompt } from "../../context/promptContext";
import { useEffect, useState } from "react";
import styles from "./PromptOutput.module.css";

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
    let hostPromptInfo = host === 1 ? "\\H" : "";
    if (hostPromptInfo !== "") {
      setHostPrompt(colors[hostColor] + hostPromptInfo);
    } else {
      setHostPrompt(hostPromptInfo);
    }
  }, [host, colors, hostColor]);

  useEffect(() => {
    let pathPromptInfo = path === "full" ? "\\w " : "\\W ";
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
    <textarea
      className={styles.prompt}
      readOnly
      value={
        branch === 1
          ? `\nfunction parse_git_branch {\n  git branch 2> /dev/null sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/'\n} \n\nexport PS1="${userPrompt}${
              user === 1 && host === 1 ? "@" : ""
            }${hostPrompt} ${pathPrompt} ${branchPrompt}"`
          : `export PS1="${userPrompt}${
              user === 1 && host === 1 ? "@" : ""
            }${hostPrompt} ${pathPrompt} ${branchPrompt}"`
      }
    />
  );
};

export default PromptOutput;
