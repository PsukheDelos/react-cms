import React from "react";
import Component from "react-cms/component";

class PageListItem extends Component {
    constructor(props) {
        super(props);

        this.bind("onClick");
    }

    render() {
        return <div>
          list item <a href="#" onClick={this.props.onPageEdit}>edit</a>
          <a href="#" onClick={this.props.onPageDelete}>delete</a>
        </div>;
    }

    onClick() {
        console.log(this.constructor.name + " was clicked!");
    }
}

PageListItem.propTypes = {
    // "myProperty": React.PropTypes.string
    // "myShape": React.PropTypes.shape({})
};

export default PageListItem;
