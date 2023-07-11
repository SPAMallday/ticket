import loginImage from 'assets/img/kakao_login_medium_narrow.png';

export default function Login() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={loginImage} className="login-Image" alt="login" />
        </header>
      </div>
    );

}