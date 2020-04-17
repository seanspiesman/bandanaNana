class AdminQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <li style={{ fontSize: "20px" }}>
          {item[2] +
            " " +
            item[1].toLowerCase() +
            " for " +
            item[0].toLowerCase() +
            "."}{" "}
          <small>{"Notes: "}</small>
          <button
            className="btn btn-sm"
            onClick={() => {
              // remove(index);
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default AdminQueue;
