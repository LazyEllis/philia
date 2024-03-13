import * as bootstrap from "bootstrap";
import "../scss/common.scss";

setTimeout(() => {
  const alert = new bootstrap.Alert(document.querySelector(".alert"));
  alert.close();
}, 750);
