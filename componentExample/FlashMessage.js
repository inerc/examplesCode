import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { id, type, text } = this.props.message;
        let innerWidth = window.innerWidth-60
        return (


            <div className="center-alert-block">
                <div style={{width: innerWidth}} className={classnames('green-alert-line-block', {
                    'alert-success': type === 'success',
                    'alert-danger': type === 'error'
                })}>
                    <div className="text-alert-m">{text}</div>

                </div>
            </div>

        );
    }
}

FlashMessage.propTypes = {
    message: React.PropTypes.object.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;
