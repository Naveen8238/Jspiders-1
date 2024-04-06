import React from "react";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      message: { id: " ", text: " " },
      list: [],
      isNaN: {
        val: false,
        obj: {
          id: " ",
          text: " ",
        },
      },
    };
  }
  texthandler = (e) => {
    this.setState({
      message: {
        id: new Date().getTime().toString(),
        text: e.target.value,
      },
    });
  };
  addhandler = () => {
    this.setState({
      list: [...this.state.list, this.state.message],
      message: {
        id: " ",
        text: " ",
      },
    });
  };
  delhandler = (id) => {
    let newData = this.state.list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    this.setState({
      list: newData,
    });
  };
  edithandler = (id) => {
    let newData = this.state.list.find((eachItem) => {
      return eachItem.id === id;
    });
    this.setState({
      isNaN: {
        val: true,
        obj: {
          id: newData.id,
          text: newData.text,
        },
      },
      message: {
        id: newData.id,
        text: newData.text,
      },
    });
  };
  edhandler = (e) => {
    e.preventDefault();
    let newData = this.state.list.map((eachItem) => {
      if (eachItem.id === this.state.isNaN.obj.id) {
        return {
          id: this.state.isNaN.obj.id,
          text: this.state.message.text,
        };
      } else {
        return eachItem;
      }
    });
    this.setState({
      list: newData,
      message: {
        id: " ",
        text: "",
      },
      isNaN: {
        val: false,
        obj: {
          id: "",
          text: "",
        },
      },
    });
  };
  render() {
    return (
      <>
        <h1>Hello this todo list with class components</h1>
        <hr />
        <input
          type="text"
          value={this.state.message.text}
          placeholder="enter some text"
          onChange={(e) => this.texthandler(e)}
        />
        {this.state.isNaN.val ? (
          <button type="submit" onClick={this.edhandler}>
            EDIT
          </button>
        ) : (
          <button type="submit" onClick={this.addhandler}>
            ADD
          </button>
        )}
        <hr />
        {this.state.list.length > 0 &&
          this.state.list.map(({ id, text }) => {
            return (
              <div key={id} style={{ color: "white", background: "black" }}>
                <h1>{text}</h1>
                <button type="submit" onClick={() => this.delhandler(id)}>
                  DELETE
                </button>
                <button type="submit" onClick={() => this.edithandler(id)}>
                  EDIT
                </button>
              </div>
            );
          })}
      </>
    );
  }
}

export default Index;
