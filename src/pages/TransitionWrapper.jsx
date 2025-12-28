import { motion } from "framer-motion";

const TransitionWrapper = ({ children, direction = 'left' }) => {
  return <>
    {
      direction === 'left' ? (
        <motion.div
          // 1. 初始狀態：在畫面右側且透明
          initial={{ opacity: 0, x: 50 }}
          // 2. 進場狀態：移到中間且不透明
          animate={{ opacity: 1, x: 0 }}
          // 3. 離場狀態：往左側移動並消失
          exit={{ opacity: 0, x: -50 }}
          // 4. 動畫設定：持續時間 0.3 秒，ease 曲線
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full" // 確保佔滿寬度
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          // 1. 初始狀態：在畫面右側且透明
          initial={{ opacity: 0, x: -50 }}
          // 2. 進場狀態：移到中間且不透明
          animate={{ opacity: 1, x: 0 }}
          // 3. 離場狀態：往左側移動並消失
          exit={{ opacity: 0, x: 50 }}
          // 4. 動畫設定：持續時間 0.3 秒，ease 曲線
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full" // 確保佔滿寬度
        >
          {children}
        </motion.div>
      )
    }
  </>
};

export default TransitionWrapper;