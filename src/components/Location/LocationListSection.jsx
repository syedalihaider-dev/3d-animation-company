"use client";
import React from 'react';
import Link from 'next/link';
import styles from './LocationListSection.module.css';

const locations = [
  { state: 'Florida', description: 'App Developers in Florida', path: '#' },
  { state: 'San Francisco', description: 'App Developers San Francisco', path: '#' },
  { state: 'Washington DC', description: 'App Developers in Washington DC', path: '#' },
  { state: 'Los Angeles', description: 'App Development in Los Angeles', path: '#' },
  { state: 'Dallas', description: 'App Developers in Dallas', path: '#' },
  { state: 'Houston', description: 'App Developers in Houston', path: '#' },
  { state: 'Austin', description: 'Mobile app development Austin', path: '#' },
  { state: 'Chicago', description: 'Mobile App Development in Chicago', path: '#' },
  { state: 'New York', description: 'App Developers in NYC', path: '#' },
  { state: 'Miami', description: 'App Developers in Miami', path: '#' },
  { state: 'New Jersey', description: 'Web Design Company In NJ', path: '#' },
  { state: 'Texas', description: 'Mobile App Development Texas', path: '#' },
  { state: 'San Diego', description: 'Mobile App Development San Diego', path: '#' },
  { state: 'Atlanta', description: 'Mobile App Development Atlanta', path: '#' },
  { state: 'Denver', description: 'Mobile App Development Denver', path: '#' },
  { state: 'Indianapolis', description: 'Mobile App Development Indianapolis', path: '#' },
  { state: 'California', description: 'Mobile App Development California', path: '#' },
  { state: 'Boston', description: 'Mobile App Development Boston', path: '#' },
  { state: 'Ohio', description: 'Mobile App Development Ohio', path: '#' }
];

const LocationListSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.mainHeading}>USA</h2>
          </div>
        </div>
        <div className="row g-4">
          {locations.map((loc, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Link href={loc.path} className={styles.boxLink}>
                <div className={styles.locationBox}>
                  <h3 className={styles.boxHeading}>{loc.state}</h3>
                  <p className={styles.boxPara}>{loc.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationListSection;
