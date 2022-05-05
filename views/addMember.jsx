var React = require("react");
var DefaultLayout = require("./layouts/default");
const Bootstrap = require("react-bootstrap");

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <form>
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="reset" value="Reset" />
        <input type="submit" value="Save" />
      </form>
      <Bootstrap.Button variant="primary">Primary</Bootstrap.Button>{" "}

    </DefaultLayout>
  );
}

module.exports = HelloMessage;
