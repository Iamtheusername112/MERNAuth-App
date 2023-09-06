import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>You are successfully logged in</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.gif_container}>
        <img
          src="https://media4.giphy.com/media/j0wbpJI4ZOte5EM0b1/200w.gif?cid=6c09b9529ii0hqvte5z2m74sz0o43jdai0hn11dzsbzszkuj&ep=v1_gifs_search&rid=200w.gif&ct=ghttps://media.tenor.com/z9x_RClS584AAAAM/cute-mocha.gif"
          alt="Cute Mocha GIF"
          className={styles.gif}
        />
        <p className={styles["p-below"]}>
          Test completed, Proceed to logout Thanks!!.
        </p>
      </div>
    </div>
  );
};

export default Main;
