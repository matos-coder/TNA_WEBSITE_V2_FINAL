import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule,NgOptimizedImage],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{

  selectedService:any ;
  active:string='active';
  selectedServiceKey: any = 'private-charter';

  services = {
    'private-charter': {
      title: 'Private Charter',
      description: 'Trans Nation Airways works to provide clients with services that are high-quality, consistent, and professional to assist them accomplish their objectives.',
      quote: 'We stand for quality, safety & credibility, so you could trust us fully about private jet charters and our working process.',
      benefits: [
        'Offers flexible scheduling that fits your needs',
        'Avoids crowded airports and long security lines',
        'Improves productivity while traveling'
      ],
      image: '../../assets/images/services/private_carter1.webp',
      benefitImage: 'assets/images/services/service-details-benefit-img.jpg'
    },
    'tourist-travel': {
      title: 'Tourist Travel',
      description: 'Explore breathtaking destinations with comfort and ease through our reliable tourist air travel services.',
      quote: 'We make tourism air travel relaxing, safe, and accessible to all.',
      benefits: [
        'Direct flights to popular tourist destinations',
        'Guided tour packages included',
        'Safe and punctual travel arrangements'
      ],
      image: '../../assets/images/services/tourist-travel1.webp',
      benefitImage: 'assets/images/services/service-details-benefit-img.jpg'
    },
    'air-ambulance': {
      title: 'Air Ambulance',
      description: 'Fast and reliable air ambulance service...',
      quote: 'Your safety is our priority...',
      benefits: [
        '24/7 availability',
        'Quick response times',
        'Highly trained medical staff'
      ],
      image: '../../assets/images/services/air ambulance1.webp',
      benefitImage: 'assets/images/services/service-details-benefit-img.jpg'
    },
    'cargo': {
      title: 'Cargo',
      description: 'Efficient cargo transport services...',
      quote: 'Reliable and fast delivery...',
      benefits: [
        'Global shipping options',
        'Real-time tracking',
        'Safe and secure transport'
      ],
      image: '../../assets/images/services/cargo1.webp',
      benefitImage: 'assets/images/services/service-details-benefit-img.jpg'
    },
    'emergency-evacuation': {
      title: 'Emergency Evacuation',
      description: 'Rapid emergency evacuation services...',
      quote: 'We are ready for any situation...',
      benefits: [
        'Quick deployment',
        'Highly skilled rescue teams',
        'Access to remote locations'
      ],
      image: '../../assets/images/services/emergency-evacuation1.webp',
      benefitImage: 'assets/images/services/service-details-benefit-img.jpg'
    },
    'search-rescue': {
      title: 'Search & Rescue',
      description: 'Specialized search and rescue services...',
      quote: 'We will find you, no matter what...',
      benefits: [
        'Advanced search technology',
        'Experienced rescue teams',
        'Global reach and coverage'
      ],
      image: '../../assets/images/services/search & rescue1.webp',
      benefitImage: 'assets/images/services/service-details-benefit-img.jpg'
    }
  };

  constructor(private route:ActivatedRoute) {
    this.selectService('private-charter'); // default
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.selectedServiceKey = params.get('type');
    });
  }
  selectService(serviceKey: string) {
    this.selectedService = (this.services as any)[serviceKey]
    this.selectedServiceKey = serviceKey;
  }
}
