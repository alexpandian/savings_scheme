export class Table {

	private _start : number = 0;
	private _noOfRecords : number = 10;
	private _sort : object;
	private _search : object = new Object();
	private _totalRecords : number = 0;
	private _pagination : any = new Object();
	private _noOfRecordsList : number[] = [10, 25, 50, 100];

	constructor(sort? : object){
		this._sort = (sort) ? sort : null; 
	}

	getStart(){
		return this._start;
	}
	setStart(start : number){
		this._start = start;
	}

	updateStart(){
		this._start = (this._pagination.currentPage - 1) * this._noOfRecords;
	}

	getNoOfRecords(){
		return this._noOfRecords;
	}
	setNoOfRecords(noOfRecords : number){
		this._noOfRecords = Number(noOfRecords);
	}

	getNoOfRecordsList(){
		return this._noOfRecordsList;
	}

	getSort(){
		return this._sort;
	}
	setSort(sort : object){
		this._sort = sort;
	}

	getSearch(){
		return this._search;
	}
	addSearch(key, value){ 
		if(value){
			this._search[key] = value;
		}else{
			if(this._search.hasOwnProperty(key)){
				delete this._search[key];
			}
			return false;
		}
	}

	getTotal(){
		return this._totalRecords;
	}
	setTotal(total : number){
		this._totalRecords = total;
	}

	initPagination(){
		this._start = 0;
		this._pagination.totalPages = (this._totalRecords) ? Math.ceil(this._totalRecords / this._noOfRecords) : 0;
		this._pagination.firstPage = false;
		this._pagination.previousPage = false;
		this._pagination.currentPage = 1;
		this._pagination.nextPage = (this._pagination.totalPages > 1) ? 2 : false ;
		this._pagination.lastPage = (this._pagination.totalPages > 1) ? this._pagination.totalPages : false ;
	}

	goToFirstPage(){ 
		this._pagination.firstPage = false;
		this._pagination.previousPage = false;
		this._pagination.currentPage = 1;
		this._pagination.nextPage = (this._pagination.totalPages > 1) ? 2 : false;
		this._pagination.lastPage = (this._pagination.totalPages > 1) ? this._pagination.totalPages : false;
		this.updateStart();
	}

	goToLastPage(){ 
		this._pagination.firstPage = ((this._pagination.totalPages-1) > 0) ? 1 : false;
		this._pagination.previousPage = ((this._pagination.totalPages-1) > 0) ? (this._pagination.totalPages - 1) : false;
		this._pagination.currentPage = this._pagination.totalPages;
		this._pagination.nextPage = false;
		this._pagination.lastPage = false;
		this.updateStart();
	}

	goToNextPage(){ 
		if( this._pagination.totalPages > (this._pagination.currentPage + 1) ){
			this._pagination.firstPage = 1;
			this._pagination.previousPage++;
			this._pagination.currentPage++;
			this._pagination.nextPage++;
			this._pagination.lastPage = this._pagination.totalPages;
		}else if(this._pagination.totalPages == (this._pagination.currentPage + 1)){
			this._pagination.firstPage = 1;
			this._pagination.previousPage++;
			this._pagination.currentPage++;
			this._pagination.nextPage = false;
			this._pagination.lastPage = false;
		}else{
			return null;
		}
		this.updateStart();
	}

	goToPreviousPage(){
		if( this._pagination.currentPage == 1 ){
			return null;
		}else if( this._pagination.currentPage == 2 ){
			this._pagination.firstPage = false;
			this._pagination.previousPage = false;
			this._pagination.currentPage = 1;
			this._pagination.nextPage = 2;
			this._pagination.lastPage = this._pagination.totalPages;
		}else{
			this._pagination.firstPage = 1;
			this._pagination.previousPage = this._pagination.currentPage - 2;
			this._pagination.currentPage--;
			this._pagination.nextPage = this._pagination.currentPage + 1;
			this._pagination.lastPage = this._pagination.totalPages;
		}
		this.updateStart();
	}

	getPagination(){
		return this._pagination;
	}

	getCurrentPage(){
		return this._pagination.currentPage;
	}
	setCurrentPage(page : number){
		this._pagination.currentPage = page;
	}

	getPreviousPage(){
		return this._pagination.previousPage;
	}
	setPreviousPage(page : number){
		this._pagination.previousPage = page;
	}

	getNextPage(){
		return this._pagination.nextPage;
	}
	setNextPage(page : number){
		this._pagination.nextPage = page;
	}

	getFirstPage(){
		return this._pagination.firstPage;
	}
	setFirstPage(page : number){
		this._pagination.firstPage = page;
	}

	getLastPage(){
		return this._pagination.lastPage;
	}
	setLastPage(page : number){
		this._pagination.lastPage = page;
	}

	getRecordStart(){
		return ( this._totalRecords == 0 ) ? 0 : this._start + 1;
	}

	getRecordEnd(){
		let end = this._start + this._noOfRecords;
		return ( end > this._totalRecords ) ? this._totalRecords : end;
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
