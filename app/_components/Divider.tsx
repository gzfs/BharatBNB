import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      initial={{ opacity: 0 }}
      className="w-[400px] flex justify-center py-8"
    >
      <div className="bg-[#F6762D] h-[3px] rounded-xl w-3/12"></div>
    </motion.div>
  );
}
