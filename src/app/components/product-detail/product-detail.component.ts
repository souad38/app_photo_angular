import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent /*implements OnInit */ {
 /* keyParams
  dataProduct={
    title:'',
    image:'',
    description:''
    
  }
  constructor(private parms:ActivatedRoute,private fs:) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
  }

  ngOnInit(): void {
    this.fs.collection('products').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
      this.dataProduct.title=data.data()['title']
      this.dataProduct.image=data.data()['image']
      this.dataProduct.description=data.data()['description']
    })

  }
*/
}