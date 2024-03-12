import { Alert } from "bootstrap";
import "../scss/dashboard.scss";

setTimeout(() => {
  const alert = new Alert(document.querySelector(".alert"));
  alert.close();
}, 750);
