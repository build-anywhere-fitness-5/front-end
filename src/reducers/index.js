import {
  ADD_CLASS,
  SCHEDULE_CLASS,
  UNSCHEDULE_CLASS,
  DELETE_CLASS,
  ADD_PASS,
  EDIT_PASS,
  DELETE_PASS,
  EDIT_CLASS,
  LOGOUT
} from "../actions/index";

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
      id: 1
      // id is a placeholder for now, I assume the API will generate that for us
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
      id: 2
      // id is a placeholder for now, I assume the API will generate that for us
    }
  ],
  passes: [
    {
      className: "Yoga",
      instructor: "joeinstructor",
      client: "orangeclient",
      classesRemaining: 9,
      id: 0
    },
    {
      className: "Jimmy",
      instructor: "papainstructor",
      client: "susieclient",
      classesRemaining: 2,
      id: 1
    },
    {
      className: "CrossFit",
      instructor: "mommainstructor",
      client: "willclient",
      classesRemaining: 7,
      id: 2
    }
  ],
  scheduledClasses: [],
  instructor: true,
  signedIn: true,
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
        scheduledClasses: [
          ...state.scheduledClasses.filter((item, index) => {
            return item !== action.payload;
          })
        ]
      };
    case DELETE_CLASS:
      console.log(state, action);
      return {
        ...state,
        classes: state.classes.filter(c => c.id !== action.payload)
      };
    case ADD_PASS:
      return {
        ...state,
        passes: [...state.passes, action.payload]
      };
    case DELETE_PASS:
      return {
        ...state,
        passes: [
          ...state.passes.filter((item, index) => {
            return item !== action.payload;
          })
        ]
      };
    case EDIT_PASS:
      return {
        ...state,
        passes: state.passes.map(item => {
          if (item.id === action.payload.id) {
            return action.payload
          }
          return item
        })
      }
    case EDIT_CLASS:
      // console.log(state, action);
      return {
        ...state,
        classes: state.classes.map(item => {
          if (item.id === action.payload.id) {
            return { ...action.payload }
          }
          return item
        })
      };
    case LOGOUT:
      return {
        ...state,
        signedIn: false
      }
    default:
      return state;
  }
};
