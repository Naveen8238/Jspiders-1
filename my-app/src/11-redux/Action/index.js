import { dec, inc, text } from "./actionType";

function incHandler() {
  return {
    type: inc,
  };
}
function decHandler() {
  return {
    type: dec,
  };
}
function textHandler(e) {
  return {
    type: text,
    payload: e,
  };
}
export { incHandler, decHandler, textHandler };
