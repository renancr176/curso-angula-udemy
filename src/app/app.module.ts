import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

//Shared
import { MainComponent } from './shared/main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

//Components
import { AppComponent } from './app.component';

//Apps
import { App1Component } from './app1/app1.component';
import { TopoComponent } from './app1/topo/topo.component';
import { PainelComponent } from './app1/painel/painel.component';
import { TentativasComponent } from './app1/tentativas/tentativas.component';
import { ProgressoComponent } from './app1/progresso/progresso.component';
import { App2Component } from './app2/app2.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    App1Component,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent,
    App2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
