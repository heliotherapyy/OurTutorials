import React, { Component, PropTypes } from 'react';
import LinkList from 'components/LinkList';
import EntryBox from 'components/EntryBox';
import { connect } from 'react-redux';
import {createLinks, fetchLinks, incrementLike, decrementLike, destroyLink} from 'actions/links';

class RankBoard extends Component {


  render() {
    const {links} = this.props;

    // const categoryList = categories.map((category, key) => {
    //   return (
    //     <div>
    //       <h1>{category.name}</h1>
    //       <LinkList links={category.links} />
    //       <EntryBox  onEntrySave = {createLinks} />
    //     </div>
    //   );
    // });

    return (
      <div>
        <h1>Link1</h1>
      </div>
    )
  }
}

RankBoard.propTypes = {
  links: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    links: state.category.links,
    // currentCategory: state.category.
  }
}

// store.subscribe(RankBoard)
export default connect(mapStateToProps)(RankBoard);
