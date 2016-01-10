import * as React from "react";

export class SearchBar extends React.Component<{onSearchTermChange : (term:string) => void}, {term:string}>{
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={e => this.onInputChange((e.target as HTMLInputElement).value) }
					/>
				</div>
		);
	}
	
	onInputChange(term:string){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}	
}