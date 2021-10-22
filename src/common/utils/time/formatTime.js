import Moment from "moment";
function tsFormat(ts) {
    return Moment(ts).format("YYYY-MM-DD HH:mm:ss");
  }
export {
    tsFormat 
}
