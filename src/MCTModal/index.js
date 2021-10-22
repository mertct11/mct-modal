import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef } from "react";
import defaultBgUrl from "../transparent-bg.png";
import "./index.css";
function MCTModal({
  bgUrl,
  isOpen,
  content,
  handleClose,
  cornerRadius,
  noBG,
  bgColor,
  isCloseIconInsideContentArea,
  autoCloseTime,
}) {
  const modalRef = useRef();
  var leftTime = null;

  if (autoCloseTime && isOpen) {
    leftTime = autoCloseTime / 1000;
    setTimeout(() => {
      handleClose();
    }, autoCloseTime);
    if (leftTime == 0) {
      clearInterval();
    }
    setInterval(() => {
      leftTime = leftTime - 1;
      // console.log(leftTime);
    }, 1000);
  }

  useEffect(() => {
    let doc = document.querySelector(".main-container");
    if (isOpen) {
      // doc.style.display = "block";
      modalRef.current.style.display = "block";
    } else {
      doc.style.display = "none";
    }
  }, [isOpen]);

  return (
    <div className="main-container" ref={modalRef}>
      {!noBG && (
        <img className="bg-container" src={bgUrl ? bgUrl : defaultBgUrl} />
      )}
      <div
        className="modal-container"
        style={{ background: bgColor ? bgColor : "grey" }}
      >
        <div
          onClick={() => {
            handleClose();
          }}
          className="close-icon"
          style={{
            top: isCloseIconInsideContentArea ? "15%" : "9%",
            right: isCloseIconInsideContentArea ? "21%" : "18%",
          }}
        >
          {!autoCloseTime ? "X" : leftTime}
        </div>
        }
        <div
          className="white-area"
          style={{
            borderRadius: cornerRadius ? cornerRadius : "0px",
          }}
        >
          <div className="content-wrapper">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default MCTModal;
