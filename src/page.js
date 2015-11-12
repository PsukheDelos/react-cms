import React from "react";
import Component from "react-cms/component";
import PageEditor from "react-cms/page-editor";
import PageListItem from "react-cms/page-list-item";

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
          "isEditing" : false
        };

        this.bind("handlePageEdit","handlePageDelete");
    }

    render() {
      if(this.state.isEditing){
        return <PageEditor/>;
      }
      return <PageListItem
        onPageEdit={this.handlePageEdit}
        onPageDelete={this.handlePageDelete}/>;
    }


    handlePageEdit(){
      this.setState({
        "isEditing": true
      });

      console.log("time to edit a page");
    }

    handlePageDelete() {
      console.log("time to delete a page", this.props.id);
      this.props.onPageDelete(this.props.id);
    }

}

Page.propTypes = {
    // "myProperty": React.PropTypes.string
    // "myShape": React.PropTypes.shape({})
};

export default Page;
