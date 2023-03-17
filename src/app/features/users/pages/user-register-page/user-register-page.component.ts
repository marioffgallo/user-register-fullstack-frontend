import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/core/components/alert/alert.component';
import { Alert } from 'src/app/core/models/alert.model';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'user-register-page',
  templateUrl: './user-register-page.component.html',
  styleUrls: ['./user-register-page.component.scss'],
})
export class UserRegisterPage {
  public register!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.createForm(this.createBlankForm());
  }

  private save(user: User) {
    this.userService.createUser(user).subscribe(
      () => {
        const config = {
          data: {
            title: 'Sucesso!',
            description: 'Usuário cadastrado com sucesso no banco de dados.',
            btnSuccess: 'Ir para listagem',
            btnCancel: 'Cadastrar nova reserva',
            corBtnCancel: 'primary',
            ownBtnClose: true,
          } as Alert,
        };

        const dialogRef = this.dialog.open(AlertComponent, config);

        dialogRef.afterClosed().subscribe((opcao: boolean) => {
          if (opcao) {
            this.router.navigateByUrl('dashboard');
          } else {
            this.createForm(this.createBlankForm());
          }
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

  private createForm(user: User): void {
    this.register = new FormGroup({
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

  private createBlankForm(): User {
    return {
      name: null,
      age: null,
      email: null,
      birthDate: null,
    } as User;
  }

  public onCancel() {
    this.register.reset();
  }

  public onSubmit() {
    this.register.markAllAsTouched();

    if (this.register.invalid) {
      return;
    }

    const user = this.register.getRawValue() as User;

    this.save(user);
  }
}
