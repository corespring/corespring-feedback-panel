import React from 'react';

import CorrectIcon from 'corespring-icon/correct-icon.jsx';
import PartiallyCorrectIcon from 'corespring-icon/partially-correct-icon.jsx';
import IncorrectIcon from 'corespring-icon/incorrect-icon.jsx';

require('./index.less');

class FeedbackPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: this.getIcon(props.correctness)
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      icon: this.getIcon(props.correctness)
    })
  }

  getIcon(correctness) {
    switch (correctness) {
      case 'correct':
        return CorrectIcon;
      case 'incorrect':
        return IncorrectIcon;
      default:
        return PartiallyCorrectIcon;
    }
  }
  

  render() {
    return (this.props.feedback !== undefined) ? (
      <div className="feedback-panel">
        <div className="icon">
          <this.state.icon iconSet={FeedbackPanel.iconSet} shape="square" />
        </div>
        {this.props.feedback}
      </div>
    ) : <div/>;
  }

}

// TODO: Configurable?
FeedbackPanel.iconSet = 'emoji';

export default FeedbackPanel;