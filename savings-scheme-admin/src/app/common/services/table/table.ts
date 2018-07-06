export class Table {

	private _start : number;
	private _noOfRecords : number;
	private _sort : string;
	private _search : object[] = new Array();

	constructor(
				start? : number, 
				noOfRecords? : number, 
				sort? : string,
				search? : object
				){
		this._start = (start) ? start : 0; 
		this._noOfRecords = (noOfRecords) ? noOfRecords : 2; 
		this._sort = (sort) ? sort : null; 
		if(search){
			this._search.push(search);
		}
	}

	getStart(){
		return this._start;
	}
	setStart(start : number){
		this._start = start;
	}

	getNoOfRecords(){
		return this._noOfRecords;
	}
	setNoOfRecords(noOfRecords : number){
		this._noOfRecords = noOfRecords;
	}

	getSort(){
		return this._sort;
	}
	setSort(sort : string){
		this._sort = sort;
	}

	getSearch(){
		return this._search;
	}
	setSearch(search : object){
		this._search.push(search);
	}

	getAllRequestData(){
		return {
			start : this._start,
			noOfrecords : this._noOfRecords,
			sort : this._sort,
			search : this._search
		}
	}

}
