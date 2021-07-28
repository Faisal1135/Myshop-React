import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-type";
import Action from "../actions";

export const searchRepositorie = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORY_INIT,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      console.log(data);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: error.message,
      });
    }
  };
};
