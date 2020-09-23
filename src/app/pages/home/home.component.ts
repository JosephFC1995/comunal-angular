import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  showToaster(title) {
    this.toastr.show(title)
  }
  icons = [
    {
      visible: true,
      image: 'assets/images/reserva-salas.png',
      name: 'Reserva de salas',
    },
    {
      visible: true,
      image: 'assets/images/reporte-problemas.png',
      name: 'Reporte de problemas',
    },
    {
      visible: true,
      image: 'assets/images/mi-equipo.png',
      name: 'Mi equipo',
    },
    {
      visible: true,
      image: 'assets/images/comunicados.png',
      name: 'Comunicados',
    }
    ,
    {
      visible: true,
      image: 'assets/images/ficha.png',
      name: ' Ficha de sintomatología ',
    }
  ].filter(isVisible)



}

function isVisible(element, index, array) {
  return (element.visible == true);
}
