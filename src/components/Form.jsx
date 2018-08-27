import React, { Component } from 'react';

const Form = props => {

    return (
      <div>
        <form onSubmit={(event)=>props.handleOnSubmit(event)} style={{ marginBottom:"2rem"}}>
          <input className="form__input" type="text" name="recipeName" placeholder="Recipe Name"/>
          <button className="form__button">Submit</button>
        </form>
      </div>
    );
  }

export default Form;
