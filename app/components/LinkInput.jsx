import React, { Component, PropTypes } from 'react';
const ENTER_KEY_CODE = 13;

export default class LinkInput extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  	}

  onSave() {
  	console.log('save');
    // const { onEntrySave, value, currentCategory} = this.props;
    // onEntrySave(currentCategory, value);
  }


  /*
   * @param  {object} event
   */
  onKeyDown(event) {
    console.log('keyDown');
    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSave();
    }
  }

  render() {
    // const { className, placeholder, value } = this.props;
    return (
      <div>
        <form>
          Title:
          <input type="text" name="title"/><br />
          Link:
          <input type="text" name="link" /><br />
          Summary:
          <input type="text" name="summary"/><br />
          Tag:
          <input type="text" name="tag"/><br />
          Thumbnail:
          <input type="text" name="thumbnail"/><br />
          <input onClick={this.onSave} type="button" value="Add link" />
        </form>
      </div>
    );
  }
}

  LinkInput.propTypes = {
    // className: PropTypes.string,
    // placeholder: PropTypes.string,
    // value: PropTypes.string,
    // onEntrySave: PropTypes.func,
    // onEntryChange: PropTypes.func,
    // currentCategory: PropTypes.string
  };