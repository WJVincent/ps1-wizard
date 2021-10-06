import { usePrompt } from "../../context/promptContext";

const PromptOutput = () => {

  const {user, host, path} = usePrompt();

  return(
    <div>
      <p>{`export PS1="${user === 1 ? '\\u' : ''}${host === 1 ? '@\\H' : ''} ${path === 'full' ? '\\w ' : '~/\\W '}"`}</p>
    </div>
  )
};

export default PromptOutput;
