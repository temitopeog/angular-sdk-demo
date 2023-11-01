import { Injectable } from '@angular/core';
import { SplitService } from '@splitsoftware/splitio-angular';

// Inject service
@Injectable({providedIn: 'root'})

export class SplitioService {
splitReady = false;
sharedClientReady= false;

constructor(private splitService: SplitService){}
// Instantiate the Service
initPlugin() {
  // Create the config for the plugin.
  const sdkConfig = {
    core: {
      authorizationKey: 'iuoqavr1ij0uoa0b53psqquoiur5ftqonj7i', //'APIKEY_FROM_SPLIT_CONSOLE', // split apikey
      key: 'key' // initial key
    }
  };
  // init method returns an observable for sdk readiness
  this.splitService.init(sdkConfig).subscribe(() => {
    this.splitReady = true

  });
}

initClient(key: string) {
  this.splitService.initClient(key).subscribe(() => {
    this.sharedClientReady = true;
  })
}

sdkReady(){
  return this.splitService.sdkReady$;
}

sdkUpdate(){
  return this.splitService.sdkUpdate$;
}

getTreatmentWithConfig(key: string, splitName: string){
  return this.splitService.getTreatmentWithConfig(key, splitName);
}

}
