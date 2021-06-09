import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page:any=1;
  @Input() count:any;
  @Input() perPage:any;
  @Input() pageToShow:any;
  @Input() loading:any;
  
  @Output() goPrev=new EventEmitter<boolean>();
  @Output() goNext=new EventEmitter<boolean>();
  @Output() goPage=new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  getMin(){
       return ((this.perPage*this.page)-this.perPage)+1;
  }

  getMax(){
    let max=this.perPage*this.page;
    if(max>this.count){
      max=this.count;
    }
    return max;
  }

  onPrev()
  {
    this.goPrev.emit(true);
  }

  onNext()
  {
    this.goNext.emit(true);
  }

  onPage(pageNumber:number){
    this.goPage.emit(pageNumber)
  }

  totalPages(){
    return Math.ceil(this.count/this.perPage)||0;
  }

  isLastPage(){
  return this.perPage*this.page >= this.count;
}

getPages(){
  const totalPages=Math.ceil(this.count/this.perPage);
  const thisPage=this.page||1;
  const pagesToShow=this.pageToShow||9;
  const pages:number[]=[];
  pages.push(thisPage);

  //console.log("thispage",thisPage,"pagestoshow",pagesToShow,"totalpages",totalPages)
  for(let i=0;i<pagesToShow-1;i++)
  { // console.log("pages[]",pages)

    if(pages.length<pagesToShow)
    {
      if(Math.min.apply(null,pages)>1){
        pages.push(Math.min.apply(null,pages)-1);
       // console.log("push min",Math.min.apply(null,pages)-1)
      }
    }

    if(pages.length<pagesToShow)
    {
      if(Math.max.apply(null,pages)<totalPages){
        pages.push(Math.max.apply(null,pages)+1);
       // console.log("push max",Math.max.apply(null,pages)+1)

      }
    }
  }
  pages.sort((a,b)=>a-b);
  return pages;

}

}
