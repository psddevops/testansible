import {
    BrowserModule
} from '@angular/platform-browser';

import {
    CUSTOM_ELEMENTS_SCHEMA,
    NgModule
} from '@angular/core';

import {
    HttpClientModule,
    HttpClientXsrfModule
} from '@angular/common/http';

import {
    ModalModule,
    NavigationModule
} from 'patternfly-ng';

import {
    BsDropdownModule,
    ModalModule as BsModalModule,
    TooltipModule
} from 'ngx-bootstrap';

import { NotificationService }        from 'patternfly-ng/notification/notification-service/notification.service';
import { NotificationModule }         from 'patternfly-ng/notification/notification.module';

import { AppRoutingModule }           from './app-routing.module';
import { AppComponent }               from './app.component';
import { AuthService }                from './auth/auth.service';
import { AuthorsModule }              from './authors/authors.module';
import { ContentDetailModule }        from './content-detail/content-detail.module';
import { ExceptionPagesModule }       from './exception-pages/exception-pages.module';
import { HomeModule }                 from './home/home.module';
import { LoginModule }                from './login/login.module';
import { ApiRootService }             from './resources/api-root/api-root.service';
import { CloudPlatformService }       from './resources/cloud-platforms/cloud-platform.service';
import { ContentBlocksService }       from './resources/content-blocks/content-blocks.service';
import { ContentSearchService }       from './resources/content-search/content-search.service';
import { ContentTypeService }         from './resources/content-types/content-type.service';
import { ContentService }             from './resources/content/content.service';
import { ImportsService }             from './resources/imports/imports.service';
import { NamespaceService }           from './resources/namespaces/namespace.service';
import { PlatformService }            from './resources/platforms/platform.service';
import { ProviderSourceService }      from './resources/provider-namespaces/provider-source.service';
import { RepositoryService }          from './resources/repositories/repository.service';
import { RepositoryImportService }    from './resources/repository-imports/repository-import.service';
import { TagsService }                from './resources/tags/tags.service';
import { UserService }                from './resources/users/user.service';
// import { MyContentModule }            from './my-content/my-content.module';
// import { MyImportsModule }            from './my-imports/my-imports.module';
// import { SearchModule }               from './search/search.module';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { VendorsModule }              from './vendors/vendors.module';

@NgModule({
    declarations: [
        AppComponent,
        UserNotificationsComponent
    ],
    imports: [
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'csrftoken',
            headerName: 'X-CSRFToken',
        }),
        TooltipModule,
        BrowserModule,
        NavigationModule,
        BsDropdownModule.forRoot(),
        BsModalModule.forRoot(),
        NotificationModule,
        HomeModule,
        LoginModule,
        // MyContentModule,
        // MyImportsModule,
        // SearchModule,
        ModalModule,
        ContentDetailModule,
        ExceptionPagesModule,
        VendorsModule,
        AuthorsModule,
        AppRoutingModule
    ],
    providers: [
        AuthService,
        CloudPlatformService,
        ContentBlocksService,
        ContentSearchService,
        ContentTypeService,
        ImportsService,
        NamespaceService,
        NotificationService,
        PlatformService,
        ProviderSourceService,
        RepositoryImportService,
        RepositoryService,
        TagsService,
        UserService,
        ContentService,
        ApiRootService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
