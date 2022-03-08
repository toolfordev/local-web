import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GlobalVariableService } from 'src/app/services/global-variable/global-variable.service';
import { InputDescription } from 'src/app/components/form/form.component';

@Component({
  selector: 'toolfordev-global-variable-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public mode: string;
  @Input() public subtitle: string;

  public formGroup: FormGroup;
  public inputDescriptions: InputDescription[];

  constructor(
    public service: GlobalVariableService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required,Validators.maxLength(50),Validators.pattern((/^[A-Z_]*$/))]),
      value: this.formBuilder.control('', [Validators.required,Validators.maxLength(200)]),
    });

    this.inputDescriptions = [
      new InputDescription('name', 'Name', 'text', 'delete'),
      new InputDescription('value', 'Value', 'text', 'delete'),
    ];
  }

}
