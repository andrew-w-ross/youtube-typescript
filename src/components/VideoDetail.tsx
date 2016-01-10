import * as React from "react";

interface IVideoDetailProps{
	video: YTSearch.IVideoResponse;
}

export class VideoDetail extends React.Component<IVideoDetailProps, {}>{
	render() {
		let {video} = this.props;
		
		if (!video) {
			return <div>Loading...</div>;
		}
				
		const url = `https://www.youtube.com/embed/${video.id.videoId}`;		
		return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={url} className="embed-responsive-item"></iframe>
					</div>
				<div className="details">
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
					</div>
				</div>
		);
	}
}