import { withRouter } from "react-router-dom"

const FocusedBlog = (props) => {
    return (
        <div>
            <h1 className="about-text-dark">Hello World</h1>
            {console.log(props.location.post)}
        </div>
    )
}

export default withRouter(FocusedBlog);
