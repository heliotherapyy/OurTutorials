import React, { PropTypes } from 'react';
import CategoryInput from 'components/CategoryInput';
import classNames from 'classnames/bind';
import styles from 'css/components/entrybox';

const cx = classNames.bind(styles);

// Takes callback functions from props and passes it down to LinkTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move LinkTextInput up to EntryBox so it's less confusing
const EntryBox = ({onEntryChange, onEntrySave, newCategory, currentCategory}) => {
  return (
    <div className={cx('entrybox')}>
      <h1 className={cx('header')}>Links</h1>
      <CategoryInput
        className={cx('input')}
        value={newCategory}
        placeholder="+ Add Link!! +"
        currentCategory={currentCategory}
        onEntryChange={onEntryChange}
        onEntrySave={onEntrySave} />
    </div>
  );
};

EntryBox.propTypes = {
  newCategory: PropTypes.string,
  currentCategory: PropTypes.string,
  onEntryChange: PropTypes.func.isRequired,
  onEntrySave: PropTypes.func.isRequired
};

export default EntryBox;
