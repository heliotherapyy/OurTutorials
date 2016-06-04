import React, { Component, PropTypes } from 'react';
import LinkList from 'components/LinkList';
import EntryBox from 'components/EntryBox';
import { connect } from 'react-redux';
import {createLinks, fetchLinks, incrementLike, decrementLike, destroyLink} from 'actions/links';

class RankBoard extends Component {


  render() {
<<<<<<< HEAD
    const {links, categories} = this.props;

    const categoryList = categories.map((category, key) => {
      return (
        <div>
          <h1>{category.name}</h1>
          <LinkList links={category.links} />
          <EntryBox  onEntrySave = {createLinks} />
        </div>
      );
    });
||||||| merged common ancestors
    const {links} = this.props;
=======
    const {links, currentCategory} = this.props;

    // const categoryList = categories.map((category, key) => {
    //   return (
    //     <div>
    //       <h1>{category.name}</h1>
    //       <LinkList links={category.links} />
    //       <EntryBox  onEntrySave = {createLinks} />
    //     </div>
    //   );
    // });
>>>>>>> to-be-merged

    return (
      <div>
<<<<<<< HEAD
        {categoryList}
||||||| merged common ancestors
        <LinkList links={links}/>
=======
        <h1>{currentCategory.name}</h1>
        <LinkList links={links}/>
>>>>>>> to-be-merged
      </div>
    )
  }
}

RankBoard.propTypes = {
  links: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
<<<<<<< HEAD
    links: state.category.links,
    categories: state.category.categories,
||||||| merged common ancestors
    links: state.category.links
=======
    links: state.category.links,
    currentCategory: state.category.currentCategory
>>>>>>> to-be-merged
  }
}

// store.subscribe(RankBoard)
export default connect(mapStateToProps)(RankBoard);
