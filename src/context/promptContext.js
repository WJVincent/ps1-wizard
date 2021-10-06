import { createContext, useContext, useState } from "react";

export const PromptContext = createContext();

export const usePrompt = () => useContext(PromptContext);

export const PromptProvider = (props) => {
  const [user, setUser] = useState(1);
  const [host, setHost] = useState(1);
  const [path, setPath] = useState("full");
  const [branch, setBranch] = useState(1);

  return (
    <PromptContext.Provider
      value={{ user, setUser, host, setHost, path, setPath, branch, setBranch }}
    >
      {props.children}
    </PromptContext.Provider>
  );
};
