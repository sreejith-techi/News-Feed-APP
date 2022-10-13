
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {


  allNewsList:any = [];
  
  constructor(public postService: NewsService) { }

  ngOnInit(): void {
    this.getList();    
  }
  
  

  showCommmets(index:any){
    var dots:any = document.getElementById("dots"+index);
    var moreText:any = document.getElementById("more"+index);
    var btnText:any = document.getElementById("myBtn"+index);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  getList() {
    try {
      this.postService.getAllNews().subscribe((data: any) => {
       
        if (data != undefined && data.articles) {
          this.allNewsList = data.articles;
        }
      },
        error => console.log('Error', error)
      );
    } catch (e) {
      console.log(e);
    }
  }

 
}
