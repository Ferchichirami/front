import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user!:any;
  userr = { checked: false }; 
  ngOnInit(): void {
    this.user = localStorage.getItem("currentUser");
    this.user = JSON.parse(this.user);
    console.log(this.user)
    this.authService.getVerifStatus().subscribe(
      (data: boolean) => {
      
        this.userr.checked =data; // Set checkbox status based on verification status
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    
  }

  constructor(private authService: AuthService) {
  
  }



  logout(){
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentCart");
    location.reload();
  }


  changeVerificationStatus(newStatus: boolean){

    this.authService.changeVerificationStatus(newStatus).subscribe();
  }



}
