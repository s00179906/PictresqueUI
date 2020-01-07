import {
  PictresqueActionTypes,
  PictresqueAction
} from "../actions/pictresque.actions";
import { Post } from "../models/Post";

export interface PictresqueState {
  posts: Post[];
  loading: boolean;
  error: Error;
}

const initialState: PictresqueState = {
  posts: [],
  loading: false,
  error: undefined
};

export function PictresqueReducer(
  state: PictresqueState = initialState,
  action: PictresqueAction
) {
  switch (action.type) {
    case PictresqueActionTypes.GET_POSTS:
      return {
        ...state,
        loading: true
      };
    case PictresqueActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case PictresqueActionTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case PictresqueActionTypes.CREATE_POST:
      return {
        ...state,
        loading: true
      };
    case PictresqueActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false
      };
    case PictresqueActionTypes.CREATE_POST_FAILURE:
      console.log("POSSIBLE ERROR -->", action.payload["error"]);

      return {
        ...state,
        error: action.payload["error"],
        loading: false
      };

    default:
      return state;
  }
}
