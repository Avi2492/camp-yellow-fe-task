import React, { useState } from "react";
import { Heart } from "lucide-react";
import { UserAuth } from "../../context/authStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { RiHeartFill, RiHeartLine } from "@remixicon/react";
function Movie({ item }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieId = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please Login");
    }
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={saveShow} className="absolute top-4 left-2 text-gray-300">
          {!like ? <RiHeartLine /> : <RiHeartFill />}
        </p>
      </div>
    </div>
  );
}

export default Movie;
