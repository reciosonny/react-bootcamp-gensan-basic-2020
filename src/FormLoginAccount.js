import React, { Component } from "react";

export default class FormLoginAccount extends Component {
  render() {
    return (
      <div className="row">
        <form onSubmit={this.onLogin}>
          <div class="input-field col s5 offset-s3">
            <input
              type="text"
              id="enterusername"
              class="validate"
              onChange={this.onChange}
            />
            <label for="enterusername">Please enter your username</label>

            <div>
              <a
                class="waves-effect waves-light btn"
                style={{ width: "100%" }}
                onClick={this.onLogin}
                type="submit"
              >
                login
              </a>
            </div>
          </div>
        </form>
        
      </div>
    );
  }
}
