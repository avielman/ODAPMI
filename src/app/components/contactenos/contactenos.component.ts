import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css', '../../../assets/css/style.min.css']
})
export class ContactenosComponent implements OnInit {
  contactForm: FormGroup;  

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      dpi: ['', [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13)
      ]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      comentario: [''],
      preferenciasContacto: this.fb.group({
        contactoTelefono: [false],
        contactoEmail: [false],
        contactoWhatsapp: [false]
      }, { validators: this.requireCheckboxSelection })
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      console.log('Formulario inválido:', this.contactForm.errors);
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control?.errors) {
          console.log(`${key} errors:`, control.errors);
        }
      });
    }
  }

  // Método de ayuda para verificar validación
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.touched) return false;
    
    if (fieldName === 'dpi') {
      const value = field.value?.replace(/-/g, '') || '';
      return value.length !== 13;
    }
    
    return field.invalid;
  }

  // Validador personalizado para requerir al menos una opción seleccionada
  requireCheckboxSelection(group: FormGroup) {
    const values = Object.values(group.value);
    const isSelected = values.some(value => value === true);
    return isSelected ? null : { requireOneCheckbox: true };
  }

  // Verificar si al menos una opción está seleccionada
  get isPreferenciasInvalid(): boolean {
    const preferencias = this.contactForm.get('preferenciasContacto');
    return preferencias?.invalid && (preferencias.dirty || preferencias.touched) || false;
  }

  // Método para obtener mensaje de error específico para DPI
  getDpiErrorMessage(): string {
    const dpiControl = this.contactForm.get('dpi');
    if (!dpiControl) return '';
    
    const value = dpiControl.value?.replace(/-/g, '') || '';
    if (value.length !== 13) {
      return 'El DPI debe tener 13 números';
    }    
    return '';
  }
}
