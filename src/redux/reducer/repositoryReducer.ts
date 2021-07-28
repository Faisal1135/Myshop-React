import { ActionType } from "../action-type/index";
import Action from "../actions/index";

interface RepositoryState {
  loading: boolean;
  error?: string;
  data: string[];
}

const initialState: RepositoryState = {
  loading: false,
  data: [],
};

const reducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORY_INIT:
      return { loading: true, data: [] };

    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};

export default reducer;
