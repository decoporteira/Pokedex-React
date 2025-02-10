import { Component } from "react";

class AvatarImage extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://static.wikia.nocookie.net/deathbattle/images/1/1c/Portrait.ashketchum.png",
    };
  }

  changeFototeste = () => {
    this.setState((prevState) => ({
      url:
        prevState.url ===
        "https://static.wikia.nocookie.net/deathbattle/images/1/1c/Portrait.ashketchum.png"
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoi9_LEKGHkCRuot_eqKixcBMb490Y7CnAg&s"
          : "https://static.wikia.nocookie.net/deathbattle/images/1/1c/Portrait.ashketchum.png",
    }));
  };

  changeFoto = () => {
    this.setState((prevState) => {
      let newUrl;
      if (prevState.url === "https://static.wikia.nocookie.net/deathbattle/images/1/1c/Portrait.ashketchum.png") {
        newUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoi9_LEKGHkCRuot_eqKixcBMb490Y7CnAg&s"
      } else {
        newUrl = "https://static.wikia.nocookie.net/deathbattle/images/1/1c/Portrait.ashketchum.png"
      }
      return {url: newUrl };
    });
  };

  render() {
    return (
      <img
        onClick={this.changeFoto}
        className="avatar"
        src={this.state.url}
        alt={this.props.alt}
        style={{ cursor: "pointer", width: "150px", height: '250px' }}
      />
    );
  }
}

export default AvatarImage;
