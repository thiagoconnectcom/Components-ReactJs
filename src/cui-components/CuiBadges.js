import React, { Component } from 'react'
import { Button, Badge } from 'react-bootstrap'

class CuiBadges extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Badges</h3>

        <h4 className="ui-block-heading">Within headings</h4>

        <div className="cui-example">
          <h1>Example heading <Badge variant="default">New</Badge></h1>
          <h2>Example heading <Badge variant="default">New</Badge></h2>
          <h3>Example heading <Badge variant="default">New</Badge></h3>
          <h4>Example heading <Badge variant="default">New</Badge></h4>
          <h5>Example heading <Badge variant="default">New</Badge></h5>
          <h6>Example heading <Badge variant="default">New</Badge></h6>
        </div>

        <h4 className="ui-block-heading">Variations</h4>

        <div className="cui-example cui-example-inline-spacing">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="dark">Dark</Badge>
        </div>

        <h4 className="ui-block-heading">Pills</h4>

        <div className="cui-example cui-example-inline-spacing">
          <Badge pill variant="default">Default</Badge>
          <Badge pill variant="primary">Primary</Badge>
          <Badge pill variant="secondary">Secondary</Badge>
          <Badge pill variant="success">Success</Badge>
          <Badge pill variant="info">Info</Badge>
          <Badge pill variant="warning">Warning</Badge>
          <Badge pill variant="danger">Danger</Badge>
          <Badge pill variant="dark">Dark</Badge>
        </div>

        <h4 className="ui-block-heading">Outline</h4>

        <div className="cui-example cui-example-inline-spacing">
          <Badge variant="outline-default">Default</Badge>
          <Badge variant="outline-primary">Primary</Badge>
          <Badge variant="outline-secondary">Secondary</Badge>
          <Badge variant="outline-success">Success</Badge>
          <Badge variant="outline-info">Info</Badge>
          <Badge variant="outline-warning">Warning</Badge>
          <Badge variant="outline-danger">Danger</Badge>
          <Badge variant="outline-dark">Dark</Badge>
        </div>

        <h4 className="ui-block-heading">Button badges</h4>

        <div className="cui-example cui-example-paragraph-spacing">
          <p>
            <Button variant="primary">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="secondary">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="default">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="success">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="warning">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="info">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="danger">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="dark">Messages <Badge variant="light">4</Badge></Button>
          </p>
          <p>
            <Button variant="outline-primary">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="outline-secondary">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="outline-default">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="outline-success">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="outline-warning">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="outline-info">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="outline-danger">Messages <Badge variant="light">4</Badge></Button>
            <Button variant="outline-dark">Messages <Badge variant="light">4</Badge></Button>
          </p>
        </div>

        <h4 className="ui-block-heading">Dot badges</h4>

        <div className="cui-example">
          <Badge variant="default badge-dot" /> Default&nbsp; &nbsp;
          <Badge variant="primary badge-dot" /> Primary&nbsp; &nbsp;
          <Badge variant="success badge-dot" /> Success&nbsp; &nbsp;
          <Badge variant="info badge-dot" /> Info&nbsp; &nbsp;
          <Badge variant="warning badge-dot" /> Warning&nbsp; &nbsp;
          <Badge variant="danger badge-dot" /> Danger
        </div>

        <h4 className="ui-block-heading">Indicators</h4>

        <div className="cui-example cui-example-inline-spacing">
          <Button variant="default text-nowrap">Badge <Badge variant="primary indicator">12</Badge></Button>&nbsp; &nbsp;
          <Button variant="default text-nowrap">Outlined badge <Badge variant="outline-success indicator">12</Badge></Button>&nbsp; &nbsp;
          <Button variant="default text-nowrap">Pill <Badge pill variant="info indicator">12</Badge></Button>&nbsp; &nbsp;
          <Button variant="default text-nowrap">Outlined pill <Badge pill variant="outline-danger indicator">12</Badge></Button>&nbsp; &nbsp;
          <Button variant="default text-nowrap">Dot <Badge variant="danger badge-dot indicator" /></Button>&nbsp; &nbsp;
          <Button variant="default text-nowrap">Outlined dot <Badge variant="outline-success badge-dot indicator" /></Button>
        </div>
      </div>
    )
  }
}

export default CuiBadges
