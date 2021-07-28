import { ActionType } from "../action-type";

interface ISearchRepositoryInit {
  type: ActionType.SEARCH_REPOSITORY_INIT;
}
interface ISearchRepositorySuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface ISearchRepositoryError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | ISearchRepositoryError
  | ISearchRepositoryInit
  | ISearchRepositorySuccess;

export default Action;
