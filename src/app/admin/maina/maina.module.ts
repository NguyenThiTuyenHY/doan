import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticalComponent } from './statistical/statistical.component';
import {RouterModule, Routes} from '@angular/router';
import { MainaComponent } from '../maina/maina.component';
import { UnitComponent } from './unit/unit.component';
import { FieldComponent } from './field/field.component';
import { ShareaModule } from '../sharea/sharea.module';
import { TypenewsComponent } from './typenews/typenews.component';
import { NewsComponent } from './news/news.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { PositionComponent } from './position/position.component';
import { BackgroupComponent } from './backgroup/backgroup.component';
import { MissiontypeComponent } from './missiontype/missiontype.component';
import { TopicComponent } from './topic/topic.component';
import { ResearchactivitiesComponent } from './researchactivities/researchactivities.component';
import { DetailstopicComponent } from './detailstopic/detailstopic.component';
import { ErrorComponent } from '../commona/error/error.component';
import { AccessComponent } from '../commona/access/access.component';
import { LoginComponent } from '../commona/login/login.component';
import {AuthGuard} from '../../lib/auth.guard';
  import { from } from 'rxjs';
const mainaroutes:Routes = [
  {
    path: '',
    component: MainaComponent,
    children: [
      {
        path:'',
        component: StatisticalComponent
      },
      {
        path:'donvi',
        component: UnitComponent
      },
      {
        path: 'linhvuc',
        component:FieldComponent
      },
      {
        path: 'loaitintuc',
        component:TypenewsComponent
      },
      {
        path: 'tintuc',
        component:NewsComponent
      },
      {
        path:'thongke',
        component: StatisticalComponent
      },
      {
        path:'detai',
        component: TopicComponent
      },
      {
        path:'chitietdetai/:id',
        component: DetailstopicComponent
      },
      {
        path:'error',
        component: ErrorComponent
      },
      {
        path: 'truycap',
        component: AccessComponent
      },     
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'dangnhap',
    component: LoginComponent
  } 
]

@NgModule({
  declarations: [StatisticalComponent,MainaComponent, UnitComponent, FieldComponent, TypenewsComponent, NewsComponent, PositionComponent, BackgroupComponent, MissiontypeComponent, TopicComponent, ResearchactivitiesComponent, DetailstopicComponent, LoginComponent, AccessComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainaroutes),
    ShareaModule,
    RouterModule,
    CKEditorModule,
    FormsModule
  ]
})
export class MainaModule { }
