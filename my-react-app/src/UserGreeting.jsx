import PropTypes from 'prop-types'
function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginMessage = <h2 className="login-promt">Please Log in to Continue</h2>
    
    return(props.isLoggedIn ? welcomeMessage : loginMessage );


}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting