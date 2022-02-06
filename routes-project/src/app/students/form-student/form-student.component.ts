import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactive';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit, IFormCanDeactivate {
  email = new FormControl('', [Validators.required, Validators.email]);

  inscription: Subscription;
  student: any = {};
  private changeForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.inscription = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.student = this.studentsService.getStudent(id);

      if (this.student === null) {
        this.student = {};
      }
    })
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onInput() {
    this.changeForm = true;

    console.log(this.changeForm);
  }

  canChangeRoute() {
    if (this.changeForm) {
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true
  }

  canDeactivate() {
    this.canChangeRoute()
  }

  ngOnDestroy() {
    return this.inscription.unsubscribe();
  }
}
