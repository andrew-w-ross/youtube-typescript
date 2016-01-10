import * as React from "react";

interface IVideoListItemProps{
	key: string; 
	video: YTSearch.IVideoResponse;
	onVideoSelect : (video:YTSearch.IVideoResponse) => void;
}

export class VideoListItem extends React.Component<IVideoListItemProps, {}>{
	render() {
		let {video, onVideoSelect} = this.props;
		return (
			<li className="list-group-item" onClick={() => onVideoSelect(video)}>
				<div className="video-list media">
					<div className="media-left">
						<img src={video.snippet.thumbnails.default.url} className="media-object" />
						</div>
					</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</li>
		);
	}
}