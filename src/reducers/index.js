import { ADD_CLASS, SCHEDULE_CLASS, UNSCHEDULE_CLASS } from "../actions/index";

const initialState = {
  classes: [
    {
      className: "CrossFit Monday",
      classType: "CrossFit",
      startTime: "12:45",
      durationMinutes: 45,
      intensity: "high",
      location: "Studio Los Feliz",
      maxClassSize: 10,
      clients: ["susieclient"],
      date: "2019-12-12",
      instructor: "joeinstructor",
      id: null,
      scheduled: false
    },
    {
      className: "Yoga Tues",
      classType: "Yoga",
      startTime: "12:45",
      durationMinutes: 30,
      intensity: "low",
      location: "Studio Los Feliz",
      maxClassSize: 5,
      clients: ["susieclient"],
      date: "2019-12-12",
      instructor: "joeinstructor",
      scheduled: false
    }
  ],
  passes: [
    {
      className: "CrossFit",
      instructor: "joeinstructor",
      client: "susieclient",
      classesRemaining: 5
    }
  ],
  scheduledClasses: [],
};

export const classReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      };
    case SCHEDULE_CLASS:
      return {
        ...state,
        scheduledClasses: [...state.scheduledClasses, action.payload]
      };
      case UNSCHEDULE_CLASS:
      return {
        ...state,
        scheduledClasses: [...state.scheduledClasses.filter((item, index) => {
            return item != action.payload
        })]
      };
    default:
      return state;
  }
};
