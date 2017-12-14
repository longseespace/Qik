/* this file is automatically generated */
import { registerNativeComponentClass } from 'qml-renderer';
import { createElement, Component } from 'react';

const qmlContent = "\n\nimport QtQuick 2.1\nStateChangeScript {\n  \n}\n";
const NATIVE_COMPONENT_REGISTRY_NAME = 'QtQuick.StateChangeScript_2.1'

registerNativeComponentClass(
  NATIVE_COMPONENT_REGISTRY_NAME,
  qmlContent,
  undefined
);

export default class StateChangeScript extends Component {
  setRef = qmlObject => (this.qmlObject = qmlObject);
  render() {
    var nextProps = {};

    for (var key in this.props) {
      nextProps[key] = this.props[key];
    }

    nextProps.ref = this.setRef;

    return createElement(NATIVE_COMPONENT_REGISTRY_NAME, nextProps);
  }
}
