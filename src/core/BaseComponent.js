import { Component } from 'react';

class BaseComponent extends Component {

    formHandleChange = event => {
        const control = event.target;
        this.setState({ [control.name]: control.value });

        let { errors } = this.state;
        const hasError = errors[control.name];

        if (control.type === 'email') {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!regex.test(control.value)) {
                if (!hasError) {
                    errors[control.name] = true;
                    this.setState({ errors });
                }
            }
            else {
                if (hasError) {
                    delete errors[control.name];
                    this.setState({ errors });
                }
            }

        }
        else {
            if (control.required) {
                if (!control.value && !hasError) {
                    errors[control.name] = true;
                    this.setState({ errors });
                } else {
                    if (control.value && hasError) {
                        delete errors[control.name];
                        this.setState({ errors });
                    }
                }
            }
        }
    }
}

export default BaseComponent;
