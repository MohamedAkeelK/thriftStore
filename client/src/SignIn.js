// here  you need to create a react component for the signin page.
import React from 'react'

export default function SignIn() {
    return (
        <div>
            <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="user"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="Email"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
        </div>
    )
}
