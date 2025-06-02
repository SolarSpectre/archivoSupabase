import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonText,
  IonProgressBar,
  IonItemDivider,
  IonIcon
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { supabase } from '../supabase.client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonText,
    IonProgressBar,
    IonItemDivider,
    IonIcon
  ],
})
export class HomePage {
  selectedFile: File | null = null;
  uploadStatus: string = '';
  uploadProgress: number = 0;
  uploadedFiles: { name: string; url: string }[] = [];
  protected window = window;

  constructor() {
    this.loadUploadedFiles();
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadStatus = 'Archivo seleccionado: ' + this.selectedFile.name;
    }
  }

  async uploadFile() {
    if (!this.selectedFile) {
      this.uploadStatus = 'Selecciona un archivo primero';
      return;
    }

    try {
      this.uploadStatus = 'Subiendo archivo...';
      this.uploadProgress = 0;

      const fileExt = this.selectedFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data, error } = await supabase.storage
        .from('files')
        .upload(filePath, this.selectedFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        throw error;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('files')
        .getPublicUrl(filePath);

      this.uploadStatus = 'Archivo subido correctamente';
      this.uploadProgress = 100;
      this.uploadedFiles.push({
        name: this.selectedFile.name,
        url: publicUrl
      });
      
      this.selectedFile = null;
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      this.uploadStatus = 'Error subiendo archivo: ' + error.message;
      this.uploadProgress = 0;
    }
  }

  async loadUploadedFiles() {
    try {
      const { data, error } = await supabase.storage
        .from('files')
        .list();

      if (error) throw error;

      if (data) {
        this.uploadedFiles = await Promise.all(
          data.map(async (file) => {
            const { data: { publicUrl } } = supabase.storage
              .from('files')
              .getPublicUrl(file.name);
            return {
              name: file.name,
              url: publicUrl
            };
          })
        );
      }
    } catch (error: any) {
      this.uploadStatus = 'Error subiendo archivos: ' + error.message;
    }
  }
}
