import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';


export interface IImageModel {
  name: string,
  srcData: string
}


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  @Input()
  get fileModel() {
    return this.fileData;
  }
  set fileModel(value: any) {
    if (value) {
      this.fileData = value;
      this.fileModelChange.emit(this.fileData);
    }
  }


  @Output()
  fileModelChange = new EventEmitter();

  private fileData: File[] = [];
  private duplicateFileName: string[] = [];
  private thumbnailImages: IImageModel[] = [];

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }


  drop(eventdata: any) {
    eventdata.preventDefault();
    if (eventdata.dataTransfer && eventdata.dataTransfer.files) {
      var count = 0;
      var files = eventdata.dataTransfer.files;
      while (count < eventdata.dataTransfer.files.length) {
        if (!this.validateDuplicateFileName(files[count], this.fileData)) {
          this.fileData.push(eventdata.dataTransfer.files[count]);
          this.fileModelChange.emit(this.fileData);
        }
        count++;
      }
      this.previewFileAsync(this.fileData);
    }
  }

  private removeImage(image: IImageModel) {
    var index1 = this.fileData.findIndex(item => {
      return item.name == image.name;
    });
    if (index1 >= 0) {
      this.fileData.splice(index1, 1)
      this.fileModelChange.emit(this.fileData);
    }

    var index2 = this.thumbnailImages.findIndex(item => {
      return item.name == image.name;
    });

    if (index2 >= 0) {
      this.thumbnailImages.splice(index2, 1)
    }
  }

  private validateDuplicateFileName(file: File, targetCollection: any[]): boolean {
    if (targetCollection.length == 0) return false;

    var filefound = targetCollection.find(item => {
      return item.name == file.name;
    });

    if (filefound && filefound != null) {
      return true;
    }
    return false;
  }

  allowDrop(eventdata: any) {
    eventdata.preventDefault();
  }

  public previewFileAsync(files: File[]) {
    var count = 0;
    while (count < files.length) {
      if (!this.validateDuplicateFileName(files[count], this.thumbnailImages)) {
        this.readFileAsDataUrlAsync(files[count]).subscribe(result => {
          this.thumbnailImages.push(result);
        });
      }
      count++;
    }
  }

  private readFileAsDataUrlAsync(fileData: File): Observable<IImageModel> {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(fileData);

    return Observable.create(observer => {

      fileReader.onload = (ev) => {
        let imageData: IImageModel = { name: fileData.name, srcData: (<any>ev.target).result }
        observer.next(imageData);
      };

      fileReader.onerror = (error) => observer.onerror((error) => {
        alert("error reading file");
      });
    });

  }

  openFileUploadControl(inputControl: any) {
    if (inputControl && inputControl != null) {
      inputControl.value = null;
      inputControl.click()
    }
  }

  onChange(eventdata: any) {
    if (eventdata.target && eventdata.target.files) {
      var count = 0;
      var files = eventdata.target.files;
      while (count < eventdata.target.files.length) {
        if (!this.validateDuplicateFileName(files[count], this.fileData)) {
          this.fileData.push(eventdata.target.files[count]);
          this.fileModelChange.emit(this.fileData);
        }
        count++;
      }
      this.previewFileAsync(this.fileData);
    }
  }
}
