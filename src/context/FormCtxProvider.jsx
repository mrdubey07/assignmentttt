import FormCtx from "./FormCtx";


function FormCtxProvider(props){
    const state = {
        count: 0,
    }
  
  return (
    <FormCtx.Provider value={state}>
      {props.children}
    </FormCtx.Provider>
  );
}

export default FormCtxProvider;