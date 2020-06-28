import { Component, OnInit, Input, Inject } from '@angular/core';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'product-info-component',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Input('id') id:number;

  slideSet:Array<string> = [];
  displayMagnifyer:boolean = false;
  currentIndex:number = 0;
  selectedIndex:number = 0;

  data:any = {
    title1:'Gustav Klimt - Pintura a Óleo',
    title2:'Retrato de Adele Bloch Bauer',
    images:[
      'product.png',
      'slider.jpg',
      'van gogh.png',
      'slider2.jpg',
      'slider3.jpg'
    ],
    isFavorite:false,
    isShared:false
  }

  options:Array<string> = [
    "ghjfdrd33243sds56erd6r65dfy67r76fuff6rytf",
    "bcxw5dg7cffvuf6r6f6fi98uhb8ybhbv7vgv7t5er"
  ];

  pricePerQuota:number = 12;

  step:number = 1;
  quotas:number = 0;
  backendQuotas:number = 70;

  ngOnInit() { 
    this.slideSet = this.data.images.slice(this.currentIndex, this.currentIndex+4);
    setTimeout(()=>{
      this.magnify();
    },100)
  }

  setSlide(image:string){
    this.selectedIndex = this.data.images.indexOf(image);
  }

  nextSlideSet(){
    if(this.currentIndex+4<this.data.images.length){
      this.currentIndex++;
      this.slideSet = this.data.images.slice(this.currentIndex, this.currentIndex+4);
    }
  };

  prevSlideSet(){
    if(this.currentIndex>0){
      this.currentIndex--;
      this.slideSet = this.data.images.slice(this.currentIndex, this.currentIndex+4);
    }
  };

  prevSlide(){
    if(this.selectedIndex>0){
      this.selectedIndex--;
    }
    else{
      this.selectedIndex = this.data.images.length-1;
    }
  }

  nextSlide(){
    if(this.selectedIndex<this.data.images.length-1){
      this.selectedIndex++;
    }
    else{
      this.selectedIndex=0;
    }
  }

  openDialog(image:string){
    const dialogRef = this.dialog.open(ImageOverviewDialog, {
      minHeight:'30vh',
      maxHeight: '90vh',
      maxWidth: '90vw',
      minWidth:'30vw',
      data: image
    });
  }

  openQuotasDialog(){
    const dialogRef = this.dialog.open(QuotasDialog, {
      data: {
        options:this.options,
        quotas: this.quotas,
        pricePerQuota: this.pricePerQuota
      },
      panelClass: 'dialog-quotas-dialog'
    });
  }

  addQuotas(){
    if(this.quotas<100){
      this.quotas+=this.step;
    }
  }

  removeQuotas(){
    if(this.quotas>0){
      this.quotas-=this.step;
    }
  }

  toggleShare(e:any){
    e.preventDefault();
    this.data.isShared = this.data.isShared?false:true;
  }

  toggleFavorite(e:any){
    e.preventDefault();
    this.data.isFavorite = this.data.isFavorite?false:true;
  }

  updateMagnifyer(){
    console.log("updated");
    var img, glass;
    glass = document.getElementById('magnifier-glass');
    img = document.getElementById("product-image");
    glass.style.backgroundSize = (img.width * 3) + "px " + (img.height * 3) + "px";
  }

  magnify() {
    var zoom = 3;
    var img, glass, w, h, bw;
    img = document.getElementById("product-image");
  
    /* Create magnifier glass: */
    //glass = document.createElement("DIV");
    //glass.setAttribute("class", "img-magnifier-glass");
    glass = document.getElementById('magnifier-glass');
  
    /* Insert magnifier glass: */
    //img.parentElement.insertBefore(glass, img);

  
    /* Set background properties for the magnifier glass: */
    glass.style.position = 'absolute';
    glass.style.width = '100px';
    glass.style.height = '100px';
    //glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 0;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
  
    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      //glass = document.getElementById('magnifier-glass');
      glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
      var w = glass.offsetWidth / 2;
      var h = glass.offsetHeight / 2;
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

  getMousePosition(e:any){
    console.log(e);
  }
}


@Component({
  selector: 'image-overview-dialog',
  template: `
    <img style="max-width:100%; max-height:80vh" src='assets/{{data}}'>
  `,
})
export class ImageOverviewDialog {

  constructor(
    public dialogRef: MatDialogRef<ImageOverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'image-overview-dialog',
  template: `
    <div class="quotas-dialog-close-holder"><button class="quotas-dialog-close-button" (click)="close()">x</button></div>
    <h1 class="quotas-dialog-header">Confirmar compra</h1>
    <div class="quotas-dialog-inputs-holder">
      <div class="quotas-dialog-input-holder">
        <label><p>Quotas</p>
        <input class="quotas-dialog__input" readonly [value]="data.quotas" type="number"></label>
      </div>
      <div class="quotas-dialog-select-holder">
        <label><p>Cartedia proverdora</p>
          <select class="quotas-dialog__select">
            <option *ngFor="let option of data.options" [value]="option">{{option}}</option>
          </select>
        </label>
      </div>
    </div>
    <div class="quotas-dialog-bottom-holder">
      <div>
        <h4 class="quotas-dialog__header">Valor a se pago</h4>
        <p class="quotas-dialog__paragraph">R$ {{data.pricePerQuota*data.quotas}}</p>
      </div>
      <button class="quotas-dialog__button">Confirmar</button>
    </div>
  `,
  styles:[`
  .quotas-dialog-close-holder {
    display: flex;
    justify-content: flex-end;
  }
  button.quotas-dialog-close-button {
    background: none;
    border: none;
    color: #fff;
    font-size: 17px;
  }
  h1.quotas-dialog-header {
    margin: 0;
    color: #fff;
    font-size: 23px;
    letter-spacing: 3px;
    margin-bottom: 25px;
  }
  .quotas-dialog-inputs-holder p {
    margin: 0;
    color: white;
    letter-spacing: 2px;
    font-size: 12px;
    margin-bottom: 5px;
  }
  .quotas-dialog-bottom-holder p, .quotas-dialog-bottom-holder h4 {
    margin: 0;
  }
  .quotas-dialog__input, .quotas-dialog__select{
    background-color: #525862;
    border: 1px solid grey;
    color: white;
    padding: 8px;
  }
  .quotas-dialog__input{
    max-width: 80px;
  }
  .quotas-dialog-inputs-holder {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
  .quotas-dialog-input-holder {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 20px;
  }
  .quotas-dialog-bottom-holder{
    padding-top: 15px;
    border-top: 1px solid grey;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .quotas-dialog__header{
    color: white;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 1px;
  }
  div p.quotas-dialog__paragraph{
    font-size: 22px;
    color: #ffda9f;
    margin-top: 10px;
  }
  .quotas-dialog__button{
    color: #525862;
    font-size: 14px;
    font-weight: bold;
    background-color: #ffda9f;
    border: none;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 10px 25px;
  }
  `]
})
export class QuotasDialog {

  constructor(
    public dialogRef: MatDialogRef<QuotasDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}