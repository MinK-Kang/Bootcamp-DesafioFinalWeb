import produce from "immer";

const INITIAL_STATE = {
  title: null,
  description: null,
  data: null,
  local: null
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@meetup/CREATE_MEETUP_REQUEST": {
        draft.title = action.payload.title;
        draft.description = action.payload.description;
        draft.data = action.payload.data;
        draft.local = action.payload.local;
        break;
      }
      default:
    }
  });
}
