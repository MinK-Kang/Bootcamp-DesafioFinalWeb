import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";

import { createMeetUpSuccess, createMeetUpFailure } from "./actions";

export function* createMeetUp({ payload }) {
  try {
    const { title, description, data, local } = payload.data;

    const response = yield call(api.put, "meetups", {
      title,
      description,
      data,
      local
    });

    toast.success("MeetUp criado com sucesso!");

    yield put(createMeetUpSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao criar novo MeetUp, confira seus dados!");
    yield put(createMeetUpFailure());
  }
}

export default all([takeLatest("@meetup/CREATE_MEETUP_REQUEST", createMeetUp)]);
