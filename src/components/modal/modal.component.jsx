import { useState } from "react";
import Modalmc from "./modal-content/mc.component";
import "./modal.style.scss";

export default function Thanksmodal({ className, setform, formfields, seterror, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const HandleSubmit = () => {
    if (formfields.name && formfields.email && formfields.company && formfields.details) {
      setform({
        name: "",
        email: "",
        company: "",
        details: "",
      });
      setShow(true);
    } else {
      seterror("Please fill all the details!");
    }
  };

  return (
    <>
      <button onClick={HandleSubmit} className={className}>
        {children}
      </button>
      {show ? <Modalmc handleClose={handleClose} /> : ""}
    </>
  );
}
