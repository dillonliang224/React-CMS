var React = require('react');
var ReactDOM = require('react-dom');

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section>
                <header>jianshu Articles</header>
                <ul>
                </ul>
            </section>
        );

    }
}

export default ArticleList;
