import React, { useContext, HTMLProps } from 'react';
import { PostContext } from '../../lib/context';

const LikeButton = (buttonProps: HTMLProps<HTMLButtonElement>) => {
    const { likes, liked } = useContext(PostContext);

    return <button {...buttonProps}>{liked ? `You and ${likes - 1}` : likes} people liked this.</button>
}

export default LikeButton