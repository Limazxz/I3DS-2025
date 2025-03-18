import { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [movieDesc, setMoveDesc] = useState([]);
  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieID}`)
      .then((response) => response.json())
      .then((data) => setMoveDesc(data))
      .then((error) => console.error(error));
  }, []);
  return (
    <>
      <div className={styles.modalBackdrop} onClick={props.click}>
        <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt="" />
          <button className={styles.btnClose} onClick={props.click}>X</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDescription;
