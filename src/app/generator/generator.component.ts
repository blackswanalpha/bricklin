
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
 NgxQrcodeElementTypes ,
 NgxQrcodeErrorCorrectionLevels
} from '@techiediaries/ngx-qrcode' ;


import { v4 as uuidv4 } from 'uuid';
import { GeneratorService } from './generator.service';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  public elementType = NgxQrcodeElementTypes.URL ;
public correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH ;
public value = ' https://medium.com/@vaiz10 ' ;
  href :string ='' ;
  ipAddress = '';


  product: Product[] = [];
    generatorGroup!:FormGroup;
    name:string=''
    model:string=''
    location:string =''
    desc:string=''
    company:string = ''
 public myAngularxQrCode: string = "null";
  constructor(private http: HttpClient, private _service: NotificationsService, private _formBuilder: FormBuilder, private generatorService: GeneratorService) { 
       this.generatorGroup  = this._formBuilder.group({
       productName:['', Validators.required],
       productModel:['', Validators.required],
       productLocation:['', Validators.required],
       productDesc:['', Validators.required],
         productManufacturerName:['', Validators.required],

    })
  }

  ngOnInit(): void {
    // this.getIPAddress();
    this.myAngularxQrCode = "welcome";
  }
onSubmit(f: FormGroup) {
 this.name =  (this.generatorGroup.controls["productName"].value)
 this.desc = (this.generatorGroup.controls["productDesc"].value)
  this.company = (this.generatorGroup.controls["productManufacturerName"].value)
 this.location = (this.generatorGroup.controls["productLocation"].value)
 this.model = (this.generatorGroup.controls["productModel"].value)
  console.log(this.product);
   this.value = 'name:'+this.name +' company:'+this.company +' desc:'+this.desc +' location:'+this.location +' model:'+this.model;
  // this.product.productQrCode = this.value

  console.log(f.value)
  this.generatorService.addGenerator(f.value).subscribe(
    (response: Product) => {
    
      console.log(response);
     // this.getGenerator();
      
      this._service.success('Hello world!', 'Toastr fun!');

      f.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      
      f.reset();
    }
  );


  }

downloadImage() {
  this.href = document.getElementsByTagName('img') [4].src ;
  // Fourth img with img tag in my case .
}

public downloadQRCode() {
  const fileNameToDownload = 'image_qrcode';
  const nav = (window.navigator as any);
   const base64Img=<HTMLVideoElement> (document.getElementsByClassName('coolQRCode')[0]).children[0] ;
   fetch(base64Img.src)
      .then(res => res.blob())
      .then((blob) => {
         // IE
         if (nav && nav.msSaveOrOpenBlob){
            nav.msSaveOrOpenBlob(blob,fileNameToDownload);
         } else { // Chrome
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileNameToDownload;
            link.click();
         }
      })

}

//   getIPAddress() {

//     this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {

//       this.ipAddress = res.ip;

//     });
// }

public getUniqueId(parts: number): string {
  const stringArr = [];
  for (let i = 0; i < parts; i++) {
    // tslint:disable-next-line:no-bitwise
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return stringArr.join('-');
}
}