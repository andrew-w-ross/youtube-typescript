// Compiled using typings@0.5.2
// Source: https://raw.githubusercontent.com/andrew-w-ross/typings-youtube-api-search/master/youtube-api-search.d.ts
declare namespace YTSearch {
	interface ISearchArgs {
		key: string;
		term?: string;
	}

	interface IVideoResponse {
		etag: string;
		id: IVideoId;
		kind: string;
		snippet: IVideoSnippet;
	}

	interface IVideoId {
		kind:string;
		videoId:string;	
	}

	interface IVideoSnippet {
		channelId: string;
		channelTitle: string;
		description: string;
		liveBroadcastContent: string;
		publishedAt: string;
		thumbnails: IVideoThumbnails;
		title: string;
	}

	interface IVideoThumbnails {
		default: IThumbnail;
		high: IThumbnail;
		medium: IThumbnail;
	}

	interface IThumbnail {
		url: string;
	}

	interface ISearch {
		(searchArgs: ISearchArgs, callback: (data:IVideoResponse[]) => any)
	}
}

declare module "youtube-api-search"{
	let ytSearch : YTSearch.ISearch;
	export = ytSearch;	
}