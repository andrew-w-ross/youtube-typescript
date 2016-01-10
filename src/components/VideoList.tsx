import * as React from "react";
import {VideoListItem} from "./VideoListItem";

interface IVideoListProps{
	videos:YTSearch.IVideoResponse[];  
	onVideoSelect : (video:YTSearch.IVideoResponse) => void;
}

export class VideoList extends React.Component<IVideoListProps,{}>{
	
	render(){
		let {onVideoSelect} = this.props;
		return (
			<ul className="col-md-4 list-group">
				{this.props.videos.map(v => <VideoListItem key={v.etag} onVideoSelect={onVideoSelect} video={v} />)}
			</ul>
		);
	}
}