import React, { Component } from 'react';

const Form = (props) => (

  constructor(props) {
    super(props);
    this.formCheck = this.formCheck.bind(this);
  }

  formCheck(e){
    console.log(e.target.title.value);
  }

  <form className="siimple-form" onSubmit={props.handleAdd} >
    <div className="siimple-form-field">
      <label className="siimple-label siimple--color-white">Your todo:</label>
      <input name="title" type="text" className="siimple-input" onChange={this.formCheck} />
      <input type="submit" value="Add" className="siimple-btn siimple-btn--teal" />
    </div>
  </form>
);

export default Form;