

import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;
		return d;
	};
}

function parseData2(parse) {
	return function(d) {
		d.date = parse(d.Date);
		d.open = +d.Open;
		d.high = +d.High;
		d.low = +d.Low;
		d.close = +d.Close;
		d.volume = +d.Volume;
		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	// const promiseMSFT = fetch("http://47.115.201.167:8002/data/test/MSFT.tsv")
	// 	.then(response => response.text())
	// 	.then(data => {
	// 		console.log(tsvParse(data, parseData(parseDate)));
	// 		return	tsvParse(data, parseData(parseDate))	
	// 	})
	const promiseMSFT = fetch("./AAPL.csv")
		.then(response => response.text())
		.then(data => {
			console.log(csvParse(data, parseData2(parseDate)));
			return	csvParse(data, parseData2(parseDate))	
		})
	return promiseMSFT;
}
