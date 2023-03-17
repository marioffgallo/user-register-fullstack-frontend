import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AlertComponent } from 'src/app/core/components/alert/alert.component';
import { Alert } from 'src/app/core/models/alert.model';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'pop-up-user-edit',
  templateUrl: './pop-up-user-edit.component.html',
  styleUrls: ['./pop-up-user-edit.component.scss'],
})
export class PopUpUserEditComponent {
  public editUserForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopUpUserEditComponent>,
    public dialog: MatDialog,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.buildForm(data);
  }

  private save(user: User) {
    this.userService.updateUser(user).subscribe(
      () => {
        const config = {
          data: {
            title: 'Sucesso!',
            description: 'Usuário editado com sucesso no banco de dados.',
            btnSuccess: 'Fechar',
          } as Alert,
        };

        const dialogRef = this.dialog.open(AlertComponent, config);

        dialogRef.afterClosed().subscribe((opcao: boolean) => {
          this.dialogRef.close(opcao);
        });
      },
      (error) => {
        console.error('Erro ao salvar no DB: ', error);

        const config = {
          data: {
            title: 'Erro ao salvar usuário!',
            description:
              'Não foi possivel salvar seu usuário, favor tentar novamente',
            corBtnSuccess: 'warn',
            btnSuccess: 'Fechar',
          } as Alert,
        };

        this.dialog.open(AlertComponent, config);
      }
    );
  }

  private buildForm(user: User): void {
    this.editUserForm = new FormGroup({
      id: new FormControl(user.id),
      name: new FormControl(user.name, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(256),
      ]),
      age: new FormControl(user.age, [
        Validators.required,
        Validators.min(1),
        Validators.max(99),
      ]),
      email: new FormControl(user.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(2),
        Validators.maxLength(256),
      ]),
      birthDate: new FormControl(user.birthDate, [Validators.required]),
    });
  }

  public onSubmit() {
    this.editUserForm.markAllAsTouched();

    if (this.editUserForm.invalid) {
      return;
    }

    const user = this.editUserForm.getRawValue() as User;

    this.save(user);
  }
}
