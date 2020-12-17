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
import { AuthGuard } from '../../lib/auth.guard';
import { RoleGuard } from '../../lib/auth.guard';
import { OfficesComponent } from './offices/offices.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { RoleComponent } from './role/role.component';
import { DepartmentComponent } from './department/department.component';
import { PropetyComponent } from './propety/propety.component';
import { StaffComponent } from './staff/staff.component';
import { EditbackgroupComponent } from './editbackgroup/editbackgroup.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ErroraccesComponent } from './erroracces/erroracces.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
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
        component: UnitComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'linhvuc',
        component:FieldComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'loaitintuc',
        component:TypenewsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'tintuc',
        component:NewsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path:'thongke',
        component: StatisticalComponent,
      },
      {
        path:'detai',
        component: TopicComponent,
        canActivate: [RoleGuard]
      },
      {
        path:'chitietdetai/:id',
        component: DetailstopicComponent,
        canActivate: [RoleGuard]
      },
      {
        path:'error',
        component: ErrorComponent,
        canActivate: [RoleGuard]
      },
      {
        path: 'truycap',
        component: AccessComponent
      }, 
      {
        path: 'nguoidung',
        component: OfficesComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [1]
        }
      },
      {
        path: 'doimk',
        component: ChangepassComponent
      },
      {
        path: 'hoatdongnghiencuu',
        component: ResearchactivitiesComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'chucvu',
        component: PositionComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'loainhiemvu',
        component: MissiontypeComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'phongban',
        component: DepartmentComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'sohuutritue',
        component: PropetyComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'nhom',
        component: RoleComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [2]
        }
      },
      {
        path: 'nhanvien',
        component: StaffComponent
      },
      {
        path: 'lylich/:id',
        component: BackgroupComponent
      },
      {
        path: 'sualylich/:id',
        component: EditbackgroupComponent
      },{
        path: 'suataikhoan/:id',
        component: EdituserComponent
      },
      {
        path: 'loitruycap',
        component: ErroraccesComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dangnhap',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    StatisticalComponent,
    MainaComponent, 
    UnitComponent, 
    FieldComponent, 
    TypenewsComponent, 
    NewsComponent, 
    PositionComponent, 
    BackgroupComponent, 
    MissiontypeComponent, 
    TopicComponent, 
    ResearchactivitiesComponent, 
    DetailstopicComponent, 
    LoginComponent, 
    AccessComponent, 
    OfficesComponent, 
    ChangepassComponent, 
    RoleComponent, 
    DepartmentComponent, 
    PropetyComponent, 
    StaffComponent, 
    EditbackgroupComponent,
    ErroraccesComponent,
    EdituserComponent
  ],
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
