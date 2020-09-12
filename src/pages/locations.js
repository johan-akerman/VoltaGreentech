import React from "react"
import Navbar from "../components/navbar/Header.js"
import Header from "../components/locations/navbar/Header.js"
import Sidebar from "../components/locations/sidebar/Sidebar.js"
import styles from "../components/locations/Locations.module.css"
class locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeGraph: "ifCattleWereACountry" }
  }

  render() {
    return (
      <div className={styles.container}>
        <Navbar />
        {/* <Header /> */}
        <div className="row">
          <div class="col-lg-4">
            <Sidebar />
          </div>
          <div class="col-lg-8">hej</div>
        </div>
      </div>
    )
  }
}

export default locations
