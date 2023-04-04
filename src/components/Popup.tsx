import "./Popup.scss";
import { motion } from "framer-motion";

type PopupProps = {
  content: string;
};

const Popup = (props: PopupProps) => {
  return (
    <motion.div
      className="popup-container"
      key="popup-1-349104305"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6, y: "150px" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <p className="popup-text">{props.content}</p>
    </motion.div>
  );
};

export default Popup;
