import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [DecimalPipe, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
