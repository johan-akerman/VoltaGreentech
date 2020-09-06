import React from "react"
import typography from "../typography.module.css"
import { Table, Button } from "react-bootstrap"
import styles from "./NewsTable.module.css"

const articles = require("../../../static/json/articles.json")

class NewsTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { articles: [], renderAll: false }
  }

  navigateTo(link) {
    window.open(link, "_blank") || window.location.replace(link)
  }

  componentDidMount() {
    this.getFiveLatestNews()
  }

  getFiveLatestNews() {
    var temp = []
    for (var i = 0; i < 5; i++) {
      temp.push(articles[i])
    }

    return temp
  }

  getAllArticles() {
    var temp = []
    for (var i = 0; i < articles.length; i++) {
      temp.push(articles[i])
    }
    return temp
  }

  renderAllArticles() {
    console.log("heeee")
    this.getAllArticles().map(article => {
      return (
        <tr>
          <td className={styles.title}>{article.title}</td>
          <td className={styles.title}>{article.publisher}</td>
          <td className={styles.text}>{article.date}</td>
        </tr>
      )
    })
  }

  render() {
    if (!this.state.renderAll) {
      return (
        <div className={styles.container}>
          <Table className={styles.table}>
            <thead>
              <tr>
                <th className={typography.lowerLevelHeader}>Article title</th>
                <th className={typography.lowerLevelHeader}>Publisher</th>
                <th className={typography.lowerLevelHeader}>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.getFiveLatestNews().map(article => {
                return (
                  <tr
                    key={article.title}
                    onClick={() => this.navigateTo(article.link)}
                  >
                    <td className={styles.title}>{article.title}</td>
                    <td className={styles.title}>{article.publisher}</td>
                    <td className={styles.text}>{article.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>

          <div className={typography.btnContainer}>
            <Button
              className={typography.btn}
              onClick={() => this.setState({ renderAll: true })}
            >
              Load more
            </Button>
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles.container}>
          <Table className={styles.table}>
            <thead>
              <tr>
                <th className={typography.lowerLevelHeader}>Title</th>
                <th className={typography.lowerLevelHeader}>Publisher</th>
                <th className={typography.lowerLevelHeader} id={styles.thDate}>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {this.getAllArticles().map(article => {
                return (
                  <tr
                    onClick={() => this.navigateTo(article.link)}
                    key={article.title}
                  >
                    <td className={styles.title}>{article.title}</td>
                    <td className={styles.title}>{article.publisher}</td>
                    <td className={styles.text} id={styles.tdDate}>
                      {article.date}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default NewsTable
