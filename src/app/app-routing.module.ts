import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { ExamPageComponent } from './components/exam-page/exam-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

const routes: Routes = [
  {path:'info',component:InfoPageComponent},
  {path:'exam/:id',component:ExamPageComponent},
  {path:'analysis/:id',component:AnalysisComponent},
  {path:'**',redirectTo:'info'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
