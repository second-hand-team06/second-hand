const ICON_NAME = {
  ARROW_UP: 'arrowUp',
  CAMERA: 'camera',
  CHEVRON_DOWN: 'chevronDown',
  CHEVRON_LEFT: 'chevronLeft',
  CIRCLE_FILL: 'circleFill',
  ELLIPSIS: 'ellipsis',
  HAMBURGER: 'hamburger',
  HOME: 'home',
  KEYBOARD: 'keyboard',
  LIKE: 'like',
  MESSAGE: 'message',
  MULTIPLY: 'multiply',
  NEWSPAPER: 'newspaper',
  PERSON: 'person',
  PLUS: 'plus',
  SEARCH: 'search',
  REGION_SETTING: 'regionSetting',
} as const;

const RESPONSE_STATE = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;

const REQUEST_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export { ICON_NAME, RESPONSE_STATE, REQUEST_METHOD };
