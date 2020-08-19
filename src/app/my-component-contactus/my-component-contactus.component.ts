import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-my-component-contactus',
  templateUrl: './my-component-contactus.component.html',
  styleUrls: ['./my-component-contactus.component.css']
})

export class MyComponentContactusComponent implements OnInit, OnChanges, OnDestroy {
subscribeData;
  constructor( private sendContactService:ContactService) { }

  ngOnInit(): void {
        this.subscribeData=this.sendContactService.sendContact().subscribe( message=> { 
      console.log(message)
    })
    this.sendContactService.getCounter().subscribe(count=>{
      console.log('counter: ', count)
    })
  }
  ngOnChanges(): void{
  }
  ngOnDestroy(): void{
    this.subscribeData.unsubscribe()
  }
}
