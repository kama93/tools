import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/actions';

function Login({ setCurrentUser }) {
  let [signInEmail, setSignInEmail] = useState('');
  let [signInPassword, setSignInPassword] = useState('');

  const history = useHistory();

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmitSignIn()
    }
  }

  // Log in to demo user
  const demoLogIn = () => {
    setSignInEmail(signInEmail='k@gmail.com');
    setSignInPassword(signInPassword='k');
    onSubmitSignIn();
  }

  const onSubmitSignIn = () => {
    // log in authorisation
    fetch('/api/signin', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          setCurrentUser(user);
          history.push('/')
        }
        else {
          alert('Wrong password or email')
        }
      })
  }

  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(orange.png)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Try my app with prepare user.
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-l"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={demoLogIn}
                      >
                        Demo Log In
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <Link to='./register'><small>Or sign up</small></Link>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          onChange={onEmailChange}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          onChange={onPasswordChange}
                          onKeyDown={e => handleKeyDown(e)}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={onSubmitSignIn}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(Login);
