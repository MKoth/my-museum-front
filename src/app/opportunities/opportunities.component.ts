import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {

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
