import React from 'react'
import './SwipeButtons.css'

import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton><ReplayIcon className="swipeButton__replay" fontSize="large"/></IconButton>
            <IconButton><CloseIcon className="swipeButton__close" fontSize="large"/></IconButton>
            <IconButton><StarIcon className="swipeButton__star" fontSize="large"/></IconButton>
            <IconButton><FavoriteIcon className="swipeButton__favorite" fontSize="large"/></IconButton>
            <IconButton><FlashOnRoundedIcon className="swipeButton__flash" fontSize="large"/></IconButton>
        </div>
    )
}

export default SwipeButtons
