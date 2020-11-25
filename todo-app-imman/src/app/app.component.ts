import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-todo-app';
   todos:any=[];
   userForm:FormGroup;
   constructor(private fb:FormBuilder)
   {
   this.userForm = this.fb.group({
    task : ['',Validators.required],
    priority : ['',Validators.required],
   })
   }
   get task(){
    return this.userForm.get('task');
  } 
  get priority(){
   return this.userForm.get('priority');
 } 
 addTodo(newTodo, prior) {
    var newTodos = { 
      task: newTodo, 
      priority: prior,
      status:"pending"
    };
    if(this.todos=="null"){
      this.todos.push({
        tasks:"No data"
      });
    }
    this.todos.push(newTodos);
    localStorage.setItem('user', JSON.stringify(this.todos));
    this.userForm.reset();
  }
  selectedLevel;
  tod=[];
  data = [
    { id: 0, name: 'Low ' },
    { id: 1, name: 'Moderate' },
    { id: 2, name: 'High' },
  ];
  selectedLevelStatus: any;
  dataStatus = [
    { id: 0, status: 'pending' },
    { id: 1, status: 'In process' },
    { id: 2, status: 'Completed' },
  ];
  selected(event: any) {
    this.selectedLevel = event.target.name;
  }
  selectedStatus(event: any,index) {
      this.selectedLevelStatus= event.target.value;
      this.todos[index].status= event.target.value;
      if(true){
        localStorage.setItem("user",JSON.stringify(this.todos));
      }
  }
  ngOnInit(): void {
      if(localStorage.getItem("user")){
        this.todos = JSON.parse(localStorage.getItem('user'));
      }
   }
}
