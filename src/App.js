import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
})

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/articles")
      .then(result => {
        return result.json()
      })
      .then(data => {
        this.setState({ articles: data })
      })
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Grid justify="space-between" container spacing={24}>
              <Grid item>
                <Typography variant="h6" color="inherit" noWrap type="title">
                  Scoville
                </Typography>
              </Grid>

              <Grid item>
                <div>
                  <Button color="inherit">Create Article</Button>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Grid container spacing={40}>
              {this.state.articles.map(article => (
                <Grid item key={article._id} sm={6} md={4} lg={3}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                      </Typography>
                      <Typography>{article.content}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(App)
