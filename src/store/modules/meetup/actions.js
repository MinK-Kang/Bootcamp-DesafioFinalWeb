export function createMeetUpRequest(data) {
  return {
    type: "@meetup/CREATE_MEETUP_REQUEST",
    payload: { data }
  };
}

export function createMeetUpSuccess(data) {
  return {
    type: "@meetup/CREATE_MEETUP_SUCCESS",
    payload: { data }
  };
}

export function createMeetUpFailure() {
  return {
    type: "@meetup/CREATE_MEETUP_Failure"
  };
}
