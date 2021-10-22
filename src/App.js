import "bootstrap/dist/css/bootstrap.css";
import MCTModal from "./MCTModal/index";
import { useEffect, useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          background: "whitesmoke",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </button>
      </div>
      <MCTModal
        //isCloseIconInsideContentArea
        //cornerRadius={18}
        //noBG
        //bgColor="transparent"
        //bgColor="blue"
        //bgUrl={"./transparent-bg5.png"}
        //autoCloseTime={3000}
        isOpen={isOpen}
        content={<div>Lorem Ipsum</div>}
        handleClose={handleClose}
      />
    </>
  );
}

export default App;
