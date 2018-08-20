import React from "react";

// Fetching sorting animation gifs
const source =
	"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/";
const sources = {
	Bubble_Sort: `${source}bubble-sort_ee720b.gif`,
	Insertion_Sort: `${source}insertion-sort_da381c.gif`,
	Heap_Sort: `${source}heap-sort_f79bb1.gif`,
	Quick_Sort: `${source}quick-sort_b49af5.gif`,
	Merge_Sort: `${source}merge-sort_8993d8.gif`,
	Shell_Sort: `${source}shell-sort_5c15b3.gif`,
	Intro_Sort: `${source}quick-sort-3-way_d176ee.gif`
};

const SortTab = props => {
	// Adjusting type to fit the sorces object keys
	let src = props.type.split(" ").join("_");
	return (
		<div className="sort-tab">
			<h2>{props.type}</h2>
			<hr />
			<img src={sources[src]} />
		</div>
	);
};

export default SortTab;
