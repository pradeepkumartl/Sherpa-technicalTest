import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserDetailsComponent;
  let testHostFixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ UserDetailsComponent, UserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(UserDetailsComponent);
    component = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should match test username', () => {
    expect(testHostFixture.nativeElement.querySelector('h5').innerText).toEqual('test');
  });
  it('should match test profileUrl', () => {
    expect(testHostFixture.nativeElement.querySelector('a').innerText).toEqual("view test's profile");
  });
  it('should match test followers count', () => {
    expect(testHostFixture.nativeElement.querySelector('span').innerText).toEqual('Followers 100');
  });
  @Component({
    selector: `app-user-details`,
    template: `<app-user-card [user]="user"><span class="badge badge-success">Followers {{user.followers}}</span></app-user-card>`
  })
  class UserDetailsComponent {
    user={userName:'test',followers:100};
  }
});
