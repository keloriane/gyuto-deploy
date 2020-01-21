import React, { Component, Fragment } from "react";
import Media from "react-media";
import PageHomeMobile from "./assets/pageHomeMobile/PageHomeMobile";
import PageHomeDesktop from "./assets/pageHomeDesktop/PageHomeDesktop";

class PageHome extends Component {

  onOpenModal(params) {
    this.props.onOpenModal(params)
  }



  render() {
    return (
      <Fragment>
        <Media query="(max-width: 700px)" render={() => (
          <PageHomeMobile />
        )} />
        <Media query="(min-width: 701px)" render={() => (
          <PageHomeDesktop
            onOpenModal={this.onOpenModal.bind(this)}
            
          />
        )} />
      </Fragment>
    )
  }
}

export default PageHome;
