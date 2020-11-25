import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})

export class ChildComponentComponent implements OnInit {
task = [];
order:string;
constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe((data) =>{
    console.log(data);
    
    this.order = data.order; //comparing stings
    this.task = JSON.parse(localStorage.getItem('user'));
    this.task = this.task.filter((m) => {
        return m.status === this.order;
      });
      console.log(this.order);
    });
  }
  ngOnInit(): void {}
}
