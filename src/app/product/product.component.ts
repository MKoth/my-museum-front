import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  masonryItems = [
    {creator_name:'Gustav Klimt', pic_name:"Pintura a Óleo", pic_desc:"Retrato de Adele Bloch Bauer", price:23, url:"assets/klimt.png"},
    {creator_name:'Gustav Klimt', pic_name:"Pintura a Óleo", pic_desc:"Retrato de Adele Bloch Bauer", price:19, url:"assets/moon night.png"},
    {creator_name:'Gustav Klimt', pic_name:"Pintura a Óleo", pic_desc:"Retrato de Adele Bloch Bauer", price:54, url:"assets/van gogh.png"},
    {creator_name:'Gustav Klimt', pic_name:"Pintura a Óleo", pic_desc:"Retrato de Adele Bloch Bauer", price:24, url:"assets/klimt.png"},
    {creator_name:'Gustav Klimt', pic_name:"Pintura a Óleo", pic_desc:"Retrato de Adele Bloch Bauer", price:76, url:"assets/moon night.png"}
  ]

  ngOnInit() {
  }

}
