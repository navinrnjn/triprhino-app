import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  private fileData: File[] = [];
  private thumbnailImages: string[] = [];

  constructor(private domSanitizer: DomSanitizer, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }


  drop(eventdata: any) {
    eventdata.preventDefault();
    if (eventdata.dataTransfer && eventdata.dataTransfer.files) {
      this.fileData = eventdata.dataTransfer.files
      this.previewFileAsync(this.fileData);
    }
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }

  allowDrop(eventdata: any) {
    eventdata.preventDefault();
  }

  public previewFileAsync(files: File[]) {
    var count = 0;
    while (count < files.length) {
      this.readFileAsDataUrlAsync(files[count]).subscribe(result => {
        this.thumbnailImages.push(result);
      });
      count++;
    }
  }

  private readFileAsDataUrlAsync(fileData: File): Observable<any> {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(fileData);

    return Observable.create(observer => {

      fileReader.onload = (ev) => {
        observer.next((<any>ev.target).result);
      };

      fileReader.onerror = (error) => observer.onerror((error) => {
        alert("error reading file");
      });
    });

  }
}
