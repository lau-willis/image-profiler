import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
	return (
		<li className="media list-group-item">
			<div className="media-left">
				<img src={props.image.link}/>
			</div>
			<h4 className="media-body">
				{props.image.title}
			</h4>
			<p>{props.image.description}</p>
			<ImageScore ups={props.image.ups} downs={props.image.downs}/>
		</li>
		)
}

export default ImageDetail;