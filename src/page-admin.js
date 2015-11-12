import React from "react";
import Component from "react-cms/component";
import Page from "react-cms/page";


class PageAdmin extends Component {
    constructor(props) {
        super(props);

        this.bind(
          "handlePageInsert",
          "handlePageUpdate",
          "handlePageDelete"
        );
    }

    render() {
      return <ol>
        {this.props.pages.map((page, i) => {
          return <li key={i}>
            <Page
              {...page}
              onPageInsert={this.handlePageInsert}
              onPageUpdate={this.handlePageUpdate}
              onPageDelete={this.handlePageDelete}/>
          </li>;
        })}
      </ol>;
    }

    handlePageInsert(){
      console.log("time to insert a page");
    }

    handlePageUpdate(){
      console.log("time to update a page");
    }

    handlePageDelete(id){
      console.log("time to delete a page", id);
    }

}

PageAdmin.propTypes = {
    // "myProperty": React.PropTypes.string
    // "myShape": React.PropTypes.shape({})
};

export default PageAdmin;
