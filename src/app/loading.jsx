"use client";

import React from 'react';

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      background: '#000000',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid rgba(224, 7, 180, 0.1)',
        borderTop: '3px solid #e007b4',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
