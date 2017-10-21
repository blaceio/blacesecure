import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterModule, ToasterService, ToasterConfig }  from 'angular2-toaster/angular2-toaster';
import {AlertService}  from 'app/shared';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['../../scss/vendors/toastr/toastr.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {

  private toasterService: ToasterService;

  public toasterconfig : ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });

  constructor(toasterService: ToasterService, private alertservice: AlertService) { 
    this.toasterService = toasterService;
  }

  ngOnInit() {
    this.alertservice.getDangerMessage().subscribe(message => {this.reactdanger(message);});
    this.alertservice.getInfoMessage().subscribe(message => {this.reactinfo(message);});
    this.alertservice.getSuccessMessage().subscribe(message => {this.reactsuccess(message);});
    this.alertservice.getWarningMessage().subscribe(message => {this.reactwarning(message);});
  }

  private reactdanger(message: any) {
    this.toasterService.pop('error', 'Error', message);
  }
  private reactinfo(message: any) {
    this.toasterService.pop('info', 'Info', message);
  }
  private reactsuccess(message: any) {
    this.toasterService.pop('success', 'Success', message);
  }
  private reactwarning(message: any) {
    this.toasterService.pop('warning', 'Warning', message);
  }
}
