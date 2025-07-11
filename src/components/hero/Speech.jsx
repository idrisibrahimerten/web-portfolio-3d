import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1500, // Bekleme süresi
            "Driving digital transformation with impact.", // Dijital dönüşüm ve etki yaratma
            1500, // Bekleme süresi
            "Leading teams and scaling products.", // Liderlik ve ürün ölçeklendirme
            1500, // Bekleme süresi
            "Expert in Python, Node.js, FastAPI, Django, React, API Development", // Anahtar teknolojiler
            1500, // Bekleme süresi
            "Bridging innovation with reliable code.", // İnovasyon ve güvenilirlik
            1500, // Bekleme süresi
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      {/* Profil fotoğrafınızı kullanmanız daha iyi olur, örneğin /idris-profile.png */}
      <img src="/idris-profile.png" alt="İdris İbrahim Erten'in profil fotoğrafı" />
    </motion.div>
  );
};

export default Speech;