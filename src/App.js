import { SectionsForm, PromptOutput } from "./components";

const App = () => {
  return (
    <>
      <h1>Make Your Prompt Awesome</h1>
      <div className="form-sections">
        <SectionsForm />
      </div>
      <div>
        <PromptOutput />
      </div>
    </>
  );
};

export default App;
