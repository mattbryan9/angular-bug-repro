import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PanelComponent } from './components/panel/panel.component';
import { ChartPanelComponent } from './components/chart-panel/chart-panel.component';

if (CONFIG_MODE === 'prod') {
    enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [MainComponent, PanelComponent, ChartPanelComponent],
    providers: [],
    bootstrap: [MainComponent]
})
class MainModule {}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(MainModule);
});