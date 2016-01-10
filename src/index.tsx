/// <reference path="../typings/browser.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from 'youtube-api-search';
import * as _ from "lodash";

import {SearchBar} from "./components/SearchBar";
import {VideoList} from "./components/VideoList";
import {VideoDetail} from "./components/VideoDetail";

const API_KEY = "AIzaSyAcKPLYrkKDkKt5yIroPlrNH8O9FtSf-aQ";


class App extends React.Component<{}, { videos?: YTSearch.IVideoResponse[], selectedVideo?: YTSearch.IVideoResponse }>{
	constructor(props) {
		super(props);

		this.state = { videos: [] };
		this.videoSearch("cats");
	}

	videoSearch(term: string) {
		YTSearch({ key: API_KEY, term: term }, videos => this.setState({ videos, selectedVideo: videos[0] }));
	}

	render() {
		const videoSearch = _.debounce(term => this.videoSearch(term), 300);
		
		return (
			<div>
				<SearchBar onSearchTermChange={t => videoSearch(t)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} onVideoSelect={v => this.setState({ selectedVideo: v }) } />
				</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));