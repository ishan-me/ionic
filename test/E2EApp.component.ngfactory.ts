/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './E2EApp.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../dist/components/spinner/spinner';
import * as import10 from '../dist/components/spinner/spinner.d.ngfactory';
import * as import11 from '../dist/config/config';
import * as import12 from '@angular/core/src/metadata/view';
var renderType_E2EApp_Host:import0.RenderComponentType = null;
class _View_E2EApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _E2EApp_0_4:import3.E2EApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_E2EApp_Host0,renderType_E2EApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,null);
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_E2EApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._E2EApp_0_4 = new import3.E2EApp();
    this._appEl_0.initComponent(this._E2EApp_0_4,[],compView_0);
    compView_0.create(this._E2EApp_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.E2EApp) && (0 === requestNodeIndex))) { return this._E2EApp_0_4; }
    return notFoundResult;
  }
}
function viewFactory_E2EApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_E2EApp_Host === null)) { (renderType_E2EApp_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_E2EApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const E2EAppNgFactory:import8.ComponentFactory<import3.E2EApp> = new import8.ComponentFactory<import3.E2EApp>('ng-component',viewFactory_E2EApp_Host0,import3.E2EApp);
const styles_E2EApp:any[] = [];
var renderType_E2EApp:import0.RenderComponentType = null;
class _View_E2EApp0 extends import1.AppView<import3.E2EApp> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _Spinner_0_4:import9.Spinner;
  private _expr_0:any;
  private _expr_1:any;
  private _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_E2EApp0,renderType_E2EApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-spinner',null);
    this.renderer.setElementAttribute(this._el_0,'name','bubbles');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = import10.viewFactory_Spinner0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Spinner_0_4 = new import9.Spinner(this.parentInjector.get(import11.Config));
    this._appEl_0.initComponent(this._Spinner_0_4,[],compView_0);
    compView_0.create(this._Spinner_0_4,[],null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[this._el_0],[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.Spinner) && (0 === requestNodeIndex))) { return this._Spinner_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    changed = false;
    const currVal_0:any = 'bubbles';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Spinner_0_4.name = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) { this._appEl_0.componentView.markAsCheckOnce(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Spinner_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Spinner_0_4._applied;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Spinner_0_4.paused;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_0,'spinner-paused',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_E2EApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.E2EApp> {
  if ((renderType_E2EApp === null)) { (renderType_E2EApp = viewUtils.createRenderComponentType('/Users/joshthomas/Workspace/ionic/test/E2EApp.component.ts class E2EApp - inline template',0,import12.ViewEncapsulation.None,styles_E2EApp,{})); }
  return new _View_E2EApp0(viewUtils,parentInjector,declarationEl);
}