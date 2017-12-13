
import { registerNativeComponentClass } from 'qml-renderer';
import { createElement, Component } from 'react';

const qmlContent = "import QtQuick.Controls 2.0\nAbstractButton {}";

registerNativeComponentClass('QtQuick.Controls.AbstractButton', qmlContent);

export default class AbstractButton extends Component {
  setRef = qmlObject => (this.qmlObject = qmlObject);
  render() {
    var nextProps = {};

    for (var key in this.props) {
      nextProps[key] = this.props[key];
    }

    nextProps.ref = this.setRef;

    return createElement('QtQuick.Controls.AbstractButton', nextProps);
  }
}

