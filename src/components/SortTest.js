import React, { Component } from "react";
import PromiseWorker from "promise-worker";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import ArrayWorker from "./../mocks/EndpointsMock.worker.js";
import ChartTooltip from "./ChartTooltip";
import DataCharts from "./DataCharts";

const worker = new ArrayWorker();
const promiseWorker = new PromiseWorker(worker);

class SortTest extends Component {
	constructor(props) {
		super(props);
		this.worker = promiseWorker;
		this.state = {
			// Getting the type from Router URL
			type: props.match.params.sortType,
			worker: props.worker,
			requestedSort: false
		};

		// Otherwise handleClick changes context of this
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		// Short summary and title fetch
		fetch(
			`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&origin=*&titles=${
				this.state.type
			}`
		)
			.then(res => res.json())
			.then(data => {
				// Dynamically pull pageID, title and description out of response
				const pageID = Object.keys(data.query.pages)[0];
				const info = data.query.pages[pageID];
				this.setState({ title: info.title, description: info.extract });
			})
			.catch(err => console.log(err));

		// Independent Infobox fetch
		fetch(
			`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${
				this.state.type
			}&rvsection=0&origin=*`
		)
			.then(res => res.json())
			.then(data => this.parseInfobox(data))
			.catch(err => console.log(err));
	}

	parseInfobox(data) {
		// Dynamically pull pageID out of response
		const pageID = Object.keys(data.query.pages)[0];
		const info = data.query.pages[pageID].revisions[0]["*"];

		let worst = info.match(/time\s*=\s*.*/g) || "Unknown";
		let best = info.match(/best-time\s*=\s*.*/g) || "Unknown";
		let average = info.match(/average-time\s*=\s*.*/g) || "Unknown";

		// Had to break regex into few parts, becouse of inconsistent styling on Wikipedia
		if (worst !== "Unknown")
			worst =
				"O" +
				worst[0]
					.match(/\(.*?\)/g)[0]
					.replace(/\'\'\s*|<\/sup>/g, "")
					.replace(/<sup>/g, "^")
					.replace(/\\/g, ""); // Don't know better workaround yet

		if (best !== "Unknown")
			best =
				"O" +
				best[0]
					.match(/\(.*?\)/g)[0]
					.replace(/\'\'\s*|<\/sup>/g, "")
					.replace(/<sup>/g, "^")
					.replace(/\\/g, "");

		if (average !== "Unknown") {
			// Shellsort was so badly formatted, that I had to have ths assertion
			if (this.state.type === "Shellsort") average = "Unknown";
			else
				average =
					"O" +
					average[0]
						.match(/\(.*?\)/g)[0]
						.replace(/\'\'\s*|<\/sup>/g, "")
						.replace(/<sup>/g, "^")
						.replace(/\\/g, "");
		}
		this.setState({ average, best, worst });
	}

	handleClick(e) {
		// Prevent multiple requests
		if (!this.state.statistics)
			// Render the placeholder while loading
			this.setState({ requestedSort: true });
		fetch(`/stats/${this.state.type.replace("_", "")}`)
			.then(result => result.json())
			.then(stats => {
				let statistics = {};

				// Parse reponse to arrays of intigers
				for (let field in stats)
					statistics[field] = Object.values(stats[field]).map(x => parseInt(x));
				this.setState({ statistics });
			});
	}

	render() {
		// Pull out properties from state
		const {
			title,
			description,
			best,
			average,
			worst,
			statistics,
			requestedSort
		} = this.state;

		// Don't even show placeholder if sorting hasn't been requested yet
		const chart = requestedSort ? (
			<DataCharts
				requestedSort={requestedSort}
				title={title}
				stats={statistics}
				best={best}
				average={average}
				worst={worst}
			/>
		) : (
			<div />
		);

		return (
			<div>
				<div className="sort-description">
					<Link to="/">↶</Link>
					<section>
						<h2>{title}</h2>
						<p>{description}</p>
					</section>
					<div className="big-o">
						<h2>O(n)</h2>
						<h4 data-tip data-for="best">
							Best case: {best}
						</h4>
						<h4 data-tip data-for="average">
							Average case: {average}
						</h4>
						<h4 data-tip data-for="worst">
							Worst case: {worst}
						</h4>
					</div>
					<button onClick={this.handleClick}>Sort!</button>
					<ChartTooltip id={"best"} type={best} />
					<ChartTooltip id={"average"} type={average} />
					<ChartTooltip id={"worst"} type={worst} />
				</div>
				{chart}
			</div>
		);
	}
}

export default SortTest;
