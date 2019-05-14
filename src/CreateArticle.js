import React from "react"
import { withStyles, TextField } from "@material-ui/core"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  backgroundColor: "pink"
})

class CreateArticle extends React.Component {
  constructor() {
    super()
    this.state = {
      article: {
        title: "Your article's title",
        content: "",
        author: ""
      }
    }
  }
  render() {
    return (
      <form>
        <TextField id="title" label="Title" value={this.state.title} />
        <TextField
          id="content"
          label="Content (In Markdown)"
          multiline
          value={this.state.content}
        />
        <TextField id="author" label="Author" value={this.state.author} />
        <Button size="small" color="primary">
          Submit
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(CreateArticle)
