import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SplitioService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Split rocket';
  treatment: any;
  key: any = "key"; // USER KEY YOU WANT TO SERVE A FLAG TO
  featureFlag = "dynamic_boxes"; // NAME OF THE FEATURE FLAG
  updateSubscription: Subscription = new Subscription;
  callSplitSubscription: Subscription = new Subscription;

  constructor(private splitioService: SplitioService){
    splitioService.initPlugin();
    this.onUpdate();
  }

  ngOnInit(){
    this.splitioService.initClient(this.key);
  }

  callSplit(){
    this.callSplitSubscription = this.splitioService.sdkReady().subscribe({
      next: () => { this.treatment = this.splitioService.getTreatmentWithConfig(this.key, this.featureFlag)
    },
      error: (errr) => { console.log(errr)}
    })
  }

  onUpdate(){
    this.updateSubscription = this.splitioService.sdkUpdate().subscribe({
      next: () => { this.treatment = this.splitioService.getTreatmentWithConfig(this.key, this.featureFlag)
      console.log('onUpdate', this.treatment)
    },
      error: (errr) => { console.log(errr)}
    })
  }

  ngOnDestroy(){
    this.callSplitSubscription.unsubscribe();
    this.updateSubscription.unsubscribe();
  }

  dataParser(arg: any) {
    return JSON.parse(arg);
  }
}
