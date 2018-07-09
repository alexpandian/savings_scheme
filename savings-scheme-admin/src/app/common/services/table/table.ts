export class Table {

	private _start : number;
	private _noOfRecords : number;
	private _sort : object;
	private _search : object[] = new Array();
	private _totalRecords : number = 0;
	private _pagination : any = new Object();

	constructor(
				start? : number, 
				noOfRecords? : number, 
				sort? : object,
				search? : object
				){
		this._start = (start) ? start : 0; 
		this._noOfRecords = (noOfRecords) ? noOfRecords : 10; 
		this._sort = (sort) ? sort : null; 
		if(search){
			this._search.push(search);
		}
		//this.initPagination();
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
		this._noOfRecords = noOfRecords;
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
	setSearch(search : object){
		this._search.push(search);
	}

	getTotal(){
		return this._totalRecords;
	}
	setTotal(total : number){
		this._totalRecords = total;
	}

	initPagination(){
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

	getAllRequestData(){
		return {
			start : this._start,
			noOfrecords : this._noOfRecords,
			sort : this._sort,
			search : this._search
		}
	}

}
