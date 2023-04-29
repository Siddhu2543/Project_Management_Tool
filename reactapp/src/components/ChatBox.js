import { io } from "socket.io-client";

const ChatBox = () => {
  const socket = io('http://localhost:4000')
  return (
    <section style={{ backgroundColor: "white" }} className="mb-3">
      <div className="p-3">
        <h1 className="text-primary">Chats</h1>
      </div>
      <div className="p-3">
        <div className="accordion" id="chatSelection">
          <div className="accordion-item">
            <h2 className="accordion-header" id="friendsChat">
              <button
                className="accordion-button h2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#friends"
                aria-expanded="true"
                aria-controls="friends"
              >
                Friends' Chats
              </button>
            </h2>
            <div
              id="friends"
              className="accordion-collapse collapse show"
              aria-labelledby="Friends"
              data-bs-parent="#chatSelection"
            >
              <div className="accordion-body">
                <section style={{ backgroundColor: "#eee" }}>
                  <div className="container py-3">
                    <div className="row">
                      <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                        <div className="card">
                          <div className="card-body">
                            <ul className="list-unstyled mb-0">
                              <li
                                className="p-2 border-bottom"
                                style={{ backgroundColor: "#eee" }}
                              >
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">John Doe</p>
                                      <p className="small text-muted">
                                        Hello, Are you there?
                                      </p>
                                    </div>
                                  </div>
                                  /
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Just now
                                    </p>
                                    <span className="badge bg-danger float-end">
                                      1
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">
                                        Danny Smith
                                      </p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      5 mins ago
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">
                                        Alex Steward
                                      </p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Yesterday
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">
                                        Ashley Olsen
                                      </p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Yesterday
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">Kate Moss</p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Yesterday
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">Lara Croft</p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Yesterday
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">Brad Pitt</p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      5 mins ago
                                    </p>
                                    <span className="text-muted float-end">
                                      <i
                                        className="fas fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-7 col-xl-8">
                        <ul className="list-unstyled">
                          <li className="d-flex justify-content-between mb-4">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              alt="avatar"
                              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                              width="60"
                            />
                            <div className="card">
                              <div className="card-header d-flex justify-content-between p-3">
                                <p className="fw-bold mb-0">Brad Pitt</p>
                                <p className="text-muted small mb-0">
                                  <i className="far fa-clock"></i> 12 mins ago
                                </p>
                              </div>
                              <div className="card-body">
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex justify-content-between mb-4">
                            <div className="card w-100">
                              <div className="card-header d-flex justify-content-between p-3">
                                <p className="fw-bold mb-0">Lara Croft</p>
                                <p className="text-muted small mb-0">
                                  <i className="far fa-clock"></i> 13 mins ago
                                </p>
                              </div>
                              <div className="card-body">
                                <p className="mb-0">
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium.
                                </p>
                              </div>
                            </div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                              alt="avatar"
                              className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                              width="60"
                            />
                          </li>
                          <li className="d-flex justify-content-between mb-4">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              alt="avatar"
                              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                              width="60"
                            />
                            <div className="card">
                              <div className="card-header d-flex justify-content-between p-3">
                                <p className="fw-bold mb-0">Brad Pitt</p>
                                <p className="text-muted small mb-0">
                                  <i className="far fa-clock"></i> 10 mins ago
                                </p>
                              </div>
                              <div className="card-body">
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-white mb-3">
                            <div className="form-outline">
                              <textarea
                                className="form-control"
                                id="textAreaExample2"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </li>
                          <button
                            type="button"
                            className="btn btn-info btn-rounded float-end"
                          >
                            Send
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="groupChat">
              <button
                className="accordion-button collapsed h2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#groups"
                aria-expanded="false"
                aria-controls="groups"
              >
                Group Chats
              </button>
            </h2>
            <div
              id="groups"
              className="accordion-collapse collapse"
              aria-labelledby="Groups"
              data-bs-parent="#chatSelection"
            >
              <div className="accordion-body">
                <section style={{ backgroundColor: "#eee" }}>
                  <div className="container py-3">
                    <div className="row">
                      <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                        <div className="card">
                          <div className="card-body">
                            <ul className="list-unstyled mb-0">
                              <li
                                className="p-2 border-bottom"
                                style={{ backgroundColor: "#eee" }}
                              >
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">John Doe</p>
                                      <p className="small text-muted">
                                        Hello, Are you there?
                                      </p>
                                    </div>
                                  </div>
                                  /
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Just now
                                    </p>
                                    <span className="badge bg-danger float-end">
                                      1
                                    </span>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">
                                        Danny Smith
                                      </p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      5 mins ago
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">
                                        Alex Steward
                                      </p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Yesterday
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">
                                        Ashley Olsen
                                      </p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Yesterday
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">Kate Moss</p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Yesterday
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2 border-bottom">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">Lara Croft</p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      Yesterday
                                    </p>
                                  </div>
                                </a>
                              </li>
                              <li className="p-2">
                                <a
                                  href="#!"
                                  className="d-flex justify-content-between"
                                >
                                  <div className="d-flex flex-row">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                      alt="avatar"
                                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                      width="60"
                                    />
                                    <div className="pt-1">
                                      <p className="fw-bold mb-0">Brad Pitt</p>
                                      <p className="small text-muted">
                                        Lorem ipsum dolor sit.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="pt-1">
                                    <p className="small text-muted mb-1">
                                      5 mins ago
                                    </p>
                                    <span className="text-muted float-end">
                                      <i
                                        className="fas fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-7 col-xl-8">
                        <ul className="list-unstyled">
                          <li className="d-flex justify-content-between mb-4">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              alt="avatar"
                              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                              width="60"
                            />
                            <div className="card">
                              <div className="card-header d-flex justify-content-between p-3">
                                <p className="fw-bold mb-0">Brad Pitt</p>
                                <p className="text-muted small mb-0">
                                  <i className="far fa-clock"></i> 12 mins ago
                                </p>
                              </div>
                              <div className="card-body">
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex justify-content-between mb-4">
                            <div className="card w-100">
                              <div className="card-header d-flex justify-content-between p-3">
                                <p className="fw-bold mb-0">Lara Croft</p>
                                <p className="text-muted small mb-0">
                                  <i className="far fa-clock"></i> 13 mins ago
                                </p>
                              </div>
                              <div className="card-body">
                                <p className="mb-0">
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium.
                                </p>
                              </div>
                            </div>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                              alt="avatar"
                              className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                              width="60"
                            />
                          </li>
                          <li className="d-flex justify-content-between mb-4">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              alt="avatar"
                              className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                              width="60"
                            />
                            <div className="card">
                              <div className="card-header d-flex justify-content-between p-3">
                                <p className="fw-bold mb-0">Brad Pitt</p>
                                <p className="text-muted small mb-0">
                                  <i className="far fa-clock"></i> 10 mins ago
                                </p>
                              </div>
                              <div className="card-body">
                                <p className="mb-0">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="bg-white mb-3">
                            <div className="form-outline">
                              <textarea
                                className="form-control"
                                id="textAreaExample2"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </li>
                          <button
                            type="button"
                            className="btn btn-info btn-rounded float-end"
                          >
                            Send
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
