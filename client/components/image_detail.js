import React from 'react';

const ImageDetail = (props) => {
	return (
		<li className="media list-group-item">
			<div className="media-left">
				<img src={props.image.link}/>
			</div>
			<h4 className="media-body">
				{props.image.title}
			</h4>
		</li>
		)
}

export default ImageDetail;