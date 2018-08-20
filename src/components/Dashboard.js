import React, { Component } from "react";
import { Link } from "react-router-dom";

import Placeholder from "./Placeholder";
import SortTab from "./SortTab";
import DescriptionTab from "./DescriptionTab";

// Web Workers were for mocking only
import PromiseWorker from "promise-worker";
import ArrayWorker from "./../mocks/EndpointsMock.worker.js";

let worker = new ArrayWorker();
let promiseWorker = new PromiseWorker(worker);

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.worker = promiseWorker;
		this.state = {
			arraysReady: false
		};
	}

	// As soon as component mounts, initialize arrays on the server
	componentDidMount() {
		fetch("/arraysInit").then(msg => this.setState({ arraysReady: true }));
	}

	render() {
		if (this.state.arraysReady)
			return (
				<main>
					<DescriptionTab />
					<Link to="Heapsort">
						<SortTab type="Heap Sort" worker={this.promiseWorker} />
					</Link>
					<Link to="Merge_sort">
						<SortTab type="Merge Sort" worker={this.promiseWorker} />
					</Link>
					<Link to="Shellsort">
						<SortTab type="Shell Sort" worker={this.promiseWorker} />
					</Link>
					<Link to="Quicksort">
						<SortTab type="Quick Sort" worker={this.promiseWorker} />
					</Link>
					<Link to="Introsort">
						<SortTab type="Intro Sort" worker={this.promiseWorker} />
					</Link>
					<Link to="Bubble_sort" className="danger">
						<SortTab type="Bubble Sort" worker={this.promiseWorker} />
					</Link>
					<Link to="Insertion_sort" className="danger">
						<SortTab type="Insertion Sort" worker={this.promiseWorker} />
					</Link>
					<div className="warning">
						<h2>Warning!</h2>
						<hr />
						<h3>
							Alghoritms marked <span>RED</span> may cause painfully slow
							computation.
						</h3>
					</div>
				</main>
			);
		else
			// Render custom placeholder
			return (
				<main>
					<DescriptionTab />
					<Placeholder />
				</main>
			);
	}
}

export default Dashboard;
