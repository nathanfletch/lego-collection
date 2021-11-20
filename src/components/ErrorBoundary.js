import React from "react";

export default class ErrorBoundary extends React.Component {
  //this is syntactic sugar for a constructor with this.state:
  state = { error: null };

  //implementing this method allows this class to receive errors thrown in any child components and automatically sets the state
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <this.props.FallbackComponent error={this.state.error} />;
    }
    //this.props.children references the components this class wraps
    return this.props.children;
  }
}
