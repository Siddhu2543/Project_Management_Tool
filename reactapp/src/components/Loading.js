const Loading = () => {
  return (
    <div className="overlay">
      <div className="d-flex justify-content-center align-items-stretch vh-100 vw-100">
        <div className="spinner-grow text-primary align-self-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
