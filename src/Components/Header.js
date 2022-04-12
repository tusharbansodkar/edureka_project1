import React from 'react';
import '../Styles/header.css';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'antiquewhite',
        border: '1px solid brown'
    },
};

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            loginModalIsOpen: false,
            isLoggedIn: false,
            userName: undefined
        }
    }

    handleNavigate = () => {
        this.props.history.push('/');
    }

    handleModal = (state, value) => {
        this.setState({ [state]: value });
    }

    responseGoogle = (response) => {
        this.setState({ isLoggedIn: true, userName: response.profileObj.name, loginModalIsOpen: false });
    }

    handleLogout = () => {
        this.setState({ isLoggedIn: false, userName: undefined });
    }

    render() {
        const { loginModalIsOpen, isLoggedIn, userName } = this.state;
        return (
            <div>
                <div className='header'>
                    <div className="header-logo" onClick={this.handleNavigate}>
                        <p>e!</p>
                    </div>
                    {isLoggedIn ? <div className="header-user">
                        <div className="login">{userName}</div>
                        <div className="signup" onClick={this.handleLogout}>Logout</div>
                    </div> :
                        <div className="header-user">
                            <div className="login" onClick={() => this.handleModal('loginModalIsOpen', true)}>Login</div>
                            <div className="signup">Create an account</div>
                        </div>}
                </div>
                <Modal
                    isOpen={loginModalIsOpen}
                    style={customStyles}
                >
                    <div>
                        <button className='btn btn-primary'>Login with Credentails</button>
                        <div>
                            <GoogleLogin
                                clientId="131303037139-3ekm5rpaneta4v5kd1q39djih0jvbbep.apps.googleusercontent.com"
                                buttonText="Continue with Gmail"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Header);