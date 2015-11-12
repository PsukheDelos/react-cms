import React from "react";
import Component from "react-cms/component";

class PageEditor extends Component {
    constructor(props) {
        super(props);

        this.bind("onClick");
    }

    render() {
        return <div onClick={this.onClick}>editor</div>;
    }

    onClick() {
        console.log(this.constructor.name + " was clicked!");
    }
}

PageEditor.propTypes = {
    // "myProperty": React.PropTypes.string
    // "myShape": React.PropTypes.shape({})
};

export default PageEditor;
