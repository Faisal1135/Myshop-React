import { combineReducers } from "redux";
import searchRepositorie from "./repositoryReducer";

const reducers = combineReducers({
  repository: searchRepositorie,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
