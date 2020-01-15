import React from "react";

// import { Layout, Menu, Breadcrumb, Icon } from "antd";
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;


class MainLayout extends React.Component {
  render() {
    return (
      <>
        <center>
          <section class="hero is-success">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Conduit</h1>
                <h2 class="subtitle">A place to share your knowledge.</h2>
              </div>
            </div>
          </section>
        </center>
      </>
    );
  }
}

export default MainLayout;
