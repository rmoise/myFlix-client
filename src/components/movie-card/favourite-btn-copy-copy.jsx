import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';

export default class FavouriteBtn extends React.Component {
  render() {
    const { liked, movie, addFavorite } = this.props;
    const likeIcon = (liked) => (liked ? faHeartActive : faHeartInactive);
    const iconStyle = { color: liked ? 'red' : 'inherit' };

    return (
      <Button
        variant="flat"
        size="lg"
        onClick={(e) => addFavorite()}
        data-toggle="tooltip"
        data-placement="center"
        title="Favourite a movie"
        disabled={liked}
        className="float-left fav-btn"
      >
        <FontAwesomeIcon
          icon={likeIcon(liked)}
          fixedWidth={true}
          style={iconStyle}
        />
      </Button>
    );
  }
}
