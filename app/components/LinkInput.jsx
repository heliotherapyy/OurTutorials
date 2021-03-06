import React, { Component, PropTypes } from 'react';
const ENTER_KEY_CODE = 13;

export default class LinkInput extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  	}



  onSave(e) {
    const { currentCategory, onEntrySave } = this.props;
    e.preventDefault();
    // console.log('onEntrySave: ', onEntrySave);
    const data = {
      title: e.target.title.value,
      link: e.target.link.value,
      summary: e.target.summary.value,
      tag: e.target.tag.value
    };
  	// console.log(onEntrySave);
    // const { onEntrySave } = this.props;
    onEntrySave(data, currentCategory.name);
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
        <form onSubmit ={e => this.onSave(e)}>
          Title:
          <input type="text" name="title" /><br />
          Link:
          <input type="text" name="link" /><br />
          Summary:
          <input type="text" name="summary"/><br />
          Tag:
          <input type="text" name="tag"/><br />
          <input type="submit" value="Add link" />
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

function mapStateToProps(state) {
  return {
    // currentCategory: state.currentCategory
  }
}