"use client";

import { ReactBingMap, Pushpin } from "@3acaga/react-bing-maps";
import { Car, Home, ChefHat } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <main>
      <div className="w-full flex justify-around items-center">
        <div className="w-4/12 h-full flex flex-col justify-center font-Coolvetica text-6xl">
          <div>
            <motion.p
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              initial={{ opacity: 0 }}
            >
              <span className="text-[#4BAF32]">bharat</span>
              <span className="text-[#F6762D]">bnb </span>
              <span className="text-[#4B0082]">it.</span>
            </motion.p>
            <motion.p
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              initial={{ opacity: 0 }}
              className="text-3xl mt-4 text-[#F6762D]"
            >
              Become a partner and earn now.
            </motion.p>
          </div>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            initial={{ opacity: 0 }}
            className="flex justify-between text-xl mt-12 overflow-hidden"
          >
            <Link
              href="/register/home"
              className="px-6 py-2 flex justify-around items-center border-2 border-[#F6762D] rounded-full"
            >
              <Home size="25px" color="#F6762D" />
              <p className="ml-4 text-[#F6762D]">House</p>
            </Link>
            <Link
              href="#"
              className="px-6 py-2 flex justify-around items-center border-2 border-[#F6762D] rounded-full"
            >
              <ChefHat size="25px" color="#F6762D" />
              <p className="ml-4 text-[#F6762D]">Food</p>
            </Link>
            <Link
              href="#"
              className="px-6 py-2 flex justify-around items-center border-2 border-[#F6762D] rounded-full"
            >
              <Car size="25px" color="#F6762D" />
              <p className="ml-4 text-[#F6762D]">Travels</p>
            </Link>
          </motion.div>
        </div>
        <div
          style={{
            height: "85vh",
            width: "40vw",
            overflow: "hidden",
            borderRadius: "50px",
          }}
        >
          <ReactBingMap
            apiKey="Ahax2zhL02yMoMS_SUD44UtdKrt7aDlcFLWy-tnro1zZzXBN-NYKQJz3XbCO1z6d"
            credentials="Ahax2zhL02yMoMS_SUD44UtdKrt7aDlcFLWy-tnro1zZzXBN-NYKQJz3XbCO1z6d"
            allowHidingLabelsOfRoad={false}
            showMapTypeSelector={false}
            center={{ latitude: 28.38, longitude: 77.12 }}
            zoom={5}
          >
            <Pushpin
              location={{
                latitude: 28.38,
                longitude: 77.12,
              }}
            />
          </ReactBingMap>
        </div>
      </div>
    </main>
  );
}
